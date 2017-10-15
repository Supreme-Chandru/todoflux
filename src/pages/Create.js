/**
 * Created by Home on 25-08-2017.
 */


import React from "react";
import CreateTodoForm from "../components/CreateTodoForm"

export default class Create extends React.Component {


    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <CreateTodoForm/>

            </div>
        )
    }
}
