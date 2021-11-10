import React, {useEffect, useState} from 'react';
import SaleDetail from './components/SaleDetail.jsx';
import axios from 'axios';
import store from './store'

const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=> {
    axios.get('api/products/1')
      .then(({data}) => {
        setProduct(data)
      })
  },[])
  console.log(store)
  return (
    <div>
      <SaleDetail product={product}/>
    </div>
  )
}

export default App;
