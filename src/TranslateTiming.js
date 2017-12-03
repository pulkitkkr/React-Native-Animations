import React, { Component } from 'react';
import {View,Animated,StyleSheet,Dimensions,Text} from 'react-native';
const {width,height} = Dimensions.get('window');
export default class TranslateTiming extends Component {
	state ={
		animationVariable : new Animated.Value(0)
	}
	componentDidMount(){
		Animated.timing(this.state.animationVariable,{
			toValue:height*-1.2,
			duration:700
		}).start(()=>{
			Animated.timing(this.state.animationVariable,{
				toValue:height*-1.11,
				duration:280
			}).start(()=>{
				Animated.timing(this.state.animationVariable, {
					toValue:height*-1.15,
					duration:178
				}).start();	
			});
		});
	}
	render() {
		const AnimatedViewBoundedStyle = {
			transform:[
				{
					translateY: this.state.animationVariable
				}
			]
		}
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.AnimatedViewBlock,AnimatedViewBoundedStyle]}>
					<Text>Holaaa!!</Text>
				</Animated.View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center' 
	},
	AnimatedViewBlock:{
		width: width * 0.48,
		height : height * 0.19,
		backgroundColor: 'tomato',
		justifyContent:'center',
		alignItems:'center',
		position: 'relative',
		top:height 
	}
});
