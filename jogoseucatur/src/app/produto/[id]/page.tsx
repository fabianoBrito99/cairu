"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa"; //
import styles from "./prod.module.css";
import {
  FaBicycle, FaCogs, FaBolt, FaToolbox, FaCog, FaWrench, FaDotCircle,
  FaCircle, FaRegHandPaper, FaTachometerAlt
} from "react-icons/fa";
import { GiSuspensionBridge, GiTireIron, GiGearStickPattern } from "react-icons/gi";


type Produto = {
  modelo: string;
  codigo: string;
  peso: string;
  velocidades: string;
  imagem: string;
  componentes: Record<string, string>;
};

const icones: Record<string, React.ReactNode> = {
  quadro: <FaBicycle size={28} />,
  suspensao: <GiSuspensionBridge size={28} />,
  trocador: <GiGearStickPattern size={28} />,
  corrente: <FaCogs size={28} />,
  pedivela: <FaWrench size={28} />,
  freios: <FaBolt size={28} />,
  aro: <FaCircle size={28} />,
  pneus: <GiTireIron size={28} />,
  camara: <FaDotCircle size={28} />,
  cambio_traseiro: <FaCog size={28} />,
  cambio_dianteiro: <FaCog size={28} />,
  canote: <FaToolbox size={28} />,
  guidao: <FaRegHandPaper size={28} />,
  suporte_guidao: <FaRegHandPaper size={28} />,
  cassete_roda_livre: <FaCogs size={28} />,
  mesa: <FaToolbox size={28} />,
  movimento_central: <FaCog size={28} />,
  velocidades: <FaTachometerAlt size={28} />,
};

export default function ProdutoPage() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const router = useRouter();
   const voltarParaHome = () => {
    router.push("/");
   }
  const params = useParams();
   

  useEffect(() => {
    fetch("/catalogo_lotus_2024_com_imagens.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((p: Produto) => p.codigo === params.id);
        setProduto(item || null);
      });
  }, [params]);
  

  if (!produto) return <div className={styles.container}>Carregando ou produto não encontrado.</div>;

  return (
    <div className={styles.container}>
      <video className={styles.videoFundo} src="/video1.mp4" autoPlay loop muted playsInline />

      <div className={styles.overlay}></div>

      <div className={styles.produtoImagem}>
        <Image src={produto.imagem} alt={produto.modelo} width={220} height={200} />
      </div>
     <div className={styles.homeIcon} onClick={voltarParaHome}>
        <FaHome size={40} color="blue" title="Início" />
     </div>   
      <div className={styles.info3} > <span ></span></div>

      <div className={styles.infoBranco}>
        <div className={styles.info2} > <span ></span></div>
        <h2>{produto.modelo}</h2>
        <p><strong>Código:</strong> {produto.codigo}</p>
        <p><strong>Peso:</strong> {produto.peso}</p>
        <p><strong>Velocidades:</strong> {produto.velocidades}</p>

        <h3>Componentes</h3>
        <div className={styles.componentesGrid}>
          {Object.entries(produto.componentes).map(([nome, valor]) => (
            <div key={nome} className={styles.componenteItem}>
              {icones[nome] || <FaToolbox size={28} />}
              <div>
                <strong>{nome.replace(/_/g, " ")}:</strong><br />
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
