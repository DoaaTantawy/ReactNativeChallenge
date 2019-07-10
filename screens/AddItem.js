import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Item, Input} from 'native-base';
import { Button } from 'react-native-elements';

type Props = {};

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
                <Text style={{fontSize: 30, fontWeight: 'bold', color:'#707070',fontFamily:'Avenir'}} >
                    Add new item
                </Text>

                <Text style={{fontSize: 14,color:'#999999', fontFamily:'Avenir'}} >
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

                    <Button
                        title="Add"
                        titleStyle={{fontSize:20,fontFamily:'Avenir'}}
                        buttonStyle={{ width: '100%', backgroundColor:'#1D7281',
                            padding: 10, borderRadius:5 ,height:60, marginTop:15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 5,

                            elevation: 8,
                        }}
                        onPress={()=>{
                            this.props.navigation.navigate('HomePage',
                                {listItem: this.state.textItem})
                        }}
                    >
                    </Button>


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

    //For displaying the error message to the user
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