import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './reset.scss'
import { CartProvider } from './contexts/CartContext'
import{ MainProvider } from './contexts/MainContext'


function App() {
  return (
    <>
      <CartProvider >
        <Header />
        <MainProvider>
          <Main />
        </MainProvider>
        <Footer />      
      </CartProvider>    

    </>

  );
}

export default App;
