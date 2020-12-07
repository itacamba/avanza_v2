import React,{useLayoutEffect} from 'react';

const Weiger = () => {

// scroll to top when mounted
useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

    return (
        <div>
            Weiger Details
        </div>
    );
};

export default Weiger;