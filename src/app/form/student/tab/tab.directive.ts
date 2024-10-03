import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {
  @Input() tabTitle!: string; // Thêm thuộc tính tabTitle
  active = false; // trạng thái tab

  constructor(public template: TemplateRef<any>) {} // lưu trữ template
}
