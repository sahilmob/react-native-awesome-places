import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import ListItem from "./src/components/ListItem/Listitem";
export default class App extends Component {
	state = {
		placeName: "",
		places: []
	};

	placeNameChangedHandler = value => {
		this.setState({
			placeName: value
		});
	};

	placesubmitHandler = () => {
		let { placeName, places } = this.state;
		if (placeName.trim() === "") {
			return;
		}
		this.setState(prevState => {
			return {
				places: places.concat(prevState.placeName)
			};
		});
	};

	render() {
		let { placeName, places } = this.state;
		const placesOutput = places.map((place, i) => (
			<ListItem key={i} placeName={place} />
		));
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						value={placeName}
						placeholder="An aawesome place"
						onChangeText={this.placeNameChangedHandler}
						style={styles.placeInput}
					/>
					<Button
						title="Add"
						style={styles.placeButton}
						onPress={this.placesubmitHandler}
					/>
				</View>
				<View style={styles.listConatiner}>{placesOutput}</View>
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
	},
	listConatiner: {
		width: "100%"
	}
});
