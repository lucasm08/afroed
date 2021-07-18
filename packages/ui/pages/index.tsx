import Head from 'next/head'
import Preloader from '../components/Preloader'
import Timer from '../components/Countdown'
import Optin from '../components/Optin'
import Image from 'next/image'

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="App">
      <div className="logo">
        <Image
          src="/africa.svg"
          alt="Africa Logo"
          height={'300'}
          width={'300'}
        />
      </div>
      <div className="container">
        <h1>Coming Soon</h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  </div>
)

export default Home
