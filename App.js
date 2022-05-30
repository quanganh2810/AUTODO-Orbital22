import { StatusBar } from 'expo-status-bar';
import { ClientRequest } from 'http';
import { StyleSheet, Text, View } from 'react-native';
import Task from 'react-native/template/Todolist/AUTODO/components/task';

export default function App() {
  return (
    <View style={styles.container}>
<View style = {styles.tasksWrapper}>
  <Text style={styles.sectionTitle}>AUTODO</Text>
  <Text style={styles.sectionTitle_1}>Today's To-dos</Text>
  <View style = {styles.items}>
<Task text={'Task 1'} time={'5'}/>
<Task text={'Task 2'} time={'10'}/>
<Task text={'Task 3'} time={'7'}/>
  </View>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0000ff',
  },
  sectionTitle_1: {
    fontSize: 20,
    paddingLeft: 100,
    paddingBottom: 20,
  },
  items: {},
});
