import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
export default class App extends Component {
	state = {
		places: []
	};

	placeAddedHandler = place => {
		let { places } = this.state;
		this.setState(prevState => {
			return {
				places: prevState.places.concat(place)
			};
		});
	};

	render() {
		let { places } = this.state;
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={places} />
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
	listConatiner: {
		width: "100%"
	}
});
