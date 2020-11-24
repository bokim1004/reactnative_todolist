import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import React from "react";
import ThingsTodo from "./src/screens/ThingsTodo";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import store from "./src/redux/store";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="ThingsTodo" component={ThingsTodo} />
          {/* <Tabs.Screen name="AddTodo" component={AddTodo} /> */}
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
