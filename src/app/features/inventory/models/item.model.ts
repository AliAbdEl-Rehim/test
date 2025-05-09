export interface Item {
    id?: string;
    store: string;
    subStore?: string;
    station?: string;
    unit?: string;
    itemName: string;
    itemNumber: string;
    itemType?: string;
    orderLimit?: number;
    expiryDate?: Date | null;
    creationDate: Date;
  }