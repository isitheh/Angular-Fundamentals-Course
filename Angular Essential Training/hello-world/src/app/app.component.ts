import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from  '../app/Components/navbar/navbar.component';
import { IntroComponent } from '../app/Components/intro/intro.component';
import { CoursesComponent } from '../app/Components/courses/courses.component';
import { FooterComponent } from '../app/Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TextcomponentComponent, 
    ImagecomponentComponent, 
    EmpInfoComponent,
    FormsModule,
    FormComponentComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
}
