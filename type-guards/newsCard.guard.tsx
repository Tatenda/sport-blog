import { IPromoCard, INewsCard } from "../models/newsCard.model"

export const isAdvert = (card: INewsCard | IPromoCard): card is IPromoCard => {
    return (card as INewsCard).category === undefined
}
