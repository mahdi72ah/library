import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SidebarInterFace} from "../interFaces/sidebarInterFace";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private  http:HttpClient) { }

  public getAllMenuItem():Observable<SidebarInterFace[]>{
    return this.http.get<SidebarInterFace[]>('menu/getAllMenuItem');
  }
}
