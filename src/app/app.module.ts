import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SidebarService} from "./shared/sidebar/shared/services/sidebar.service";
import {LibraryInterceptor} from "./utilities/libraryInterceptor";
import { ChildTableComponent } from './table/child-table/child-table.component';
import {FormsModule} from "@angular/forms";
import { TafsilTableComponent } from './table/tafsil-table/tafsil-table.component';
import {TableComponent} from "./table/table/table.component";
import { CodeTableComponent } from './table/code-table/code-table.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import {TreeModule} from "primeng/tree";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ToolbarComponent,
    TableComponent,
    ChildTableComponent,
    TafsilTableComponent,
    CodeTableComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    TreeModule
  ],
  providers: [
    SidebarService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: LibraryInterceptor,
      multi:true
    }
  ],
  exports: [
    ToolbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
