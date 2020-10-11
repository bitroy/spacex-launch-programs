import styles from "styles/MissionsCards.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissionsLaunchData } from "redux/actions/QueryAPI";
import LazyLoadMissionsCards from "./LazyLoadMissionsCards";

const MissionCards = () => {
  const missionState = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    let width = window.innerWidth,
      limit;
    if (width < 700) {
      limit = 1;
    } else if (width < 1024) {
      limit = 2;
    } else {
      limit = missionState.limit;
    }
    let API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL + "?limit=" + limit;
    dispatch(fetchMissionsLaunchData(API_URL));
  }, []);

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
