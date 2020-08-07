import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useIsFocused, RouteProp } from "@react-navigation/native";
import color from "color";
import React from "react";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useSafeArea } from "react-native-safe-area-context";

import { Feeds } from "./Feeds";
import { Messages } from "./Messages";
import { Notifications } from "./Notifications";
import overlay from "./overlay";
import { StackNavigatorParamlist } from "./types";

const Tab = createMaterialBottomTabNavigator();

type Props = {
	route: RouteProp<StackNavigatorParamlist, "FeedList">;
};

export function Tabs(props: any) {
	const routeName = props.route.state
		? props.route.state.routes[props.route.state.index].name
		: "Feed";

	const theme = useTheme();
	const safeArea = useSafeArea();
	const isFocused = useIsFocused();

	let icon = "feather";

	switch (routeName) {
		case "Messages":
			icon = "email-plus-outline";
			break;
		default:
			icon = "feather";
			break;
	}

	const tabBarColor = theme.dark
		? (overlay(6, theme.colors.surface) as string)
		: theme.colors.surface;

	return (
		<>
			<Tab.Navigator
				initialRouteName="Feed"
				backBehavior="initialRoute"
				shifting
				activeColor={theme.colors.primary}
				inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
				sceneAnimationEnabled={false}
			>
				<Tab.Screen
					name="Feed"
					component={Feeds}
					options={{
						tabBarIcon: "home-account",
						tabBarColor,
					}}
				/>
				<Tab.Screen
					name="Notifications"
					component={Notifications}
					options={{
						tabBarIcon: "bell-outline",
						tabBarColor,
					}}
				/>
				<Tab.Screen
					name="Messages"
					component={Messages}
					options={{
						tabBarIcon: "message-text-outline",
						tabBarColor,
					}}
				/>
			</Tab.Navigator>
			<Portal>
				<FAB
					visible={isFocused}
					icon={icon}
					style={{
						position: "absolute",
						bottom: safeArea.bottom + 65,
						right: 16,
					}}
					color="white"
					theme={{
						colors: {
							accent: theme.colors.primary,
						},
					}}
					onPress={() => {}}
				/>
			</Portal>
		</>
	);
}
