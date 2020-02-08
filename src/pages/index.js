import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className={style.container}>
      <div>
        <h1>
          <span className={style.hello}>Hello,</span>{' '}
          <br className={style.br} />
          <span className={style.im}>I'm</span> Ubaid Siddiqui
        </h1>
        <p className={style.desig}>Frontend Developer</p>
      </div>
      <Link to="/contact" className={style.button}>
        Get in touch
      </Link>
    </div>
  </Layout>
)

export default IndexPage
