import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'form-field-prefix-suffix-example',
  templateUrl: 'form-field-prefix-suffix-example.html',
  styleUrls: ['form-field-prefix-suffix-example.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class FormFieldPrefixSuffixExample {
  hide = true;
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
    this.customPatternValidator(/[A-Z]/, 'uppercase'), // Mayúscula
    this.customPatternValidator(/[a-z]/, 'lowercase'), // Minúscula
    this.customPatternValidator(/\d/, 'number'), // Número
    this.customPatternValidator(/[!@#$%^&*]/, 'special') // Carácter especial
  ]);

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  customPatternValidator(pattern: RegExp, errorKey: string) {
    return (control: FormControl) => {
      if (!control.value || pattern.test(control.value)) {
        return null;
      } else {
        return { [errorKey]: true };
      }
    };
  }
}
