import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink, HttpLinkHandler } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ConfigurationService } from '../services';


export function createApollo(httpLink: HttpLink, config: ConfigurationService): { link: HttpLinkHandler; cache: InMemoryCache } {
  return {
    link: httpLink.create({ uri: config.getItem('gqlEndpoint') }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, ConfigurationService],
    },
  ],
})
export class GraphQLModule {}
