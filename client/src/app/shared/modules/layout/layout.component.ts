import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Materializecss } from '../../classes/materializecss';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild('sidenav') sidenavRef: ElementRef

  ngAfterViewInit(): void {
    Materializecss.initialSidenav(this.sidenavRef)
  }

}
