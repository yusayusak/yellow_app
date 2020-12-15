import { Component, OnInit } from '@angular/core';
import {MeasurementPage} from '../measurement/measurement.page';
import {IonNav} from '@ionic/angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {DatabaseService} from '../services/database.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public measurementPage = MeasurementPage;
  public db: SQLiteObject;
  public error = 'nothing yet';

  constructor(public nav: IonNav, public sqlite: SQLite, public database: DatabaseService) { }

  ngOnInit() {
  }

}
