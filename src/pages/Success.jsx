import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    return (
        <div>Success</div>
    )
}

export default Success;