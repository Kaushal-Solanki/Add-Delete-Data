import React, { Component } from 'react';
import BigApp from './component/bigApp'
import AddBig from './component/addBig'


class App extends Component {
  state = {
    createData: [
      { username: 'Nitin', age: 26, designation: 'React Developer', id: 4 },
      { username: 'Gaurav', age: 26, designation: 'React developer', id: 5 },
      { username: 'Ankit', age: 28, designation: 'React Developer', id: 6 }
    ]
  }

  addData = (data) => {
    data.id = Math.random();
    let newData = [...this.state.createData, data]
    this.setState({
      createData: newData
    })

  }

  deleteData = (id) => {
    let dataDelete = this.state.createData.filter(deleteArr => {
      return deleteArr.id !== id
    })
    this.setState({
      createData: dataDelete
    })

  }
  render() {
    return (
      <div className="main">
        <h1>My Simple Application</h1>
        <BigApp deleteData={this.deleteData} data={this.state.createData} />
        <AddBig fetchData={this.addData} />
      </div>
    );
  }
}

export default App;
