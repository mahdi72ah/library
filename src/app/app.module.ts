import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SidebarService} from "./shared/sidebar/shared/services/sidebar.service";
import {LibraryInterceptor} from "./utilities/libraryInterceptor";
import { ChildTableComponent } from './table/child-table/child-table.component';
import { TafsilTableComponent } from './table/tafsil-table/tafsil-table.component';
import {TableComponent} from "./table/table/table.component";
import { CodeTableComponent } from './table/code-table/code-table.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import {ShareModule} from "./shared/sharedModule/share.module";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StatusReadResolve} from "./list-darkhasthaie-faal/shared/statusReadResolve/statusReadResolve";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TableComponent,
    ChildTableComponent,
    TafsilTableComponent,
    CodeTableComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusReadResolve,
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
