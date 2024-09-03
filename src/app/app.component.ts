import {Component} from '@angular/core';
import {UserModel} from "./models/user.model";
import * as jsonCountries from '../assets/countries.json';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name: string = ''
}
