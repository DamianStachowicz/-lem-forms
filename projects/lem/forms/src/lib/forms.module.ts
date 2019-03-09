import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { InputComponent } from './components/input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormsComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        FormsComponent,
        InputComponent
    ]
})
export class LemFormsModule { }
