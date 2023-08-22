import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective {
  private isResizing = false;

  @Output() resize = new EventEmitter<{ rowspan: number; colspan: number }>();

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent): void {
    this.isResizing = true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent): void {
    if (!this.isResizing) {
      return;
    }
    const height =
      event.clientY - this.el.nativeElement.getBoundingClientRect().top;
    const width =
      event.clientX - this.el.nativeElement.getBoundingClientRect().left;

    const totalContainerWidth = this.el.nativeElement.parentElement.offsetWidth; // Assuming the grid's parent container is the parent of the resizable item
    const singleColumnWidth = totalContainerWidth / 4; // As you have 4 columns

    const newRowspan = Math.ceil(height / 100); // Assuming each row is of 100px
    const newColspan = Math.ceil(width / singleColumnWidth);

    this.resize.emit({ rowspan: newRowspan, colspan: newColspan });
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event: MouseEvent): void {
    this.isResizing = false;
  }
}
