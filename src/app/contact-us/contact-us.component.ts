import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  openMap() {
    window.open('https://goo.gl/maps/3xq2Xrz9mtGb5zLP6', '_blank');
  }
}
