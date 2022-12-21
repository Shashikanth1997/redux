import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router,Routes,  Route} from 'react-router-dom';
import ProductListing from "./containers/ProductListing"
import ProductDetail from './containers/ProductDetail';
  

function App() {
  return (
    <div>
       
       <Router>
      <Header/>
        <Routes>
      
        <Route exact path='/' element={< ProductListing />}></Route>
      <Route exact path="/product/:productId" element={< ProductDetail />}/>
      <Route>PageNotFound @! </Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App