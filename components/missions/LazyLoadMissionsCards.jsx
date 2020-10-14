import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { fetchMissionsLaunchData, updateOffset } from "redux/actions/QueryAPI";
import MissionCard from "./MissionCard";
import styles from "styles/MissionsCards.module.css";

const LazyLoadMissionsCards = () => {
  const [ref, inView, entry] = useInView();
  const dispatch = useDispatch();
  const missionState = useSelector((state) => state.missions);

  let API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL;

  useEffect(() => {
    API_URL += `?limit=${missionState.limit}`;
    API_URL += `&offset=${missionState.offset}`;
    if (missionState.launch_year !== null) {
      API_URL += `&launch_year=${missionState.launch_year}`;
    }
    if (missionState.launch_success !== null) {
      API_URL += `&launch_success=${missionState.launch_success}`;
    }
    if (missionState.land_success !== null) {
      API_URL += `&land_success=${missionState.land_success}`;
    }

    if (missionState.lazyloading) {
      dispatch(fetchMissionsLaunchData(API_URL));
      dispatch(updateOffset(missionState.limit + missionState.offset));
    }
  }, [
    missionState.launch_year,
    missionState.launch_success,
    missionState.land_success,
    inView,
  ]);

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
          {missionState.missions.map((mission, idx) => (
            <MissionCard key={idx} mission={mission} />
          ))}
          {missionState.lazyloading ? <div ref={ref}></div> : null}
        </div>
      )}
    </div>
  );
};

export default LazyLoadMissionsCards;
