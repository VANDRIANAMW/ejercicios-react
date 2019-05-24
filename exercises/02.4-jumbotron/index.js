import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Jumbotron = props => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">
				{props.label}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	label: PropType.string
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		label="Go to the official website"
		buttonUrl="https://reactjs.org/"
	/>,
	document.querySelector("#myDiv")
);
