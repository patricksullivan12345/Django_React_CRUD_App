import React, { Component } from 'react';
import axios from 'axios';
import './createCSS.css';
import './background.css'

class Post extends Component {
  constructor(props) {
      super(props)

    this.state = {
      project_title: '',
      comment_body:'',
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

    axios.post("http://localhost:8000/list/post-list/",this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
          
      console.log('State 1 edited: ' + this.state.project_title);
      console.log('State 2 edited: ' + this.state.comment_body);
      console.log('Input data: ' + this.state.value);

      this.props.history.push('/');
      this.forceUpdate();

    }
  }

  render(){
    return (
      <div className="process_container">
        <form className="form_area" onSubmit={this.handleSubmit}>
            <h1 className="text_edits">Title</h1>
            <textarea className="textTitle" type="text" name="title" value={this.state.value} onChange={this.handleChange1}  placeholder="Please enter your title here..."/>
            <br></br>
            <h1  className="text_edits">Comment</h1>
            <textarea className="textArea" type="text" name="comment" value={this.state.value} onChange={this.handleChange2}  placeholder="Please enter your description of the title here..."/>
          <br></br>
          <button className="add_button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Post