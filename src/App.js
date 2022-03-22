import './App.css'
import React, { Component } from 'react'
import Bug from './Bug'
import BugEditor from './BugEditor'

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bugs: [
        {
          id: 1,
          title: "Cannot pickup smg",
          desc: "It's busted",
          severity: "B",
          status: "open",
          time_created: "2:23 PM 3/20/2022",
          time_updated: "5:30 PM 3/21/2022",
        },
        {
          id: 2,
          title: "Cannot heal",
          desc: "It's really busted",
          severity: "A",
          status: "open",
          time_created: "5:23 AM 1/20/2022",
          time_updated: "2:30 PM 2/21/2022",
        },
        {
          id: 3,
          title: "Player animation desyncs after taunt",
          desc: "Still busted",
          severity: "C",
          status: "in progress",
          time_created: "1:21 PM 2/18/2022",
          time_updated: "6:29 PM 8/21/2022",
        }
      ],
      currentBug: {
        id: 4,
        title: "New Bug",
        desc: "description",
        severity: "B",
        status: "open",
        time_created: "before",
        time_updated: "now",
      }
    }
  }

  updateCurrentBug = (e) => {
    const newData = { ...this.state }
    newData.currentBug[e.target.name] = e.target.value
    this.setState({ newData })
  }

  submitNewBug = (e) => {
    console.log('submit new bug')

    const newData = { ...this.state }
    const newBug = {
      id: this.state.currentBug.id,
      title: this.state.currentBug.title,
      desc: this.state.currentBug.desc,
      severity: this.state.currentBug.severity,
      status: this.state.currentBug.status,
      time_created: this.state.currentBug.time_created,
      time_updated: this.state.currentBug.time_updated,
    }
   
    newData.bugs.push(newBug)
    this.setState({ newData })
  }

  render() {
    return (
      <div className="App">

        <header>Bug Tracker</header>

        <main>
          <div className='Items'>
            {this.state.bugs.map(({ id, title, desc, severity, status, time_created, time_updated }, idx) => {
              return (
                <Bug
                  key={`bug-${idx}`}
                  id={id}
                  title={title}
                  desc={desc}
                  severity={severity}
                  status={status}
                  time_created={time_created}
                  time_updated={time_updated}
                />
              )
            })}
          </div>

          <div className='Editor'>
            <BugEditor
              key={`bug-${this.state.currentBug.id}`}
              id={this.state.currentBug.id}
              title={this.state.currentBug.title}
              desc={this.state.currentBug.desc}
              severity={this.state.currentBug.severity}
              status={this.state.currentBug.status}
              time_created={this.state.currentBug.time_created}
              time_updated={this.state.currentBug.time_updated}
              update={this.updateCurrentBug}
              submit={this.submitNewBug}
            />
          </div>
        </main>
      </div>

    )
  }
}

export default App