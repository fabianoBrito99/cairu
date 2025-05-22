"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa"; // ✅ ícone de casa
import styles from "./hom.module.css";

export default function Escolha() {
  const router = useRouter();

  const irParaCatalogo = () => {
    router.push("/catalogo");
  };

  const irParaHistoria = () => {
    router.push("/historia");
  };

  const voltarParaHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoArea}>
        <Image
          src="/ciclo2.png"
          alt="Grupo Cairu"
          width={350}
          height={150}
          priority
        />
      </div>
      <div className={styles.homeIcon} onClick={voltarParaHome}>
        <FaHome size={40} color="white" title="Início" />
      </div>

      <button className={styles.botao} onTouchStart={irParaCatalogo}>
        Conheça nossos produtos
      </button>

      <button className={styles.botao} onTouchStart={irParaHistoria}>
        Conheça nossa história
      </button>
    </div>
  );
}
