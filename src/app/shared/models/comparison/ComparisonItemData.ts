import { LinkedAsset } from '../LinkedAsset';
import { SysObject } from '../SysObject';

export interface ComparisonItemData {
  fields: {
    boxIcons: [{ sys: LinkedAsset }]
    header: string;
  }
  sys: SysObject;
}
