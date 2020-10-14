import styles from "styles/MissionsCards.module.css";
import React from "react";
import { useSelector } from "react-redux";
import LazyLoadMissionsCards from "./LazyLoadMissionsCards";

const MissionCards = () => {
  const missionState = useSelector((state) => state.missions);

  return (
    <div className={styles.wrapper_mission_cards}>
      {missionState.loading ? (
        <h1 style={{ textAlign: "center" }}>Loading</h1>
      ) : null}
      {missionState.error ? (
        <h1 style={{ textAlign: "center" }}>{missionState.error}</h1>
      ) : null}
      {missionState.error || missionState.loading ? null : (
        <div className={styles.mission_cards}>
          <LazyLoadMissionsCards />
        </div>
      )}
    </div>
  );
};

export default MissionCards;
