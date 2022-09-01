//libraries
import React from "react";
//components
import Link from './Link';


const Map = () => {
    return (
        <div className="map-container">
            <Link href='/company-x' className='map-nav-itm'>
                Company X
            </Link>
            <Link href='/company-y' className='map-nav-item'>
                Company Y
            </Link>
        </div>
    );
};

export default Map;