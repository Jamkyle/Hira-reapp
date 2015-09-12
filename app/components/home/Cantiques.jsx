import { React, View, BackButton, List, NestedViewList } from 'reapp-kit';
import ListCantique from './Component/ListCantique';
import {data} from '../actions/data.jsx';

// Vue Liste cantique
class Cantiques extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
        <View {...this.props} title="Liste des Cantiques" titleLeft={backButton}>
          <ListCantique cantiques={data}/>
        </View>
    );
  }
}
// Un objet de la liste cantique

export default Cantiques;
