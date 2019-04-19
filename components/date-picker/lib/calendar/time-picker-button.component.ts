import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';

@Component({
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:component-selector
  selector: 'time-picker-button',
  exportAs: 'timePickerButton',
  templateUrl: 'time-picker-button.component.html'
})
export class TimePickerButtonComponent {
  @Input() locale: NzCalendarI18nInterface;
  @Input() timePickerDisabled: boolean = false;

  @Input() showTimePicker: boolean = false;
  @Output() readonly showTimePickerChange = new EventEmitter<boolean>();

  prefixCls: string = 'ant-calendar';

  onClick(): void {
    this.showTimePicker = !this.showTimePicker;
    this.showTimePickerChange.emit(this.showTimePicker);
  }
}
