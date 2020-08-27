import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterButton from './FilterButton'
import { setLaunchSuccessFlag } from '../../redux/actions/FilterActions'

const FilterLaunchCard = ({ styles }) => {
    const [launchSuccess, setLaunchSuccess] = useState(null)
    const dispatch = useDispatch()

    const setSuccessfulLaunch = (e) => {
        if(e.target.innerText !== '') {
            if(e.target.innerText.trim() === 'True' && launchSuccess !== 'True') {
				setLaunchSuccess('True')
				dispatch(setLaunchSuccessFlag(true))
            } else if(e.target.innerText.trim() === 'False' && launchSuccess !== 'False') {
				setLaunchSuccess('False')
				dispatch(setLaunchSuccessFlag(false))
			}
        }
    }
    
    return (
		<div className={styles.filter_div}>
			<h3 className={styles.filter_section_header}>Successful Launch</h3>
			<hr width="50%" />
			<div className={styles.filter_year_buttons} onClick={(e) => setSuccessfulLaunch(e)}>
				<FilterButton active={launchSuccess === "True" ? true : false} name={"True"} />
				<FilterButton active={launchSuccess === "False" ? true : false} name={"False"} />
			</div>
		</div>
	);
}

export default FilterLaunchCard
