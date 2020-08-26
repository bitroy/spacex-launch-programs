import styles from '../styles/MissionCard.module.css'

const MissionCard = ({ mission }) => {
    return (
		<div className={styles.mission_card}>
			<div className={styles.mission_image}>
				<img src={mission.links.mission_patch_small} />
			</div>
			<div className={styles.mission_title}>
				{mission.mission_name} #{mission.flight_number}
			</div>
			<div className={styles.mission_field}>
				<span className={styles.text_label}>Mission Ids:</span>
				<span className={styles.text_value}>
					{mission.mission_id.map((m_id, idx) => (
						<li key={idx}>{m_id}</li>
					))}
				</span>
			</div>
			<div className={styles.mission_field}>
				<span className={styles.text_label}>Launch Year: </span>
				<span className={styles.text_value}>{mission.launch_year}</span>
			</div>
			<div className={styles.mission_field}>
				<span className={styles.text_label}>Successful Launch: </span>
				<span className={styles.text_value}>{mission.launch_success ? "True" : "False"}</span>
			</div>
			<div className={styles.mission_field}>
				<span className={styles.text_label}>Successful Landing: </span>
				<span className={styles.text_value}>{mission.rocket.first_stage.cores[0].land_success ? "True" : "False"}</span>
			</div>
		</div>
	);
}

export default MissionCard
