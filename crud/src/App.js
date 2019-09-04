import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {Database} from '@nozbe/watermelondb';

import Usuario from './models/Usuario';

const database = new Database({
  modelClasses: [Usuario],
});

class App extends Component {
  addUser = async () => {
    await this.props.post.addUser('comment');
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.view}>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#999"
            /*             value={this.props.email}
            onChangeText={texto => this.props.modificaEmail(texto)} */
            placeholder="Digite seu Nome..."
          />
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#999"
            /*             value={this.props.email}
            onChangeText={texto => this.props.modificaEmail(texto)} */
            placeholder="Digite seu Apelido..."
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    paddingHorizontal: 10,
  },
  button: {
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
    backgroundColor: '#4CAF50',
    borderRadius: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  view: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;
