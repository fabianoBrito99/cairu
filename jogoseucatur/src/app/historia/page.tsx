"use client";
import styles from "./historia.module.css";

export default function Historia() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Nossa História</h1>

      <video
        className={styles.video}
        src="/video_historia2.mp4"
      controls
        playsInline
      />

      <p className={styles.texto}>
A Ciclo Cairu foi fundada em 1.985, na cidade de Pimenta Bueno, estado de Rondônia, com uma pequena oficina de bicicletas como muitas que se vê em todas as cidades, porém tendo como diferencial desde a sua origem, a vontade de fazer e entregar o melhor para seus clientes. <br /> <br />

O negócio cresceu e logo no ano de 1.987 a Ciclo Cairu entrou no ramo de vendas de peças para bicicletas no atacado, fornecendo inicialmente para outros pequenos comerciantes do ramo nas cidades mais próximas, atividade realizada com muita persistência fazendo com que logo pudesse atender todo o estado de Rondônia e também outros estados vizinhos. <br /><br />

Em 1.990 a Ciclo Cairu, com o mesmo comprometimento, decidiu entrar no mercado de montagem e fabricação de bicicletas, iniciando a montagem de bicicletas do tipo Mountain Bike.
Sempre prezando pela qualidade do produto e respeito aos clientes, consumidores e fornecedores, as bicicletas Cairu e Lotus tiveram uma grande aceitação do mercado e transformou a Cairu Bicicletas em na maior indústria de bicicletas da américa latina.
<br /><br />

Os anos se passaram e a empresa foi descobrindo novos horizontes e em 1.992 começou a importação de produtos, reduzindo os custos das mercadorias comercializadas, com produtos trazidos de países como China, Índia e Taiwan, líderes mundiais na produção de bicicletas e peças. <br /><br />

Sempre atenta às oportunidades do mercado e com projetos de expansão em áreas que tragam sinergia e dinamismo ao negócio, em 1.997 a Ciclo Cairu iniciou a distribuição de peças para motocicletas, formando parceria sólida com diversos fabricantes nacionais e de outros países. <br /><br />

Trabalhando sempre com a simplicidade de uma pequena empresa, muita integridade e honestidade, bem como cuidando das pessoas que nos ajudaram a chegar até aqui.<br /><br />

A Ciclo Cairu é uma empresa que une a distribuição de peças para bicicletas, motos e fabricação de bicicletas e conta com um mix de mais de 120 modelos desde a linha infantil, bicicletas de aço carbono até as mais sofisticadas da linha pro, com quadros em alumínio e também em fibra de carbono com tecnologia de ponta.<br /><br />

Hoje, o Grupo Cairu é uma família com mais de 2.500 colaboradores e com um complexo industrial com mais de 200.000 m2 em sua matriz, é uma das maiores distribuidoras nacionais de peças para bicicletas e motocicletas, oferecendo maior mix em produtos do País.<br /><br />

Agradecemos aos colaboradores, clientes e fornecedores pela parceria que nos ajudaram a construir essa bela história com 39 anos de sucesso e que nos motiva a continuar sendo o Máximo em Duas Rodas.<br /><br />
      </p>
    </div>
  );
}
