import { NgModule } from "@angular/core";
import { CaloriesComponent } from './components/calories/calories.component';
import { UserFormComponent } from "./components/user-form/user-form.component";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from "./user.guard";
import { BmiComponent } from './components/bmi/bmi.component';
import { ContainerComponent } from "./components/container/container.component";
import { MacroComponent } from './components/macro/macro.component';

const routes : Routes = [
    {
        path: '',
        component: UserFormComponent,
        children: [
            {
                path: 'val',
                component: ContainerComponent,
                canActivate: [UserGuard],
                children: [
                    {
                        path: 'bmi',
                        component: BmiComponent,
                    },
                    {
                        path: 'calories',
                        component: CaloriesComponent,
                        
                    },
                    {
                        path: 'macro',
                        component: MacroComponent,
                    }
                ]
            }]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
  ],
})
export class UserModule {}