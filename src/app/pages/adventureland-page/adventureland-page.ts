/**
 * =============================================================================
 * @description: Logic for the `app-adventureland-page` component
 * =============================================================================
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventurelandRegistrationForm } from '../../components/adventureland-registration-form/adventureland-registration-form';

@Component({
  selector: 'app-adventureland-page',
  standalone: true,
  imports: [CommonModule, AdventurelandRegistrationForm],
  template: `<app-adventureland-registration-form></app-adventureland-registration-form>`
})
export class AdventurelandPage {}
