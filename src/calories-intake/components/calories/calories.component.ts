import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeightAdvice } from 'src/calories-intake/entities';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  standalone: true,
  imports: [RouterModule, NgFor],
})
export class CaloriesComponent {
  private readonly userService: UserService = inject(UserService);
  public calories: number = 0;
  public weightAdvices?: WeightAdvice[];
  constructor() {
    this.userService.getCalories().subscribe(cal => this.calories = cal);
    this.userService.getWeightAdvice(this.calories).subscribe(weight => this.weightAdvices = weight);
  }
}
