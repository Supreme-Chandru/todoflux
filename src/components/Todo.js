/**
 * Created by Home on 25-08-2017.
 */
import React from "react";
import { IndexLink, Link } from "react-router";

export default class Todo extends React.Component {

    constructor(props){
        super(props);

    }

    render() {

        const todoid = this.props.id;
        console.log(this.props);
        const title  = this.props.title;
        const description  = this.props.description;
        const status  = this.props.completed?  " Not Completed" : "Completed";


        return (
            <div className="col-md-4">
                <button to="create" className="btn btn-warning pull-right">
                    <Link to="edit/" er="123" params={{todoid : "123"}}>Edit</Link>
                </button>
                <h4><b>{title}</b></h4>
                <h6>{status}</h6>
                <p>{description}</p>

            </div>
        );
    }
}