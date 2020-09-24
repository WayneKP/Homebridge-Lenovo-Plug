import { API } from 'homebridge-homebridge-lenovo-plug';

import { Homebridge-Homebridge-Lenovo-Plug } from './settings';
import { Homebridge-Homebridge-Lenovo-Plug } from './platform'; 

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(Homebridge-Homebridge-Lenovo-Plug, HomebridgePlatform);
}
