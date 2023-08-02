import Head from "next/head";

import styles from "@/styles/index.module.css";

import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Container from "@/components/container/container";
import SaleCard from "@/components/cards/saleCard/saleCard";
import GameCard from "@/components/cards/gameCard/gameCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/steam.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Games em promoção</Subtitle>
          </div>
          <div className={styles.salecontainer}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </div>
          <div className={styles.session}>
            <Subtitle> Outros Jogos</Subtitle>
            <div>
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
