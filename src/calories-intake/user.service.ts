import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserData, UserForm, WeightAdvice, exercices } from "./entities";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private State: boolean = false;
    private userData: UserData={
        height: 0,
        weight: 0,
        age: 0,
        mesure: '',
        exercice: '',
        gender: '',
    };

    getUserData(): Observable<UserData> {
        return of(this.userData);
    }

    getUserState(): Observable<boolean> {
        return of(this.State);
    }

    setUserData(user: UserForm, mesure: string) {
        this.userData.age = user.value.age;
        this.userData.height = user.value.height;
        this.userData.weight = user.value.weight;
        this.userData.exercice = user.value.exercice;
        this.userData.gender = user.value.gender;
        this.userData.mesure = mesure;
        this.State = true;
    }

    getBmi(): Observable<number>{
        let bmi: number;
        const weight = Number(this.userData.weight);
        const height= Number(this.userData.height);
        if (this.userData.mesure === 'kg'){
            bmi = Math.round(weight / Math.pow((height / 100) ,2));
        }
        else {
            bmi = 703 * (weight / Math.pow(height , 2));
        }
        return of(bmi);
    }

    getCategorie(bmi: number): Observable<string> {
        let value: string;
        if (bmi < 16) value = 'Severe Thinness'
        else if (bmi < 17) value = 'Moderate Thinness'
        else if (bmi < 18.5) value = 'Mild Thinness'
        else if (bmi < 25) value = 'Noarmal weight'
        else if (bmi < 30) value = 'Overweight'
        else if (bmi < 35) value = 'Obese Class I'
        else if (bmi < 40) value = 'Obese Class II'
        else value = 'Obese Class III'
        return of(value);
    }
    getCalories(): Observable<number> {
        let bmr: number;
        const caloriesCalc: number[] = [1.2, 1.375, 1.55, 1.725, 1.9];
        const fact: number = caloriesCalc[exercices.indexOf(this.userData.exercice!)];
        const weight = Number(this.userData.weight);
        const height= Number(this.userData.height);
        const age= Number(this.userData.age);
        const genderCalculator = this.userData.gender === 'male' ? 5 : -161;
        if (this.userData.mesure === 'kg'){
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + genderCalculator;
        }
        else {
            bmr =(4.536  * weight) + (15.88 * height) - (5 * age) + genderCalculator;
        }
        return of(bmr * fact);
    }

    getWeightAdvice(cal: number): Observable<WeightAdvice[]> {
        return of([
            {weight: 'Weight loss', val: Math.round(cal * 0.79)},
            {weight: 'Mild weight loss', val: Math.round(cal * 0.9)},
            {weight: 'Maintain weight', val: Math.round(cal * 1)},
            {weight: 'Gain weight', val: Math.round(cal * 1.1)},
            {weight: 'Hard gain weight', val: Math.round(cal * 1.21)},
          ])
    }
    resetUserData() {
        this.userData.age = 0;
        this.userData.height = 0;
        this.userData.weight = 0;
        this.userData.mesure = '';
        this.userData.exercice ='';
        this.userData.gender ='';
        this.State = false;
    }
}
