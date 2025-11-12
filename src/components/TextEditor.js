import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor() {
    const [text, setText] = useState("");

    const handleChange = (content) => {
        setText(content);
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

    return (
        <div className="page-card space-y-4">
            <div>
                <h1 className="text-2xl font-bold text-neutral-800">Editor</h1>
                <p className="text-neutral-600">
                    Draft and format blog posts using the rich text editor below.
                </p>
            </div>
            <ReactQuill
                modules={modules}
                value={text}
                onChange={handleChange}
                className="bg-white text-black"
            />
        </div>
    );
}
