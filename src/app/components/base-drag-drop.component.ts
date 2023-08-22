import { Component, Injectable } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragStart,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ComponentSizes, GridCell } from '../models/dashboard.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-base-drag-drop',
  template: '',
}) // base drag drop component will handle drag drop event
export abstract class BaseDragDropComponent {
  constructor(public dragDropService: DragDropService) {}

  onDrop(event: CdkDragDrop<ComponentSizes[]>) {
    const dashboardComponents =
      this.dragDropService.getDashboardComponentsValue();
    console.log('current dashboardComponents', dashboardComponents);
    moveItemInArray(
      dashboardComponents,
      event.previousIndex,
      event.currentIndex
    );
    this.dragDropService.updateDashboardComponents(dashboardComponents);
  }

  onDrag(event: CdkDragStart) {
    console.log('drag', event);
  }
}

@Injectable({
  providedIn: 'root',
}) // save / update components
export class DragDropService {
  public dashboardComponentsSubject = new BehaviorSubject<ComponentSizes[]>([]);

  constructor() {}

  getDashboardComponentsValue(): ComponentSizes[] {
    return this.dashboardComponentsSubject.value;
  }

  updateDashboardComponents(components: ComponentSizes[]): void {
    console.log('update', components);
    this.dashboardComponentsSubject.next(components);
  }
}
