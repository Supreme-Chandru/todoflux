/**
 * Created by Home on 02-09-2017.
 */


import React from "react";
import "../components/EditTodoForm.css"
import * as TodoActions from "../actions/TodoActions"


export default class EditTodoForm extends React.Component {


    constructor(props){
        super(props);
        this.state = {};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.onTitleChange=this.onTitleChange.bind(this);
        this.onDescriptionChange=this.onDescriptionChange.bind(this);
    }

    onTitleChange(event){
        this.setState({
            title:event.target.value
        });
    }

    onDescriptionChange(event){
        this.setState({
            description:event.target.value
        });
    }

    handleSubmit(event){
        //console.log(this.state);
        event.preventDefault();
        TodoActions.createTodo(this.state.title,this.state.description);
    }

    render() {
        return (
            <form id="editTodoForm" onSubmit={this.handleSubmit}>
                <h1>Edit Todo</h1>
                <div className="form-group">
                    <label>
                        <div>Todo Title</div>
                        <input className="form-control" type="text" name="todoTitle" onChange={this.onTitleChange}/>
                    </label>
                </div>
                <div  className="form-group">

                    <label>
                        <div>Todo Description</div>
                        <textarea className="todoDesc form-control" type="text" name="todoDesc" onChange={this.onDescriptionChange}/>
                    </label>

                </div>
                <div className="form-group">
                    <button className="todoAddSubmit btn btn-primary" type="submit">Update</button>
                </div>
            </form>
        )
    }
}