import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from './about.module.scss'

const About = () => {
  return (
    <Layout>
      <SEO />
      <div className={style.container}>
        <h2>About Me</h2>
        <div className={style.para}>
          <p>
            Hello there, I am Ubaid, a self-taught and commited frontend
            developer based in India. I like to design stunning user interfaces
            and build them with modern tools and tech stack.
          </p>
          <p>My knowledge stack includes :</p>
          <ul>
            <li>&#8618; HTML & CSS3 (SASS)</li>
            <li>&#8618; Javascript (ES6+)</li>
            <li>&#8618; React, React Native</li>
            <li>&#8618; Gatsby.js</li>
            <li>&#8618; Node.js</li>
            <li>&#8618; Express, Graphql</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
