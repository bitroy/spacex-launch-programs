import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import { setLaunchSuccessFlag } from "redux/actions/FilterActions";
import useDebounce from "hooks/useDebounce";

const FilterLaunchCard = ({ styles }) => {
  const [launchSuccess, setLaunchSuccess] = useState(null);
  const dispatch = useDispatch();
  const debounce = useDebounce();

  const setSuccessfulLaunch = (launch) => {
    if (launch !== "") {
      if (launch === launchSuccess) {
        dispatch(setLaunchSuccessFlag(null));
      } else {
        if (launch === "True" && launchSuccess !== "True") {
          dispatch(setLaunchSuccessFlag(true));
        } else if (launch === "False" && launchSuccess !== "False") {
          dispatch(setLaunchSuccessFlag(false));
        }
      }
    }
  };

  const handleClick = (e) => {
    const launch = e.target.innerText;
    if (launch !== "") {
      if (launch === launchSuccess) {
        setLaunchSuccess(null);
      } else {
        if (launch === "True" && launchSuccess !== "True") {
          setLaunchSuccess(launch);
        } else if (launch === "False" && launchSuccess !== "False") {
          setLaunchSuccess(launch);
        }
      }
    }

    debounce(() => setSuccessfulLaunch(launch));
  };

  return (
    <div className={styles.filter_card}>
      <div className={styles.filter_section_header}>Successful Launch</div>
      <hr width="50%" />
      <div className={styles.filter_buttons_groups} onClick={handleClick}>
        <FilterButton
          active={launchSuccess === "True" ? true : false}
          name={"True"}
        />
        <FilterButton
          active={launchSuccess === "False" ? true : false}
          name={"False"}
        />
      </div>
    </div>
  );
};

export default FilterLaunchCard;
