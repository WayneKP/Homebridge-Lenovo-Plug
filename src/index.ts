import { API } from 'homebridge';

import { Lenovo-Plug } from './settings';
import { HomebridgePlatform } from './platform'; 

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(Lenovo-Plug, HomebridgePlatform);
}
