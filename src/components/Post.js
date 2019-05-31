import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postData } from '../actions/postActions'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            username: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email,
            username: this.state.username
        }
        this.props.postData1(data)
        this.props.history.push({
            pathname:"/postGet"
        })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center mt-5">
                    <h2 style={{color:"green"}}>Post Form</h2>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="col-md-5 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-group" onSubmit={this.onSubmit}>
                                        <div>
                                            <label>Enter the Email:</label>
                                            <input type="email"
                                                className="form-control"
                                                placeholder="Enter the Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label>Enter the Name</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter the name"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-outline-primary btn-block" >Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state,"aaaaaaa")
    return {
        postData: state.post
    }
}
const mapDispatchToProps = (dispatch) => ({
    postData1: (data) => dispatch(postData(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Post);
