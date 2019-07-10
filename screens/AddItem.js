import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Item, Input} from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {};

const styles={
    startButtonContainer:{
        width:'100%',
        opacity:5,
        marginTop:15
    },
    startButtonShadow:{
        padding: 15,
        backgroundColor: '#00CCFF10',
        marginTop: -20,
        borderRadius: 5,
        width: '100%',
    }
};
export  default class AddItem extends Component<Props> {
    state = {textItem:'', accepted:true}
    static navigationOptions = {
        header:null,
    };
    render() {
        return (
            <Container style={{backgroundColor:'#FAFAFA'}}>

                <View style={{backgroundColor:'#FAFAFA', marginTop:36,
                    justifyContent: 'center', alignItems: 'center',
                    marginBottom:130
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color:'#707070'}} >
                    Add new item
                </Text>

                <Text style={{fontSize: 14,color:'#999999'}} >
                    Subtitle goes here
                </Text>
                </View>


                <View style={{backgroundColor:'#FAFAFA', marginRight:24, marginLeft:25}}>

                <Item style={{borderRadius:8, borderColor:'#707070', height:63}} regular>
                    <Input style={{fontSize:18, color:'#707070', marginLeft:24}}
                           placeholderTextColor='#999999'
                           placeholder='item name'
                           name="textItem"
                           onChangeText={text => this.storeValue(text)}
                           value={this.state.value}
                    />
                </Item>

                <View>
                    {this.validationMessage()}
                </View>

                <View style={styles.startButtonContainer}>
                    <Button
                        icon={{
                            name: "arrow-right",
                            size: 15,
                            color: "white"
                        }}
                        title="Add new item"
                        buttonStyle={{ width: '100%', backgroundColor:'#1D7281',
                            padding: 10, borderRadius:5 ,height:60}}
                        onPress={()=>{
                            this.props.navigation.navigate('HomePage',
                                {listItem: this.state.textItem})
                        }}
                    />
                    <View style={styles.startButtonShadow}></View>
                </View>

                </View>
            </Container>
        );
    }


    storeValue = text => {
        this.setState({
            value: text,
        });
        //the temp here is to check if the user entered an empty string
        //so if it's empty we don't continue with the process, otherwise we are good
        //even if there's white space before the text i assumed it's okay to add it anyway.
        let temp=text;
        if(temp.trim()) {
            let reg = /^([^0-9]*)$/ ;
            if(reg.test(text) === false) {
                this.setState({
                    accepted: false,
                    textItem : ''
                })
            }
            else {
                this.setState({
                    textItem: text,
                    accepted: true,
                });
            }
        }
    };

    validationMessage(){
        if(this.state.accepted===false) {
            return (
                <Text style={{fontSize: 16, color: '#FF0000'}}>
                    Numbers are not allowed
                </Text>
            );
        }
    }
}