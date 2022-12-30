import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from "table";
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SidebarService} from "./shared/sidebar/shared/services/sidebar.service";
import {LibraryInterceptor} from "./utilities/libraryInterceptor";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ToolbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
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
