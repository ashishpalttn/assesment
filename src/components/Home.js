import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/469/c31a3b14-c293-4fa2-b306-d11e90f47feb1x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/239/3468c96a-8dc6-445b-91ca-abc20ca7bbcathumb-2x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/992/ae464454-b7ef-4098-b591-0ca9bddc460cthumb-2x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/971/8e6b690a-c41a-4e11-b1fc-afe6db0a8b20thumb-2x.jpg',
        },
      ],
    };
  }
  

  render() {
    const {arr} = this.state;
    return (
      <SafeAreaView style={styles.container}>
           <View style={styles.header}>
           <View style={{width:60,height:60,backgroundColor:"#c9c5c5"}}>
           <Image
                style={[styles.doctorItem,{borderRadius:0}]}
                source={{
                  uri: 'https://img.icons8.com/nolan/2x/shake-phone.png',
                }}
              />
           </View>
           <View style={{width:50,height:50,backgroundColor:"#c9c5c5"}}>
           <Image
                style={[styles.doctorItem,{borderRadius:0}]}
                source={{
                  uri: 'https://img.icons8.com/carbon-copy/2x/shopping-cart.png',
                }}
              />
           </View>
           </View>


        <ScrollView style={styles.scrollView}>
          { arr.map( item=> {

              return (
              <Image
              source={{uri: item.image}}
              style={{width: 200, height: 100, borderRadius:15}}
              />
             );
           })
          }
       
          <View style={{flex: 0.2, backgroundColor: '#dedcdc', margin: 15}}>
            <FlatList
              horizontal
              data={arr}
              renderItem={({item}) => {
                return (
                  <View style={{width: 200, height: 100, margin: 10}}>
                    <Image
                      source={{uri: item.image}}
                      style={{width: 200, height: 100, borderRadius:15}}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.medicines}>
            <View style={styles.medical}>
              <Image
                style={styles.medicineItem}
                source={{
                  uri: 'https://img.icons8.com/dusk/2x/pills.png',
                }}
              />
              <Text>Medicines</Text>
            </View>
            <View style={styles.medical}>
              <Image
                style={styles.medicineItem}
                source={{
                  uri: 'https://img.icons8.com/pastel-glyph/2x/test-tube.png',
                }}
              />
              <Text>Tests</Text>
            </View>
            <View style={styles.medical}>
              <Image
                style={styles.medicineItem}
                source={{
                  uri: 'https://img.icons8.com/officel/2x/medical-doctor.png',
                }}
              />
              <Text>online</Text>
            </View>
          </View>
          <View style={styles.doctor}>
            <View style={{flex: 1, backgroundColor: '#dedcdc', alignItems:"center"}}>
            <Image
                style={styles.doctorItem}
                source={{
                  uri: 'https://img.icons8.com/dusk/2x/stethoscope.png',
                }}
              />
              <Text>Doctor</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#dedcdc', alignItems:"center"}}>
            <Image
                style={styles.doctorItem}
                source={{
                  uri: 'https://img.icons8.com/material/2x/medical-doctor.png',
                }}
              />
              <Text>wallness</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#dedcdc', alignItems:"center"}}>
            <Image
                style={styles.doctorItem}
                source={{
                  uri: 'https://img.icons8.com/metro/2x/home.png',
                }}
              />
              <Text>Home</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#dedcdc', alignItems:"center"}}>
            <Image
                style={styles.doctorItem}
                source={{
                  uri: 'https://img.icons8.com/carbon-copy/2x/ask-question.png',
                }}
              />
              <Text>Asks</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#dedcdc', alignItems:"center"}}>
            <Image
                style={styles.doctorItem}
                source={{
                  uri: 'https://img.icons8.com/ios-glyphs/2x/shipping-container.png',
                }}
              />
              <Text>Packages</Text>
            </View>
          </View>
          <View style={styles.gap}>
          <View style={{
              justifyContent:"space-between",
              flexDirection:'row',
              }}>
              <View><Text style={{fontSize:15}}>Dignostic Packages by Zoylo Labs</Text></View>
              <View><Text style={{color:"#d47a20"}}>View All</Text></View>
              </View>
          </View>
          <View style={{flex: 0.2, backgroundColor: '#dedcdc', margin: 15}}>
            <FlatList
              horizontal
              data={arr}
              renderItem={({item}) => {
                return (
                  <View style={{width: 200, height: 200, margin: 10}}>
                      <View style={{width:200,height:200,backgroundColor:"#cfcfcf",borderRadius:20}}></View>
                    
                  </View>
                );
              }}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfbbbb',
  },
  scrollView: {
    backgroundColor: '#dedcdc',
    // marginHorizontal: 5,
  },
  medicines: {
    flex: 0.2,
    flexDirection: 'row',
    height: 130,
    backgroundColor: '#dedcdc',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  medicineItem: {
    width: 50,
    height: 50,
    margin: 15,
  },
  doctor: {
    flex: 0.2,
    flexDirection: 'row',
    height: 130,
    backgroundColor: '#dedcdc',
    marginHorizontal: 15,
    padding: 10,
   
  },
  doctorItem: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius:20,
    borderColor:"black",
    borderWidth:0.2
    
  },
  gap: {
    flex: 0.2,
    height: 50,
    backgroundColor: '#dedcdc',
    marginHorizontal: 15,
    padding: 10,
   
  },
  medical:{flex: 1,
    backgroundColor: 'white',
    alignItems:"center",
    borderRadius:10,
    marginHorizontal:10},

    header:{width:"100%",
    height:60,
    backgroundColor:"#c9c5c5",
    flexDirection:"row" ,
    justifyContent:"space-between"}
});

export default Home;
