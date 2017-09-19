import { SysObject } from '../SysObject';
import { LinkedAsset } from '../LinkedAsset';

export interface CustomersSayCardObject {
  fields: {
    customerImgUrl: string;
    customerNameAndTitle: string;
    customerPicture: {
      sys: LinkedAsset;
    }
    customerQuote: string;
  }
  sys: SysObject;
}
