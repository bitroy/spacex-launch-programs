import styles from 'styles/MissionCard.module.css'

const MissionCard = ({ mission }) => {
	const normalImg = mission.links.mission_patch_small ? mission.links.mission_patch_small : "./SpaceX.webp"
	const largeImg = mission.links.mission_patch ? mission.links.mission_patch : "./SpaceX.webp"
    return (
		<div className={styles.mission_card}>
			<div className={styles.mission_image}>
				<img src="./SpaceX.webp" srcSet={`${normalImg} 920w, ${largeImg} 1024w`} alt={mission.mission_name} loading="lazy" />
			</div>
			<div className={styles.mission_title}>
				{mission.mission_name} #{mission.flight_number}
			</div>
			<div className={styles.mission_field}>
				<span className={styles.text_label}>Mission Ids:</span>
				{mission.mission_id.length > 0 ? (
					<span className={styles.text_value}>
						<ul>
							{mission.mission_id.map((m_id, idx) => (
								<li key={idx}>{m_id}</li>
							))}
						</ul>
					</span>
				) : null}
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
				<span className={styles.text_value}>{mission.rocket.first_stage.cores[0].land_success === null ? null : mission.rocket.first_stage.cores[0].land_success ? "True" : "False"}</span>
			</div>
		</div>
	);
}

export default MissionCard
