import Head from 'next/head'
import Banner from '../components/Banner'
import Community from '../components/Community'
import CompaniesSection from '../components/CompaniesSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Ribbon from '../components/Ribbon'
import SignUp from '../components/SignUp'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Figma: the collaborative interface design tool.</title>
      </Head>

      <Ribbon />
      <Header />
      <Banner />
      <CompaniesSection />
      <main>
        <Main />
        <Community />
      </main>
      <SignUp />
      <Footer />
    </div>
  )
}
