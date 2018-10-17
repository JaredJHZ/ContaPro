import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import { reject } from 'q';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  tests: AngularFirestoreCollection<any>;
  preguntas: AngularFirestoreCollection<any>;
  

  constructor(
    public afs: AngularFirestore
  ) {  }

  public getTests(): Promise<any> {
    this.tests = this.afs.collection<any>('test');
    return new Promise( (resolve, reject) => {
      this.tests.get().subscribe(
        (query) => {
          const resp = [];
          query.forEach( (doc) => {
            resp.push({nombre: doc.data().nombre});
          });
          resolve(resp);
        }
      );
    });
  }

  public async getQuiz(test: string): Promise<any> {
    const id = await this.getIdTest(test);
    console.log(id);
    const ref = this.afs.collection<any>('test').doc(id).ref;
    this.preguntas = this.afs.collection<any>('preguntas');
    let preguntas = [];
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise( (resolve, reject) => {
      this.preguntas.ref.where('id_test', '==', ref )
        .get()
        .then(
          (query) => {
            query.forEach(
              (doc) => {
                const pregunta = {
                  pregunta: doc.data().pregunta,
                  respuestas: null
                };
                this.afs.collection('preguntas').doc(doc.id).collection('respuestas')
                .get()
                .subscribe(
                  respuestas => {
                    const resps = [];
                    respuestas.forEach((resp) => {
                      resps.push(resp.data());
                    });
                    pregunta.respuestas = resps;
                    preguntas.push(pregunta);
                  }
                );
              }
            );
          }
        ).catch(error => reject(error));

        resolve(preguntas);
    });
  }

  private getIdTest(nombre: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.afs.collection('test').get()
      .subscribe(
        (query) => {
          query.forEach(
            (doc) => {
              if (doc.data().nombre === nombre) {
                resolve(doc.id);
              }
            }
          );
          reject('no hay');
        }
      );
    });
  }
}
