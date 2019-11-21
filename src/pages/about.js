import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `teal` }}>
        <Header headerText="About Us Page" />
        <Header headerText="It's pretty cool" />
        <p>Such wow. Very React.</p>
        <Link to="/index/">Homepage</Link> <br/>
        <Link to="/about/">Homepage</Link> <br/>
        <Link to="/page-2/">Homepage</Link> <br/>
        <Link to="/404/">Homepage</Link>
    </div>
)

