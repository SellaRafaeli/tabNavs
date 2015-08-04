'use strict';
//var Icon = require('react-native-icons'); 
var React     = require('react-native');



var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight,
  ListView
} = React;

var bla = require("./postsList");

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
  {username:'joe',b:2},
  {username:'bob',b:2},
  {username:'bill',b:2},
  {username:'dave',b:2}
]

function log(s){console.log(s)};

class SinglePost extends Component {
  constructor() {
    super()
    log("aroo");
    console.log("one");
    console.log(this.props);
    console.log(this.foo);  
    this.state = {
      a: 'mooga',
      title: 'samba',
      props:  this.props
    };
  }

  render() {
//debugger
    console.log("props")
    console.log(new Date())
    //console.log(this.props)
    var postData = this.props.postData;
    console.log(postData)
    // console.log(this.foo)
    // console.log(this.state.props)
    return (
      <View style={[{flex:1, marginTop:50, backgroundColor: 'purple'}]}>
      <Text>Samba</Text>
      <TouchableHighlight
        style={[{borderColor: 'red', borderWidth:1, backgroundColor: 'lightblue', fontSize: 100}]}
        onPress={() => {          
            console.log("pressed row view!");
            var opts = {
              username: "sella-rafaeli"
            }
            var username = this.props.username || 'sella-rafaeli';
            var nav = this.props.nav;
            //var ddd = PostsList;
            nav.push({
              title: postData.title,
              component: this.props.postsListComponent,
              //component: SinglePost,
              passProps: {postData: postData, nav: nav},
              rightButtonTitle: 'Do-Cancel '+username,
              onRightButtonPress: () => { nav.pop(); }
            });
            //this._newTab({title: username+'\'s posts', posts: userPosts});  
          }}
      >
      <View>
      <Text>hello </Text>
       <Text>{postData.title}</Text>
      { /* {myIcon}
  
      <Text style={styles.item_q}
      >{rowData.q_text || 'no q_test'}</Text>
      <Text style={styles.item_a}>{rowData.a_text}</Text> */}
      </View> 
      </TouchableHighlight>
      </View>
    );
    //console.log(z);
    //return z;
    // return (<View>{myIcon}</View>); //working icon?
  }
}

module.exports = SinglePost;