import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{ count }</h1>

      <button onClick={ () => setCount(count + 1)}>Plus</button>
      <button onClick={ () => setCount(count - 1)}>Minus</button>
    </div>
  );
}

export default App;
