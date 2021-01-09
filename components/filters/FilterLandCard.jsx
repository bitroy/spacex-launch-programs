import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLandSuccessFlag } from "redux/actions/FilterActions";
import FilterButton from "./FilterButton";
import useDebounce from "hooks/useDebounce";

const FilterLandCard = ({ styles }) => {
  const [landSuccess, setLandSuccess] = useState(null);
  const dispatch = useDispatch();
  const debounce = useDebounce();

  const setSuccessfulLand = (land) => {
    if (land !== "") {
      if (land === landSuccess) {
        dispatch(setLandSuccessFlag(null));
      } else {
        if (land === "True" && landSuccess !== "True") {
          dispatch(setLandSuccessFlag(true));
        } else if (land === "False" && landSuccess !== "False") {
          dispatch(setLandSuccessFlag(false));
        }
      }
    }
  };

  const handleClick = (e) => {
    const land = e.target.innerText.trim();
    if (land !== "") {
      if (land === landSuccess) {
        setLandSuccess(null);
      } else {
        if (land === "True" && landSuccess !== "True") {
          setLandSuccess(land);
        } else if (land === "False" && landSuccess !== "False") {
          setLandSuccess(land);
        }
      }
    }

    debounce(() => setSuccessfulLand(land));
  };

  return (
    <div className={styles.filter_card}>
      <div className={styles.filter_section_header}>Successful Landing</div>
      <hr width="50%" />
      <div className={styles.filter_buttons_groups} onClick={handleClick}>
        <FilterButton
          className={styles.filter_button}
          active={landSuccess === "True" ? true : false}
          name={"True"}
        />
        <FilterButton
          className={styles.filter_button}
          active={landSuccess === "False" ? true : false}
          name={"False"}
        />
      </div>
    </div>
  );
};

export default FilterLandCard;
