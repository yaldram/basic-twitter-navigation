import color from "color";
import React from "react";
import { Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Feeds } from "./Feeds";
import { AllNotifications } from "./components/AllNotifications";
import overlay from "./overlay";

const initialLayout = { width: Dimensions.get("window").width };

const Mentions = () => <Feeds />;

const NotificationsList = () => <AllNotifications />;

export function Notifications() {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "all", title: "All" },
		{ key: "mentions", title: "Mentions" },
	]);

	const theme = useTheme();

	const renderScene = SceneMap({
		all: NotificationsList,
		mentions: Mentions,
	});

	const tabBarColor = theme.dark
		? (overlay(4, theme.colors.surface) as string)
		: theme.colors.surface;

	const rippleColor = theme.dark
		? color(tabBarColor).lighten(0.5)
		: color(tabBarColor).darken(0.2);

	const renderTabBar = (props: any) => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: theme.colors.primary }}
			style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
			labelStyle={{ color: theme.colors.primary }}
			pressColor={rippleColor}
		/>
	);

	return (
		<>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={initialLayout}
				renderTabBar={renderTabBar}
			/>
		</>
	);
}
