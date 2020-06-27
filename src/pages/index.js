import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Card = styled.div`
  display: flex;
  transition: 1s;
  &:hover {
    box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.27);
  }
`


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProductsCsv {
        edges {
          node {
            id,
            productName,
            amount,
            price,
            unit,
            available,
            imageUrl,
          }
        }
      }
    }
  `);

  console.log(data.allProductsCsv)

 return (<Layout>
    <SEO title="Home" />
    {data.allProductsCsv.edges.map(edge => (<Card key={edge.node.id}>
      <div>
        {edge.node.productName}
      </div>
      <div>
        {edge.node.price}
      </div>
      <img src={edge.node.imageUrl} alt={edge.node.productName} style={{ objectFit: 'contain', width: '100px' }}/>
    </Card>))
    }
  </Layout>);
};

export default IndexPage
