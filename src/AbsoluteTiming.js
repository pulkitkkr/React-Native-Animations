import React, { Component } from 'react';
import {View,StyleSheet as Style,Animated,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');

export default class AbsoluteTiming extends Component {
	state = {
		animatedVariable : new Animated.Value(0)
	}
	componentWillMount(){
		Animated.timing(this.state.animatedVariable,{
			toValue:(200),
			duration:1500
		}).start()
	}
	render() {
		let AnimatedBlockStyle = {
			left: this.state.animatedVariable,
			//top: this.state.animatedVariable,
			//right: this.state.animatedVariable
		}
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.AnimatedViewBlock,AnimatedBlockStyle]}>
				</Animated.View>
			</View>
		);
	}
}
const styles = Style.create({
	container:{
		flex:1,
		padding: 5
	},
	AnimatedViewBlock:{
		width: width*0.48,
		height: height*0.18,
		left:0,
		backgroundColor:'tomato',
		position: 'absolute'
	}
});
