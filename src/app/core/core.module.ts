import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './graphql/graphql.module';
import { initializeConfiguration } from './initializers';
import { ConfigurationService } from './services';
import { httpInterceptorProviders } from './http-interceptors';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphQLModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfiguration,
      multi: true,
      deps: [ConfigurationService]
    },
    httpInterceptorProviders
  ],
})
export class CoreModule { }
