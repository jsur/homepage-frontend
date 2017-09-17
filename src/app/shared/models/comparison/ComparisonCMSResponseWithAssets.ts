import { Includes } from '../Includes';
import { ComparisonItemData } from './ComparisonItemData';

export interface ComparisonCMSResponseWithAssets {
  includes: Includes;
  items: Array<ComparisonItemData>;
  limit: number;
  skip: number;
  sys: {
    type: string;
  }
  total: number;
}
