import styles from "styles/Home.module.css";
import { wrapper } from "redux/Store";
import Head from "next/head";

import FiltersCard from "components/filters/FiltersCard";
import MissionCards from "components/missions/MissionsCards";
import { fetchMissionsLaunchData } from "redux/actions/QueryAPI";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launch Program</title>
        <link rel="dns-prefetch" href="https://imgbox.com/"></link>
        <meta
          name="description"
          content="SpaceX Launch Program Frontend with Filters"
        />
      </Head>
      <header>
        <div className={styles.header_section}>SpaceX Launch Programs</div>
      </header>
      <main className={styles.parent}>
        <div className={styles.left_section}>
          <FiltersCard />
        </div>
        <div className={styles.right_section}>
          <MissionCards />
        </div>
      </main>
      <footer>
        <div className={styles.footer_section}>Developed by: Pranoy Roy</div>
      </footer>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
  const limit = store.getState().limit;
  const API_URL = process.env.NEXT_PUBLIC_SPACEX_API_URL;
  const URL = `${API_URL}?limit=${limit}`;
  store.dispatch(fetchMissionsLaunchData(URL));
});

export default Home;
