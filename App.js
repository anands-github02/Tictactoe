import React , {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,Button } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
// import { render } from 'react-dom';


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
      [0,0,0],
      [0,0,0]

    ],currentPlayer:1,
 });
 
  }

  onNewGamePress=()=>{
    this.initializeGame();
  }

  getWinner=()=>{
     var num_tiles =3;
     var arr=this.state.gameState;
     var sum;
     let i;
     for( i=0;i<num_tiles;i++){
       sum=arr[i][0]+arr[i][1]+arr[i][2];
        if(sum===3){
          return 1;
        }
        else if(sum===-3){
          return -1;
        }
      }

      for(i=0;i<num_tiles;i++){
        sum=arr[0][i]+arr[1][i]+arr[2][i];
         if(sum===3){
           return 1;
         }
         else if(sum===-3){
           return -1;
         }
       }

       sum=arr[0][0]+arr[1][1]+arr[2][2];
       if(sum===3){
        return 1;
      }
      else if(sum===-3){
        return -1;
      }

      sum=arr[0][2]+arr[1][1]+arr[2][0];
       if(sum===3){
        return 1;
      }
      else if(sum===-3){
        return -1;
      }

      return 0;

  }

   onTilePress=(row,col)=> {
      var currentPlayer= this.state.currentPlayer;

      var value=this.state.gameState[row][col];
      if(value!==0){
        return;
      }

      var arr=this.state.gameState.slice();
      arr[row][col]= currentPlayer;
      this.setState({gameState :arr});

      var nextPlayer=(currentPlayer==1)?-1:1
      this.setState({currentPlayer:nextPlayer});

      var winner=this.getWinner();
      if(winner===1){
        Alert.alert("Player X is the winner");
        this.initializeGame();
      }
      else if(winner===-1){
        Alert.alert("Player O is the winner");
        this.initializeGame();
      }
   }

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
    <Text style={{fontSize:60, fontStyle:'italic',paddingBottom:30}}>TIC TAC TOE</Text>
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
      <View style={{paddingTop:80}}></View>
      <Button title="New Game" onPress={this.onNewGamePress } />

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#daa',
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
