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
        <title>SteamProject</title>
        <meta name="description" content="SteamProject" />
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
            <SaleCard
              image={"for-honor.jpg"}
              discount="20%"
              fullPrice="149,90"
              discountPrice="119,92"
              onAdd={() =>
                handleAddProduct({
                  name: "For Honor",
                  price: 119.92,
                  image: "for-honor.jpg",
                })
              }
            />

            <SaleCard
              image={"remnant.jpg"}
              discount="20%"
              fullPrice="149,90"
              discountPrice="119,92"
              onAdd={() =>
                handleAddProduct({
                  name: "Remnant",
                  price: 119.92,
                  image: "remnant.jpg",
                })
              }
            />

            <SaleCard
              image={"boutgun.jpg"}
              discount="20%"
              fullPrice="149,90"
              discountPrice="119,92"
              onAdd={() =>
                handleAddProduct({
                  name: "Boutgun",
                  price: 119.92,
                  image: "boutgun.jpg",
                })
              }
            />
          </div>

          <div className={styles.session}>
            <Subtitle> Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                image={"counter-strike.jpg"}
                title={"Call of Duty Black OPS III"}
                fullPrice="99,90"
                category={"Ação, estratégia, multijogador"}
                onAdd={() =>
                  handleAddProduct({
                    name: "Counter Strike GO",
                    price: 99.9,
                    image: "counter-strike.jpg",
                  })
                }
              />

              <GameCard
                image={"cod.jpg"}
                title={"Call of Duty Black OPS III"}
                fullPrice="149,90"
                category={"Ação, estratégia, multijogador"}
                onAdd={() =>
                  handleAddProduct({
                    name: "Call Of Duty - Black OPS III",
                    price: 99.9,
                    image: "cod.jpg",
                  })
                }
              />

              <GameCard
                image={"the-lord-of-the-rings.jpg"}
                title={"The Lord Of The Rings"}
                fullPrice="189,90"
                category={"Fantasia, estratégia, ficção"}
                onAdd={() =>
                  handleAddProduct({
                    name: "The Lord Of The Rings",
                    price: 189.9,
                    image: "the-lord-of-the-rings.jpg",
                  })
                }
              />

              <GameCard
                image={"farcry5.jpg"}
                title={"Farcry 5"}
                fullPrice="129,90"
                category={"Ação, estratégia, aventura, mundo aberto"}
                onAdd={() =>
                  handleAddProduct({
                    name: "Farcry 5",
                    price: 129.9,
                    image: "farcry5.jpg",
                  })
                }
              />

              <GameCard
                image={"gta-v.jpg"}
                title={"GTA V"}
                fullPrice="199,90"
                category={"Ação, aventura, dinâmico"}
                onAdd={() =>
                  handleAddProduct({
                    name: "GTA V",
                    price: 199.9,
                    image: "gta-v.jpg",
                  })
                }
              />

              <GameCard
                image={"master-duel.jpg"}
                title={"Yu-Gi-Oh! - Master Duel"}
                fullPrice="109,90"
                category={"Competição, estratégia, multijogador"}
                onAdd={() =>
                  handleAddProduct({
                    name: "Yu-Gi-Oh! - Master Duel",
                    price: 109.9,
                    image: "master-duel.jpg",
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
