import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'lem-forms-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
/**
 * Wrapper around standard html input.
 * Changes it's appearance so it's just an underline
 * with an icon. Animated.
 */
export class InputComponent implements ControlValueAccessor {

    /**
     * Input type
     * default value: 'text'
     */
    @Input() type: 'number' | 'text' | 'password' = 'text';

    /**
     * Input placeholder
     */
    @Input() placeholder: string;

    /**
     * Is readonly
     */
    @Input() readonly = false;

    /**
     * Max length
     */
    @Input() maxlength = 200;

    /**
     * Should max length be displayed or not
     */
    @Input() displayMaxLength = false;

    /**
     * Value
     */
    private _value = '';

    /**
     * Is active
     */
    active = false;

    constructor() { }

    onChange: any = () => { };
    onTouched: any = () => { };

    /**
     * value getter
     */
    get value() {
        return this._value;
    }

    /**
     * value
     * @val
     */
    set value(val: string) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(value: string) {
        if (value) {
            this.value = value;
        }
    }
}
