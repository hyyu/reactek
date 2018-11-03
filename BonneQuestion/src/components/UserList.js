import React from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, Text, Image,
} from 'react-native';
import styles from '../Styles';

const UserRow = ({
  name, firstName, email, picture,
}) => (
  <View style={styles.row}>
    <Image style={styles.picture} source={{ uri: picture }} />
    <View>
      <Text style={styles.primaryText}>{`${name} ${firstName}`}</Text>
      <Text style={styles.secondaryText}>{email}</Text>
    </View>
  </View>
);

UserRow.propTypes = {
  name: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

const renderItem = ({ item }) => (
  <UserRow
    name={item.name.last}
    firstName={item.name.first}
    picture={item.picture.thumbnail}
    email={item.email}
  />
);

renderItem.propTypes = {
  item: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const UserList = ({ data }) => (
  <FlatList
    alignItems="center"
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.email}
  />
);

UserList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        title: PropTypes.string.isRequired,
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      email: PropTypes.string.isRequired,
      picture: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }),
      nat: PropTypes.string,
    }),
  ).isRequired,
};

export default UserList;
