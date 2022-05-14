import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment, selectCount } from '../redux/counterSlice';

const Counter = () => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector(selectCount);

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());

    return (
        <div className="flex flex-col justify-center items-center mt-16">
            <p className="text-4xl">Counter: {counter}</p>
            <div className="flex items-center mt-6 w-72 justify-between">
                <Button variant="contained" onClick={handleIncrement}>
                    Increment
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDecrement}
                >
                    Decrement
                </Button>
            </div>
        </div>
    );
};

export default Counter;
