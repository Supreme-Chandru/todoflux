/**
 * Created by Home on 25-08-2017.
 */


import React from "react";
import EditTodoForm from "../components/EditTodoForm"

export default class Edit extends React.Component {


    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <EditTodoForm/>

            </div>
        )
    }
}
