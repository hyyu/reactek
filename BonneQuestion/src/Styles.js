import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },

  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  picture: {
    width: 50, height: 50, borderRadius: 25, marginRight: 18,
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
});

export default styles;
