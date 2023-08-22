import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { WidgetComponent } from './components/widget/widget.component';
import { Widget2Component } from './components/widget2/widget2.component';
import { Widget3Component } from './components/widget3/widget3.component';
import { Widget4Component } from './components/widget4/widget4.component';
import { Widget5Component } from './components/widget5/widget5.component';
import { Widget6Component } from './components/widget6/widget6.component';
import { Widget7Component } from './components/widget7/widget7.component';
import { Widget8Component } from './components/widget8/widget8.component';
import { Widget9Component } from './components/widget9/widget9.component';
import { Widget10Component } from './components/widget10/widget10.component';
import { Widget11Component } from './components/widget11/widget11.component';
import { Widget12Component } from './components/widget12/widget12.component';
import { ResizableDirective } from './resizeable.directive';
import { WidgetGeneratorComponent } from './components/widget-generator';
import { SkeletonPictureComponent } from './components/skeleton-picture/skeleton-picture.component';
import { SkeletonLineComponent } from './components/skeleton-line/skeleton-line.component';
import { SkeletonRoundComponent } from './components/skeleton-round/skeleton-round.component';

@NgModule({
  imports: [BrowserModule, DragDropModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetComponent,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component,
    Widget6Component,
    Widget7Component,
    Widget8Component,
    Widget9Component,
    Widget10Component,
    Widget11Component,
    Widget12Component,
    ResizableDirective,
    WidgetGeneratorComponent,
    SkeletonPictureComponent,
    SkeletonLineComponent,
    SkeletonRoundComponent
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
