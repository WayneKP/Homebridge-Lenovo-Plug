import { API } from 'homebridge';

import { Homebridge-Homebridge-Lenovo-Plug } from './settings';
import { Homebridge-Homebridge-Lenovo-Plug } from './platform'; 

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(Lenovo-Plug, HomebridgePlatform);
}
