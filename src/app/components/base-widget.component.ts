import {
  Component,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  OnInit,
  Optional,
  Renderer2,
  Type,
} from '@angular/core';
import { ComponentConfig, WidgetConfig } from '../models/dashboard.model';
import {
  WIDGET_GENERATOR_CONFIG,
  WIDGET_GENERATOR_REF,
} from './widget-generator';

export const BASE_WIDGET_COMPONENT = new InjectionToken<BaseWidgetComponent>(
  'BASE_WDIGET_COMPONENT'
);

export abstract class BaseWidgetComponent {
  widgetName: string;
  config: WidgetConfig;
  component: Type<BaseWidgetComponent>;
  isLoading: boolean = false;

  constructor(
    public renderer: Renderer2,
    @Optional() @Inject(WIDGET_GENERATOR_REF) public generatorRef: ElementRef,
    @Optional()
    @Inject(WIDGET_GENERATOR_CONFIG)
    public configuration: WidgetConfig
  ) {
    console.log('generatorRef', generatorRef);
    console.log('config', this.configuration);
    this.config = this.configuration;
    this.applyConfig();
  }

  initData() {
    this.applyConfig();
  }

  applyConfig() {
    if (this.config) {
      // TODO: consider?
      // this.renderer.setStyle(
      //   this.elementRef.nativeElement,
      //   'width',
      //   this.config.width
      // );
      // this.renderer.setStyle(
      //   this.elementRef.nativeElement,
      //   'height',
      //   this.config.height
      // );
      this.renderer.setStyle(
        this.generatorRef.nativeElement,
        'gridColumn',
        `span ${this.config.colspan}`
      );
      this.renderer.setStyle(
        this.generatorRef.nativeElement,
        'gridRow',
        `span ${this.config.rowspan}`
      );
    }
  }

  abstract retry(): void;
}

@Injectable({
  providedIn: 'root',
})
export abstract class WidgetService {
  private widgets = new Map<string, Type<any>>();
  private widgetConfigs = new Map<string, WidgetConfig>();

  register(name: string, component: Type<any>, config?: WidgetConfig) {
    this.set(name, component);
    if (config) {
      this.setConfig(name, config);
    }

    console.info(`Register for component ${name} !`);
  }

  set(name: string, component: Type<any>): void {
    this.widgets.set(name, component);
  }

  get(name: string): Type<any> {
    if (!name) return null;
    const component = this.widgets.get(name);
    if (!component) {
      console.error(`Component with name ${name} not found!`);
    }
    return component;
  }

  getConfig(name: string): WidgetConfig {
    if (!name) return;
    const config = this.widgetConfigs.get(name);
    if (!config) {
      console.error(`config for ${name} not found!`);
    }
    return this.widgetConfigs.get(name);
  }

  setConfig(name: string, config: WidgetConfig): void {
    this.widgetConfigs.set(name, config);
  }

  getComponentAndConfigByName(name: string): ComponentConfig {
    return {
      component: this.get(name),
      config: this.getConfig(name),
    };
  }
}
