import { Includes } from '../Includes';
import { HeaderItemData } from './HeaderItemData';

export interface HeaderCMSResponseWithAssets {
  includes: Includes;
  items: Array<HeaderItemData>;
  limit: number;
  skip: number;
  sys: {
    type: string;
  }
  total: number;
}
