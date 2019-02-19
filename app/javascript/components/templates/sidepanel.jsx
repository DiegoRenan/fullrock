import React, { Component } from 'react'

export default class Panel extends Component{

    render(){
        return (
            <div className="nav flex-column panel">
                <center>
                <div className="box-panel principal"></div>
                <div className="box-panel"></div>
                Home
                <div className="box-panel"></div>
                Settings
                <div className="box-panel p-active"></div>
                Members
                </center>
            </div>
        )
    }
}