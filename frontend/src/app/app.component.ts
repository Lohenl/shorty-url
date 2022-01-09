import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .p-fluid, p-col {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        padding: 1rem;
      }

      .box {
        background-color: var(--surface-e);
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 4px;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
          0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
      }

      .box-stretched {
        height: 100%;
      }

      .vertical-container {
        margin: 0;
        height: 200px;
        background: var(--surface-d);
        border-radius: 4px;
      }

      .nested-grid .p-col-4 {
        padding-bottom: 1rem;
      }
    `
  ],
  animations: [
    trigger("animation", [
      state(
        "visible",
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      ),
      transition("void => *", [
        style({ transform: "translateX(50%)", opacity: 0 }),
        animate("300ms ease-out")
      ]),
      transition("* => void", [
        animate(
          "250ms ease-in",
          style({
            height: 0,
            opacity: 0,
            transform: "translateX(50%)"
          })
        )
      ])
    ])
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  longUrl = new FormControl('');
  shortUrl = new FormControl('');

  getUrl() {
    this.longUrl.setValue('Trololol');
  }
}