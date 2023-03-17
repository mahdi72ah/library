export interface SidebarInterFace {
  title: string,

  icon: string,
  menu_id?: number,
  child?: SidebarInterFace[],
  id: number
}
