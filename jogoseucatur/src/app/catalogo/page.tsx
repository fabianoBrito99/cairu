"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import styles from "./catalago.module.css";

type Produto = {
  modelo: string;
  codigo: string;
  peso: string;
  velocidades: string;
  imagem: string;
};

export default function Catalogo() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/catalogo_lotus_2024_com_imagens.json")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  const verDetalhes = (codigo: string) => {
    router.push(`/produto/${codigo}`);
  };

  const irParaHome = () => router.push("/");
  const irParaEscolha = () => router.push("/escolha");

  return (
    
    <div className={`${styles.container} ${styles.animeLeft}`}>
      <video
        className={styles.videoFundo}
        src="/video2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay}></div>
      <div className={styles.fundo3}>
        <div className={styles.fundo2}>
          <Image
            src="/2.png"
            alt="bicicletas"
            width={420}
            height={300}
            priority
          />
        </div>
      </div>

      <div className={styles.navContainer}>
        <button className={styles.navButton} onClick={irParaEscolha}>
          <FaArrowLeft size={20} color="#0050c8" />
        </button>
        <button className={styles.navButton} onClick={irParaHome}>
          <FaHome size={20} color="#0050c8" />
        </button>
      </div>

      <div className={styles.fundoBranco}>
        <div className={styles.scrollContainer}>
          <div className={styles.grid}>
            {produtos.map((produto) => (
              <div
                key={produto.codigo}
                className={styles.card}
                onClick={() => verDetalhes(produto.codigo)}
              >
                <Image
                  src={produto.imagem}
                  alt={produto.modelo}
                  width={180}
                  height={220}
                  className={styles.produtoImagem}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
