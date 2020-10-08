import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MissionCard from "./MissionCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMissionsLaunchData } from "redux/actions/QueryAPI";

const LazyLoadMissionsCards = () => {
  const dispatch = useDispatch();
  const missionState = useSelector((state) => state.missions);
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    let API_URL =
      process.env.NEXT_PUBLIC_SPACEX_API_URL + "?limit=" + missionState.limit;
    if (missionState.launch_success !== null) {
      API_URL += `&launch_success=${missionState.launch_success}`;
    }
    if (missionState.land_success != null) {
      API_URL += `&land_success=${missionState.land_success}`;
    }
    if (missionState.launch_year != null) {
      API_URL += `&launch_year=${missionState.launch_year}`;
    }

    if (
      missionState.launch_success === null &&
      missionState.land_success === null &&
      missionState.launch_year === null
    ) {
      if (missionState.offset < 100) {
        dispatch(fetchMissionsLaunchData(API_URL));
      }
    } else {
      dispatch(fetchMissionsLaunchData(API_URL));
    }
  }, [
    missionState.launch_success,
    missionState.land_success,
    missionState.launch_year,
    inView,
  ]);

  return (
    <>
      {missionState.missions.map((mission, idx) => (
        <MissionCard key={idx} mission={mission} />
      ))}
      {missionState.lazyloading && missionState.offset < 100 ? (
        <div ref={ref}></div>
      ) : null}
    </>
  );
};

export default LazyLoadMissionsCards;
