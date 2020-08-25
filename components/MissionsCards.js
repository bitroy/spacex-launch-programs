import styles from '../styles/MissionsCards.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMissionsLaunchData } from '../redux/actions/QueryAPI'
import MissionCard from './MissionCard'
import { Row } from 'react-bootstrap'

const MissionCards = () => {
	const dispatch = useDispatch()
	const missionState = useSelector(state => state.missions)

    // useEffect(() => {
    //     const baseAPIURL = 'https://api.spacexdata.com/v3/launches?limit=10'
    //     dispatch(fetchMissionsLaunchData(baseAPIURL))
    // }, [])

    return (
		<>
			{missionState.loading ? <h1 style={{ textAlign: "center" }}>Loading</h1> : null}
			{missionState.error ? <h1 style={{ textAlign: "center" }}>missionState.error</h1> : null}
			{missionState.error || missionState.loading ? null : (
				<div className={styles.mission_cards}>
					{missionState.missions.map((mission, idx) => (
						<MissionCard key={idx} mission={mission} />
					))}
				</div>
			)}
		</>
	);
};

export default MissionCards
