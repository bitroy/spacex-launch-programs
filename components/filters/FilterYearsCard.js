import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import FilterButton from './FilterButton';
import { setLaunchYearFlag } from 'redux/actions/FilterActions';

const FilterYearsCard = ({ styles }) => {
    const [filterYears, setFilterYears] = useState([])
	const [yearLaunch, setYearLaunch] = useState(null)
	const dispatch = useDispatch()

    useEffect(()=> {
		if(filterYears.length === 0) {
			setFilterYears(addFilterYears());
		}
    }, [])
    
    const addFilterYears = () => {
		let arr = [], endYear = 2020, startYear = 2006
		let	count = endYear - startYear + 1;
		while (count--) {
			arr[count] = endYear--;
		}

		return arr;
    }
    
    const setLaunchYear = (e) => {
		const year = e.target.innerText.trim()
		if(year !== '') {
			if(yearLaunch === year) {
				setYearLaunch(null)
				dispatch(setLaunchYearFlag(null))	
			} else {
				setYearLaunch(year)
				dispatch(setLaunchYearFlag(year))
			}
		}
	}

    return (
		<div className={styles.filter_div}>
			<div className={styles.filter_section_header}>Launch Year</div>
			<hr width="50%" />
			<div className={styles.filter_year_buttons} onClick={(e) => setLaunchYear(e)}>
				{filterYears.map((year, idx) => (
					<FilterButton key={idx} name={year} active={yearLaunch !== null && yearLaunch == year ? true : false} />
				))}
			</div>
		</div>
	);
}

export default FilterYearsCard
