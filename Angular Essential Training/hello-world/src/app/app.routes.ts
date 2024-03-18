import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
    //home must be setup as the default route.
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: IntroComponent},
    { path: 'about', component: CoursesComponent},
    { path: 'contact', component: FooterComponent},
    { path: 'login', component: LoginComponent},
];