import React from 'react';
import {
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default function Login({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#164c78" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"} contentContainerStyle={{ height: Deviceheight }} >
        <View style={styles.Container}>
          <Text style={styles.FirstText}>Welcome To OMLP2P</Text>
          <Text style={styles.PageHeading}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Email'}
              placeholderTextColor={'#9d9d9d'}
              style={styles.Input}
            // onChangeText={(val) => this.setState({
            // 	email: val
            // })}
            // value={this.state.email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Password'}
              placeholderTextColor={'#9d9d9d'}
              style={styles.Input}
            // onChangeText={(val) => this.setState({
            // 	Password: val
            // })}
            // value={this.state.Password}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.ForgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
          <View style={styles.ScannerContainer}>
            <Image source={require("./Assets/scanner.png")} style={styles.Scanner} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.LoginBtnContainer}>
            <Text style={styles.Login}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.NotMember}>Not Yet Member?</Text>
          <View style={styles.ButtomBtnmainContainer}>
            <TouchableOpacity style={styles.ApplyContainer}>
              <Text style={styles.Apply}>Apply Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InvestNowContainer}>
              <Text style={styles.InvestNow}>Invest Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#164c78'
  },
  FirstText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 100
  },
  PageHeading: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  inputContainer: {
    marginTop: 18,
    alignSelf: "center"
  },
  Input: {
    width: Devicewidth / 1.1,
    height: 60,
    borderRadius: 5,
    borderTopColor: "#acacac",
    borderLeftColor: "#acacac",
    borderRightColor: "#acacac",
    borderBottomColor: "#acacac",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: 14,
    paddingLeft: 15,
  },
  ForgotPassword: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 260
  },
  ScannerContainer: {
    height: Deviceheight / 8,
    width: Devicewidth / 4,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#164c78'
  },
  Scanner: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain'
  },
  LoginBtnContainer: {
    backgroundColor: '#d3312c',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Deviceheight / 15,
    width: Devicewidth / 1.1,
    borderRadius: 50,
    marginTop: 30
  },
  Login: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center'
  },
  NotMember: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 90
  },
  ButtomBtnmainContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: Devicewidth / 1.1,
    alignSelf: 'center'
  },
  ApplyContainer: {
    backgroundColor: '#d3312c',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Deviceheight / 15,
    width: Devicewidth / 2.5,
    borderRadius: 50,
    marginTop: 30
  },
  Apply: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center'
  },
  InvestNowContainer: {
    backgroundColor: '#d3312c',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Deviceheight / 15,
    width: Devicewidth / 2.5,
    borderRadius: 50,
    marginTop: 30
  },
  InvestNow: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center'
  },

});

