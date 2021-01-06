import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "../components/HeaderIcon";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = (props) => {
  const item = props.navigation.getParam("item");

  const dispatch = useDispatch();
  const isCurrentMealFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === item.id)
  );

  const toggleFavorites = useCallback(() => {
    dispatch(toggleFavorite(item.id));
  }, [dispatch]);

  useEffect(() => {
    console.log("Hello");
    props.navigation.setParams({ toggleFavorites });
  }, [toggleFavorites]);

  useEffect(() => {
    props.navigation.setParams({ isCurrentMealFavorite });
  }, [isCurrentMealFavorite]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          resizeMode="cover"
          fadeDuration={500}
          style={styles.image}
          source={{
            uri: item.imageUrl,
          }}
        />
        <View style={styles.detail}>
          <Text style={{ ...styles.textStyle, color: "black" }}>
            {item.duration}Min
          </Text>
          <Text style={{ ...styles.textStyle, color: "black" }}>
            {item.complexity}
          </Text>
          <Text style={{ ...styles.textStyle, color: "black" }}>
            {item.affordability}
          </Text>
        </View>
        <View style={styles.ingredients}>
          <Text style={styles.title}>Ingredients</Text>
          <View style={styles.content}>
            {item.ingredients.map((ing) => (
              <Text style={styles.item} key={ing}>
                {ing}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.steps}>
          <Text style={styles.title}>Steps</Text>
          <View style={styles.content}>
            {item.steps.map((step) => (
              <Text style={styles.item} key={step}>
                {step}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const item = navigationData.navigation.getParam("item");
  const isCurrentMealFavorite = navigationData.navigation.getParam(
    // "isCurrentMealFavorite"
    "isFavorite"
  );

  return {
    headerTitle: item.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isCurrentMealFavorite ? "ios-star" : "ios-star-outline"}
          onPress={() =>
            navigationData.navigation.getParam("toggleFavorites")(item.id)
          }
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  detail: {
    backgroundColor: "#999",
    padding: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  image: {
    flex: 1,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
  content: {
    marginHorizontal: 8,

    padding: 16,
    flex: 1,
  },
  item: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 2,
    marginVertical: 4,
  },
});

export default MealDetailScreen;

{
  /* <Button
      title="Home"
      onPress={() => {
        props.navigation.popToTop();
      }}
    /> */
}
