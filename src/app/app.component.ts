import { Component } from '@angular/core';
import { TimeGQL } from './generated';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'blueprint';
  public time$: Observable<number>;

  constructor(private time: TimeGQL) {
    this.time$ = this.time.watch().valueChanges.pipe(
      map(({ data }) => data.time)
    );
  }
}
