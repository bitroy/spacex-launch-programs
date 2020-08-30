import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMissionsLaunchData } from 'redux/actions/QueryAPI'
import InfiniteMissionsList from 'components/missions/InfiniteMissionsList'

const MissionCards = () => {
	const dispatch = useDispatch()
	const missionState = useSelector(state => state.missions)

    useEffect(() => {
		let API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL
		if(missionState.launch_success !== null) {
			API_URL += `&launch_success=${missionState.launch_success}`
		}
		if(missionState.land_success != null) {
            API_URL += `&land_success=${missionState.land_success}`
		}
		if(missionState.launch_year != null) {
            API_URL += `&launch_year=${missionState.launch_year}`
		}

		dispatch(fetchMissionsLaunchData(API_URL))
	}, [missionState.launch_success, missionState.land_success, missionState.launch_year]);

    return (
		<>
			{missionState.loading ? <h1 style={{ textAlign: "center" }}>Loading</h1> : null}
			{missionState.error ? <h1 style={{ textAlign: "center" }}>{missionState.error}</h1> : null}
			{missionState.error || missionState.loading ? null : (
				<InfiniteMissionsList missions={missionState.missions} />
			)}
		</>
	);
};

export default MissionCards
