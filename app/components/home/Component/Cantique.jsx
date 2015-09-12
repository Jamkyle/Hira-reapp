import { React, List} from 'reapp-kit';

export default class Cantique extends React.Component{

render(){
  return(
      <List.Item title={this.props.cantique.id} titleAfter={this.props.cantique.title} onClick={() => this.router().transitionTo(`/CantiquePage/${this.props.cantique.id}`)} />
    )
  }
}
