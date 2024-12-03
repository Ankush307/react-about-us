import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(() => count + 1);
        }, 1000);
    },
    );
    return (
        <div>
            <p className='text-4xl font-bold text-center mt-20'>Counter: {count}</p>
        </div>
    );
};

export default Counter;
