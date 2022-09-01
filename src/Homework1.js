import React from 'react';
// import { useState } from 'react';

class Homework1 extends React.Component  {
	constructor (props) {
		super();
		console.log(props);
		this.state = {
			s1: props.data.p1
		}
		this.s2 = 201;
		console.log(this.state.s1);
		console.log(this.s2);
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
				<div>
					{this.state.s1}
				</div>
				<div>
					{this.s2}
				</div>
			</>
		)
	}

  componentDidMount() {
    let val1 = this.state.s1;
    val1 += 5;
    this.setState({ s1: val1 });
    this.s2 += 5;
  }

  buttonHandler = () => {
    let val1 = this.state.s1;
    val1 += 50;
    this.setState({ s1: val1 });
    this.s2 += 50;
		console.log(this.state.s1);
		console.log(this.s2);
  };

	render() {
    return (
      <>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
        <button onClick={this.buttonHandler}>Plus 50</button>
      </>
    );

  }
	// componentDidMount() {
	// 	s1 = s1 + 5;
	// 	s2 = s2 + 5;
	// }

// 	function newFunc1() {
// 		const[t3, setSt3] = useState();
// 		let out=React.createRef();
// 		function buttonHander(event) {
// 			let currentState = t3;
// 			currentState = ( DidMount * 10 );
// 			// out = event.target.value;
// 			// console.log(event.target.value);

// 			setSt3(out);
// 		}

// 		return (
// 			<section>
// 				<div ref={out}>{t3}</div>
// 				<button onClick={buttonHander}> </button>
// 			</section>
// 		)
// 	}

// 	return newFunc1;

}



export default Homework1;

// export default newFunc;
