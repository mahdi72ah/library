import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {TreeViewService} from "./services/tree-view.service";


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit{
  // @ts-ignore
  files: TreeNode[];

  constructor(private treeViewServices:TreeViewService) {
  }

  ngOnInit(): void {
    this.treeViewServices.getFiles();
  }
}
