/**
 * Created by Home on 25-08-2017.
 */

import React from "react";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        console.log("layout");
        return (
            <div>

                <Nav location={location} />

                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Notes</h1>

                            {this.props.children}

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        );
    }
}
