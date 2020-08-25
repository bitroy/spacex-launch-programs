import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import FiltersCard from './FiltersCard'
import MissionCards from './MissionsCards'
import PageHeader from './PageHeader'

const Layout = () => {
    return (
		<div className={styles.container}>
            <header className={styles.header}></header>
            <div className={styles.content}>
                <aside className={styles.left_sidebar}></aside>
                <main className={styles.main}></main>                
            </div>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Layout

        // <div className={styles.container}>
		// 	<Head>
		// 		<title>SpaceX-Launch</title>
		// 		<link rel="icon" href="/favicon.ico" />
		// 	</Head>

		// 	<PageHeader />
		// 	<main>
		// 		<div className={styles.grid}>
		// 			<FiltersCard />
		// 			<MissionCards />
		// 		</div>
		// 	</main>

		// 	<footer className={styles.footer}>
		// 		<a href="https://github.com/bitroy" target="_blank" rel="noopener noreferrer">
		// 			Developed By Pranoy Roy
		// 		</a>
		// 	</footer>
		// </div>