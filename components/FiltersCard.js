import styles from '../styles/FilterCard.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Row, Col, Button } from "react-bootstrap";

import { 
	setLaunchSuccessFlag,
	setLandSuccessFlag,
	setLaunchYearFlag,
} from '../redux/actions/FilterActions'

const FiltersCard = () => {
    const [yearLaunch, setYearLaunch] = useState(null)
    const [launchSuccess, setLaunchSuccess] = useState(null)
	const [landSuccess, setLandSuccess] = useState(null)
	
	const dispatch = useDispatch()

	const setLaunchYear = (e) => {
		const year = e.target.innerText.trim()
		if(e.target.type === 'button' && year !== '') {
			setYearLaunch(year)
			dispatch(setLaunchYearFlag(year))
		}
	}

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

    const setSuccessfulLand = (e) => {
        if(e.target.innerText !== '') { 
            if(e.target.innerText.trim() === 'True' && landSuccess !== 'True') {
				setLandSuccess('True')
				dispatch(setLandSuccessFlag(true))
            } else if(e.target.innerText.trim() === 'False' && landSuccess !== 'False') {
				setLandSuccess('False')
				dispatch(setLandSuccessFlag(false))
			}
        }
    }

    return (
		<div>
			<div className={styles.filter_div}>
				<h1>Filters</h1>
			</div>
			<div className={styles.filter_div} onClick={(e) => setLaunchYear(e)}>
				<h5 className={styles.filter_section_header}>Launch Year</h5>
				<hr />
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2006' ? true : false}
						>
							2006
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2007' ? true : false}
						>
							2007
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2008' ? true : false}
						>
							2008
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2009' ? true : false}
						>
							2009
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2010' ? true : false}
						>
							2010
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2011' ? true : false}
						>
							2011
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2012' ? true : false}
						>
							2012
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2013' ? true : false}
						>
							2013
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2014' ? true : false}
						>
							2014
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2015' ? true : false}
						>
							2015
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2016' ? true : false}
						>
							2016
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2017' ? true : false}
						>
							2017
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2018' ? true : false}
						>
							2018
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2019' ? true : false}
						>
							2019
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button}	 
							variant="success" 
							active={yearLaunch !== null && yearLaunch === '2020' ? true : false}
						>
							2020
						</Button>
					</Col>
					<Col></Col>
				</Row>
			</div>
			<div className={styles.filter_div}>
				<h5 className={styles.filter_section_header}>Successful Launch</h5>
				<hr />
				<Row onClick={(e) => setSuccessfulLaunch(e)}>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button} 
							variant="success" 
							active={launchSuccess === 'True' ? true : false}
						>
							True
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button} 
							variant="success" 
							active={launchSuccess === 'False' ? true : false}
						>
							False
						</Button>
					</Col>
				</Row>
			</div>
			<div className={styles.filter_div}>
				<h5 className={styles.filter_section_header}>Successful Landing</h5>
				<hr />
				<Row onClick={(e) => setSuccessfulLand(e)}>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button} 
							variant="success" 
							active={landSuccess === 'True' ? true : false}
						>
							True
						</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button 
							className={styles.filter_button} 
							variant="success" 
							active={landSuccess === 'False' ? true : false}
						>
							False
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default FiltersCard
