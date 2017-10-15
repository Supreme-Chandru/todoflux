/**
 * Created by Home on 02-09-2017.
 */
import axios from "axios";
import dispatcher from "../dispatcher/dispatcher"

export function createTodo(text, status) {
    //console.log(title);

    dispatcher.dispatch({type : "CREATING_TODO"});
    axios.post("/api/todos",{
        text,
        status
    }).then((res)=>{
        //console.log(data);
        const data = res.data;
        dispatcher.dispatch({
            type : "CREATED_TODO",
            text : data.text,
            status : data.status,
            id : data.id,
            created : data.created
        });
    }).catch((error)=>{
        dispatcher.dispatch({
            type : "CREATE_TODO_FAILED",

        });
    });

}


export function loadTodos(){
      dispatcher.dispatch({
          type : "LOADING_TODOS"
      }) ;
      axios.get("/api/todos",{
          params:{
            limit : -1
          }
      }).then((res)=>{
          const todos = res.data.todos;
          dispatcher.dispatch({
              type : "LOADED_TODOS",
              todos : todos
          });
      }).catch((res)=>{
          dispatcher.dispatch({
              type : "LOAD_TODOS_FAILED",

          });
      });
}

export function deleteTodo(id) {
    dispatcher.dispatch({type : "DELETING_TODO"});
    dispatcher.dispatch({
        type : "DELETE_TODO",
        id : id
    });
}

export function editTodo(id,title,description,completed) {
    dispatcher.dispatch({
        type : "EDIT_TODO",
        id,
        title,
        description,
        completed
    });
}

