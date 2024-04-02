import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  public ELPS_URL = environment.ELPS_URL;
  public APP_PK = environment.APP_PK;

  public onOpenSupport() {}
}
