import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

import { DrawerContent } from "./Drawer";

const Drawer = createDrawerNavigator();

function Home() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
		</View>
	);
}

export function RootNavigator() {
	const theme = useTheme();
	const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

	return (
		<NavigationContainer theme={navigationTheme}>
			<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
				<Drawer.Screen name="Home" component={Home} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
