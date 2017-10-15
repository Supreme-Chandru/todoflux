import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

import LoadScreen from "./components/LoadScreen"

import './App.css';

import TodoStore from "./stores/TodoStore"
import * as TodoActions from "./actions/TodoActions.js"

class App extends Component {
    constructor(props){
        super(props);
        this.setLoading = this.setLoading.bind(this);
        this.unsetLoading = this.unsetLoading.bind(this);
        this.state={
            loading:false
        }
    }

    componentWillMount() {
        TodoActions.loadTodos();
        TodoStore.on("loading",this.setLoading);
        TodoStore.on("loaded",this.unsetLoading);
        TodoStore.on("loadingfailed",this.unsetLoading);
    }

    componentWillUnmount(){
        TodoStore.removeListner("loading",this.setLoading);
        TodoStore.removeListner("loaded",this.unsetLoading);
        TodoStore.removeListner("loadingfailed",this.unsetLoading);
    }

    setLoading(){
        this.setState({
            loading:true
        });
    }

    unsetLoading(){
        this.setState({
            loading:false
        });
    }


  render() {
      const loading = this.state.loading;
      let loader=<div/>;
      if(loading){
          loader = <LoadScreen/>
      }

      return(
      <div>

          {loader}
          <Router history={hashHistory}>
              <Route path="/" component={Layout}>

                  <IndexRoute name="featured" component={Featured}></IndexRoute>
                  <Route path="archives(/:article)" name="archives" component={Archives}></Route>
                  <Route path="settings" name="settings" component={Settings}></Route>
                  <Route path="create" name="create" component={Create}></Route>
                  <Route path="edit(/:todoid)" component={Edit}></Route>

              </Route>
          </Router>
      </div>
      );
  }
}

export default App;
