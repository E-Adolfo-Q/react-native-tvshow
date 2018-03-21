
import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'
import styles from './styles'

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

export default class extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg')
            ]
        }
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Swiper
                    autoplay
                    height={240}
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider 
                        uri={item}
                        key={i}
                    />)
                }

                </Swiper>
            </View>
        )
    }
}
