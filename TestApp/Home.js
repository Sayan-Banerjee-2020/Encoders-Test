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
import Icon from 'react-native-vector-icons/Ionicons';
import FilterIcon from "react-native-vector-icons/Fontisto"
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#164c78" barStyle="light-content" />

      <View style={styles.Container}>

        <View style={styles.HeaderMainContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.BackIconContainer}>
            <Icon name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View style={styles.HeaderTextContainer}>
            <Text style={styles.HeaderText}>Loan Invesment Report</Text>
          </View>
        </View>


        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"} contentContainerStyle={{ height: Deviceheight }} >

          <View style={styles.FirstContainer}>

            <Text style={styles.ApplicationNo}>Application No.</Text>

            <View style={styles.FirstPriceMainContainer}>
              <Text style={styles.FirstPriceIcon}>₹ </Text>
              <Text style={styles.FirstPrice}>0.00</Text>
            </View>

            <Text style={styles.FirstBrowserId}>Borrower Id</Text>

            <View style={styles.FirstTextMainContainer}>
              <Text style={styles.ContributionAmmount}>Contribution Ammount</Text>
              <View style={styles.Container1}>
                <Text style={styles.Colon1}>: </Text>
                <Text style={styles.Symbol1}>₹ </Text>
                <Text style={styles.Price1}>0.00</Text>
              </View>
            </View>
            <View style={styles.FirstTextMainContainer}>
              <Text style={styles.ContributionAmmount}>Priciple Balance Received</Text>
              <View style={styles.Container1}>
                <Text style={styles.Colon1}>: </Text>
                <Text style={styles.Symbol1}>₹ </Text>
                <Text style={styles.Price1}>0.00</Text>
              </View>
            </View>
            <View style={styles.FirstTextMainContainer}>
              <Text style={styles.ContributionAmmount}>Priciple Balance Left</Text>
              <View style={styles.Container1}>
                <Text style={styles.Colon1}>: </Text>
                <Text style={styles.Symbol1}>₹ </Text>
                <Text style={styles.Price1}>0.00</Text>
              </View>
            </View>

            <View style={styles.ButtomContainer}>
              <View style={styles.Buttom1stView}>
                <Text style={styles.Three}>3</Text>
                <Text style={styles.Tenure}>Tenure</Text>
              </View>
              <View style={styles.LineContainer}>
                <Image
                  style={{ height: "100%", width: "40%" }}
                  source={require('./Assets/line.png')}
                />
              </View>
              <View style={styles.ButtomLastView}>
                <Text style={styles.Range}>15% - 18%</Text>
                <Text style={styles.Roi}>ROI</Text>
              </View>
            </View>

            <View style={styles.ButtomAbsoluteContainer}>

              <View style={styles.ButtomAbsoluteContainer1}>
                <View style={styles.ButtomFirstContainer}>
                  <Text style={styles.PaymentDate}>Payment Date</Text>
                  <Text style={styles.Date}>24-07-2020</Text>
                </View>
                <View style={styles.ButtomLastContainer}>
                  <Text style={styles.PaymentStatus}>Payment Status</Text>
                  <Text style={styles.Status}>Pending</Text>
                </View>
              </View>
            </View>

          </View>

          <View style={styles.SecondContainer}>


            <Text style={styles.ApplicationNo}>Application No.</Text>

            <View style={styles.FirstPriceMainContainer}>
              <Text style={styles.FirstPriceIcon}>₹ </Text>
              <Text style={styles.FirstPrice}>0.00</Text>
            </View>

            <Text style={styles.FirstBrowserId}>Borrower Id</Text>

            <View style={styles.FirstTextMainContainer}>
              <Text style={styles.ContributionAmmount}>Contribution Ammount</Text>
              <View style={styles.Container1}>
                <Text style={styles.Colon1}>: </Text>
                <Text style={styles.Symbol1}>₹ </Text>
                <Text style={styles.Price1}>0.00</Text>
              </View>
            </View>
            <View style={styles.FirstTextMainContainer}>
              <Text style={styles.ContributionAmmount}>Priciple Balance Received</Text>
              <View style={styles.Container1}>
                <Text style={styles.Colon1}>: </Text>
                <Text style={styles.Symbol1}>₹ </Text>
                <Text style={styles.Price1}>0.00</Text>
              </View>
            </View>
            <View style={styles.FirstTextMainContainer}>
              <Text style={styles.ContributionAmmount}>Priciple Balance Left</Text>
              <View style={styles.Container1}>
                <Text style={styles.Colon1}>: </Text>
                <Text style={styles.Symbol1}>₹ </Text>
                <Text style={styles.Price1}>0.00</Text>
              </View>
            </View>

            <View style={styles.ButtomContainer}>
              <View style={styles.Buttom1stView}>
                <Text style={styles.Three}>3</Text>
                <Text style={styles.Tenure}>Tenure</Text>
              </View>
              <View style={styles.LineContainer}>
                <Image
                  style={{ height: "100%", width: "40%" }}
                  source={require('./Assets/line.png')}
                />
              </View>
              <View style={styles.ButtomLastView}>
                <Text style={styles.Range}>15% - 18%</Text>
                <Text style={styles.Roi}>ROI</Text>
              </View>
            </View>

            <View style={styles.ButtomAbsoluteContainer}>

              <View style={styles.ButtomAbsoluteContainer1}>
                <View style={styles.ButtomFirstContainer}>
                  <Text style={styles.PaymentDate}>Payment Date</Text>
                  <Text style={styles.Date}>24-07-2020</Text>
                </View>
                <View style={styles.ButtomLastContainer}>
                  <Text style={styles.PaymentStatus}>Payment Status</Text>
                  <Text style={styles.Status}>Pending</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.FilterIconContainer}>
              <FilterIcon name="filter" size={25} color="#164c78" />
            </TouchableOpacity>


          </View>
        </ScrollView>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#dfdfdf'
  },
  HeaderMainContainer: {
    backgroundColor: '#164c78',
    height: Deviceheight / 8,
    width: Devicewidth,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop: 10
  },
  BackIconContainer: {
    alignItems: "center",
    justifyContent: 'center',
    height: Deviceheight / 20,
    width: Devicewidth / 10
  },
  HeaderTextContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: Deviceheight / 15,
    width: Devicewidth / 1.4,
    paddingTop: 15
  },
  HeaderText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  },
  FirstContainer: {
    backgroundColor: '#fff',
    height: Deviceheight / 2.8,
    width: Devicewidth / 1.13,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: "center",
    marginTop: 20,
    padding: 20,
    elevation: 1
  },
  ApplicationNo: {
    color: "#a0a0a0",
    textAlign: 'left',
    fontSize: 14
  },
  FirstPriceMainContainer: {
    alignItems: 'flex-start',
    flexDirection: "row",
    height: Deviceheight / 24,
    paddingTop: 5,
  },
  FirstPriceIcon: {
    color: "#164c78",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold'
  },
  FirstPrice: {
    color: "#164c78",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  FirstBrowserId: {
    color: "#da464c",
    textAlign: 'left',
    fontSize: 17,
    marginBottom: 15
  },
  FirstTextMainContainer: {
    alignItems: 'flex-start',
    flexDirection: "row",
    height: Deviceheight / 28,
    paddingTop: 5,
  },
  ContributionAmmount: {
    color: "#164c78",
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    width: Devicewidth / 2.6
  },
  Container1: {
    alignItems: 'flex-start',
    flexDirection: "row",
    width: Devicewidth / 5,
    marginLeft: 20
  },
  Colon1: {
    color: "#164c78",
    textAlign: 'left',
    fontSize: 14,
    fontWeight: "bold",
  },
  Symbol1: {
    color: "#164c78",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
  },
  Price1: {
    color: "#164c78",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
  },
  ButtomContainer: {
    height: Deviceheight / 12,
    width: Devicewidth / 1.8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    marginLeft: 20
  },
  Buttom1stView: {
    alignItems: 'center',
    justifyContent: "center",
    height: Deviceheight / 14,
    width: Devicewidth / 6,
    alignSelf: "center"
  },
  Three: {
    color: "#164c78",
    textAlign: 'left',
    fontSize: 16,
    fontWeight: "bold",
  },
  Tenure: {
    color: "#afafaf",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  LineContainer: {
    alignItems: 'center',
    justifyContent: "center",
    height: Deviceheight / 14,
    width: Devicewidth / 34,
    alignSelf: "center",
    justifyContent: "center"
  },
  ButtomLastView: {
    alignItems: 'center',
    justifyContent: "center",
    height: Deviceheight / 14,
    width: Devicewidth / 4,
    alignSelf: "center"
  },
  Range: {
    color: "#164c78",
    textAlign: 'left',
    fontSize: 16,
    fontWeight: "bold",
  },
  Roi: {
    color: "#afafaf",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  ButtomAbsoluteContainer: {
    backgroundColor: "#f2f2f2",
    height: Deviceheight / 10,
    width: Devicewidth / 1.13,
    alignSelf: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: "absolute",
    bottom: -70
  },
  ButtomAbsoluteContainer1: {
    height: Deviceheight / 12,
    width: Devicewidth / 1.13,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  ButtomFirstContainer: {
    alignItems: 'center',
    justifyContent: "center",
    height: Deviceheight / 14,
    width: Devicewidth / 4,
    alignSelf: "center"
  },
  PaymentDate: {
    color: "#afafaf",
    textAlign: 'left',
    fontSize: 14,
  },
  Date: {
    color: "#164c78",
    textAlign: "left",
    fontSize: 18,
  },
  ButtomLastContainer: {
    alignItems: 'center',
    justifyContent: "center",
    height: Deviceheight / 14,
    width: Devicewidth / 4,
    alignSelf: "center"
  },
  PaymentStatus: {
    color: "#afafaf",
    textAlign: 'left',
    fontSize: 14,
  },
  Status: {
    color: "#f6c06b",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  SecondContainer: {
    backgroundColor: '#fff',
    height: Deviceheight / 2.8,
    width: Devicewidth / 1.13,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: "center",
    marginTop: 90,
    padding: 20,
    elevation: 1
  },
  FilterIconContainer: {
    backgroundColor: "#fff",
    height: Deviceheight / 12,
    width: Devicewidth / 6,
    alignSelf: 'center',
    borderRadius: 360,
    position: "absolute",
    bottom: -115,
    right: 11,
    alignItems: 'center',
    justifyContent: "center"
  },

});

