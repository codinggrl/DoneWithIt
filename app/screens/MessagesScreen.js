import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  // this returns an array
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //   Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        // rendering a component
        ItemSeparatorComponent={ListItemSeparator}
        // our variable
        refreshing={refreshing}
        // function for updating the list of elements(backend)
        onRefresh={() => {
          // new array
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/Ivana.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
