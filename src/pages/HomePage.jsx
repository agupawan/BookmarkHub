import React from 'react'
import MainLayout from '../components/MainLayout'
import Hero from './HomeContainer/Hero'
import Articles from './HomeContainer/Articles'
import CTA from './HomeContainer/CTA'

const HomePage = () => {
  return (
    <div>
        <MainLayout>
            <Hero />
            <Articles />
            <CTA />
        </MainLayout>
    </div>
  )
}

export default HomePage