import { ElementRef } from '@angular/core';

declare var M

export class Materializecss {
  static initialSidenav(ref: ElementRef): void {
    M.Sidenav.init(ref.nativeElement, {});
  }

  static initialFloating(ref: ElementRef): void{
    M.FloatingActionButton.init(ref.nativeElement, {});
  }

  static updateInputs(): void {
    M.updateTextFields();
  }
}
