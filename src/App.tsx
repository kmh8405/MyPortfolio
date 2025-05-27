import './App.css'
import Background from './components/background'
import Content from './layout/content'
import Footer from './layout/footer'
import Header from './layout/header'

function App() {

  return (
    <div className="wrapper">
      <Background/>
      <Header/>
      <main>
        <Content/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
