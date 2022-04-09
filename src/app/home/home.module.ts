import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
      SignInComponent,
      SignUpComponent,
      HomeComponent
    ],
    imports: [
       ReactiveFormsModule,
       FormsModule,
       CommonModule,
       VMessageModule,
       RouterModule
      ]
})
export class HomeModule { }
