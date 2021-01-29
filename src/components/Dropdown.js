import React, { Component } from 'react'


export default class Dropdown extends Component {

    constructor(props){
        super(props);
        this.state = ["radio","checkbox"]
    }

    render() {
        return (
            <div>
            <select className="form-select" aria-label="Default select example">
                <option >Pilih Menu Soal</option>
                <option value="1">Soal Radio Button</option>
                <option value="2">Soal CheckBox</option>
                <option value="3">Soal TextArea</option>
                
            </select>
            </div>
        )
    }
}
