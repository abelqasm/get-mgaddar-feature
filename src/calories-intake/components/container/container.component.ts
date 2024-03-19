import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink,NgClass],
})
export class ContainerComponent {
  public section: string = 'bmi';

  onClick(value: string) {
    this.section = value;
  }
}
