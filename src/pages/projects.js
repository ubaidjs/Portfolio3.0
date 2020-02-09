import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from './projects.module.scss'
import GithubIcon from '../icons/github'
import LinkIcon from '../icons/link'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/projects/" }
        }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                live
                source
                stack
              }
              html
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <div className={style.container}>
        <h2>Some Project I've Built</h2>
        <div className={style.projectContainer}>
          {data.allFile.edges.map(el => {
            const {
              title,
              live,
              source,
              stack,
            } = el.node.childMarkdownRemark.frontmatter
            return (
              <div className={style.project}>
                <h3>{title}</h3>
                <div
                  className={style.projectDesc}
                  dangerouslySetInnerHTML={{
                    __html: el.node.childMarkdownRemark.html,
                  }}
                ></div>
                <p className={style.tech}>{stack}</p>
                <div>
                  <div className={style.icons}>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      <GithubIcon />
                    </a>
                  </div>
                  <div className={style.icons}>
                    <a href={live} target="_blank" rel="noopener noreferrer">
                      <LinkIcon />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
