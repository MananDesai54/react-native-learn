import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderIcon";

const FilterScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVeg, setIsVeg] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegetarian: isVeg,
      vegan: isVegan,
      lactoseFree: isLactoseFree,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isVeg, isVegan, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilter });
  }, [saveFilter]);

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>
        Available Filter / Restrictions
      </Text>
      <View style={styles.container}>
        <Text>Gluten Free</Text>
        <Switch
          value={isGlutenFree}
          onValueChange={() => setIsGlutenFree(!isGlutenFree)}
        />
      </View>
      <View style={styles.container}>
        <Text>Vegetarian</Text>
        <Switch value={isVeg} onValueChange={() => setIsVeg(!isVeg)} />
      </View>
      <View style={styles.container}>
        <Text>Vegan</Text>
        <Switch value={isVegan} onValueChange={() => setIsVegan(!isVegan)} />
      </View>
      <View style={styles.container}>
        <Text>Lactose Free</Text>
        <Switch
          value={isLactoseFree}
          onValueChange={() => setIsLactoseFree(!isLactoseFree)}
        />
      </View>
    </View>
  );
};

FilterScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Filter Meals"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            console.log("Hello");
            navigationData.navigation.getParam("save")();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 8,
  },
});

export default FilterScreen;
