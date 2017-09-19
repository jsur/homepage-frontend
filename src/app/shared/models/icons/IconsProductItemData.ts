import { LinkedAsset } from '../LinkedAsset';
import { SysObject } from '../SysObject';

export interface IconsProductItemData {
  fields: {
    cardDescription: string;
    cardHeader: string;
    cardIcon: {
      sys: LinkedAsset;
    }
    cardUrl: string;
  }
  sys: SysObject;
}
