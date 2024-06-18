import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const loadHabits = async () => {
      const storedHabits = await AsyncStorage.getItem('habits');
      if (storedHabits) setHabits(JSON.parse(storedHabits));
    };
    loadHabits();
  }, []);

  const addHabit = async (habit) => {
    const newHabits = [...habits, { id: Date.now().toString(), name: habit }];
    setHabits(newHabits);
    await AsyncStorage.setItem('habits', JSON.stringify(newHabits));
  };

  const deleteHabit = async (id) => {
    const newHabits = habits.filter(habit => habit.id !== id);
    setHabits(newHabits);
    await AsyncStorage.setItem('habits', JSON.stringify(newHabits));
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
