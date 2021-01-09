import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "styles/MissionsCards.module.css";
import MissionCard from "./MissionCard";
import { requestFilteredMissionsData } from "redux/actions/QueryAPI";

const LoadMissions = () => {
  const dispatch = useDispatch();
  const missionsState = useSelector((state) => state.missionsData);

  let API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL;

  useEffect(() => {
    if (missionsState.launch_year !== null) {
      API_URL += `&launch_year=${missionsState.launch_year}`;
    }
    if (missionsState.launch_success !== null) {
      API_URL += `&launch_success=${missionsState.launch_success}`;
    }
    if (missionsState.land_success !== null) {
      API_URL += `&land_success=${missionsState.land_success}`;
    }

    dispatch(requestFilteredMissionsData(API_URL));
  }, [
    missionsState.launch_year,
    missionsState.launch_success,
    missionsState.land_success,
  ]);

  const h1style = {
    textAlign: "center",
  };

  return (
    <div className={styles.wrapper_mission_cards}>
      {missionsState.loading ? <h1 style={h1style}>Loading</h1> : null}
      {missionsState.error ? (
        <h1 style={h1style}>{missionsState.error}</h1>
      ) : null}
      <div className={styles.mission_cards}>
        {missionsState.missions.map((mission, idx) => (
          <MissionCard key={idx} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default LoadMissions;
