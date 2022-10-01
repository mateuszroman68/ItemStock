export type description = {
    brand: string;
    model: string;
    used: boolean;
    yearOfPartProd: Date;
    volumem: number;
    condition: number;
}

export type category = {
    id: number;
    name: string;
    forEveryone: boolean;
    childrens?: category[];
}

export type singleStockItem = {
    id?: number;
    price?: number;
    lastSold?: Date;
    name?: string;
    category?: category[] ;
    description?: description;
}
