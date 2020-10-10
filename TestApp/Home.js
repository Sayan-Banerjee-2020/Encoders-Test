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
     
        <View style={{ flex: 1, backgroundColor: '#dfdfdf' }}>

          <View style={{ backgroundColor: '#164c78', height: Deviceheight / 8, width: Devicewidth, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, alignItems: 'center', alignSelf: "center", flexDirection: "row", justifyContent: 'space-around', paddingTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ alignItems: "center", justifyContent: 'center', height: Deviceheight / 20, width: Devicewidth / 10 }}>
              <Icon name="arrow-back" size={30} color="#fff" />
            </TouchableOpacity>

            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', height: Deviceheight / 15, width: Devicewidth / 1.4, paddingTop: 15 }}>
              <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>Loan Invesment Report</Text>
            </View>
          </View>


          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"} contentContainerStyle={{ height: Deviceheight }} >

          <View style={{ backgroundColor: '#fff', height: Deviceheight / 2.8, width: Devicewidth / 1.13, alignSelf: 'center', borderTopRightRadius: 20, borderTopLeftRadius: 20, alignSelf: "center", marginTop: 20, padding: 20, elevation: 1 }}>

            <Text style={{ color: "#a0a0a0", textAlign: 'left', fontSize: 14 }}>Application No.</Text>

            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 24, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: "center", fontSize: 18, fontWeight: 'bold' }}>₹ </Text>
              <Text style={{ color: "#164c78", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>0.00</Text>
            </View>

            <Text style={{ color: "#da464c", textAlign: 'left', fontSize: 17, marginBottom: 15 }}>Borrower Id</Text>

            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 28, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 13, fontWeight: 'bold', width: Devicewidth / 2.6 }}>Contribution Ammount</Text>
              <View style={{ alignItems: 'flex-start', flexDirection: "row", width: Devicewidth / 5, marginLeft: 20 }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 14, fontWeight: "bold", }}>: </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>₹ </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>0.00</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 28, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 13, fontWeight: 'bold', width: Devicewidth / 2.6 }}>Priciple Balance Received</Text>
              <View style={{ alignItems: 'flex-start', flexDirection: "row", width: Devicewidth / 5, marginLeft: 20 }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 14, fontWeight: "bold", }}>: </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>₹ </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>0.00</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 28, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 13, fontWeight: 'bold', width: Devicewidth / 2.6 }}>Priciple Balance Left</Text>
              <View style={{ alignItems: 'flex-start', flexDirection: "row", width: Devicewidth / 5, marginLeft: 20 }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 14, fontWeight: "bold", }}>: </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>₹ </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>0.00</Text>
              </View>
            </View>

            <View style={{ height: Deviceheight / 12, width: Devicewidth / 1.8, alignSelf: 'center', flexDirection: 'row', justifyContent: "space-between", marginLeft: 20 }}>
              <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 6, alignSelf: "center" }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 16, fontWeight: "bold", }}>3</Text>
                <Text style={{ color: "#afafaf", textAlign: "left", fontSize: 16, fontWeight: "bold", }}>Tenure</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 34, alignSelf: "center", justifyContent: "center" }}>
                <Image
                  style={{ height: "100%", width: "40%" }}
                  source={require('./Assets/line.png')}
                />
              </View>
              <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 4, alignSelf: "center" }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 16, fontWeight: "bold", }}>15% - 18%</Text>
                <Text style={{ color: "#afafaf", textAlign: "left", fontSize: 16, fontWeight: "bold", }}>ROI</Text>
              </View>
            </View>

            <View style={{ backgroundColor: "#f2f2f2", height: Deviceheight / 10, width: Devicewidth / 1.13, alignSelf: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20,position:"absolute",bottom:-70}}>

              <View style={{ height: Deviceheight / 12, width: Devicewidth / 1.13, alignSelf: 'center', flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 20, }}>
                <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 4, alignSelf: "center" }}>
                  <Text style={{ color: "#afafaf", textAlign: 'left', fontSize: 14, }}>Payment Date</Text>
                  <Text style={{ color: "#164c78", textAlign: "left", fontSize: 18, }}>24-07-2020</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 4, alignSelf: "center" }}>
                  <Text style={{ color: "#afafaf", textAlign: 'left', fontSize: 14, }}>Payment Status</Text>
                  <Text style={{ color: "#f6c06b", textAlign: "left", fontSize: 16, fontWeight: "bold", }}>Pending</Text>
                </View>
              </View>
            </View>

          </View>

          <View style={{ backgroundColor: '#fff', height: Deviceheight / 2.8, width: Devicewidth / 1.13, alignSelf: 'center', borderTopRightRadius: 20, borderTopLeftRadius: 20, alignSelf: "center", marginTop: 90, padding: 20, elevation: 1 }}>

            <Text style={{ color: "#a0a0a0", textAlign: 'left', fontSize: 14 }}>Application No.</Text>

            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 24, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: "center", fontSize: 18, fontWeight: 'bold' }}>₹ </Text>
              <Text style={{ color: "#164c78", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>0.00</Text>
            </View>

            <Text style={{ color: "#da464c", textAlign: 'left', fontSize: 17, marginBottom: 15 }}>Borrower Id</Text>

            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 28, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 13, fontWeight: 'bold', width: Devicewidth / 2.6 }}>Contribution Ammount</Text>
              <View style={{ alignItems: 'flex-start', flexDirection: "row", width: Devicewidth / 5, marginLeft: 20 }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 14, fontWeight: "bold", }}>: </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>₹ </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>0.00</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 28, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 13, fontWeight: 'bold', width: Devicewidth / 2.6 }}>Priciple Balance Received</Text>
              <View style={{ alignItems: 'flex-start', flexDirection: "row", width: Devicewidth / 5, marginLeft: 20 }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 14, fontWeight: "bold", }}>: </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>₹ </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>0.00</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', flexDirection: "row", height: Deviceheight / 28, paddingTop: 5, }}>
              <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 13, fontWeight: 'bold', width: Devicewidth / 2.6 }}>Priciple Balance Left</Text>
              <View style={{ alignItems: 'flex-start', flexDirection: "row", width: Devicewidth / 5, marginLeft: 20 }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 14, fontWeight: "bold", }}>: </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>₹ </Text>
                <Text style={{ color: "#164c78", textAlign: "left", fontSize: 14, fontWeight: "bold", }}>0.00</Text>
              </View>
            </View>

            <View style={{ height: Deviceheight / 12, width: Devicewidth / 1.8, alignSelf: 'center', flexDirection: 'row', justifyContent: "space-between", marginLeft: 20 }}>
              <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 6, alignSelf: "center" }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 16, fontWeight: "bold", }}>3</Text>
                <Text style={{ color: "#afafaf", textAlign: "left", fontSize: 16, fontWeight: "bold", }}>Tenure</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 34, alignSelf: "center", justifyContent: "center" }}>
                <Image
                  style={{ height: "100%", width: "40%" }}
                  source={require('./Assets/line.png')}
                />
              </View>
              <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 4, alignSelf: "center" }}>
                <Text style={{ color: "#164c78", textAlign: 'left', fontSize: 16, fontWeight: "bold", }}>15% - 18%</Text>
                <Text style={{ color: "#afafaf", textAlign: "left", fontSize: 16, fontWeight: "bold", }}>ROI</Text>
              </View>
            </View>

            <View style={{ backgroundColor: "#f2f2f2", height: Deviceheight / 10, width: Devicewidth / 1.13, alignSelf: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20,position:"absolute",bottom:-70}}>

              <View style={{ height: Deviceheight / 12, width: Devicewidth / 1.13, alignSelf: 'center', flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 20, }}>
                <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 4, alignSelf: "center" }}>
                  <Text style={{ color: "#afafaf", textAlign: 'left', fontSize: 14, }}>Payment Date</Text>
                  <Text style={{ color: "#164c78", textAlign: "left", fontSize: 18, }}>24-07-2020</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: "center", height: Deviceheight / 14, width: Devicewidth / 4, alignSelf: "center" }}>
                  <Text style={{ color: "#afafaf", textAlign: 'right', fontSize: 14, }}>Payment Status</Text>
                  <Text style={{ color: "#f6c06b", textAlign: 'right', fontSize: 16, fontWeight: "bold", }}>Pending</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={{ backgroundColor: "#fff", height: Deviceheight / 12, width: Devicewidth / 6, alignSelf: 'center', borderRadius:360,position:"absolute",bottom:-115,right:11,alignItems:'center',justifyContent:"center"}}>
            <FilterIcon name="filter" size={25} color="#164c78" />
            </TouchableOpacity>


          </View>
      </ScrollView>

        </View>
    </>
  );
};

const styles = StyleSheet.create({

});

