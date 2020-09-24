import { API } from 'homebridge-homebridge-lenovo-plug';

import { homebridge-homebridge-lenovo-plug } from './settings';
import { homebridge-homebridge-lenovo-plug } from './platform'; 

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(homebridge-homebridge-lenovo-plug, HomebridgePlatform);
}
