import { ChangeDetectorRef, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el :ElementRef<HTMLParagraphElement>) { }
@HostListener('window:keydown.ArrowDown') onKeyDown() {
  this.changerCouleur('red');
}

@HostListener('window:keydown.ArrowUp') onKeyUp() {
  this.changerCouleur('green');
}

@HostListener('window:keydown.ArrowLeft') onKeyLeft() {
  this.changerCouleur('orange');
}

@HostListener('window:keydown.ArrowRight') onKeyRight() {
  this.changerCouleur('blue');
}

changerCouleur(color : string): void {
  this.el.nativeElement.style.color = color;

}
}
