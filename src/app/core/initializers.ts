import { ConfigurationService } from './services';
import { Configuration } from './services/configuration.service';


export const initializeConfiguration = (configuration: ConfigurationService) => {
  return (): Promise<Configuration> => {
    return configuration.fetchConfiguration();
  };
};
