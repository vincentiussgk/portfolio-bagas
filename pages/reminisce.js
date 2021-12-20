import Head from 'next/head'
import Reminisce from "./components/reminisce"

export default function ReminiscePage() {
  return (
    <div>
      <Head>
        <title>Reminisce | I Still Feel as if though I am Me.</title>
        <meta name="title" content="Reminisce | I Still Feel as if though I am Me." />
        <meta name="description" content="Masa pandemi COVID-19 yang terjadi di seluruh dunia memaksa setiap individu untuk membatasi kegiatan sosial demi mencegah penyebaran virus COVID-19 yang semakin meluas. Hal tersebut menyebabkan suatu perasaan alienasi yang terjadi disetiap kalangan masyarakat. Manusia tidak merasakan kesehariannya yang biasanya dilakukan secara komunal dan kegiatan bersosialisasi juga terbatas didalam jaringan, menjadi suatu perasaan yang teralienasi. Sudahkan kita menerima diri kita sepenuhnya dan menyadari apa yang telah kita pilih di masa sulit ini? Apakah kita masih merasa menjadi diri kita sendiri?" />
        <meta itemProp="description" content="Masa pandemi COVID-19 yang terjadi di seluruh dunia memaksa setiap individu untuk membatasi kegiatan sosial demi mencegah penyebaran virus COVID-19 yang semakin meluas. Hal tersebut menyebabkan suatu perasaan alienasi yang terjadi disetiap kalangan masyarakat. Manusia tidak merasakan kesehariannya yang biasanya dilakukan secara komunal dan kegiatan bersosialisasi juga terbatas didalam jaringan, menjadi suatu perasaan yang teralienasi. Sudahkan kita menerima diri kita sepenuhnya dan menyadari apa yang telah kita pilih di masa sulit ini? Apakah kita masih merasa menjadi diri kita sendiri?" />
        <meta itemProp="image" content="https://drive.google.com/uc?id=1IKubR5BqBaRAP8o3df8CckTQQETWYkvb&export=download" />
        <link rel="icon" href="https://drive.google.com/uc?id=1IKubR5BqBaRAP8o3df8CckTQQETWYkvb&export=download" />
        <link rel="apple-touch-icon" href="https://drive.google.com/uc?id=1IKubR5BqBaRAP8o3df8CckTQQETWYkvb&export=download" />

        {/* FB */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bagasmahardika.vercel.app/reminisce" />
        <meta property="og:title" content="Reminisce | I Still Feel as if though I am Me." />
        <meta property="og:description" content="Masa pandemi COVID-19 yang terjadi di seluruh dunia memaksa setiap individu untuk membatasi kegiatan sosial demi mencegah penyebaran virus COVID-19 yang semakin meluas. Hal tersebut menyebabkan suatu perasaan alienasi yang terjadi disetiap kalangan masyarakat. Manusia tidak merasakan kesehariannya yang biasanya dilakukan secara komunal dan kegiatan bersosialisasi juga terbatas didalam jaringan, menjadi suatu perasaan yang teralienasi. Sudahkan kita menerima diri kita sepenuhnya dan menyadari apa yang telah kita pilih di masa sulit ini? Apakah kita masih merasa menjadi diri kita sendiri?
        " />
        <meta property="og:image" content="https://drive.google.com/uc?id=1IKubR5BqBaRAP8o3df8CckTQQETWYkvb&export=download" />
        <meta property="og:image:width" content="768" />
        <meta property="og:image:height" content="768" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bagasmahardika.vercel.app/reminisce" />
        <meta property="twitter:title" content="Reminisce | I Still Feel as if though I am Me." />
        <meta property="twitter:description" content="Masa pandemi COVID-19 yang terjadi di seluruh dunia memaksa setiap individu untuk membatasi kegiatan sosial demi mencegah penyebaran virus COVID-19 yang semakin meluas. Hal tersebut menyebabkan suatu perasaan alienasi yang terjadi disetiap kalangan masyarakat. Manusia tidak merasakan kesehariannya yang biasanya dilakukan secara komunal dan kegiatan bersosialisasi juga terbatas didalam jaringan, menjadi suatu perasaan yang teralienasi. Sudahkan kita menerima diri kita sepenuhnya dan menyadari apa yang telah kita pilih di masa sulit ini? Apakah kita masih merasa menjadi diri kita sendiri?
        " />
        <meta property="twitter:image" content="https://drive.google.com/uc?id=1IKubR5BqBaRAP8o3df8CckTQQETWYkvb&export=download" />
        <meta property="twitter:image:width" content="768" />
        <meta property="twitter:image:height" content="768" />
      </Head>
      <Reminisce />
    </div>
  )
}

