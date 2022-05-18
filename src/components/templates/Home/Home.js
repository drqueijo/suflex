import React from 'react'
import Header from '../../UI/organisms/Header/Header';
import Count from '../../../components/Count'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
          <Count />
      </div>
    </>

  )
}

export default Home