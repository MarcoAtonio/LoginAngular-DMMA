import '@angular/localize/init';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {InputErrorStateMatcherExample} from './componentes/input-error-state-matcher-example/input-error-state-matcher-example';
import {FormFieldPrefixSuffixExample} from './componentes/form-field-prefix-suffix-example/form-field-prefix-suffix-example';
import {ButtonOverviewExample} from './componentes/button-overview-example/button-overview-example';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginComponent {
  loginForm: FormGroup;
  passwordErrors: string[] = [];

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/[A-Z]/), // Mayúscula
        Validators.pattern(/[a-z]/), // Minúscula
        Validators.pattern(/[0-9]/), // Número
        Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/) // Carácter especial
      ]]
    });

  }
}

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(InputErrorStateMatcherExample, {
    providers: [
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(MatNativeDateModule)
    ]
  }).catch(err => console.error(err));

bootstrapApplication(FormFieldPrefixSuffixExample, {
    providers: [
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(MatNativeDateModule)
    ]
  }).catch(err => console.error(err));

bootstrapApplication(ButtonOverviewExample, {
    providers: [
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(MatNativeDateModule)
    ]
  }).catch(err => console.error(err));
