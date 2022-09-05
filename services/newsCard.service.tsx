// import { fetchWrapper } from "../helpers/fetch-wrapper";
// import { BENCHMARK } from "../models/types";
// import { addUnderscore } from "../utils/formatString.component";
// const api = `${process.env.REACT_APP_API_URL}/benchmark`;

import { ECardType, ECategory, IPromoCard, INewsCard } from "../models/newsCard.model"

const fetchNewsCards = async () => {

}

const getNewsCards = async () => {
    const NewsCards: (INewsCard | IPromoCard)[] = [
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["MENS"],
            image: "gallager_final.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: true
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["WOMENS"],
            image: "hale-women.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["MENS"],
            image: "cape.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["WOMENS"],
            image: "win.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["ACADEMY"],
            image: "academy1.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["MENS"],
            image: "lowe.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership",
            category: ECategory["MENS"],
            image: "story.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["video"],
            isFeatured: false
        }, {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["ACADEMY"],
            image: "comeback.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["WOMENS"],
            image: "comeback.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["ACADEMY"],
            image: "comeback.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Champions",
            category: ECategory["TRAINING"],
            image: "story.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["gallery"],
            isFeatured: false
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            image: "",
            url: "https://shop.quins.co.uk/"
        },
        {
            title: "Harlequins Crowned Premiership Champions",
            category: ECategory["MENS"],
            image: "comeback.png",
            date: new Date(Date.now()),
            url: "",
            type: ECardType["article"],
            isFeatured: false
        }
    ]

    return NewsCards;
}

export const newsCardService = {
    fetchNewsCards,
    getNewsCards
}
