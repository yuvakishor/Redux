import React, { Component } from 'react'
import { connect } from 'react-redux'

class Yuva extends Component {
    state = {
        data1: []
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        this.setState({ data1: this.props.data.items })
    }

    render() {
        console.log(this.state.data1, "aaaaaaaaaaaaaaaaa")
        return (
            <div>
                {
                    this.state.data1 && this.state.data1.map((val) => (
                        <div key={val.id}>
                            <h3 style={{ color: "green" }}>{val.title}</h3>
                            <h3>{val.body}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }

}
export default connect(mapStateToProps, null)(Yuva);