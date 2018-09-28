import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

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
		let { placeName } = this.state;
		return (
			<View style={style.container}>
				<TextInput
					value={placeName}
					placeholder="An aawesome place"
					onChangeText={this.placeNameChangedHandler}
					style={{ width: 300 }}
				/>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 20
	}
});
