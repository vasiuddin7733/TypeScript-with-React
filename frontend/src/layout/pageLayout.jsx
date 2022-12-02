import React from 'react'
import { Header } from './index'
import { Footer } from './index'

const PageLayout = ({ children }) => {
  return (
    <div className="text-green-500">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default PageLayout
