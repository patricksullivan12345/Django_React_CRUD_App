import React, { Component } from 'react'
import axios from 'axios';
import './Get_all_CSS.css'
import './background.css'

class Get_all extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items:[],
        }

    }

    componentDidMount() {
        axios.get("http://localhost:8000/list/post-list")

            .then(res => {
                const items = res.data;
                this.setState({ items });
            })

    }

    link_edit = "#/edit/";

    
    render() {

        return (
            
            <div className="output_container">

                { this.state.items.map( (item,index) =>

                    <div key={index}>
                        <h3><a href= {this.link_edit.concat(item.id)}> {item.project_title} </a> </h3>
                    </div>

                )}

            </div>

        );

    }
}

export default Get_all