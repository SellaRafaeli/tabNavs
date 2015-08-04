'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} = React;
var Icon = require('react-native-vector-icons/FontAwesome');

//var TabBarItemIOS = TabBarIOS.Item;
var TabBarItemIOS = Icon.TabBarItem;


//var Search = require("./Search");
//var Invites = require("./Invites");
var PostsList = require("./postsList");
var SinglePost = require("./singlePost");

var UsersList = require("./usersList");
//var Icon = require('react-native-icons');
var EmptyPage = React.createClass({

  render: function() {
    return (
      <View style={styles.emptyPage}>
      <Text style={styles.emptyPageText}>
      {this.props.text}
      </Text>
      </View>
      );
  },

});

var TabBarExample = React.createClass({

  statics: {
    title: '<yes.no home tabs>'
    //description: 'Tab-based navigation.'
  },

  getInitialState: function() {
    return {
      selectedTab: 'blueTab',
      notifCount: 0,
      presses: 0,
    };
  },

  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        
        <TabBarItemIOS
        name="blueTab"
        zicon={_ix_DEPRECATED('favorites')}
        iconName='rocket'
        title='Feed'
        selectedIconName='rocket'
        accessibilityLabel="Blue Tab"
        selected={this.state.selectedTab === 'blueTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'blueTab',
          });
        }}>

         
        <NavigatorIOS
        style={styles.navigator}
        ref="nav2"
        initialRoute={{
          component: PostsList,
          title: "page title2 ",
          rightButtonTitle: 'New Invite 2',
          passProps: {postsType: "feed 3"},
          postsType: 'feed2',
          a: 101,
          onRightButtonPress: () => {
            
            var ddd = SinglePost
            this.refs.nav2.navigator.push({
              title: "test",
              component: PostsList,
              passProps: {b:20, a:1, postsType: 'feed'},
              foo: "bar",
              rightButtonTitle: 'Cancel',
              onRightButtonPress: () => { this.refs.nav2.navigator.pop(); }
            });
          }
        }}>

        </NavigatorIOS>
        

        

      </TabBarItemIOS>
      <TabBarItemIOS
      accessibilityLabel="Red Tab"
      name="redTab"
      title="Hot Dogs"
      iconName="plane"
      //icon={_ix_DEPRECATED('history')}
      badgeValue={this.state.notifCount ? String(this.state.notifCount) : null}
      selected={this.state.selectedTab === 'redTab'}
      onPress={() => {
        this.setState({
          selectedTab: 'redTab',
          notifCount: this.state.notifCount + 1,
        });
      }}>
      <NavigatorIOS
      ref="nav"
      style={styles.navigator}
      initialRoute={{
        component: UsersList,
        title: "users",
        rightButtonTitle: 'New Invite',
        onRightButtonPress: () => {
          this.refs.nav.navigator.push({
            title: "test",
            component: PostsList,
            rightButtonTitle: 'Cancel',
            onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
          });}
        }}/>
        </TabBarItemIOS>
        </TabBarIOS>
        );
},

});

var styles = StyleSheet.create({

  navigator: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
    //margin: 50,
    fontSize :200
  },
});

// This is needed because the actual image may not exist as a file and
// is used by the native code to load a system image.
// TODO(nicklockwood): How can this fit our require system?
function _ix_DEPRECATED(imageUri) {
  return {
    uri: imageUri,
    isStatic: true,
  };
}

module.exports = TabBarExample;