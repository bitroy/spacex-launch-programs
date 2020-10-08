import styles from "styles/FilterCard.module.css";
import FilterYearsCard from "./FilterYearsCard";
import FilterLandCard from "./FilterLandCard";
import FilterLaunchCard from "./FilterLaunchCard";

const FiltersCard = () => {
  return (
    <div className={styles.filter_card}>
      <FilterYearsCard styles={styles} />
      <FilterLaunchCard styles={styles} />
      <FilterLandCard styles={styles} />
    </div>
  );
};

export default FiltersCard;
