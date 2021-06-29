/**
 * react-native-check-box
 * Checkbox component for react native, it works on iOS and Android
 * https://github.com/crazycodeboy/react-native-check-box
 * Email:crazycodeboy@gmail.com
 * Blog:http://www.devio.org
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    ViewPropTypes as RNViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from "./RadioButton.style";

const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...ViewPropTypes,
        leftText: PropTypes.string,
        leftTextView: PropTypes.element,
        rightText: PropTypes.string,
        leftTextStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
        rightTextView: PropTypes.element,
        rightTextStyle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool.isRequired,
        isIndeterminate: PropTypes.bool.isRequired,
        checkBoxColor: PropTypes.string,
        checkedCheckBoxColor: PropTypes.string,
        uncheckedCheckBoxColor: PropTypes.string,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        isChecked: false,
        isIndeterminate: false,
        leftTextStyle: {},
        rightTextStyle: {}
    }

    onClick() {
        this.props.onClick();
    }

    _renderLeft() {
        if (this.props.leftTextView) return this.props.leftTextView;
        if (!this.props.leftText) return null;
        return (
            <Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
        );
    }

    _renderRight() {
        if (this.props.rightTextView) return this.props.rightTextView;
        if (!this.props.rightText) return null;
        return (
            <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
        );
    }

    _renderImage() {
        if (this.props.isIndeterminate) {
            return this.props.indeterminateImage ? this.props.indeterminateImage : this.genCheckedImage();
        }
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    _getCheckedCheckBoxColor() {
        return this.props.checkedCheckBoxColor ? this.props.checkedCheckBoxColor : this.props.checkBoxColor
    }

    _getUncheckedCheckBoxColor() {
        return this.props.uncheckedCheckBoxColor ? this.props.uncheckedCheckBoxColor : this.props.checkBoxColor
    }

    _getTintColor() {
        return this.props.isChecked ? this._getCheckedCheckBoxColor() : this._getUncheckedCheckBoxColor()
    }

    genCheckedImage() {
        let source;
        if (this.props.isIndeterminate) {
            source = <View></View>;
        } else {

            if (!this.props.isChecked) {
                source = <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        backgroundColor: '#FFF',
                        borderColor: "steelblue",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                    }}/>
            } else {
                source = <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        backgroundColor: '#FFF',
                        borderColor: "steelblue",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                    }}>
                    <View
                        style={{
                            width: 15,
                            height: 15,
                            borderWidth: 1,
                            backgroundColor: 'steelblue',
                            borderRadius: 7.5,
                            borderColor: 'steelblue',
                        }}
                    />
                </View>
            }

        }
        return (
            source
        );
    }

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={() => this.onClick()}
                underlayColor='transparent'
                disabled={this.props.disabled}
            >
                <View style={styles.container}>
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        );
    }
}