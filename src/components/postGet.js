import React, { Component } from 'react'
import { connect } from 'react-redux'

class postGet extends Component {
    state = {
        data1: []
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        this.setState({ data1: this.props.data })
    }
    render() {
        console.log(this.props.data, "data")
        return (
            <div>
                {
                    this.state.data1 && this.state.data1.map((val) => (
                        <div className="card" key={val.id}>
                            <div className="card-body">
                                <h3>{val.email}</h3>
                                <h3>{val.username}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.post
    }
}
export default connect(mapStateToProps)(postGet);
