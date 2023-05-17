import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import fadeAnimation from './animations/fadeAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Notebook';

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }
}
