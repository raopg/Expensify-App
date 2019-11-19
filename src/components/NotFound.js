import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        The page you request does not exist. <Link to="/">Go Home</Link>
    </div>
)

export default NotFoundPage