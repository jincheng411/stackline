import React, {useEffect, useState} from 'react';
import SaleDetail from './components/SaleDetail.jsx';
import axios from 'axios';
import store from './store'

const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=> {
    axios.get('api/products/1')
      .then(({data}) => {
        store.dispatch({
          type: 'SET_SUMMARY',
          payload: {
            id: data.id,
            title: data.title,
            image: data.image,
            subtitle: data.subtitle
          }
        });
        store.dispatch({
          type: 'SET_TAGS',
          payload: {
            tags: data.tags
          }
        });
        store.dispatch({
          type: 'SET_SALES',
          payload: {
            sales: data.sales
          }
        })
        setProduct(data)
      })
  },[])
  return (
    <div>
      <SaleDetail/>
    </div>
  )
}

export default App;
