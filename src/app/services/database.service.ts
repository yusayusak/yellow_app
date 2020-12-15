import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.createDB();
  }

  public createDB() {
    this.sqlite.create({
      name: 'yellowtest',
      location: 'default'
    })
        .then((db: SQLiteObject) => {
          this.db = db;
          this.db.executeSql(
              'create table if not exists measurements(id integer(16) PRIMARY KEY AUTOINCREMENT , BAC FLOAT(6, 5), note VARCHAR(255), date TIMESTAMP(32)); ', [])
              .then(() => console.log('Executed SQL'))
              .catch(e => console.log(e));
        }).catch(e => console.log(e));
  }
}
