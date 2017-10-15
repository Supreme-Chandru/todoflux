/**
 * Created by Home on 02-09-2017.
 */

import { EventEmitter } from "events" ;
import dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos=[
            /*{
                id:123,
                title:"Goto Gym",
                description:"Workoout Description",
                completed : false
            },
            {
                id: 1234,
                title: "Do Yoga",
                description: "pranayam",
                completed:true
            }*/
        ]

    }

    createTodo(id,text,status,created){
        //const id = Date.now();
        const todo = {
            id:id,
            text:text,
            description:text,
            status:status=='active'
        };
        //console.log(todo);
        this.todos.push(todo);
    }

    getAllTodos(){
        return this.todos;
    }

    loadTodos(todos){
        this.todos=todos;
    }

    handleActions(action){
        console.log("ACTION == "+action.type);
        switch(action.type){
            case "CREATING_TODO": {
                //this.createTodo(action.title, action.description);
                this.emit("loading");
                break;
            }
            case "LOADING_TODOS": {
                //this.createTodo(action.title, action.description);
                this.emit("loading");
                break;
            }
            case "CREATED_TODO": {
                this.createTodo(action.id, action.text, action.status, action.created);
                this.emit("change");
                this.emit("loaded");
                break;
            }

            case "LOADED_TODOS": {
                this.loadTodos(action.todos);
                this.emit("change");
                this.emit("loaded");
                break;
            }
            case "CREATE_TODO_FAILED": {
                //this.createTodo(action.title, action.description);
                this.emit("change");
                this.emit("loadingfailed");
                break;
            }
            case "LOADING_TODOS_FAILED": {
                //this.createTodo(action.title, action.description);
                this.emit("change");

                this.emit("loadingfailed");
                break;
            }
            default: break;
        }

    }

}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;