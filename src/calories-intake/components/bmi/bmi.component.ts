import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  standalone: true,
  imports: [RouterModule],
})
export class BmiComponent {
  private readonly userService: UserService = inject(UserService);
  public bmi: number = 0;
  public categorie:string = '';
  constructor(){
    this.userService.getBmi().subscribe(bmi => this.bmi = bmi);
    this.userService.getCategorie(this.bmi).subscribe(cat => this.categorie = cat);
  }
}
