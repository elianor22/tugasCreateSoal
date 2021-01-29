import React, { Component } from 'react'

export default class Radio extends Component {
    render() {
        return (
            <div className="mt-3">
                <p> Soal 1</p>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Default radio
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Default checked radio
                </label>
                </div>
            </div>
        )
    }
}
