import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IstatusRead} from "../interFace/IstatusRead";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class StatusReadResolve implements Resolve<IstatusRead>{

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IstatusRead> | Promise<IstatusRead> | IstatusRead {
    let item = route.paramMap.get('item');
    switch (item){
      case '1':
        // @ts-ignore
        return 'خوانده شده';
        break;
      case '2':
        // @ts-ignore
        return 'خوانده نشده';
        break;
      case '3':
        // @ts-ignore
        return 'آرشیو شده';
        break;
      default:
        // @ts-ignore
        return '';
    }
  }
}


