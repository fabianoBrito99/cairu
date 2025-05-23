"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import styles from "./prod.module.css";

type Produto = {
  modelo: string;
  codigo: string;
  peso: string;
  velocidades: string;
  imagem: string;
  componentes: Record<string, string>;
};

export default function ProdutoPage() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const router = useRouter();
  const params = useParams();

  const voltarParaHome = () => {
    router.push("/");
  };

  useEffect(() => {
    fetch("/catalogo_lotus_2024_com_imagens.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((p: Produto) => p.codigo === params.id);
        setProduto(item || null);
      });
  }, [params]);

  if (!produto)
    return (
      <div className={styles.container}>
        Carregando ou produto não encontrado.
      </div>
    );

  return (
    <div className={`${styles.container} ${styles.animeLeft}`}>
      {/* vídeo de fundo */}
      <video
        className={styles.videoFundo}
        src="/video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay}></div>

      {/* imagem da bicicleta */}
      <div className={styles.produtoImagem}>
        <Image
          src={produto.imagem}
          alt={produto.modelo}
          width={390}
          height={210}
        />
      </div>

      {/* botão de voltar para home */}
      <div className={styles.homeIcon} onClick={voltarParaHome}>
        <FaHome size={40} color="blue" title="Início" />
      </div>

      {/* área branca com infos */}
      <div className={styles.infoBranco}>
        <div className={styles.tituloTop}>
          <h2>{produto.modelo}</h2>

        </div>
        <div className={styles.comp}>
          <h3>Componentes:</h3>
        </div>

        <div className={styles.componentesGrid}>
          {Object.entries(produto.componentes).map(([nome, valor], i) => (
            <div key={nome} className={styles.componenteItem}>
              <Image
                src={`/icones/c${i + 1}.png`} // baseado na ordem de entrada
                alt={nome}
                width={52}
                height={52}
              />
              <div>
                <strong>{nome.replace(/_/g, " ")}:</strong>
                <br />
                {valor}
              </div>
            </div>
          ))}
        </div>

        <button className={styles.botao} onClick={() => history.back()}>
          ← Voltar ao Catálogo
        </button>
      </div>
    </div>
  );
}
