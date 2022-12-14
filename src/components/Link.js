import React from "react";

const Link = ({href, className, children}) => {
    const onClick = e => {
        //click link on meta key hold or ctrl key hold
        if(e.metaKey || e.ctrlKey) {
            return;
        };

        e.preventDefault();

        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;