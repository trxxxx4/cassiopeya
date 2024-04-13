
import { comments } from "./data";
import { Header } from "./Components/Header/Header";
import styles from "./page.module.css";
import { Banner } from "./Components/Banner/Banner";
import { Slogan } from "./Components/Slogan/Slogan";
import { Cardlist } from "./Components/Cardlist/Cardlist";

import { Comments } from "./Components/Comments/Comments";

export default function Home() {
  return (

    
      <main className={styles.main} >
        <Header />
        <Slogan />
        <Comments props={comments} />
        <Banner />
        <Cardlist />

      </main>
    
  );
}
