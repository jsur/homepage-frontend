import { Includes } from '../Includes';
import { CustomersSayItemData } from './CustomersSayItemData';
import { CustomersSayCardObject } from './CustomersSayCardObject';

export interface CustomersSayCMSResponseWithAssets {
  cards: {
    includes: Includes;
    items: Array<CustomersSayCardObject>;
    limit: number;
    skip: number;
    sys: { type: string }
    total: number;
  }
  items: Array<CustomersSayItemData>;
  limit: number;
  skip: number;
  sys: { type: string }
  total: number;
}
