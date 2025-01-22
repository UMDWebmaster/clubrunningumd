import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function TextEditor(){
    const [text, setText] = useState('');

    const handleChange = (content, delta, source, editor) => {
        console.log(editor.getHTML())
    };
    
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    };
    

    return(
        <>
        <br></br>
        <br></br>
        
        <h1>Editor</h1>
      <label>Editor Content</label>
            <ReactQuill  modules={modules} value={text} onChange={handleChange} className="bg-white h-full"/>
        </>
    );

}