import { Includes } from '../Includes';
import { SimpleProcessItemData } from './SimpleProcessItemData';
import { CardObject } from './CardObject';

export interface SimpleProcessCMSResponse {
  cards: {
    items: Array<CardObject>;
    limit: number;
    skip: number;
    sys: { type: string }
    total: number;
  }
  items: Array<SimpleProcessItemData>;
  limit: number;
  skip: number;
  sys: { type: string }
  total: number;
}
