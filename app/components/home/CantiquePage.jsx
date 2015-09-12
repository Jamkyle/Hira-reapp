import { React, View, BackButton, List, Container, Card, Badge } from 'reapp-kit';
import actions from '../actions/actions';
import '../../theme/styles/style.css'


export default class CantiquePage extends React.Page {
  constructor(){
    super();
    this.state ={ cantique : {}, strophe: []}
  }
  componentDidMount(){
    var cantique ={};
      cantique = actions.findById(this.props.state.params.id);
      this.setState({cantique: cantique, strophe : cantique.strophe});

  }
  render(){
    var strophe = this.state.strophe.map(function(item){return <Strophe key={item.id} strophe={item}/>});
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
        <View {...this.props} title={this.props.state.params.id+' '+this.state.cantique.title} titleLeft={backButton}>
          <div className='container'>
            {strophe}
          </div>
        </View>
    );
  }
}

class Strophe extends React.Component{
  render(){
    return (
      <div>
        <h3>{this.props.strophe.sid}</h3>
        <p className='_split _left'>
          {this.props.strophe.content}
        </p>
        <p className='_split _right _blue'>
          {this.props.strophe.trad}
        </p>
      </div>

    );
  }
}
