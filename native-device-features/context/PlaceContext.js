import React from "react";

export const PlaceContext = React.createContext({
  place: [],
  addPlace: ({ title, imageUri }) => {},
});
