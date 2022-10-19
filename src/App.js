import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import apiJSON from './services/productService.json'

export default function App() {


  return (
    <div className="App">

      <Header />

      <section className="App-content">

        <Sidebar />
         
        <div className="App-content__products">

          {
            apiJSON.map( dataProduct => <Product 
              key={dataProduct.id}
              productImg={dataProduct.image} 
              productPrice={dataProduct.price}
              productTitle={dataProduct.title}
              /> )
          }

        </div>

      </section>

      <Footer />

    </div>
  );
}