import { FlatList } from "react-native";
import React from "react";

export default function VirtualizedView(props) {
	return (
		<FlatList
			data={[]}
			ListEmptyComponent={null}
			keyExtractor={() => "dummy"}
			renderItem={null}
			ListHeaderComponent={() => (
				<React.Fragment>{props.children}</React.Fragment>
			)}
		/>
	);
}
