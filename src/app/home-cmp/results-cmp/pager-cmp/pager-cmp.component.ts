import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-pager-cmp',
  templateUrl: './pager-cmp.component.html',
  styleUrls: ['./pager-cmp.component.css']
})
export class PagerCmpComponent implements OnChanges {
  @Input() totalItems: number;
  @Input() currentPage: number;
  @Input() showNumber: number;
  @Output() onPagerChange = new EventEmitter();
  maxSize: number = $(window).width() > 400 ? 5 : 3;

  constructor() {
  }

  ngOnChanges(changes: any) {
    if (changes.totalItems) {
      // this.currentPage = 1;
      this.totalItems = changes.totalItems.currentValue;
      // this.onPagerChange.emit(1);
    }
  }

  pageChanged(event: any): void {
    this.onPagerChange.emit(this.currentPage);
  };

}
