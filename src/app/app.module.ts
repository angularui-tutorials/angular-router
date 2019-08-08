import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './component/home/home.component';
import {CoursesComponent} from './component/courses/courses.component';
import {ContactComponent} from './component/contact/contact.component';
import {PageComponent} from './component/page/page.component';
import {RouterModule} from '@angular/router';
import {routeConfig} from './router-config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule, DataTableModule, OrderListModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    PageComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routeConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    OrderListModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [PageComponent]
})
export class AppModule {
}
