import styles from 'styles/MissionsCards.module.css'
import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import MissionCard from './MissionCard';

const InfiniteMissionsList = ({ missions }) => {    
	const [hasItems, setHasItems] = useState(null);
    const [showItems, setShowItems] = useState([]);

    useEffect(() => {
        const noOfMissions = missions.length
        if(noOfMissions === 0) {
            setHasItems(false)
            setShowItems([])
        } else {
            const initialMissions = missions.slice(0, 2);
            setHasItems(true)
            setShowItems(initialMissions)
        }        
    }, [missions])

	const showItemsCards = () => {
		let cards = [];
		for (let index = 0; index < showItems.length; index++) {
			const mission = showItems[index];
            cards.push(<MissionCard key={mission.flight_number} mission={mission} />);
		}
		return cards;
	}

	const loadMore = () => {
		if(showItems.length === missions.length){
			setHasItems(false);
		} else {
			setTimeout(() => {
				const currentItemsCount = showItems.length
				const addItems = [...showItems, ...missions.slice(currentItemsCount, currentItemsCount + 4)];
				setShowItems(addItems);
			}, 1000);
		}
    }
    
    return (
		<InfiniteScroll
            className={styles.mission_cards}
			pageStart={0}
			loadMore={loadMore}
			hasMore={hasItems}
			loader={<div className="loader" key={0}><strong>Loading ...</strong></div>}
			useWindow={false}>
			{showItemsCards()}
		</InfiniteScroll>
	);
}

export default InfiniteMissionsList
