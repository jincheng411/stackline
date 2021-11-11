import React, {useEffect} from 'react';
import SaleDetail from './components/SaleDetail.jsx';
import Navbar from './components/Navbar.jsx';
import axios from 'axios';
import store from './store'

const App = () => {
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
      })
  },[])
  return (
    <div>
      <Navbar />
      <SaleDetail/>
    </div>
  )
}

export default App;
