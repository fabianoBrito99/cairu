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
    <div className={styles.container}>
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
        <h1 className={styles.frase}>
          A  <strong>qualidade</strong> que <br /> sua pedalada <br />
          <strong className={styles.stron}>merece</strong>
        </h1>
         <div className={styles.merece}></div>

        <button className={styles.botao} onClick={iniciar}>
          INICIAR
        </button>

        <div className={styles.asfalto}>
          <Image src="/Asfalto.png" alt="Bike 1" width={470} height={180} />
        </div>
        <div className={styles.bikes}>
          <Image src="/bike1.png" alt="Bike 1" width={170} height={140} />
          <Image src="/bike2.png" alt="Bike 2" width={170} height={140} />
          <Image src="/bike3.png" alt="Bike 3" width={170} height={140} />
          <Image src="/bike4.png" alt="Bike 4" width={170} height={140} />
        </div>
        <div className={styles.logoArea}>
          <Image
            src="/ciclo.png"
            alt="Grupo Cairu"
            width={200}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
}
