import { React, View, BackButton, Checkbox } from 'reapp-kit';
import ListCantique from './Component/ListCantique';
import {data} from '../actions/data.jsx';
import actions from '../actions/actions';

import {SearchBar} from 'reapp-kit';

export default class SearchCantique extends React.Component {
  constructor(){
    super();
    this.state = {data: [], choice: false};
  }
  choiceHandler(check){
    this.setState({choice: !check})
  }

  handler(key){
      if(this.state.choice){
      var result = actions.findByContent(key.target.value);
      this.setState({data: result});
    }else {
      var result = actions.findByNum(key.target.value);
      this.setState({data: result});
    }
  }
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />
    const checkChoice = <Checkbox onChange={this.choiceHandler}/>

    return (
      <View {...this.props} title="Cherche Cantique" titleLeft={backButton} titleRight={checkChoice}>
        <SearchBar placeholder='Cherche un cantique' onChange={this.handler}/>
        <ListCantique cantiques={this.state.data}/>
      </View>
    );
  }
}
