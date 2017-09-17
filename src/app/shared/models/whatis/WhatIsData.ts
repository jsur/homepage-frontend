import { LinkedAsset } from '../LinkedAsset';
import { SysObject } from '../SysObject';

export interface WhatIsData {
  fields: {
    playButton: { sys: LinkedAsset; }
    whatisDescription: string;
    whatisHeader: string;
    whatisList: Array<string>;
  }
  sys: SysObject;
}
