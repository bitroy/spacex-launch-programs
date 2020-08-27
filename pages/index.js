import styles from '../styles/Home.module.css'
import { wrapper } from '../redux/Store'
import Head from 'next/head'

import FiltersCard from '../components/filters/FiltersCard'
import MissionCards from '../components/missions/MissionsCards'
import { fetchMissionsLaunchData } from '../redux/actions/QueryAPI';

const Home = () => {
  	return (
		<div className={styles.container}>
			<Head>
				<title>SpaceX Launch Program</title>
			</Head>
			<header className={styles.header_section}>
				<h1>SpaceX Launch Programs</h1>
			</header>
			<main className={styles.parent}>
				<div className={styles.left_section}>
					<FiltersCard />
				</div>
				<div className={styles.right_section}>
					<MissionCards />
				</div>
			</main>
			<footer className={styles.footer_section}>
				<h3>Developed by Pranoy Roy</h3>
			</footer>
		</div>
	);
}

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
	const API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL
	await store.dispatch(fetchMissionsLaunchData(API_URL))
});

export default Home
