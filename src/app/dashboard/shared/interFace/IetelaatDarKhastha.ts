import {IchildIEtelaatDarKhastha} from "./IchildIEtelaatDarKhastha";

export interface IetelaatDarKhastha {
  id: number;
  noeDarKhast: string;
  tedadKol: number;
  tedadAkhzShode: number;
  child?: IchildIEtelaatDarKhastha[];
}
