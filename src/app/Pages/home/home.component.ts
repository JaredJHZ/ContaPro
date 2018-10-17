import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: any;
loading = true;
  tests = [];
  constructor(public _userService: UserService, public _testService: QuizService) {
      this._userService.afAuth.authState
        .subscribe(
          (user) => {
            this.user = user;
          }
        );
      this._testService.getTests().then(
        (tests) => {
          this.tests = tests;
          this.loading = false;
        }
      );
   }

  ngOnInit() {
  }

}
