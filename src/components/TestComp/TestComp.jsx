import {useState} from 'react';

function TestComp() {
    const [value, setValue] = useState('0');

    return (
        <section>
            <p>Wartość: {value}</p>
            <button onClick={toggleValue}>Toggle</button>
        </section>
    )

    function toggleValue() {
        setValue(prevValue => prevValue === 0 ? 1 : 0)
}

}



export default TestComp;