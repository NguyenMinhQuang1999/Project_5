import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from 'src/app/lib/base-component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  total: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.total = res ? res.length : 0;
    });
  }
}
