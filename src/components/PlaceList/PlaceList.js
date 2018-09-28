import React from "react";
import ListItem from "../ListItem/Listitem";

const placeList = props => {
	const { places } = props;
	const placesOutput = places.map(place => {
		return <ListItem placeName={place} />;
	});
	return placesOutput;
};

export default placeList;
