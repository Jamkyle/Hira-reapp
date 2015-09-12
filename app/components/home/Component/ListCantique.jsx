import { React, View, BackButton, List, Container, Card, Badge } from 'reapp-kit';
import Cantique from './Cantique'

export default class ListCantique extends React.Component{
  render(){
    var items = this.props.cantiques.map(function(cantique){
      return (<Cantique key={cantique.id} cantique={cantique}/>);
    });
    return (
      <List title='Liste des cantiques'>{items}</List>
    )
  }
}
