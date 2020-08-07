import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

import { Tweet } from "./components/Tweet";
import { tweets } from "./data";
import { StackNavigatorParamlist } from "./types";

type TweetProps = React.ComponentProps<typeof Tweet>;

function renderItem({ item }: { item: TweetProps }) {
	return <Tweet {...item} />;
}

function keyExtractor(item: TweetProps) {
	return item.id.toString();
}

type Props = {
	navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export function Feeds(props: Props) {
	const theme = useTheme();

	const data = tweets.map((twittProps) => ({
		...twittProps,
		onPress: () =>
			props.navigation &&
			props.navigation.push("Details", {
				...twittProps,
			}),
	}));

	return (
		<FlatList
			contentContainerStyle={{ backgroundColor: theme.colors.background }}
			style={{ backgroundColor: theme.colors.background }}
			data={data}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			ItemSeparatorComponent={() => (
				<View style={{ height: StyleSheet.hairlineWidth }} />
			)}
		/>
	);
}
