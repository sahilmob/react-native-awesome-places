import React from "react";
import ListItem from "../ListItem/Listitem";

const placeList = props => {
	const { places } = props;
	const placesOutput = places.map((place, i) => {
		return <ListItem key={i} placeName={place} />;
	});
	return placesOutput;
};

export default placeList;
