
import {Routes} from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { QuizComponent } from './Pages/quiz/quiz.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'quiz/:test',
        component: QuizComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

export {routes};
