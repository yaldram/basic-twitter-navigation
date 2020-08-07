import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useTheme, Appbar, Avatar } from "react-native-paper";

import { Tabs } from "./Tabs";
import { StackNavigatorParamlist } from "./types";

const Stack = createStackNavigator<StackNavigatorParamlist>();

function Details() {
	return (
		<View>
			<Text>Hello Details</Text>
		</View>
	);
}

export function StackNavigator() {
	const theme = useTheme();

	return (
		<Stack.Navigator
			initialRouteName="FeedList"
			headerMode="screen"
			screenOptions={{
				header: ({ scene, previous, navigation }) => {
					const { options } = scene.descriptor;
					const title =
						options.headerTitle !== undefined
							? options.headerTitle
							: options.title !== undefined
							? options.title
							: scene.route.name;

					return (
						<Appbar.Header
							theme={{ colors: { primary: theme.colors.surface } }}
						>
							{previous ? (
								<Appbar.BackAction
									onPress={navigation.goBack}
									color={theme.colors.primary}
								/>
							) : (
								<TouchableOpacity
									style={{ marginLeft: 10 }}
									onPress={() => {
										(navigation as any).openDrawer();
									}}
								>
									<Avatar.Image
										size={40}
										source={{
											uri:
												"https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
										}}
									/>
								</TouchableOpacity>
							)}
							<Appbar.Content
								title={
									title === "Feed" ? (
										<MaterialCommunityIcons
											style={{ marginRight: 10 }}
											name="twitter"
											size={40}
											color={theme.colors.primary}
										/>
									) : (
										title
									)
								}
								titleStyle={{
									fontSize: 18,
									fontWeight: "bold",
									color: theme.colors.primary,
								}}
							/>
						</Appbar.Header>
					);
				},
			}}
		>
			<Stack.Screen
				name="FeedList"
				component={Tabs}
				options={({ route }: { route: any }) => {
					const routeName = route.state
						? route.state.routes[route.state.index].name
						: "Feed";
					return { headerTitle: routeName };
				}}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
				options={{ headerTitle: "Tweet" }}
			/>
		</Stack.Navigator>
	);
}
