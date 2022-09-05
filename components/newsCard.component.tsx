/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { IPromoCard, INewsCard, ECategory, ECardType } from "../models/newsCard.model";
import { isAdvert } from "../type-guards/newsCard.guard";
import { format } from "date-fns";
const cx = require('classnames');


interface IProps {
    newsCard: INewsCard | IPromoCard
    filterCards: (category: string) => void
}
const NewsCardComponent: FC<IProps> = ({ newsCard, filterCards }) => {
    const cardCategory = ECategory[(newsCard as INewsCard).category]?.toLowerCase();
    const setAddBgImage = (card: IPromoCard) => {
        return {
            width: 300,
            height: 193,
            backgroundImage: `url(/svg/promo-background.svg`,
            backgroundSize: "cover"
        }
    }

    const cardStyle = cx({
        "stCard": true,
        "col-12 col-md-6 col-lg-4": true,
        'stCard--article': (newsCard as INewsCard).type === ECardType.article,
        'stCard--gallery': (newsCard as INewsCard).type === ECardType.gallery,
        'stCard--video': (newsCard as INewsCard).type === ECardType.video,
        'stCard--promo': isAdvert(newsCard)
    })

    const categoryClasses = cx({
        "category": true,
        "category--mens": (
            cardCategory === "mens" &&
            (newsCard as INewsCard).type === ECardType.article
        ),
        "category--womens": (
            cardCategory === "womens" &&
            (newsCard as INewsCard).type === ECardType.article
        ),
        "category--academy": (
            cardCategory === "academy" &&
            (newsCard as INewsCard).type === ECardType.article
        ),
        "category--training": (
            cardCategory === "training" &&
            (newsCard as INewsCard).type === ECardType.article
        )
    })

    const shopNow = (e: any, card: IPromoCard) => {
        e.stopPropagation();
        window.open(card.url, '_blank');
    }

    const onCategory = (e: any, category: string) => {
        e.stopPropagation();
        filterCards(category);
    }

    const loadArticle = () => {
        alert("Navigate to article")
    }



    if (isAdvert(newsCard)) {
        return <>
            <div className={`${cardStyle}`}>
                <div className="w-100 h-100 stCard__contents-container px-3" style={setAddBgImage(newsCard)}>
                    <div className="col-12 stCard--promo__image">
                        <img
                            src={`/bitmap/shirt-promo.png`}
                            alt={`${(newsCard as INewsCard).title}`}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 stCard--promo__small-text">
                        <p>AVAILABLE NOW</p>
                    </div>
                    <div className="col-12 stCard--promo__large-text my-3">
                        <h2>
                            OFFICIAL HOME KIT
                        </h2>
                    </div>
                    <div className="col-12 stCard--promo__button-container">
                        <div className="stCard--promo__button" onClick={(e) => shopNow(e, newsCard)}>
                            <p>SHOP NOW</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

    if ((newsCard as INewsCard).isFeatured) {
        return <>
            <div className="d-none d-md-flex w-100 stCard stCard--featured" onClick={loadArticle}>
                <img
                    src={`/${(newsCard as INewsCard).image}`}
                    alt={`${(newsCard as INewsCard).title}`}
                    className="img-fluid"
                />
                <div className="stCard--featured__details">
                    <div className="stCard--featured__category-container">
                        <div className={`${categoryClasses}`} onClick={(e) => onCategory(e, cardCategory)}>
                            {ECategory[(newsCard as INewsCard).category]}
                        </div>
                    </div>
                    <div className="stCard--featured__category-title">
                        <p>{(newsCard as INewsCard).title}</p>
                    </div>
                    <div className="stCard--featured__date">
                        <p>{format((newsCard as INewsCard).date, 'dd LLL yyyy').toUpperCase()}</p>
                        <img
                            src={`/svg/video-icon.svg`}
                            alt={`Video Icon`}
                            className="img-fluid svg"
                        />
                    </div>
                </div>
            </div>
        </>
    }

    const setBgImage = (card: INewsCard) => {
        return {
            width: 300,
            height: 193,
            backgroundImage: `url(/gallager-2021/${card.image})`,
            // backgroundSize: "cover"
        }
    }


    return <>
        {
            (newsCard as INewsCard).type === ECardType.article ?
                <div className={`${cardStyle}`} onClick={loadArticle}>
                    <div className="col-12 image">
                        <img
                            src={`/gallager-2021/${(newsCard as INewsCard).image}`}
                            alt={`${(newsCard as INewsCard).title}`}
                            className="img-fluid"
                        />
                    </div>
                    <div className="image-details">
                        <div className="col-12 category-container">
                            <div className={`category category--${cardCategory}`} onClick={(e) => onCategory(e, cardCategory)}>
                                {cardCategory.toUpperCase()}
                            </div>
                        </div>
                        <div className="col-12 category-title">
                            <p>{(newsCard as INewsCard).title}</p>
                        </div>
                        <div className="col-12 date">
                            <p>{format((newsCard as INewsCard).date, 'dd LLL yyyy')}</p>
                        </div>
                    </div>
                </div> :
                <div className={`${cardStyle}`} onClick={loadArticle}>
                    <div className="w-100 h-100 contents-container px-3" style={setBgImage(newsCard)} onClick={() => alert("Promo Clicked")}>
                        <div className="contents-container__category-image">
                            <img src={
                                (newsCard as INewsCard).type === ECardType.gallery ?
                                    "/svg/gallery-icon.svg" :
                                    "/svg/video-icon.svg"
                            } alt="" />
                        </div>
                        <div className="contents-container__image-details">
                            <div className="col-12 category-container">
                                <div className={`${categoryClasses}`} onClick={(e) => onCategory(e, cardCategory)}>
                                    {cardCategory.toUpperCase()}
                                </div>
                            </div>
                            <div className="col-12 category-title">
                                <p>{(newsCard as INewsCard).title}</p>
                            </div>
                            <div className="col-12 date">
                                <p>{format((newsCard as INewsCard).date, 'dd LLL yyyy')}</p>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </>
}

export default NewsCardComponent;
