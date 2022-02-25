import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    const title = "Blog Personal"
    return (
        <Layout pageTitle={title}>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>{node.name}</li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }  
`

export default BlogPage