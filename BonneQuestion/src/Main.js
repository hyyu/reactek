import React from 'react';
import { View } from 'react-native';
import * as Expo from 'expo';
import UserList from './components/UserList';
import styles from './Styles';

const sampleData = [
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mrs', first: 'asuncion', last: 'gomez' },
    email: 'asuncion.gomez@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
    nat: 'ES',
  },
  {
    name: { title: 'miss', first: 'gilcenira', last: 'ribeiro' },
    email: 'gilcenira.ribeiro@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
  },
];

class App extends React.Component {
  componentDidMount() {
    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserList data={sampleData} />
      </View>
    );
  }
}

export default App;
