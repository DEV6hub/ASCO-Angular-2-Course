import { Component } from '@angular/core';

import { ProgressBarComponent } from './progress-bar.component';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  directives: [ProgressBarComponent]
})
export class AppComponent {
  title = 'Performance with Zones';
}