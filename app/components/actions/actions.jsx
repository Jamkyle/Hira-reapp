import {data} from './data.jsx';

const actions = {
  findById(id){
      var anItem;
       data.map(function(cantique){
         if(cantique.id==id){
           anItem = cantique;
         }
       });
       return anItem;
     },
  findByContent(key){

    var results = data.filter(function (element) {
    var content = element.strophe.map(function(item){
        return item.content;
      });
      if(content[0].toLowerCase().indexOf(key.toLowerCase()) > -1)
        return content[0].toLowerCase().indexOf(key.toLowerCase()) > -1;
    });
    console.log(results);
    return results;
  },
  findByNum(key){
    var results = data.filter(function (element) {
        return (element.id).toString().indexOf(key) > -1;
    });
    return results;
  }
}

export default actions;
