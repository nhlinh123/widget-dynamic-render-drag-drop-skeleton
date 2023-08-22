import { Type } from '@angular/core';

export type WidgetMetadata = {
  name: string;
  component: Type<any>;
};

export type ComponentSizes = {
  name: string;
  colspan: number;
  rowspan: number;
};

export type WidgetConfig = {
  width?: string;
  height?: string;
  colspan?: number;
  rowspan?: number;
};

export type ComponentConfig = { component: Type<any>; config: WidgetConfig };

export type GridCell = {
  isOccupied: boolean;
  widgetName?: string;
};
