export enum ECategory {
    "MENS",
    "WOMENS",
    "ACADEMY",
    "TRAINING"
}

export enum ECardType {
    "article",
    "gallery",
    "video"
}

export interface INewsCard {
    title: string;
    category: ECategory;
    image: string;
    date: Date; //dd mm yyyy
    url: string; //should be link and category should be clickable
    type: ECardType;
    isFeatured: boolean;
}

export interface IPromoCard {
    title: string;
    image: string;
    url: string;
}
