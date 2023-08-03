import { useState } from "react";

import Head from "next/head";

import styles from "@/styles/index.module.css";

import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Container from "@/components/container/container";
import SaleCard from "@/components/cards/saleCard/saleCard";
import GameCard from "@/components/cards/gameCard/gameCard";

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };

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
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Games em promoção</Subtitle>
          </div>
          <div className={styles.salecontainer}>
            <SaleCard
              image={"league-of-legends.jpg"}
              discount="30%"
              fullPrice="199,90"
              discountPrice="139,93"
              onAdd={() =>
                handleAddProduct({
                  name: "League of Legends",
                  price: 139.93,
                  image: "league-of-legends.jpg",
                })
              }
            />
            <SaleCard
              image={"valorant.jpg"}
              discount="40%"
              fullPrice="179,90"
              discountPrice="107,94"
              onAdd={() =>
                handleAddProduct({
                  name: "Valorant",
                  price: 107.94,
                  image: "valorant.jpg",
                })
              }
            />
            <SaleCard
              image={"dota-2.jpg"}
              discount="20%"
              fullPrice="149,90"
              discountPrice="119,92"
              onAdd={() =>
                handleAddProduct({
                  name: "Dota 2",
                  price: 119.92,
                  image: "dota-2.jpg",
                })
              }
            />
          </div>
          <div className={styles.session}>
            <Subtitle> Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                onAdd={() =>
                  handleAddProduct({
                    name: "Counter Strike GO",
                    price: 99.9,
                    image: "counter-strike.jpg",
                  })
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
