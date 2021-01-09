import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLaunchYearFlag } from "redux/actions/FilterActions";

const FilterYearsCard = ({ styles }) => {
  const [filterYears, setFilterYears] = useState([]);
  const [yearLaunch, setYearLaunch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterYears.length === 0) {
      setFilterYears(addFilterYears());
    }
  }, []);

  const addFilterYears = () => {
    let arr = [],
      endYear = new Date().getFullYear(),
      startYear = 2006;
    let count = endYear - startYear + 1;
    while (count--) {
      arr[count] = endYear--;
    }

    return arr;
  };

  const setLaunchYear = (e) => {
    const year = e.target.value;
    if (yearLaunch === year) {
      setYearLaunch("");
      dispatch(setLaunchYearFlag(""));
    } else {
      setYearLaunch(year);
      dispatch(setLaunchYearFlag(year));
    }
  };

  return (
    <div className={styles.filter_card}>
      <div className={styles.filter_section_header}>Launch Year</div>
      <hr width="50%" />
      <select
        className={styles.filter__select_launchyear}
        value={yearLaunch}
        onChange={setLaunchYear}
        aria-label="yearselect"
      >
        <option value=""></option>
        {filterYears.map((year, idx) => (
          <option key={idx} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterYearsCard;
