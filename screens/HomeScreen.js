import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { HabitContext } from '../context/HabitContext';
import { Button } from 'react-native-paper';


const HomeScreen = ({ navigation }) => {
  const { habits, deleteHabit } = useContext(HabitContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои привычки</Text>
      <FlatList
        data={habits}
        renderItem={({ item }) => (
          <View style={styles.habitContainer}>
            <Text style={styles.habitText}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteHabit(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}> X </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button style={styles.bottom} mode="outlined" onPress={() => navigation.navigate('AddHabit')}>
    Add habit
  </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  bottom: {
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    color: '#343a40',
    marginBottom: 20,
  },
  habitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  habitText: {
    fontSize: 18,
    color: '#343a40',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default HomeScreen;
