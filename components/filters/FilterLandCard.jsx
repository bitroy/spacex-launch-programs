import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLandSuccessFlag } from "redux/actions/FilterActions";
import FilterButton from "./FilterButton";
import { resetOffset } from "redux/actions/QueryAPI";

const FilterLandCard = ({ styles }) => {
  const [landSuccess, setLandSuccess] = useState(null);
  const dispatch = useDispatch();

  const setSuccessfulLand = (e) => {
    const land = e.target.innerText.trim();
    if (land !== "") {
      if (land === landSuccess) {
        setLandSuccess(null);
        dispatch(setLandSuccessFlag(null));
      } else {
        if (land === "True" && landSuccess !== "True") {
          setLandSuccess("True");
          dispatch(setLandSuccessFlag(true));
        } else if (land === "False" && landSuccess !== "False") {
          setLandSuccess("False");
          dispatch(setLandSuccessFlag(false));
        }
      }
      dispatch(resetOffset());
    }
  };

  return (
    <div className={styles.filter_div}>
      <div className={styles.filter_section_header}>Successful Landing</div>
      <hr width="50%" />
      <div
        className={styles.filter_year_buttons}
        onClick={(e) => setSuccessfulLand(e)}
      >
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
