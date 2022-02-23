import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  subscription !: Subscription
  element = new FormControl('')
  @Input() placeholder:string =' '
  @Output()nextValue:EventEmitter<string> =new  EventEmitter<string>()
  constructor() { }
  ngOnInit(): void {
    this.subscription = this.element.valueChanges
    .pipe(
      debounceTime(400))
      .subscribe((e)=>{
        this.nextValue.next(e)
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
