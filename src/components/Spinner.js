import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm text-centre" style={{width: "1rem", height: "1rem"}} role="status" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
