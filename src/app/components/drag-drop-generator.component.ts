import {
  Component,
  Input,
  Output,
  OnInit,
  Type,
  EventEmitter,
} from '@angular/core';
import { LIST_WIDGET } from '../constants/dashboard.enum';
import { WidgetConfig } from '../models/dashboard.model';
import { WidgetService } from './base-widget.component';

@Component({
  selector: 'app-drag-drop-generator',
  template: `
  <ng-container
  [ngTemplateOutlet]="template"
  [ngTemplateOutletContext]="{ datas: widgetList }"
>
</ng-container>

<ng-template #template let-datas="datas">
  <div class="container mt-3 mb-3">
    <div
      cdkDropList
      class="grid-container"
      #list="cdkDropList"
      [cdkDropListConnectedTo]="[list]"
      [cdkDropListData]="datas"
      (cdkDropListDropped)="onDrop($event)"
    >
      <ng-container *ngFor="let widgetPos of datas">
        <app-widget-generator
          [class]="{ customizable: isCustomizing }"
          [widgetName]="widgetPos.name"
          [config]="getComponentConfig(widgetPos.name)"
          [cdkDragDisabled]="!isCustomizing"
          (cdkDragStarted)="onDrag($event)"
          (cdkDragEnded)="onDrop($event)"
          cdkDrag
        ></app-widget-generator>
      </ng-container>
    </div>
  </div>
</ng-template>

  `,
  styles: [
    `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 100px;
      gap: 10px;
    }
    
    .customizable {
      border: 1px dotted #ccc;
    }
    
    .cdk-drag-placeholder {
      border: 1px dashed #aaa;
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .placeholder {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      border: 2px solid rgba(0, 0, 0, 0.3);
    }
    `,
  ],
})
export class DragDropGeneratorComponent implements OnInit {
  @Input() widgetList: any[] = [];
  @Input() isCustomizing: boolean = false;
  @Output() dragEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() dropEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private widgetService: WidgetService
  ) {}

  ngOnInit(): void {}

  onDrop($event) {
    this.dropEvent.emit($event);
  }
  onDrag($event) {
    this.dragEvent.emit($event);
  }

  getComponentType(name: string): Type<any> {
    const widgetMeta = LIST_WIDGET.find((w) => w.name === name);
    return widgetMeta ? widgetMeta.component : null;
  }

  getComponentConfig(name: string): WidgetConfig {
    return this.widgetService.getConfig(name);
  }
}
