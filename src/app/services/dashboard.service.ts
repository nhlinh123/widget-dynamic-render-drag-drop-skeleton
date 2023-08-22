import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ComponentSizes } from '../models/dashboard.model';

@Injectable()
export class DashboardService {
  constructor() {}

  getDashBoardComponents(): Observable<ComponentSizes[]> {
    return of([
      {
        name: 'widget 1',
        colspan: 4,
        rowspan: 1,
      },
      {
        name: 'widget 2',
        colspan: 2,
        rowspan: 2,
      },
      {
        name: 'widget 3',
        colspan: 2,
        rowspan: 2,
      },
      {
        name: 'widget 4',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 5',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 6',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 7',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 8',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 9',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 10',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 11',
        colspan: 1,
        rowspan: 1,
      },
      {
        name: 'widget 12',
        colspan: 1,
        rowspan: 1,
      },
    ]);
  }
}
