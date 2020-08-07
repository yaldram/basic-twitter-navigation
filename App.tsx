import React from "react";
import { AppearanceProvider } from "react-native-appearance";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from "./src/Main";

export default function App() {
	return (
		<SafeAreaProvider>
			<AppearanceProvider>
				<Main />
			</AppearanceProvider>
		</SafeAreaProvider>
	);
}
