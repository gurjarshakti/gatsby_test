import React from "react"
import { Link } from "gatsby"


import Nav from "../components/navbar"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <img src="https://source.unsplash.com/random/400x200" alt="this is a image"/>
    <Link to="/page-2/">Go to page 2</Link> <br>
    </br>
    <Link to="/about">About US Page</Link>
  </Layout>
)

ReactDOM.render (<Nav/>,document.getElementById("root"));
serviceWorker.unregister();
export default IndexPage
