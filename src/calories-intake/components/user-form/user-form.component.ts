import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { exercices } from 'src/calories-intake/entities';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink, NgFor, NgClass, NgIf],
})
export class UserFormComponent {
  private readonly userService: UserService = inject(UserService);
  private readonly router: Router = inject(Router);
  exercices = exercices;

  mesure: string = 'kg';
  userForm = new FormGroup({
    height: new FormControl(0, [
      Validators.required,
      Validators.min(50),
    ]),
    weight: new FormControl(0, [
      Validators.required,
      Validators.min(10),
    ]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(5),
    ]),
    gender: new FormControl('male'),
    exercice: new FormControl(this.exercices[0]),
  })

  changeMesure(mesure: string) {
    this.mesure = mesure;
    if (mesure === 'kg'){
      this.userForm.get('height')?.setValidators(Validators.min(50))
      this.userForm.get('weight')?.setValidators(Validators.min(10))

    }
    else{
      this.userForm.get('height')?.setValidators(Validators.min(20))
      this.userForm.get('weight')?.setValidators(Validators.min(25))
    }
  }

  onSubmit() {
    this.userService.setUserData(this.userForm, this.mesure);
    this.router.navigate(['/user/val/bmi']);
  }

  onReset(){
    this.userService.resetUserData();
    console.log('rest')
    this.router.navigate(['/user'])
  }
}
