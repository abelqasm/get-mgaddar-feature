import { FormControl, FormGroup } from '@angular/forms';

export const exercices = [
  'little or no exercise',
  'light exercise or sports 1-3 days/week',
  'moderate exercise 3-5 days/week',
  'hard exercise 6-7 days/week',
  'very hard exercise and a physical job',
];

export interface UserData {
  height: number | null | undefined;
  weight: number | null | undefined;
  age: number | null | undefined;
  exercice: string | null | undefined;
  gender: string | null | undefined;
  mesure: string;
}

export type UserForm = FormGroup<{
  height: FormControl<number | null>;
  weight: FormControl<number | null>;
  age: FormControl<number | null>;
  exercice: FormControl<string | null>;
  gender: FormControl<string | null>;
}>;

export type WeightAdvice = {
  weight: string;
  val: number;
}