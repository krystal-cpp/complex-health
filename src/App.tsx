import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Ingredients from './Components/Ingredients/Ingredients'
import Price from './Components/Price/Price'
import { ProductInfo } from './Components/ProductInfo/ProductInfo'
import TargetAge from './Components/TargetAge/TargetAge'
import TargetAudience from './Components/TargetAudience/TargetAudience'
import { FAQ } from './Components/FAQAccordion/FAQAccordion'
import QuestionsForm from './Components/QuestionsForm/QuestionsForm'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='overflow-x-hidden bg-[#F3F3F3]'>
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <ProductInfo />
        <Ingredients />
        <TargetAge />
        <Price />
        <FAQ />
        <QuestionsForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
