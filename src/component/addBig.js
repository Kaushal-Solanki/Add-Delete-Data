import React, { Component } from 'react'


class AddBig extends Component {
    state = {
        username: null,
        age: null,
        designation: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchData(this.state)
        this.setState({
            username: '',
            age: '',
            designation: ''
        })

    }
    render() {
        const { username, age, designation } = this.state
        return (
            <div>
                <form className='fmNew' onSubmit={this.handleSubmit}>
                    <p><span style={{ width: '100px', display: 'inline-block' }}>Name:</span><input type='text' name='username' value={username} onChange={this.handleChange} /></p>
                    <p><span style={{ width: '100px', display: 'inline-block' }}>Age:</span><input type="number" name='age' value={age} onChange={this.handleChange} /></p>
                    <p><span style={{ width: '100px', display: 'inline-block' }}>Designation:</span><input type='text' name='designation' value={designation} onChange={this.handleChange} /></p>
                    <p><button className="submit-btn">Submit</button></p>
                </form>
            </div>
        )
    }
}

export default AddBig;