import React from 'react';
import './App.css';

export default function App(props) {
  App.defaultprops={name: "sri", age:21};
  return (
    <div >
      <p>Hello{props.name}. i am {props.age}</p>
    </div>
  );
}

// export default App;
