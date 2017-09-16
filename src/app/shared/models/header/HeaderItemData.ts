import { LinkedAsset } from '../LinkedAsset';

export interface HeaderItemData {
  fields: {
    companyLogo: {
      sys: LinkedAsset;
    }
    companyName: string;
    headerButtonText: string;
    mainHeaderDescription: string;
  }
}
