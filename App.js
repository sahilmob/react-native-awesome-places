import React, { Component } from "react";
import { View, TextInput } from "react-native";

export default class App extends Component {
	state = {
		placeName: ""
	};

	placeNameChangedHandler = value => {
		this.setState({
			placeName: value
		});
	};

	render() {
		return (
			<View>
				<TextInput
					value={this.state.placeName}
					onChangeText={this.placeNameChangedHandler}
					style={{ width: 300, borderColor: "black", borderWidth: 1 }}
				/>
			</View>
		);
	}
}
