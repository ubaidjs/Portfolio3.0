import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from './contact.module.scss'
import GithubIcon from '../icons/github'
import InstaIcon from '../icons/instagram'
import Linkedin from '../icons/linkedin'
import Twitter from '../icons/twitter'
import Dribbble from '../icons/dribbble'

const Contact = () => {
  return (
    <Layout>
      <SEO />
      <div className={style.container}>
        <div className={style.contactInfo}>
          <h2>Get In Touch</h2>
          <div>
            <a href="mailto:ubaidsid0@gmail.com">
              <p className={style.button}>Email me</p>
            </a>
          </div>
          <div className={style.social}>
            <a
              href="https://github.com/ubaidjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon></GithubIcon>
            </a>
            <a
              href="https://dribbble.com/ubaidsid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Dribbble></Dribbble>
            </a>
            <a
              href="https://www.linkedin.com/in/ubaidsiddiqui/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin></Linkedin>
            </a>
            <a
              href="https://instagram.com/ubaid.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon></InstaIcon>
            </a>
            <a
              href="https://twitter.com/ubaidjsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter></Twitter>
            </a>
          </div>
        </div>
        <div className={style.attr}>Created by Ubaid Siddiqui</div>
      </div>
    </Layout>
  )
}

export default Contact
