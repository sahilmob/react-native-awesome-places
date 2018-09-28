import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

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
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						value={placeName}
						placeholder="An aawesome place"
						onChangeText={this.placeNameChangedHandler}
						style={styles.placeInput}
					/>
					<Button title="Add"
						style={styles.placeButton} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 20
	},
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	placeInput: {
		width: "70%"
	},
	placeButton: {
		width: "30%"
	}
});
