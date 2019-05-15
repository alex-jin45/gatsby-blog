import React from "react"
import { Link } from "gatsby"
const Menu = () => (
<div
    style = {{
        background: '#f4f4f4',
        paddingTop: '10px',
        width:'100%',
    }}>
    <ul style = {{
        listStyle:'none' , 
        display: 'flex' , 
        justifyContent: 'space-evenly',
    }}>
         <li> <Link to ="/">Home </Link> </li>
         <li> <Link to ="/blog">Blogs </Link> </li>
         <li> <Link to ="/page-2">Domains </Link> </li>
         <li> <Link to ="/about">About </Link> </li>
    </ul>
</div>
)


export default Menu ; 