import { PortalInjector } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
  Type,
  Input,
  ElementRef,
  Renderer2,
  forwardRef,
  Inject,
  InjectionToken,
  ComponentRef,
  Injector,
} from '@angular/core';
import { WidgetConfig } from '../models/dashboard.model';
import {
  BaseWidgetComponent,
  BASE_WIDGET_COMPONENT,
  WidgetService,
} from './base-widget.component';

export const WIDGET_GENERATOR_REF = new InjectionToken<ElementRef>(
  'WIDGET_GENERATOR_REF'
);

export const WIDGET_GENERATOR_CONFIG = new InjectionToken<WidgetConfig>(
  'WIDGET_GENERATOR_CONFIG'
);

@Component({
  selector: 'app-widget-generator',
  template: `
    <ng-container *ngComponentOutlet="component;injector: dynamicInjector"></ng-container>
  `,
  providers: [
    {
      provide: WIDGET_GENERATOR_REF,
      useExisting: ElementRef,
    },
  ],
})
export class WidgetGeneratorComponent implements OnInit {
  @Input() widgetName: string;
  @Input() config: WidgetConfig;
  component: Type<BaseWidgetComponent>;

  dynamicInjector: Injector;

  constructor(
    private widgetService: WidgetService,
    public renderer: Renderer2,
    public elementRef: ElementRef,
    private injector: Injector
  ) {
    console.log('constructor widget generator');
  }

  ngOnInit(): void {
    const { component, config } = this.getComponnetAndConfig(this.widgetName);
    if (component && config) {
      this.component = component;
      this.config = config;
      this.dynamicInjector = this.createInjector(config);
    }
  }

  createInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(WIDGET_GENERATOR_CONFIG, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }

  getComponnetAndConfig(widgetName: string): {
    component: Type<any>;
    config: WidgetConfig;
  } {
    return this.widgetService.getComponentAndConfigByName(widgetName);
  }
}
