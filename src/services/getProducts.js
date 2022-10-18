const apiURL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=6'

export default function getProducts() {
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const products = response
      const productData = products.map( data => {
        const {images, title, price, category, id} = data
        return {images, title, price, category, id}
      })
      return productData
    })
}