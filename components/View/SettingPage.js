import React, {useState, Component} from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    SafeAreaView
} from 'react-native';
import CheckBox from '../CheckBox';
import Config from '../Config.js';

export default class SettingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appId: Config.APPID,
            uid: Config.uid,
            channelId: Config.channelId,
            stopOnDeviceStatsLog: "1",
            stopOnSdkAuthResultLog: "1",
            stopOnRoomStatsLog: "1",
            stopOnLocalVideoStatus: "1",
            stopOnLocalAudioStatusChanged: "1",
            stopOnLocalAudioStatus: "1",
            onRemoteVideoStatsOfUid: "1",
            onRemoteAudioStatsOfUid: "1",
            onNetworkQuality: "1",
            are: 0,
            is32UID: true,
            roomMode: 0,
            profile: 0,
            commutMode: 0,
            scenarioMode: 0,
            showPage: false
        };
    }

    componentDidMount() {
        this.props.onRef(this);
        setTimeout(
            () => {
                this.setState({
                    appId: Config.APPID,
                    uid: Config.uid,
                    channelId: Config.channelId,
                })
            },
            1000);
    }

    show() {
        this.setState({
            showPage: true
        })
    }

    hide() {
        this.setState({
            showPage: false
        })
    }

    setAppId(appId) {
        this.setState({
            appId: appId
        });
    }

    setUID(uid) {
        this.setState({
            uid: uid
        });
    }

    setChannelId(channelId) {
        this.setState({
            channelId: channelId
        });
    }

    setAre(are) {
        this.setState({
            are: are
        });
    }

    setCheck32UID(is32UID) {
        this.setState({
            is32UID: is32UID
        });
    }

    setRoomMode(roomMode) {
        this.setState({
            roomMode: roomMode
        });
    }

    setProfile(profile) {
        this.setState({
            profile: profile
        });
    }

    setCommutMode(commutMode) {
        this.setState({
            commutMode: commutMode
        });
    }

    setScenarioMode(scenarioMode) {
        this.setState({
            scenarioMode: scenarioMode
        });
    }

    doUpdate(ev) {
        Config.APPID = this.state.appId;
        Config.uid = this.state.uid;
        Config.channelId = this.state.channelId;
        this._save(Config.STORAGE_APP_ID_KEY, Config.APPID);
        this._save(Config.STORAGE_UID_KEY, Config.uid);
        this._save(Config.STORAGE_CHANNEL_ID_KEY, Config.channelId);
        Alert.alert("????????????", "????????????", [{
            text: "??????", onPress: () => {
            }
        }])
    }

    // ??????
    async _save(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
        }
    }

    render() {
        if (this.state.showPage != true) {
            return <View></View>
        }

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.itemcontainer}>
                        <Text>
                            AppId:
                        </Text>
                        <TextInput style={{height: 40, width:100, borderWidth: 1}} defaultValue={this.state.appId}
                                   placeholder="?????????appid" keyboardType="numeric"
                                   returnKeyType="done" onChangeText={text => this.setAppId(text)}/>
                    </View>

                    <View style={styles.itemcontainer}>
                        <Text>
                            UID:
                        </Text>
                        <TextInput style={{height: 40, width:100, borderWidth: 1}} defaultValue={this.state.uid}
                                   placeholder="?????????UID"
                                   returnKeyType="done" onChangeText={text => this.setUID(text)}/>
                    </View>

                    <View style={styles.itemcontainer}>
                        <Text>
                            ?????????
                        </Text>
                        <TextInput style={{height: 40, width:100, borderWidth: 1}} defaultValue={this.state.channelId}
                                   placeholder="???????????????"
                                   returnKeyType="done" onChangeText={text => this.setChannelId(text)}/>
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???onDeviceStats Log</Text>
                        <CheckBox
                            isChecked={this.state.stopOnDeviceStatsLog == '1'}
                            onClick={() => {
                                let stop = this.state.stopOnDeviceStatsLog == '0' ? '1' : '0';
                                this.setState({stopOnDeviceStatsLog: stop});
                                Config.STOP_ON_DEVICE_STATS_LOG = stop;
                            }}
                        />
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???onSdkAuthResult LOG</Text>
                        <CheckBox
                            isChecked={this.state.stopOnSdkAuthResultLog == '1'}
                            onClick={() => {
                                let stop = this.state.stopOnSdkAuthResultLog == '0' ? '1' : '0';
                                this.setState({stopOnSdkAuthResultLog: stop});
                                Config.STOP_ON_SDK_AUTH_RESULT_LOG = stop;
                            }}
                        />
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???onRoomStats Log</Text>
                        <CheckBox
                            isChecked={this.state.stopOnRoomStatsLog == '1'}
                            onClick={() => {
                                let stop = this.state.stopOnRoomStatsLog == '0' ? '1' : '0';
                                this.setState({stopOnRoomStatsLog: stop});
                                Config.STOP_ON_ROOM_STATS_LOG = stop;
                            }}
                        />
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???stopOnLocalVideoStatus Log</Text>
                        <CheckBox
                            isChecked={this.state.stopOnLocalVideoStatus == '1'}
                            onClick={() => {
                                let stop = this.state.stopOnLocalVideoStatus == '0' ? '1' : '0';
                                this.setState({stopOnLocalVideoStatus: stop});
                                Config.STOP_ON_LOCAL_VIDEO_STATUS_LOG = stop;
                            }}
                        />
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???stopOnLocalAudioStatus Log</Text>
                        <CheckBox
                            isChecked={this.state.stopOnLocalAudioStatus == '1'}
                            onClick={() => {
                                let stop = this.state.stopOnLocalAudioStatus == '0' ? '1' : '0';
                                this.setState({stopOnLocalAudioStatus: stop});
                                Config.STOP_ON_LOCAL_AUDIO_STATUS_LOG = stop;
                            }}
                        />
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???onRemoteAudioStatsOfUid Log</Text>
                        <CheckBox
                            isChecked={this.state.onRemoteAudioStatsOfUid == '1'}
                            onClick={() => {
                                let stop = this.state.onRemoteAudioStatsOfUid == '0' ? '1' : '0';
                                this.setState({onRemoteAudioStatsOfUid: stop});
                                Config.STOP_ON_REMOTE_AUDIO_STATS_OF_UID_LOG = stop;
                            }}
                        />
                    </View>
                    <View style={styles.itemcontainer2}>
                        <Text>???onRemoteVideoStatsOfUid Log</Text>
                        <CheckBox
                            isChecked={this.state.onRemoteVideoStatsOfUid == '1'}
                            onClick={() => {
                                let stop = this.state.onRemoteVideoStatsOfUid == '0' ? '1' : '0';
                                this.setState({onRemoteVideoStatsOfUid: stop});
                                Config.STOP_ON_REMOTE_VIDEO_STATS_OF_UID_LOG = stop;
                            }}
                        />
                    </View>
                     <View style={styles.itemcontainer2}>
                        <Text>???onNetworkQuality Log</Text>
                        <CheckBox
                            isChecked={this.state.onNetworkQuality == '1'}
                            onClick={() => {
                                let stop = this.state.onNetworkQuality == '0' ? '1' : '0';
                                this.setState({onNetworkQuality: stop});
                                Config.ON_NETWORK_QUALITY_LOG = stop;
                            }}
                        />
                    </View>
                    {/* <View style={styles.itemcontainer}>
                    <Text>
                        ?????????
                    </Text>
                    <Picker style={styles.picker_container} mode="dropdown" selectedValue={this.state.are} onValueChange={(itemValue, itemIndex) => this.setAre(itemValue)}>
                        <Picker.Item label="?????????0" value="0" />
                        <Picker.Item label="?????????1" value="1" />
                    </Picker>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={this.state.is32UID} onValueChange={value => this.setCheck32UID(value)} />
                    <Text>??????32???UID</Text>
                </View>
                <Text>????????????????????????????????????Tab??????????????????????????????</Text>
                <View style={styles.itemcontainer}>
                    <Text>
                        ???????????????
                    </Text>
                    <Picker style={styles.picker_container} mode="dropdown" selectedValue={this.state.roomMode} onValueChange={(itemValue, itemIndex) => this.setRoomMode(itemValue)}>
                        <Picker.Item label="???????????????0" value="0" />
                        <Picker.Item label="???????????????1" value="1" />
                        <Picker.Item label="???????????????3" value="3" />
                        <Picker.Item label="???????????????4" value="4" />
                    </Picker>
                </View>
                <Text>
                    ???????????????
                </Text>
                <View style={styles.itemcontainer}>
                    <Text>
                        ???????????????
                    </Text>
                    <Picker style={styles.picker_container} mode="dropdown" selectedValue={this.state.profile} onValueChange={(itemValue, itemIndex) => this.setProfile(itemValue)}>
                        <Picker.Item label="???????????????0" value="0" />
                        <Picker.Item label="???????????????1" value="1" />
                        <Picker.Item label="???????????????3" value="3" />
                        <Picker.Item label="???????????????4" value="4" />
                    </Picker>
                </View>
                <View style={styles.itemcontainer}>
                    <Text>
                        ???????????????
                    </Text>
                    <Picker style={styles.picker_container} mode="dropdown" selectedValue={this.state.commutMode} onValueChange={(itemValue, itemIndex) => this.setCommutMode(itemValue)}>
                        <Picker.Item label="?????????0" value="0" />
                        <Picker.Item label="????????????1" value="1" />
                        <Picker.Item label="????????????2" value="2" />
                    </Picker>
                </View>
                <View style={styles.itemcontainer}>
                    <Text>
                        ???????????????
                    </Text>
                    <Picker style={styles.picker_container} mode="dropdown" selectedValue={this.state.scenarioMode} onValueChange={(itemValue, itemIndex) => this.setScenarioMode(itemValue)}>
                        <Picker.Item label="?????????0" value="0" />
                        <Picker.Item label="???????????????1" value="1" />
                        <Picker.Item label="???????????????2" value="2" />
                    </Picker>
                </View> */}
                    <Button title="??????" onPress={ev => this.doUpdate(ev)}/>
                    <View><Text>tips:??????????????? ??????tag ????????????????????????</Text></View>
                </View>
            </SafeAreaView>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    itemcontainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
    },
    itemcontainer2: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
    },

    picker_container: {
        width: 180
    },

    checkboxContainer: {
        flexDirection: "row",
    },
});