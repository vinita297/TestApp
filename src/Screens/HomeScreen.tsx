import React, {FC, useState} from 'react';
import {
  Text,
  Alert,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomHeader from '../Components/CustomHeader';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const [phoneNo, setPhoneNo] = useState('');
  const OnPress = () => {
    if (phoneNo == '') {
      Alert.alert('Please enter phone number');
    } else if (phoneNo.length < 10) {
      Alert.alert('Please enter 10 digit phone number');
    } else {
      navigation.navigate('Profile', {number: phoneNo});
    }
  };

  return (
    <View style={styles.MainContainer}>
      <CustomHeader title="Log in" />
      <View style={styles.Container}>
        <Image
          style={styles.ImageStyle}
          resizeMode="contain"
          source={{
            uri: 'https://img.freepik.com/free-vector/young-people-holding-smartphones-korean-drawing-style_52683-24867.jpg?t=st=1695583019~exp=1695583619~hmac=423409e8f1290b3415a2e168576254db760f9758ef86236bb07145ccbc481387',
          }}
        />
        <TextInput
          value={phoneNo}
          onChangeText={text => setPhoneNo(text)}
          placeholder="Phone Number"
          style={styles.InputStyle}
          keyboardType="number-pad"
          maxLength={10}
        />
        <TouchableOpacity onPress={() => OnPress()}>
          <View style={styles.OtpBox}>
            <Text style={styles.OtpText}>Get OTP</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.SignUpTextView}>
          <Text style={styles.SignUpText}>
            By signing up you agree with our terms
          </Text>
          <Text style={styles.SignUpText}>and conditions</Text>
        </View>
      </View>
      <View style={styles.BottomView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },

  Container: {
    padding: 20,
  },

  InputStyle: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 20,
    borderColor: 'grey',
  },

  OtpBox: {
    backgroundColor: '#ff0000',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },

  OtpText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  SignUpText: {
    alignSelf: 'center',
    color: '#a9a9a9',
  },

  SignUpTextView: {
    padding: 20,
  },

  ImageStyle: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },

  BottomView: {
    borderBottomWidth: 2,
    width: 70,
    alignSelf: 'center',
  },
});

export default HomeScreen;
