import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector( state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementAction());
    }

    const handleDecrement = () => {
        dispatch(decrementAction());
    }

    const handleReset = () => {
        dispatch(resetAction());
    }

    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;