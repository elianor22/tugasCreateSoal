import React, { Component } from 'react'

export default class CheckBox extends Component {
    render() {
        return (
            <div className="mt-3">
                <p> Soal 2</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
            </div>
        )
    }
}
