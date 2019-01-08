import { BoldDirective } from './bold.directive';
import { ElementRef } from '@angular/core';

describe('BoldDirective', () => {
  it('should create an instance', () => {
    const directive = new BoldDirective(null);
    expect(directive).toBeTruthy();
  });
});
