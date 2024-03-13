import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ FormsModule, NgIf ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
  providers: [ NgForm ]
})
export class FormComponentComponent {
  submit(login: string) {
    console.log("Form Submitted!", login);
  }
}
