import React, { Component } from 'react';
import '../css/App.css';
import    TodoCard from './TodoCard.js';

class App extends Component {
  render() {
    return (

      <div className="container-fluid">
          <div className="row div-center">
            <div className="col-xs-12">
              <p className="text-center app-title">TODO APP</p>
                 <div className="row">
                   <div className="col-xs-12 text-center">
                     <p> Click <strong>CREATE BUTTON</strong> to create new Todo List
                        <a className="btn btn-raised btn-primary create-btn">CREATE
                          <div className="ripple-container"></div>
                        </a>
                     </p>
                    </div>
                 </div>
              </div>
            </div>

            <TodoCard/>
     </div>

    );
  }
}

export default App;
