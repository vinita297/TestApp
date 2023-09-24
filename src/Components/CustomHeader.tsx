import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CustomHeaderProps {
  navigation: any;
  props: object;
}

const CustomHeader: FC<CustomHeaderProps> = ({navigation, title}) => {
  console.log(title);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: '#000',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    margin: 20,
    marginTop: 30,
  },
});

export default CustomHeader;
