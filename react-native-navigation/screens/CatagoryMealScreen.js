import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATAGORIES } from "../data/dummy";

const CatagoryMealScreen = (props) => {
  const catagoryId = props.navigation.getParam("catagoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeal = availableMeals.filter(
    (meal) => meal.catagoryIds.indexOf(catagoryId) >= 0
  );

  return <MealList data={displayMeal} navigation={props.navigation} />;
};

CatagoryMealScreen.navigationOptions = (navigationData) => {
  const catagoryId = navigationData.navigation.getParam("catagoryId");
  const selectedCatagory = CATAGORIES.find((cat) => cat.id === catagoryId);
  return {
    headerTitle: selectedCatagory.title,
  };
};

export default CatagoryMealScreen;

{
  /* <Button
    title="Goto Meal Detail"
    onPress={() => {
      props.navigation.navigate({ routeName: "MealDetail" });
      // props.navigation.push("MealDetail"); // also works for same page
    }}
  />
  <Button
    title="Go back"
    onPress={() => {
      props.navigation.goBack();
      // props.navigation.pop(); // also works for same page
    }}
  /> */
}
