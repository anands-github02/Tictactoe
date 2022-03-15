import React , {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
import { render } from 'react-dom';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      gameState:[
        [0,0,0],
        [0,0,0],
        [0,0,0]
  
      ],
      currentPlayer: 1,
    }

  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame=()=>{
    this.setState({gameState:
    [
      [0,0,0],
      [0,-1,0],
      [0,-1,0]

    ]
 });
  }

  //  onTilePress=(row,col)=> {
  //     var currentPlayer= this.state.currentPlayer
  //  }

  renderIcon=(row,col)=>{
    var value=this.state.gameState[row][col];
    switch(value)
    {
      case 1:return <Icon name="close" style={styles.tileX}/> 
      case -1:return <Icon name="circle-outline" style={styles.tileO}/>
      default:return <View />
    }
  }


  render(){
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}} >
        <TouchableOpacity onPress={()=>this.onTilePress(0,0)} style={styles.tile} >
             {this.renderIcon(0,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onTilePress(0,1)} style={styles.tile} >
             {this.renderIcon(0,1)} 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onTilePress(0,2)} style={styles.tile} >
              {this.renderIcon(0,2)}
              </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}} >
        <TouchableOpacity onPress={()=>this.onTilePress(1,0)} style={styles.tile} >
        {this.renderIcon(1,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onTilePress(1,1)} style={styles.tile} >
        {this.renderIcon(1,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onTilePress(1,2)} style={styles.tile} >
        {this.renderIcon(1,2)}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}} >
        <TouchableOpacity onPress={()=>this.onTilePress(2,0)} style={styles.tile} >
        {this.renderIcon(2,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onTilePress(2,1)} style={styles.tile} >
        {this.renderIcon(2,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.onTilePress(2,2)} style={styles.tile} >
        {this.renderIcon(2,2)}
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile:{
    borderWidth:5,
    width:100,
    height:100

  },
  tileX:{
    color:'red',
    fontSize:60,
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    padding:15
  },
  tileO:{
    color:'green',
    fontSize:60,
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    padding:15
  }
});
