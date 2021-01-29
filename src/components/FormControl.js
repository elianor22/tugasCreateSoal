import React, { Component } from 'react'
import { data } from '../model/Model';

import Dropdown from './Dropdown'
import FormRadio from './form/formRadio'
import CheckBox from './CheckBox';

export default class FormControl extends Component {

    // constructor(props){
    //     super(props);

   
    // }
   


    

    render() {
        return (
            <form>
            <div className="box-container border rounded p-2">
                <div className="from-content">
                    <p>Crete quiz</p>
                    <Dropdown />
                    <FormRadio />
                    <CheckBox />
                </div>
                <button type="submit" className="btn btn-primary "> Submit</button>
            </div>

            
            </form>
        )
    }
}
