import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={site.siteMetadata.title}
    >
      <meta name="description" content={site.siteMetadata.description} />
			<meta name="keywords" content="ubaid, ubaid siddiqui, ubaid developer, ubaid frontend devloper, web developer"/>
    </Helmet>
  )
}

export default SEO
