import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  longUrl = new FormControl('');
  shortUrl = new FormControl('');

  getUrl() {
    this.longUrl.setValue('Trololol');
  }
}