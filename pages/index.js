import Head from "next/head";
import dynamic from "next/dynamic";
import { END } from "redux-saga";
import FiltersCard from "components/filters/FiltersCard";
import { requestMissionsData } from "../redux/actions/QueryAPI";
import { wrapper } from "../redux/Store";
import styles from "styles/Home.module.css";

const LoadMissions = dynamic(() =>
  import("../components/missions/LoadMissions")
);

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
            <LoadMissions />
          </div>
        </main>
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(requestMissionsData());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Home;
