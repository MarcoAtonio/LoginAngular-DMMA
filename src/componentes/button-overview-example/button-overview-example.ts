import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonOverviewExample {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
    this.customPatternValidator(/[A-Z]/, 'uppercase'), // Mayúscula
    this.customPatternValidator(/[a-z]/, 'lowercase'), // Minúscula
    this.customPatternValidator(/\d/, 'number'), // Número
    this.customPatternValidator(/[!@#$%^&*]/, 'special') // Carácter especial
  ]);

  validateLogin() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      alert('Bienvenidos');
    }
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
