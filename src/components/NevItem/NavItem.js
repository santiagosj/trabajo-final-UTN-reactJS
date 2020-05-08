import React from 'react';
import { Link }from 'react-router-dom';

const NavItem = ({
    data
}) => {
    return(
        <li>
            <Link to={data.link} className={data.class}>
               {data.name}
            </Link>
        </li>
    )
}

export default NavItem;