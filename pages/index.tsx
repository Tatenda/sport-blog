import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import NewsCardComponent from '../components/newsCard.component'
import { IPromoCard, INewsCard, ECategory } from '../models/newsCard.model'
import { newsCardService } from '../services/newsCard.service'
import EmptyStateComponent from '../shared/emptyState.component'
import Pager from '../shared/pager.component'
import { isAdvert } from '../type-guards/newsCard.guard'


const Home: NextPage = () => {
	const [newsCards, setNewsCards] = useState<(INewsCard | IPromoCard)[]>();
	const [displayCards, setDisplayCards] = useState<(INewsCard | IPromoCard)[]>()

	useEffect(() => {
		const retreaveNewsCards = async () => {
			try {
				setNewsCards(await newsCardService.getNewsCards());
			} catch (error) {
				//Alert user, failed to retrieve news
			}
		}
		retreaveNewsCards();
	}, [])

	useEffect(() => {
		setDisplayCards(newsCards)
	}, [newsCards])

	const filterCards = (category: string) => {
		setDisplayCards(newsCards?.filter(x => {
			if (!isAdvert(x)) {
				console.log(ECategory[(x as INewsCard).category], category.toUpperCase());

				return ECategory[(x as INewsCard).category] === category.toUpperCase()
			} return true;
		}))
	}


	if (!displayCards) return <EmptyStateComponent />

	return <div className="container">
		<div className="row">
			{
				displayCards.map((newsArticle, indx) => <NewsCardComponent
					newsCard={newsArticle}
					key={indx}
					filterCards={filterCards} />)
			}
		</div>
		<Pager />
	</div>;
}

export default Home
