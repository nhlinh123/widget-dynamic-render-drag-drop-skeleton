import { WidgetComponent } from "../components/widget/widget.component";
import { Widget10Component } from "../components/widget10/widget10.component";
import { Widget11Component } from "../components/widget11/widget11.component";
import { Widget12Component } from "../components/widget12/widget12.component";
import { Widget2Component } from "../components/widget2/widget2.component";
import { Widget3Component } from "../components/widget3/widget3.component";
import { Widget4Component } from "../components/widget4/widget4.component";
import { Widget5Component } from "../components/widget5/widget5.component";
import { Widget6Component } from "../components/widget6/widget6.component";
import { Widget7Component } from "../components/widget7/widget7.component";
import { Widget8Component } from "../components/widget8/widget8.component";
import { Widget9Component } from "../components/widget9/widget9.component";
import { WidgetMetadata } from "../models/dashboard.model";

export const LIST_WIDGET: WidgetMetadata[] = [
  {
    name: 'widget 1',
    component: WidgetComponent,
  },
  {
    name: 'widget 2',
    component: Widget2Component,
  },
  {
    name: 'widget 3',
    component: Widget3Component,
  },
  {
    name: 'widget 4',
    component: Widget4Component,
  },
  {
    name: 'widget 5',
    component: Widget5Component,
  },
  {
    name: 'widget 6',
    component: Widget6Component,
  },
  {
    name: 'widget 7',
    component: Widget7Component,
  },
  {
    name: 'widget 8',
    component: Widget8Component,
  },
  {
    name: 'widget 9',
    component: Widget9Component,
  },
  {
    name: 'widget 10',
    component: Widget10Component,
  },
  {
    name: 'widget 11',
    component: Widget11Component,
  },
  {
    name: 'widget 12',
    component: Widget12Component,
  },
];