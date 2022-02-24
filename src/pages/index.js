import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial!</p>
      <StaticImage src="../images/green_field.jpg" alt="Empty green plain with a single tree in the middle."/>
    </Layout>
  )
}

export default IndexPage