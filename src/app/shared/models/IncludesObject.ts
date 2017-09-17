import { SysObject } from './SysObject';

export interface IncludesObject {
  fields: {
    description: string;
    file: {
      contentType: string;
      details: {
        image: {
          height: number;
          width: number;
        }
        size: number;
      }
      fileName: string;
      url: string;
    }
    title: string;
  }
  sys: SysObject;
}
