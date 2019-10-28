import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'share-percent',
  templateUrl: './percent.component.html',
})
export class PercentComponent implements OnInit {
  @Input() value: number;
  @Output() valueExport = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onChange(e) {
    this.valueExport.emit(e*100);
  }

}
