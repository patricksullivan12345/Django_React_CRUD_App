import React, { Component } from 'react'
import axios from 'axios';
import './background.css'
import './createCSS.css'
import './editCSS.css'


class Edit extends Component {
    
    constructor(props) {
        super(props)
  
      this.state = {
        project_title: '',
        comment_body:'',
        items:[],
      }
  
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
  
    }

    handleChange1(event) {
        this.setState({project_title: event.target.value});
    }

    handleChange2(event) {
      this.setState({comment_body: event.target.value});
    }

    handleSubmit = (event) => {

      if( this.state.project_title === "" ){

        alert("Do not submit blank fields. Please try again.");

      } else if ( this.state.comment_body === "" ) {

        alert("Do not submit blank fields. Please try again.");

      } else {

        axios.put(`http://localhost:8000/list/post-detail/${this.id}/`,this.state)
          .then(res => {
            console.log(res);
            console.log(res.data);
            }
          )
          .catch(err => {
            console.log(err);
            }
        )
    
          console.log('State 1 edited: ' + this.state.project_title);
          console.log('State 2 edited: ' + this.state.comment_body);
          console.log('Input data: ' + this.state.value);

          this.props.history.push('/');

        }
      }

      handleDelete = () => {

        axios.delete(`http://localhost:8000/list/post-detail/${this.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          }
        )
        .catch(err => {
          console.log(err);
          }

      )

        this.props.history.push('/delete');

      }

      componentDidMount() {

        axios.get(`http://localhost:8000/list/post-detail/${this.id}`)
  
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })

      }

      id =  (window.location.href).split("/").pop()

      render(){

        return (

          <>
            <div className = "process_container">
              <div className= "description">
                <h2 className = "text_edits" >{this.state.items.project_title}</h2>
                <h4 className = "text_edits">{this.state.items.comment_body}</h4>
              </div>
            </div>
  
            <div className = "process_container">
              <form className="form_area" onSubmit={this.handleSubmit}>

                <h1 className="text_edits">Title Edit</h1>
                  <textarea className="textTitle" type="text" name="title" value={this.state.value} onChange={this.handleChange1} placeholder="Please edit your title here..."/> 
                  <br></br>
                <h1  className="text_edits">Comment Edit</h1>
                  <textarea className="textArea" type="text" name="comment" value={this.state.value} onChange={this.handleChange2} placeholder="Please enter your description of the title here..."/>
                <br></br>
                <button className="add_button" type="submit">Update</button>
                <button  className = "delete_button" type="submit" onClick={this.handleDelete}>Delete</button>
              </form>
            </div>
          </>
          
        )
      
  }
}

export default Edit