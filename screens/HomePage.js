import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Card, CardItem, Content, Left,Body, Right} from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {};

const styles={
    startButtonContainer:{
        width:'100%',
        opacity:5
    },
    startButtonShadow:{
        padding: 15,
        backgroundColor: '#00CCFF10',
        marginTop: -20,
        borderRadius: 5,
        width: '100%',
    }
};

export  default class HomePage extends Component<Props> {
    state = {itemsList : ["expedita", "nisi", "fuga", "repellat", "placeat"]}

    static navigationOptions = {
        header:null,
    };
    render() {
        return (
            <Container style={{backgroundColor:'#FAFAFA'}}>

            <Container style={{ backgroundColor:'#FAFAFA',marginLeft:24, marginRight: 23}}>

             <Text style={{fontSize: 30, fontWeight: 'bold',color:'#1D7281', marginTop:36}} >
                Items
            </Text>

                <Text style={{fontSize: 14,color:'#999999'}} >
                    Subtitle goes here
                </Text>


                <Card style={{marginTop:20, paddingTop: 25, height: 350, marginBottom:20}}>
                    <Content>
                        {this.addItemsToList()}
                        {this.returnData()}
                    </Content>
                </Card>


                <View style={styles.startButtonContainer}>
                    <Button
                        icon={{
                            name: "arrow-right",
                            size: 15,
                            color: "white"
                        }}
                        title="Add new item"
                        buttonStyle={{ width: '100%', backgroundColor:'#00CCFF',
                            padding: 10, borderRadius:5, height:60}}
                        onPress={()=>{
                            this.props.navigation.navigate('AddItem')
                        }}
                    />
                    <View style={styles.startButtonShadow}></View>
                </View>

            </Container>

            </Container>
        );
    }


    addItemsToList(){
        let newItem=this.props.navigation.getParam('listItem');
        if(newItem) {
            this.state.itemsList.push(newItem);
        }

    }

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