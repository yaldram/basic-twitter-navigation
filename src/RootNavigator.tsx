import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import React from "react";
import { useTheme } from "react-native-paper";

import { DrawerContent } from "./Drawer";
import { StackNavigator } from "./Stack";

const Drawer = createDrawerNavigator();

export function RootNavigator() {
	const theme = useTheme();
	const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

	return (
		<NavigationContainer theme={navigationTheme}>
			<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
				<Drawer.Screen name="Home" component={StackNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
