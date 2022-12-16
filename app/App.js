import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props){
       super(props)
       this.state = {altura:0, massa:0}
       this.calcular = this.calcular.bind(this)
    }

    calcular(){

      let imc = (this.state.massa / (this.state.altura * this.state.altura)).toFixed(2)

      let k = this.state
      k.resultado = imc
      this.setState(k)

    }


    render() {
       return(
          <View style={styles.container}>
              <View style={styles.entradas}>
                 <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}} />
                 <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}} />
              </View>
            <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
            <Text style={styles.TextResult}>Resultado:</Text>
            <Text style={styles.resultado}>{this.state.resultado}</Text>
          </View>
       );
    }
}


const styles = StyleSheet.create({
     container: {  
        flex: 1,
        background: '#F5FCFF',
     },

     entradas:{
        flexDirection: 'row',
     },

     input: {
        height:80,
        textAlign: "center",
        width:"50%",
        fontSize:50,
        marginTop:100
     },

     button: {
        marginTop:80,
        backgroundColor: "#89ffaf",
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 20

     },
     
     TextResult:{
      marginTop: 30,
      alignSelf: 'center',
      color: 'blackW800',
      fontSize:48,
      padding:15,
    },


     buttonText:{
      alignSelf: 'center',
      padding:15,
      fontSize:28,
      color: 'blackW100',
      fontWeight: 'bold',
     },

     resultado:{
       alignSelf: 'center',
       color: 'black',
       fontSize:76,
       padding:15,
     },

});