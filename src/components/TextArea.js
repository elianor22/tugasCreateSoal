import React, { Component } from 'react'

export default class TextArea extends Component {
    render() {
        return (
            <div className="mt-3">
                <p> Soal 3</p>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" name="textarea" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        )
    }
}
