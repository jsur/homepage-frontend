import { SysObject } from '../SysObject';

export interface CardObject {
  fields: {
    cardFlipsideText: string;
    cardHeader: string;
    orderby: number;
  }
  sys: SysObject;
}
