import React from 'react';

import { connectField } from 'uniforms';
import { AutoField } from 'uniforms-semantic';

import DateField from './DateField';
import SelectField from './SelectField';
import PhoneField from './PhoneField';

const determineComponentFromProps = (props) => {
  const { field } = props;
  if (props.options) {
    return SelectField;
  }
  if (props.field.uniforms?.type === 'phone') {
    return PhoneField;
  }

  switch (field.format) {
    case 'date':
      return DateField;
  }
  return null;
};

const CustomAuto = (props) => {
  const Component = determineComponentFromProps(props) || AutoField;
  return <Component {...props} name="" />;
};

export default connectField(CustomAuto, {
  ensureValue: false,
  initialValue: false
});
