import React from 'react';


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

	const[st6, setSt6] = useState();
	let out6=React.createRef();
  function task6(event) {
		out6 = event.target.value;
		console.log(event.target.value);

		setSt6(out6);
  }

}

export default Homework1;

