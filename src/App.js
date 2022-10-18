import React, {useEffect, useState} from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import getProducts from './services/getProducts'

function App() {

  const [products, setProducts] = useState([])

  useEffect(function () {
    getProducts().then(products => setProducts(products))
  }, [])

  return (
    <div className="App">
      <Header />

      <section className="App-content">
        
        <Sidebar category={products} />
         

        <div className="App-content__products">

          {
            products.map( singleProducto => <Product 
              key={singleProducto.id}
              productImg={singleProducto.images[0]} 
              productPrice={singleProducto.price}
              productTitle={singleProducto.title}
              /> 
            )
          }

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;