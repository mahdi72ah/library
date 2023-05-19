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
        case '4':
        // @ts-ignore
        return 'گرفته شده توسط من';
        break;case '5':
        // @ts-ignore
        return 'گرفته شده توسط دیگران';
        break;
        break;case '6':
        // @ts-ignore
        return 'گرفته نشده';
        break;
        break;case '7':
        // @ts-ignore
        return 'جستجوی درخواست';
        break;
      default:
        // @ts-ignore
        return '';
    }
  }
}


