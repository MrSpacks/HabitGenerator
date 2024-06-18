// screens/AddHabitScreen.js
import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { HabitContext } from "../context/HabitContext";
import { Button, TextInput, Text } from "react-native-paper";

const AddHabitScreen = ({ navigation }) => {
  const [habit, setHabit] = useState("");
  const { addHabit } = useContext(HabitContext);

  const handleAddHabit = () => {
    if (habit.trim()) {
      addHabit(habit);
      setHabit("");
      navigation.goBack();
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "start",
      gap: 20,
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Add new habit</Text>
      <TextInput
        placeholder="Habit name"
        value={habit}
        onChangeText={setHabit}
      />
      <Button mode="outlined" width="50%" onPress={handleAddHabit}>
        Add new habit
      </Button>
    </View>
  );
};

export default AddHabitScreen;
