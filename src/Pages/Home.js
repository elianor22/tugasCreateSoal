import React, { Component } from 'react'
import CheckBox from '../components/CheckBox'
import FormControl from '../components/FormControl'
import Radio from '../components/Radio'
import TextArea from '../components/TextArea'

import {data} from '../model/Model'

export default class Home extends Component {
    render() {
        return (
            <div  className="container">
               
                <div className="row">
                    <div className="col-md-4 ">
                        <Radio />
                        <CheckBox />
                        <TextArea />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-md-6 ">
                        <FormControl />
                    </div>
                </div>
                
            </div>
        )
    }
}
