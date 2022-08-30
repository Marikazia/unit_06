
import './App.css';
import Homework1 from './Homework1'
import { useState } from 'react';

const Homework1Data = {
	p1 : 88,
}

function App(props, state) {
  return (
		<>
			<Homework1 data={Homework1Data}/>
		

		</>
  );
}

export default App;
