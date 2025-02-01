import { Component, HostListener , ElementRef } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  edit : boolean = false;

  constructor(private eRef: ElementRef) {}

    ngOnInit(): void {

      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-in-out',
        offset: 0,
      });
    }

  showedit() {

    this.edit = !this.edit
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const iconElement = this.eRef.nativeElement.querySelector('.icon');
    if (iconElement && !iconElement.contains(event.target)) {
      this.edit = false;
    }
  }

}
