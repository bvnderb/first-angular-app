import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, // in Angular V19 this is default set to true, in lower versions this is set to false.
    templateUrl: './header.component.html'
}) 
export class HeaderComponent {}