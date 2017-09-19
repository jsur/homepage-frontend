import { LinkedAsset } from '../LinkedAsset';
import { SysObject } from '../SysObject';

export interface ComparisonItemData {
  fields: {
    boxIcons: Array<{ sys: LinkedAsset }>
    header: string;
  }
  sys: SysObject;
}
