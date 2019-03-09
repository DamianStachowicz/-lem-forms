import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
            login: [''],
            password: ['']
        });
    }

    debug() {
        console.log(this.form.getRawValue());
    }
}
