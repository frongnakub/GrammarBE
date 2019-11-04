import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

export default class Questions extends Component {
    static navigationOptions = ({navigation}) => {
        return {
          headerTitle: () => (
          <Text>Tenses</Text>),
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButton} onPress={() => {navigation.navigate('Menu')}}>
            {/* onPress={navigation.getParam('increaseCount')}> */}
              <Icon
                name="left"
                color="black"
                size={20}
              />
           </TouchableOpacity>
          ),
        };
      };


  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.lessonContainer1} onPress={() => navigate('PresentSimple')}>
          <Text style={styles.lessonText1}>Present Simple</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= 'rgba(244,67,54,0.5)'
          />          
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessonContainer2} onPress={() => navigate('PresentContinuous')}>
          <Text style={styles.lessonText2}>Present Continuous</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= 'rgba(233,30,99,0.7)'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer3} onPress={() => navigate('PresentPerfect')}>
          <Text style={styles.lessonText3}>Present Perfect</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#9C27B0'
          />          
        </TouchableOpacity> 
        <TouchableOpacity style={styles.lessonContainer4} onPress={() => navigate('PresentPerfectContinuous')}>
          <Text style={styles.lessonText4}>Present Perfect Continuous</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#9C27B0'
          />          
        </TouchableOpacity>     
        <TouchableOpacity style={styles.lessonContainer5} onPress={() => navigate('PastSimple')}>
          <Text style={styles.lessonText5}>Past Simple</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#9C27B0'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer6} onPress={() => navigate('PastContinuous')}>
          <Text style={styles.lessonText6}>Past Continuous</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#3F51B5'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer7} onPress={() => navigate('PastPerfect')}>
          <Text style={styles.lessonText7}>Past Perfect</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#03A9F4'
          />          
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessonContainer8} onPress={() => navigate('PastPerfectContinuous')}>
          <Text style={styles.lessonText8}>Past Perfect Continuous</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#03A9F4'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer9} onPress={() => navigate('FutureSimple')}>
          <Text style={styles.lessonText9}>Future Simple</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#00BCD4'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer10} onPress={() => navigate('FutureContinuous')}>
          <Text style={styles.lessonText10}>Future Continuous</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#4CAF50'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer11} onPress={() => navigate('FuturePerfect')}>
          <Text style={styles.lessonText11}>Future Perfect</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#CDDC39'
          />          
        </TouchableOpacity>   
        <TouchableOpacity style={styles.lessonContainer12} onPress={() => navigate('FuturePerfectContinuous')}>
          <Text style={styles.lessonText12}>Future Perfect Continuous</Text>
          <Text></Text>
          <Icon
            name="right"
            size={20}
            color= '#FFC107'
          />          
        </TouchableOpacity>     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    flexDirection: 'column',
    //backgroundColor: '#EAD8AB',
  },
  headerTitle:{
    color: '#fff',
    fontSize: 15,
    padding: 20,
    textAlign: 'center'
  },
  headerButton:{
    padding: 10,
  },
  lessonContainer1:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(244,67,54,0.5)',
    borderWidth: 5,
  },
  lessonText1:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: 'rgba(244,67,54,0.5)',
  },
  lessonContainer2:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(233,30,99,0.7)',
    borderWidth: 5
  },
  lessonText2:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: 'rgba(233,30,99,0.7)',
  },
  lessonContainer3:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#9C27B0',
    borderWidth: 5
  },
  lessonText3:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#9C27B0',
  },
  lessonContainer4:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#3F51B5',
    borderWidth: 5
  },
  lessonText4:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#3F51B5',
  },
  lessonContainer5:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#2196F3',
    borderWidth: 5
  },
  lessonText5:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#2196F3',
  },
  lessonContainer6:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#03A9F4',
    borderWidth: 5
  },
  lessonText6:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#03A9F4',
  },
  lessonContainer7:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#00BCD4',
    borderWidth: 5
  },
  lessonText7:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#00BCD4',
  },
  lessonContainer8:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#009688',
    borderWidth: 5
  },
  lessonText8:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#009688',
  },
  lessonContainer9:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#4CAF50',
    borderWidth: 5
  },
  lessonText9:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#4CAF50',
  },
  lessonContainer10:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#8BC34A',
    borderWidth: 5
  },
  lessonText10:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#8BC34A',
  },
  lessonContainer11:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    alignItems: 'center',
    borderColor: '#CDDC39',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonText11:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#CDDC39',
  },
  lessonContainer12:{
    alignSelf: 'stretch',
    padding: 20,
    height: 70,
    alignItems: 'center',
    borderColor: '#FFC107',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonText12:{
    fontSize: 18,
    fontFamily: 'comicsansms',
    fontWeight: '500',
    color: '#FFC107',
  },
});