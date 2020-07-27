import React, { Component, createRef } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import { validate as validateEmail } from 'email-validator';

const Form = t.form.Form;

const Email = t.refinement(t.String, validateEmail)

const Login = t.struct({
  emailAddress: Email
});

const options = {
  fields: {
    emailAddress: {
      error: 'Please enter a valid email address'
    }
  },
  order: ['emailAddress']
}

export default class MyForm extends Component {

  constructor(props) {
    super(props);
    this.state = { emailAddress: "example@gmail.com" };
    this._onPressButton = this._onPressButton.bind(this);
    this.formRef = createRef();
  }

  _onPressButton() {
    const value = this.formRef.current.getValue();
    if (value) { // if validation fails, value will be null

    }
  }

  render() {
    return (
      <View>
        <Form ref={this.formRef} type={Login} value={this.state} options={options} />
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
