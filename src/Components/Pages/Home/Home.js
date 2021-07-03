import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            This is Home
            <div><Link to="/signin">SignIn</Link></div>
        </div>
    )
}

export default Home
