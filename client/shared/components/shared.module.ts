import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'angular-sortablejs';

import { SharedPipesModule } from '../pipes';

import {
  ArrayComponent,
  AudioComponent,
  AutoloadDirective,
  ClearComponent,
  DebouncedDirective,
  ErrorComponent,
  FormComponent,
  ListComponent,
  LoaderComponent,
  MaxValidatorDirective,
  MinValidatorDirective,
  ModalComponent,
  UploaderComponent,
  WizardComponent,
} from '.';

import {
  InputFieldComponent,
  InputAgeFieldComponent,
  SelectFieldComponent,
  SelectGenderFieldComponent,
  SelectTriageMentalStatusFieldComponent,
  SelectTriagePerfusionFieldComponent,
} from './fields';

import {
  XsdBaseComponent,
  XsdDateTimeComponent,
  XsdElementComponent,
  XsdElementWrapperComponent,
  XsdFormGroupComponent,
  XsdInputComponent,
  XsdSelectComponent,
  XsdSelectStateComponent,
} from './xsd';

@NgModule({
  declarations: [
    /// components
    ArrayComponent,
    AudioComponent,
    AutoloadDirective,
    ClearComponent,
    DebouncedDirective,
    ErrorComponent,
    FormComponent,
    ListComponent,
    LoaderComponent,
    MaxValidatorDirective,
    MinValidatorDirective,
    ModalComponent,
    UploaderComponent,
    WizardComponent,
    /// form fields
    InputFieldComponent,
    InputAgeFieldComponent,
    SelectFieldComponent,
    SelectGenderFieldComponent,
    SelectTriageMentalStatusFieldComponent,
    SelectTriagePerfusionFieldComponent,
    /// XSD components
    XsdBaseComponent,
    XsdDateTimeComponent,
    XsdElementComponent,
    XsdElementWrapperComponent,
    XsdFormGroupComponent,
    XsdInputComponent,
    XsdSelectComponent,
    XsdSelectStateComponent,
  ],
  exports: [
    ArrayComponent,
    AudioComponent,
    AutoloadDirective,
    ClearComponent,
    DebouncedDirective,
    ErrorComponent,
    FormComponent,
    ListComponent,
    LoaderComponent,
    MaxValidatorDirective,
    MinValidatorDirective,
    ModalComponent,
    UploaderComponent,
    WizardComponent,
    /// form fields
    InputFieldComponent,
    InputAgeFieldComponent,
    SelectFieldComponent,
    SelectGenderFieldComponent,
    SelectTriageMentalStatusFieldComponent,
    SelectTriagePerfusionFieldComponent,
    /// XSD components
    XsdDateTimeComponent,
    XsdElementComponent,
    XsdElementWrapperComponent,
    XsdFormGroupComponent,
    XsdInputComponent,
    XsdSelectComponent,
    XsdSelectStateComponent,
  ],
  imports: [CommonModule, FormsModule, NgbModule, SortablejsModule, SharedPipesModule],
  providers: [],
})
export class SharedComponentsModule {}
