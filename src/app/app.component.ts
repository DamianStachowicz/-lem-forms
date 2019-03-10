import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'forms';

    form: FormGroup;

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this._createForm();
    }

    ngOnInit() { }

    private _createForm() {
        this.form = this._formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
            testInput: 'This field is read only'
        });
    }

    debug() {
        console.log({
            value: this.form.getRawValue(),
            valid: {
                login: this.form.get('login').valid,
                password: this.form.get('password').valid,
            }
        });
    }
}
