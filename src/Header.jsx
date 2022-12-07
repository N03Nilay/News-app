import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className="wrapper-header">
            <ul>
                <li>
                <Link id='check' rel="stylesheet" to="/"> HOME </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/india"> INDIA </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/world"> WORLD </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/sport"> SPORT </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/entertainment"> ENTERTAINMENT </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/life-style"> LIFE-STYLE </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/technology"> TECHNOLOGY </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/business"> BUSINESS </Link>
                </li>
                <li>
                <Link id='check' rel="stylesheet" to="/crime"> CRIME </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header