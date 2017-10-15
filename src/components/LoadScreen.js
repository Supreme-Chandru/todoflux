/**
 * Created by Home on 16-09-2017.
 */
import React from 'react';
export default class LoadScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="overlay">
                <div className="loadinfo">
                    <div className="loadingText">Loading...</div>
                </div>
            </div>
        );
    }
}