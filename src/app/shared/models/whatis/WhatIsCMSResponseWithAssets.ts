import { Includes } from '../Includes';
import { WhatIsData } from './WhatIsData';

export interface WhatIsCMSResponseWithAssets {
  includes: Includes;
  items: Array<WhatIsData>;
  limit: number;
  skip: number;
  sys: {
    type: string;
  }
  total: number;
}
