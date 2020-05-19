import { Component } from '@angular/core';
import { TimeGQL } from './generated';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'blueprint';
  public time$: Observable<number>;
  public storageType$: Observable<string>;

  constructor(private time: TimeGQL, private configuration: ConfigurationService) {
    this.time$ = this.time.watch().valueChanges.pipe(
      map(({ data }) => data.time)
    );

    this.storageType$ = this.configuration.getItem$('storage');
  }
}
