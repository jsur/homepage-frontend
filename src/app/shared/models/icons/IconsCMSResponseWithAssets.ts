import { Includes } from '../Includes';
import { IconsProductItemData } from './IconsProductItemData';

export interface IconsCMSResponseWithAssets {
  includes: Includes;
  items: Array<IconsProductItemData>;
  limit: number;
  skip: number;
  sys: {
    type: string;
  }
  total: number;
}
