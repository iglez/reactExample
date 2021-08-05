import react, {useEffect, useState} from 'react';

const CounterComponet = ({initialCount, ...p}) => {

    const [count, setCount] = useState(initialCount);
    const [style, setStyle] = useState({ color: 'black' });

    useEffect(() => {
        if (count >= 10) {
            console.log('Warning !!!');
            setStyle({ color: 'red' });
        } else {
            setStyle({ color: 'black' });
        }
    }, [count]);

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h1>This is the Counter Component</h1>
            <h2 style={ style }>{`counter: ${count}`}</h2>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={decrease}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default CounterComponet;
