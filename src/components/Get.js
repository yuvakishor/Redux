import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/postActions'
import {Link} from "react-router-dom"


class Get extends Component {
    state = {
        data1: []
    }
    componentDidMount() {
        this.props.fetchData()
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps)
        if (nextProps.data) {
            this.setState({ data1: nextProps.data })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                <Link to="connectGet" className="ml-5">click me</Link>
                </div>
                <div className="row">
                        {
                            this.state.data1 && this.state.data1.map((val) => 
                            (
                                <div key={val.id} className="col-md-3 mt-2">
                                    <div key={val.id} className="card">
                                        <div className="card-body">
                                            <p>{val.title}</p>
                                            <h4>{val.body}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>
               
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.items
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData())
})
export default connect(mapStateToProps, mapDispatchToProps)(Get);
