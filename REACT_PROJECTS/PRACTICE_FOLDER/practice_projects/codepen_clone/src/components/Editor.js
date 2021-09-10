import React ,{useState} from 'react'
//style for text editor
import 'codemirror/lib/codemirror.css'
//theme css
import 'codemirror/theme/material.css'
//all languages we use import html
import 'codemirror/mode/xml/xml'
//javascripts import
import 'codemirror/mode/javascript/javascript'
//css import
import 'codemirror/mode/css/css'

//import text editor

import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props){


    const {
        language,
        displayName,
        value,
        onChange
    } = props

    const [open,setOpen] = useState(true)


    function handleChange(editor,data,value){
        onChange(value)
    }

    return(
        <div className={`editor-container ${open?'':'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button 
                type="button"
                className="expand-collapse-btn"
                onClick={()=>setOpen(prevOpen => !prevOpen)}>
                    {open?'—': '⤢'}
                    </button>
            </div>

            <ControlledEditor
            //similar to onchange in js
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                theme:"material",
                lineNumbers:true
            }}
            />
        </div>
    )
}