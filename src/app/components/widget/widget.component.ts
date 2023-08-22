import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { WidgetConfig } from '../../models/dashboard.model';
import { BaseWidgetComponent, WidgetService } from '../base-widget.component';
import {
  WIDGET_GENERATOR_CONFIG,
  WIDGET_GENERATOR_REF,
} from '../widget-generator';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent extends BaseWidgetComponent {
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
    console.log('retry from widget 1');
  }
}
