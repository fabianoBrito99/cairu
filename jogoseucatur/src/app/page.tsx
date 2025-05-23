"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./catalogo/home.module.css";

export default function Home() {
  const router = useRouter();

  const iniciar = () => {
    router.push("/escolha");
  };

  return (
    <div className={`${styles.container} ${styles.animeLeft}`}>
      {/* vídeo de fundo */}
      <video
        className={styles.videoFundo}
        src="/video2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* overlay azul translúcido */}
      <div className={styles.overlay}></div>

      {/* conteúdo principal */}
      <div className={styles.conteudo}>
        <div className={styles.topo}>
          <Image
            src="/1.png"
            alt="Grupo Cairu"
            width={650}
            height={450}
            priority
          />
        </div>

        <button className={styles.botao} onClick={iniciar}>
          INICIAR
        </button>

        <div className={styles.bikes}></div>
        <div className={styles.logoArea}>
          <Image
            src="/17.png"
            alt="Grupo Cairu"
            width={450}
            height={250}
            priority
          />
        </div>
      </div>
    </div>
  );
}
