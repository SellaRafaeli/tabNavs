'use strict';
//var Icon = require('react-native-icons'); 
var React = require('react-native');
var SinglePost = require ('./singlePost');

var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight,
  ListView
} = React;
 
var Icon = require('react-native-vector-icons/FontAwesome');

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#765432',
  },
  icon: {
    marginTop: 100
  },
  tabContent: {
    flex: 1,
    //width: 10000,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 50
  }
});

var myIcon = (<Icon name="rocket" size={100} marginTop={100} color="#900" style={styles.icon}/>)
//var Icon = require('react-native-icons');

var posts = [
  {username:'joe',title:'hello1', b:2},
  {username:'bob',title:'hello1', b:2},
  {username:'bill', title:'hello12', b:2},
  {username:'dave', title:'hello3', b:2}
]
class PostsList extends Component {
  constructor() {
    super()
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      a: 'mooga',
      dataSource: dataSource.cloneWithRows(posts)
    };
  }

  _renderRow(rowData) {
    rowData = rowData || {};
    return (
      <TouchableHighlight
        onPress={() => {          
            console.log("pressed row view!");
            var opts = {
              username: "sella-rafaeli"
            }
            var username = rowData.username || 'sella-rafaeli';
            var nav = this.props.navigator;
            nav.push({
              title: rowData.title,
              component: SinglePost,
              passProps: {postData: rowData},
              rightButtonTitle: 'Do-Cancel '+username,
              onRightButtonPress: () => { nav.pop(); }
            });
            //this._newTab({title: username+'\'s posts', posts: userPosts});  
          }}
      >
      <View>
      <SinglePost postData={rowData}/>
      { /* {myIcon}

      <Text style={styles.item_q}
      >{rowData.q_text || 'no q_test'}</Text>
      <Text style={styles.item_a}>{rowData.a_text}</Text> */}
      </View> 
      </TouchableHighlight>
    )
  }

  render() {
    // var b = this.props.b+1 || "bla";
    //var Icon = require('react-native-icons');
    return (
      <View style={[styles.tabContent, {backgroundColor: 'lightblue'}]}>
       <ListView
      style={styles.listView}
      dataSource={this.state.dataSource}
      renderRow={(rowData) => this._renderRow(rowData)}
    />      
      </View>
    );
    // return (<View>{myIcon}</View>); //working icon?
  }
}
 
module.exports = PostsList;