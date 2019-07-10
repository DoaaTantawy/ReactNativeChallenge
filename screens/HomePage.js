import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Card, CardItem, Content, Body} from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-ionicons'
type Props = {};


export  default class HomePage extends Component<Props> {
    state = {itemsList : ["expedita", "nisi", "fuga", "repellat", "placeat"]}

    static navigationOptions = {
        header:null,
    };
    render() {
        return (
            <Container style={{backgroundColor:'#FAFAFA'}}>

            <Container style={{ backgroundColor:'#FAFAFA',marginLeft:24, marginRight: 23}}>

             <Text style={{fontSize: 30, fontWeight: 'bold',
                 color:'#1D7281', marginTop:36, fontFamily:'Avenir'}} >
                Items
            </Text>

                <Text style={{fontSize: 14,color:'#999999', fontFamily:'Avenir'}} >
                    Subtitle goes here
                </Text>


                <Card style={{marginTop:20, paddingTop: 25, height: 350, marginBottom:20}}>
                    <Content>
                        {this.addItemsToList()}
                        {this.returnData()}
                    </Content>
                </Card>


                <Button
                    icon={
                        <Icon name="add-circle"
                        size={36}
                        color= "white"
                        />
                    }
                    title="Add new item"
                    titleStyle={{fontSize:20, paddingLeft:10, fontFamily:'Avenir'}}
                    buttonStyle={{ width: '100%', backgroundColor:'#00CCFF',
                        padding: 10, borderRadius:5 ,height:60,
                        shadowColor: "#0CF",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,

                        elevation: 4,
                    }}
                    onPress={()=>{
                        this.props.navigation.navigate('AddItem')
                    }}
                >
                </Button>

            </Container>

            </Container>
        );
    }

    // if there's a new item came from the second screen, we add it to the list from here
    addItemsToList(){
        let newItem=this.props.navigation.getParam('listItem');
        if(newItem) {
            this.state.itemsList.push(newItem);
        }

    }


    //displaying the list on the screen
    returnData() {
        return (

        this.state.itemsList.map((mappingData) => {
            return (
                <CardItem>

                    <Body style={{flex: 3, marginLeft: 36}}>
                        <Text style={{color: '#666666', fontWeight: 'bold', fontSize: 20,}}>{mappingData}</Text>

                    </Body>
                </CardItem>
            );
        })

        );
    }

}