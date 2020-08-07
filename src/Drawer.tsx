import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	DrawerContentComponentProps,
	DrawerContentOptions,
	DrawerContentScrollView,
	DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import {
	useTheme,
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	TouchableRipple,
	Switch,
} from "react-native-paper";
import Animated from "react-native-reanimated";

import { PreferencesContext } from "./context/preferencesContext";

type Props = DrawerContentComponentProps<DrawerContentOptions>;

export function DrawerContent(props: Props) {
	const paperTheme = useTheme();

	const { theme, toggleTheme } = React.useContext(PreferencesContext);

	const translateX = Animated.interpolate(props.progress, {
		inputRange: [0, 0.5, 0.7, 0.8, 1],
		outputRange: [-100, -85, -70, -45, 0],
	});

	return (
		<DrawerContentScrollView {...props}>
			<Animated.View
				style={[
					styles.drawerContent,
					{
						backgroundColor: paperTheme.colors.surface,
						transform: [{ translateX }],
					},
				]}
			>
				<View style={styles.userInfoSection}>
					<TouchableOpacity style={{ marginLeft: 10 }}>
						<Avatar.Image
							source={{
								uri:
									"https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
							}}
							size={50}
						/>
					</TouchableOpacity>
					<Title style={styles.title}>Dawid Urbaniak</Title>
					<Caption style={styles.caption}>@trensik</Caption>

					<View style={styles.row}>
						<View style={styles.activitySection}>
							<Paragraph style={[styles.paragraph, styles.caption]}>
								202
							</Paragraph>
							<Caption style={styles.caption}>Obserwuje</Caption>
						</View>
						<View style={styles.activitySection}>
							<Paragraph style={[styles.paragraph, styles.caption]}>
								159
							</Paragraph>
							<Caption style={styles.caption}>Obserwujący</Caption>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialCommunityIcons
									name="account-outline"
									color={color}
									size={size}
								/>
							)}
							label="Profile"
							onPress={() => {}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialCommunityIcons name="tune" color={color} size={size} />
							)}
							label="Preferences"
							onPress={() => {}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialCommunityIcons
									name="bookmark-outline"
									color={color}
									size={size}
								/>
							)}
							label="Bookmarks"
							onPress={() => {}}
						/>
					</Drawer.Section>

					<Drawer.Section title="Preferences">
						<TouchableRipple onPress={toggleTheme}>
							<View style={styles.preferences}>
								<Text>Dark Theme</Text>
								<View pointerEvents="none">
									<Switch value={theme === "dark"} />
								</View>
							</View>
						</TouchableRipple>
					</Drawer.Section>
				</View>
			</Animated.View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
		paddingTop: 5,
	},
	title: {
		marginTop: 20,
		fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
	},
	activitySection: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	preferences: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
