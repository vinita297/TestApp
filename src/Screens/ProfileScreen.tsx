import React, {FC, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface ProfileScreenProps {
  navigation: any;
  route: any;
}

const ProfileScreen: FC<ProfileScreenProps> = ({navigation, route}) => {
  console.log(route);
  const [code, setCode] = useState('');

  const verifyOTP = () => {
    if (code == '') {
      Alert.alert('Please enter otp');
    } else {
      Alert.alert('Your details has been submitted');
    }
  };

  return (
    <View>
      <CustomHeader title="OTP Verify" />
      <View style={styles.Container}>
        <Image
          style={styles.ImageStyle}
          resizeMode="contain"
          source={{
            uri: 'https://img.freepik.com/free-vector/young-people-holding-smartphones-korean-drawing-style_23-2148313980.jpg?w=2000',
          }}
        />
        <View style={styles.OtpSentView}>
          <Text style={styles.OtpSentText}>OTP sent to</Text>
          <Text style={styles.OtpSentNo}>{route.params.number}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <OTPInputView
            style={{width: '90%', height: 50}}
            pinCount={4}
            code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={text => {
              setCode(text);
            }}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            //   codeInputHighlightStyle={styles.underlineStyleHighLighted}
            //   onCodeFilled={code => {
            //     console.log(`Code is ${code}, you are good to go!`);
            //   }}
          />
        </View>
        <TouchableOpacity onPress={() => verifyOTP()}>
          <View style={styles.OtpBox}>
            <Text style={styles.OtpText}>Verify OTP</Text>
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
  OtpSentText: {
    color: '#808080',
    fontWeight: 'bold',
  },
  OtpSentView: {
    alignItems: 'center',
    marginBottom: 30,
  },
  OtpSentNo: {
    color: '#000',
    fontWeight: 'bold',
  },
  ImageStyle: {alignSelf: 'center', height: 200, width: 200},
  BottomView: {
    borderBottomWidth: 2,
    width: 70,
    alignSelf: 'center',
  },

  underlineStyleBase: {
    width: 60,
    height: 45,
    color: '#000', // borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: '#a9a9a9',
  },
});
export default ProfileScreen;
