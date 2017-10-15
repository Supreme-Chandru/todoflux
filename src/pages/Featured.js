/**
 * Created by Home on 25-08-2017.
 */

import React from "react";

import TodoStore from "../stores/TodoStore"
import Todo from "../components/Todo"

export default class Featured extends React.Component {
    constructor(props){
        super(props);
        this.getTodos = this.getTodos.bind(this);
        this.doLoading = this.doLoading.bind(this);
        this.state={
            todos: TodoStore.getAllTodos(),
            loading : false
        }
        console.log("Featured Constructor");
    }

    getTodos(){
        this.setState({
            todos: TodoStore.getAllTodos(),
            loading: false
        });
    }

    doLoading(){
        this.setState({
            loading: true
        });
    }

    componentWillMount(){
        console.log("CWM");
        TodoStore.on("change",this.getTodos);
        TodoStore.on("loading",this.doLoading);

    }

    componentWillUnmount (){
        TodoStore.removeListener("change",this.getTodos);
        TodoStore.removeListener("loading",this.doLoading);
    }

    render() {
        const Todos = this.state.todos
            .map((todo, i) =>
                <Todo key={i} id={todo.id} title={todo.text} description={todo.text} completed={todo.status}/>
            );

        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4",
            "Ad spot #5",
        ];

        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
        console.log("featured");
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="well text-center">
                            {randomAd}
                        </div>
                    </div>
                </div>

                <div className="row">{Todos}</div>
            </div>
        );
    }
}
