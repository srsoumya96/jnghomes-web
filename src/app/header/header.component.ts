import { Component, Inject } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActive : string = '';
  constructor( private router : Router, @Inject(DOCUMENT) private document: Document ) {
    this.router.events.subscribe((value) => {
      if(value instanceof NavigationEnd)    
        this.isActive = this.router.url.toString();
      });
  }

  ngOnInit() {
  }

  navigateTo(path : string) {
    this.isActive = path.split("?")[0];
    this.router.navigate([path.split("?")[0]], { queryParams : { tab : path.split("?")[1] }});
    window.scrollTo(0, 0);
  }
}
