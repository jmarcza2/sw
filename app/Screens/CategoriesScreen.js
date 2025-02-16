import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import * as Font from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'

import {CAT_GRAD_1, CAT_GRAD_2, CAT_HEAD_TEXT, UNDEFINED_VAR} from "@env"



const { height } = Dimensions.get('window');

import * as actions from '../actions';
class CategoriesScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'productSans-Regular': require('../../assets/fonts/ProductSans-Regular.ttf'),
      'productSans-Bold': require('../../assets/fonts/ProductSans-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient colors={[CAT_GRAD_1, CAT_GRAD_2]} style={styles.backgroundGradient}>
          {this.state.fontLoaded ? <Text style={styles.header}>{CAT_HEAD_TEXT}</Text> : null}
        </LinearGradient>
        <View style={styles.detailView}>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Products', { category: 0 })}
          >
            <Image style={styles.thumbnailImage} source={require('../images/womens.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Products', { category: 1 })}
          >
            <Image style={styles.thumbnailImage} source={require('../images/mens.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Products', { category: 2 })}
          >
            <Image style={styles.thumbnailImage} source={require('../images/kids.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 27,
    backgroundColor: 'red'
  },
  header: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'productSans-Bold',
    color: '#fff'
  },
  detailView: {
    flex: 3,
    marginTop: -30,
    paddingHorizontal: 27,
    justifyContent: 'space-around'
  },
  thumbnailImageContainer: {
    paddingVertical: 15
  },
  thumbnailImage: {
    height: height / 4,
    width: '100%',
    borderRadius: 10
  }
});

function mapStateToProps({ categories }) {
  return { categories: categories };
}
export default connect(mapStateToProps, actions)(CategoriesScreen);