import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TreeNode} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class TreeViewService {

  constructor(private http: HttpClient) { }


  getFiles() {
    return this.http.get<any>('assets/file.json')
      // @ts-ignore
      .map(res => res.json())
      // @ts-ignore
      .do(data => console.log(data));
  }
}
