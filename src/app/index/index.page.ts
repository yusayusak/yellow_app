import { Component, OnInit } from '@angular/core';
import {MeasurementPage} from '../measurement/measurement.page';
import {IonNav} from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public measurementPage = MeasurementPage;
  constructor(public nav: IonNav) { }

  ngOnInit() {
  }

}
