import React from 'react';
import { useState } from 'react';

class Homework1 extends React.Component  {
	constructor (props) {
		super();
		console.log(props);
		this.state = {
			s1: props.p1
		}
		let s2 = 201

	};

	// const[stp1, setSt1] = useState();
	
	// let out=React.createRef();

	// setSt1(props.data.p1);

  // function task1() {
	// 	setSt1(props.data.p1);
  // }

	render() {
		return (
			<>
				{console.log(this.s2)}
				<div>{this.state.s1}</div>
				<div>{this.s2}</div>
			</>
		)
	}

	DidMount() {
		s1 = s1 + 5;
		s2 = s2 + 5;
	}



}

function newFunc() {
	const[t3, setSt3] = useState();
	let out=React.createRef();
  function buttonHander(event) {
		let currentState = t3;
		currentState = ( DidMount * 10 );
		// out = event.target.value;
		// console.log(event.target.value);

		setSt3(out);
  }

	return (
		<section>
			<div ref={out}>{t3}</div>
			<button onClick={buttonHander}> </button>
		</section>
	)
}

export default Homework1;

export default newFunc;

