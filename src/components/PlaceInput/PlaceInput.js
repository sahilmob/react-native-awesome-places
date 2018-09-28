import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export default class PlaceInput extends React.Component {
	state = {
		placeName: ""
	};

	placeNameChangedHandler = value => {
		this.setState({
			placeName: value
		});
	};

	placesubmitHandler = () => {
		let { placeName } = this.state;
		let { onPlaceAdded } = this.props;
		if (placeName.trim() === "") {
			return;
		}
		onPlaceAdded(placeName);
	};

	render() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					value={this.state.placeName}
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
		);
	}
}

const styles = StyleSheet.create({
	placeInput: {
		width: "70%"
	},
	placeButton: {
		width: "30%"
	},
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	}
});
