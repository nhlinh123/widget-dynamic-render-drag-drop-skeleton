import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { BaseWidgetComponent, WidgetService } from '../base-widget.component';

import { WidgetConfig } from '../../models/dashboard.model';
import { WIDGET_GENERATOR_CONFIG, WIDGET_GENERATOR_REF } from '../widget-generator';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.css'],
})
export class Widget2Component extends BaseWidgetComponent {
  constructor(
    public renderer: Renderer2,
    @Optional() @Inject(WIDGET_GENERATOR_REF) public generatorRef: ElementRef,
    @Optional()
    @Inject(WIDGET_GENERATOR_CONFIG)
    public configuration: WidgetConfig
  ) {
    super(renderer, generatorRef, configuration);
  }


  override;
  retry() {
    console.log('retry from widget 2');
  }
}
