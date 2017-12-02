import React from 'react';
import {Animated,View,StyleSheet,Text,TouchableWithoutFeedback,Dimensions} from 'react-native';
export default class OpacityTiming extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  		animationVariable: new Animated.Value(1)
	  };
	}
	AnimateBlock = ()=>{

		Animated.timing(this.state.animationVariable,{
			toValue:0,
			duration:95
		}).start(()=>{
			Animated.timing(this.state.animationVariable,{
				toValue:1,
				duration:95
			}).start();
		});
	}
	render(){
		const AnimationBoundedBlockStyle ={
			opacity: this.state.animationVariable
		};
		return(
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.AnimateBlock}>	
					<Animated.View style={[styles.AnimatedViewBlock,AnimationBoundedBlockStyle]}>
						<Text>Click A</Text>
					</Animated.View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignContent: 'center',
		flexWrap: 'wrap',
		padding: 4, 
		flexDirection: 'row', 
		justifyContent:'center',
		backgroundColor:'#fefefe'
	},
	AnimatedViewBlock:{
		backgroundColor:'tomato',
		width: Dimensions.get('window').width*0.46,
		height: Dimensions.get('window').height*0.18,
		alignItems:'center',
		alignSelf: 'flex-start', 
		justifyContent:'center',
		margin:4

	}
});