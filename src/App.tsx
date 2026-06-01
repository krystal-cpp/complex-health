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

// ТАКОЙ ФИКС С БЭКГРАУНДОМ НА КОМПОНЕНТ HERO И HEADER ПРЕДЛОЖИЛ ИИ, Я ВНЕС НЕБОЛЬШИЕ ПРАВКИ И ПОЛУЧИЛОСЬ ХОРОШО
function App() {
  return (
    <div className='overflow-x-hidden bg-[#F3F3F3]'>
      <div className="relative bg-[#2F9DCF] xl:bg-transparent xl:bg-[url('/bg-hero-xl.webp')] xl:bg-no-repeat xl:bg-right xl:bg-cover">
        <Header />
        <main>
          <Hero />
        </main>
      </div>

      <main>
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
