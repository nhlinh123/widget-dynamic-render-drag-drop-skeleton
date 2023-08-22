import { Component, OnInit, Type } from '@angular/core';
import { ComponentSizes, WidgetConfig } from '../../models/dashboard.model';
import { DashboardService } from '../../services/dashboard.service';
import { Observable, tap } from 'rxjs';
import { LIST_WIDGET } from '../../constants/dashboard.enum';
import { WidgetService } from '../base-widget.component';
import {
  BaseDragDropComponent,
  DragDropService,
} from '../base-drag-drop.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent
  extends BaseDragDropComponent
  implements OnInit
{
  dashboardComponents$: Observable<ComponentSizes[]>;
  isCustomizing = false;

  constructor(
    private dashboardService: DashboardService,
    public widgetService: WidgetService,
    public dragDropService: DragDropService
  ) {
    super(dragDropService);
  }

  ngOnInit() {
    this.dashboardComponents$ = this.dashboardService
      .getDashBoardComponents()
      .pipe(
        tap((widgetPositions) => {
          console.log(widgetPositions);
          this.dragDropService.updateDashboardComponents(widgetPositions);
          widgetPositions.forEach((widgetPos) => {
            const widgetMeta = LIST_WIDGET.find(
              (w) => w.name === widgetPos.name
            );
            if (widgetMeta) {
              this.widgetService.register(
                widgetPos.name,
                widgetMeta.component,
                {
                  colspan: widgetPos.colspan,
                  rowspan: widgetPos.rowspan,
                }
              );
            }
          });
        })
      );
  }

  getComponentType(name: string): Type<any> {
    const widgetMeta = LIST_WIDGET.find((w) => w.name === name);
    return widgetMeta ? widgetMeta.component : null;
  }

  getComponentConfig(name: string): WidgetConfig {
    return this.widgetService.getConfig(name);
  }

  toggleCustomizeMode() {
    this.isCustomizing = !this.isCustomizing;
  }

  save() {
    const data = this.dragDropService.getDashboardComponentsValue();
    console.log(data);
  }
}
