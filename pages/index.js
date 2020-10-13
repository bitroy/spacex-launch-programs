import styles from "styles/Home.module.css";
import Head from "next/head";
import FiltersCard from "components/filters/FiltersCard";
import MissionCards from "components/missions/MissionsCards";

const Home = () => {
  return (
    <>
      <header>
        <div className={styles.header_section}>SpaceX Launch Programs</div>
      </header>
      <div className={styles.container}>
        <Head>
          <title>SpaceX Launch Program</title>
          <link rel="dns-prefetch" href="https://imgbox.com/"></link>
          <meta
            name="description"
            content="SpaceX Launch Program Frontend with Filters"
          />
        </Head>
        <main className={styles.parent}>
          <div className={styles.left_section}>
            <FiltersCard />
          </div>
          <div className={styles.right_section}>
            <MissionCards />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
