import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/Services/quiz.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: any;
  nombre: string;
  seleccionadas: number[] = [];
  respuestas = [];
  loading = false;
  pregunta: string ;
  contador = 1;
  score = 0;
  terminado = false;

  constructor(public _quizService: QuizService, private _route: ActivatedRoute) {
      this._route.params.subscribe(
        (params) => {
          this.nombre = params['test'];
          setTimeout(async () => {
            this.quiz = await this._quizService.getQuiz(params['test']);
          }, 1);
        }
      );
   }

   private getPregunta() {
      let index = Math.floor(Math.random() * 5);
      if (this.seleccionadas.length > 4) {
        return;
      }
      if ( this.seleccionadas.length > 0 ) {
        if (this.seleccionadas.includes(index)) {
          do {
            index = Math.floor(Math.random() * 5);
          }while (this.seleccionadas.includes(index) !== false);
        }
      }
      this.seleccionadas.push(index);
      this.pregunta = this.quiz[index].pregunta;
      this.respuestas = this.quiz[index].respuestas;
   }

   private siguientePregunta(respuesta: any) {
     console.log(respuesta);
     if (respuesta.correcta) {
       this.score += 20;
     }
     if (this.contador === 5) {
       this.terminado = true;
       return;
     }
     this.contador ++;
     this.getPregunta();
   }

  ngOnInit() {
    setTimeout(() => {
      this.getPregunta();
    }, 1500);
  }

}
