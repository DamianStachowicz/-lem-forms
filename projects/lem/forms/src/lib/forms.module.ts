import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { InputComponent } from './components/input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ValidatorComponent } from './components/validator/validator.component';

@NgModule({
    declarations: [
        FormsComponent,
        InputComponent,
        ValidatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        FormsComponent,
        InputComponent,
        ValidatorComponent
    ]
})
export class LemFormsModule { }
