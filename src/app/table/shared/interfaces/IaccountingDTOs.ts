export  interface  IaccountingDTOs{
  id:number;
  title?:string;
  parentId?:number;
  status:boolean;
  child?:IaccountingDTOs[];
}
