import React from "react";
import { View, Text, StyleSheet } from "react-native";
const listItem = props => {
	const { placeName } = props;
	return (
		<View style={styles.listItem}>
			<Text>{placeName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		marginBottom: 5,
		padding: 10,
		backgroundColor: "#eee"
	}
});

export default listItem;
