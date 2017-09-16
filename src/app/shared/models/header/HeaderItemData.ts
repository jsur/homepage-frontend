import { LinkedAsset } from '../LinkedAsset';

export interface HeaderItemData {
  fields: {
    companyLogo: LinkedAsset;
    companyName: string;
    headerButtonText: string;
    mainHeaderDescription: string;
  }
}
