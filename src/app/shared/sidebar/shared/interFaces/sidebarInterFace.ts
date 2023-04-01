export interface SidebarInterFace {
  title: string,
  link:string,
  icon: string,
  menu_id?: number,
  child?: SidebarInterFace[],
  id: number
}
