import styles from '../styles/FilterCard.module.css'
import { Row, Col, Button } from "react-bootstrap";
import { useState } from 'react'

const FiltersCard = () => {
    const [yearLaunch, setYearLaunch] = useState(null)
    const [launchSuccess, setLaunchSuccess] = useState(null)
    const [landSuccess, setLandSuccess] = useState(null)

    const setSuccessfulLaunch = (e) => {
        if(e.target.innerText !== '') {
            if(e.target.innerText.trim() === 'True' || launchSuccess !== true) {
                setLaunchSuccess(true)
                missionDispatch(setLaunchSuccessFlag(true))
            } else if(e.target.innerText.trim() === 'False' || launchSuccess !== false) {
                setLaunchSuccess(false)
                missionDispatch(setLaunchSuccessFlag(false))
            }
        }
    }

    const setSuccessfulLand = (e) => {
        if(e.target.innerText !== '') { 
            if(e.target.innerText.trim() === 'True' || landSuccess !== true) {
                setLandSuccess(true)
                missionDispatch(setLandSuccessFlag(true))
            } else if(e.target.innerText.trim() === 'False' || landSuccess !== false) {
                setLandSuccess(false)
                missionDispatch(setLandSuccessFlag(false))
            }
        }
    }

    return (
		<div>
			<div className={styles.filter_div}>
				<h1>Filters</h1>
			</div>
			<div className={styles.filter_div}>
				<h5 className={styles.filter_section_header}>Launch Year</h5>
				<hr />
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2006</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2007</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2008</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2009</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2010</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2011</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2012</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2013</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2014</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2015</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2016</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2017</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2018</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">2019</Button>
					</Col>
				</Row>
				<Row>
					<Col className={styles.filter_col}>
						<Button variant="success">2020</Button>
					</Col>
					<Col></Col>
				</Row>
			</div>
			<div className={styles.filter_div}>
				<h5 className={styles.filter_section_header}>Successful Launch</h5>
				<hr />
				<Row onClick={(e) => setSuccessfulLaunch(e)}>
					<Col className={styles.filter_col}>
						<Button variant="success">True</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">False</Button>
					</Col>
				</Row>
			</div>
			<div className={styles.filter_div}>
				<h5 className={styles.filter_section_header}>Successful Landing</h5>
				<hr />
				<Row onClick={(e) => setSuccessfulLand(e)}>
					<Col className={styles.filter_col}>
						<Button variant="success">True</Button>
					</Col>
					<Col className={styles.filter_col}>
						<Button variant="success">False</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default FiltersCard
