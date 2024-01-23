import React from 'react'
import './styles/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { lazy } from 'react'
import Loader from "./components/loader"
const Home = lazy(() => import('./pages/home'))
const Cart = lazy(() => import('./pages/cart'))
const Search = lazy(() => import('./pages/search'))

const App = () => {
  return (
    <Router >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App

