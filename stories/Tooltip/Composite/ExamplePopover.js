import * as React from 'react';
import {Component} from 'react'; // eslint-disable-line no-duplicate-imports
import PropTypes from 'prop-types';

import Template from './Template';
import RadioGroup from '../../../src/RadioGroup';
import Label from '../../../src/Label';
import Input from '../../../src/Input';

import styles from './Example.scss';

class ExamplePopover extends Component {
  state = {
    placement: 'top',
    text: 'Popover appears on click',
    maxWidth: ''
  };

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Direction</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.placement}
                onChange={placement => this.setState({placement})}
                >
                <RadioGroup.Radio value="top">Top</RadioGroup.Radio>
                <RadioGroup.Radio value="right">Right</RadioGroup.Radio>
                <RadioGroup.Radio value="bottom">Bottom</RadioGroup.Radio>
                <RadioGroup.Radio value="left">Left</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Text</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})}
                />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Max Width</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.maxWidth}
                onChange={e => this.setState({maxWidth: e.target.value})}
                />
            </div>
          </div>
        </div>

        <div className={styles.output}>
          <div className={styles.exampleWrapper}>
            <Template
              theme="light"
              placement={this.state.placement}
              tooltipContent={this.state.text}
              showTrigger="click"
              hideTrigger="click"
              type="popover"
              maxWidth={this.state.maxWidth}
              onChange={this.props.onChange}
              />
          </div>
        </div>
      </form>
    );
  }
}

export default ExamplePopover;

ExamplePopover.propTypes = {
  onChange: PropTypes.func.isRequired
};
