import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minha Página Next.js com TypeScript</title>
        <meta name="description" content="Criando uma página Next.js com TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bem-vindo à minha página Next.js com TypeScript</h1>
        <p>Esta é uma página simples criada com Next.js e TypeScript.</p>
      </main>

      <footer>
        <p>Feito com ❤️ por [Seu Nome]</p>
      </footer>
    </div>
  );
};

export default Home;