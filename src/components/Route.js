import {useEffect, useState} from "react";

const Route = ({path, children}) => {
    //create a current path state & setter
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //change pathname on navigation
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        //Run location change function navigation event emits
        window.addEventListener('popstate', onLocationChange);

        //clean up function to remove navigation event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);
   
    //check render path against component paths
    //renders the correct component based on current path
    return (
        currentPath === path ? children : null
    );
};

export default Route;