import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';

const routes: Routes = [
  { path: 'home', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: CoursesComponent },
  { path: 'contact', component: FooterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), RouterLink, RouterOutlet],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 

}
