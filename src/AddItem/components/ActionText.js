import React, {Component} from 'react';
import Text from 'wix-style-react/Text';
import PropTypes from 'prop-types';

const SPACING = {
  large: {paddingTop: '12px', width: '100%'},
  medium: {paddingTop: '12px', width: '100%'},
  small: {paddingTop: '6px', width: '100%'},
  tiny: {flexBasis: 'auto', maxWidth: '100%'}
};

const ALIGN_TEXT = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class ActionText extends Component {
  static propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string
  };
  render() {
    const {children, disabled, size} = this.props;
    return (
      <div
        data-hook="text-with-ellipses"
        style={{...SPACING[size], ...ALIGN_TEXT}}
        >
        <Text
          weight="thin"
          size="small"
          style={{
            color: disabled ? '#CBD3DC' : '#3899ec'
          }}
          dataHook="additem-text"
          ellipsis
          >
          {children}
        </Text>
      </div>
    );
  }
}
export default ActionText;