/**
 * Created by Home on 02-09-2017.
 */


import React from "react";
import "../components/CreateTodoForm.css"
import * as TodoActions from "../actions/TodoActions"
import { withRouter } from 'react-router';


class CreateTodoForm extends React.Component {


    constructor(props){
        super(props);
        this.props=props;
        this.state = {status:'active'};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.onTextChange=this.onTextChange.bind(this);
        this.onDescriptionChange=this.onDescriptionChange.bind(this);
    }

    onTextChange(event){
        this.setState({
            text:event.target.value
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
        TodoActions.createTodo(this.state.text,this.state.status);
        console.log(this);
        this.props.router.push('/');
    }

    render() {
        return (
            <form id="createTodoForm" onSubmit={this.handleSubmit}>
                <h1>New Todo</h1>
                <div className="form-group">
                    <label>
                        <div>Todo Text</div>
                        <input className="form-control" type="text" name="todoTitle" onChange={this.onTextChange}/>
                    </label>
                </div>
                <div  className="form-group">

                    <label>
                        <div>Todo Description</div>
                        <textarea className="todoDesc form-control" type="text" name="todoDesc" onChange={this.onDescriptionChange}/>
                    </label>

                </div>
                <div className="form-group">
                    <button className="todoAddSubmit btn btn-primary" type="submit">Add</button>
                </div>
            </form>
        )
    }
}

export default withRouter(CreateTodoForm);