import { Nunito } from "next/font/google";
import Image from "next/image";
import blue from "../assets/puzzle-piece-blue.svg";
import green from "../assets/puzzle-piece-green.svg";

const inter = Nunito({ subsets: ["latin"], weight: ["400"] });

function Home() {
  return (
    <div className="container">
      <p>Ainda estamos encaixando as peças por aqui...</p>
      <div className="puzzle">
        <Image className="puzzle-piece" src={blue} height={112} width={112} />
        <Image className="puzzle-piece" src={green} height={112} width={112} />
      </div>
      <p>
        Em breve você terá acesso a uma plataforma feita para quem divide as
        contas do dia a dia com outras pessoas.
        <br />
        Seja em família, entre casais ou colegas, a ideia é facilitar o controle
        das despesas compartilhadas
        <br />
        e também permitir que cada um gerencie seus próprios gastos de uma forma
        simples,
        <br />
        para que todos os membros do grupo consigam deixar tudo contadinho!
        <br />
      </p>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }

          body {
            background-color: #0b1b2b;
          }

          p {
            color: #e6e9ef;
            font-size: 1.5rem;
            line-height: 1.25;
            text-align: center;
          }

          .container {
            display: flex;
            flex-direction: column;
            height: calc(100vh - 16px);
            justify-content: center;
            width: calc(100vw - 16px);
          }

          .puzzle {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            padding: 8px 0;
            width: 272px;
          }

          .puzzle-piece {
            animation: rotation 8s infinite;
          }

          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(180deg);
            }
            75% {
              transform: rotate(270deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
