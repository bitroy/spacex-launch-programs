import styles from '../styles/Home.module.css'
import Head from 'next/head'
import FiltersCard from '../components/FiltersCard'
import MissionCards from '../components/MissionsCards'
import { Container } from 'react-bootstrap';

export default function Home() {
  	return (
		<Container fluid>
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
		</Container>
	);
}
