import React, {Component} from 'react'
import {View, Button, Text} from 'react-native'

export default class ButtonTest extends Component {
    constructor(props) {
        super(props);
        this.state = {isPressed: false};
    }

    render() {
        return (
            <View>
                {/*suus bite*/}
                <Button title={"Press me motherfucker"}
                        onPress={() => this.setState({isPressed: true})}
                />
                <Button title={"Unpress me motherfucker"}
                        onPress={() => this.setState({isPressed: false})}
                />
                <Text>
                    {this.state.isPressed ? "Pressed" : "Not pressed"}
                </Text>
                <Text>
                    {this.state.isPressed ? "Me too" : "Me neither"}
                </Text>
            </View>
        )
    }
}