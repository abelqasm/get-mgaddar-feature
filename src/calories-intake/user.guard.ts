import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserGuard {
    private userService: UserService = inject(UserService);
    private readonly router: Router = inject(Router);
    
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : boolean | Observable<boolean>{
        return this.userService.getUserState().pipe(map((state) =>{
            if (!state) {
                this.router.navigate(['/user']);
                return false;
            }
            return true;
        }))
    }
}