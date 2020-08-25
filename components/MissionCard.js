import styles from '../styles/MissionCard.module.css'
import { Col, Card } from 'react-bootstrap'

const MissionCard = ({ mission }) => {
    return (
		<div className={styles.mission_card}>
			{/* <div className={styles.mission_image}>
				<img src={mission.links.mission_patch_small} />
			</div> */}
			<div className={styles.mission_title}>
				{mission.mission_name} #{mission.flight_number}
			</div>
			<div className={styles.mission_id}>Mission Ids: {mission.mission_id}</div>
			<div className={styles.mission_launch_year}>Launch Year: {mission.launch_year}</div>
			<div className={styles.mission_launch_success}>Successful Launch: {mission.launch_success ? "True" : "False"}</div>
			<div className={styles.mission_land_success}>Successful Landing: {mission.rocket.first_stage.cores.land_success ? "True" : "False"}</div>
		</div>
	);
}

export default MissionCard
