import React from "react";
import { FlatList, StyleSheet, onPress } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/Ivana.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/Ivana.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        // message goes to id property
        keyExtractor={(message) => message.id.toString()}
        // (argument) is destructured ({})
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        // rendering a component
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
