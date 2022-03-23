import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from '../redux/actions'
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    const {title} = this.state

    if (!title.trim()) {
      return this.props.showAlert('A post cannot be without a title.')
    }
    
    const newPost = {
      title, id: Date.now().toString()
    }
    this.props.createPost(newPost)
    this.setState({title: ''})
  }

  onChangeInputHandler = (e) => {
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    return (
      <form className="mb-5" onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <label htmlFor="title" className="form-label">Post title</label>
        <input 
          type="text" 
          className="form-control mb-3" 
          id="title" 
          aria-describedby="emailHelp" 
          placeholder="Enter post title..." 
          value={this.state.title}
          name={'title'}
          onChange={this.onChangeInputHandler}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost, 
  showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)