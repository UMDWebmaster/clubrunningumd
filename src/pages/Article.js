import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';
export default function Article(){
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() =>{
 
        setLoading(true);
        const form_data = new FormData()
        form_data.append('post_id',id);
        axios.post('https://marylandclubrunningblogapi.vercel.app/get_article',form_data)
        .then(response =>{
            setArticle(response.data);
            setLoading(false)
        } 
        )
        .catch(error => error.response)
    },[id])

   
    if(loading){
        return <p>loading...</p>
    }
        
    const {clicks,contents,date,post_id,title,writer_id} = article;
    const cleaned_content = DOMPurify.sanitize(contents);
        
    
    

    return(
        <>
           <div className="wallsmith w-full text-center">
      <h1 className="text-9xl text-yellow-300 bg-black font-bold">The Blog</h1>
      <a 
        href="#"
        className="text-white font-sans text-xl mt-2 inline-block"
      >
        Login
      </a>
    </div>
    <div className="article">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm text-yellow-500">
        By {writer_id} on {date}
      </p>
      <p className="text-gray-600 mt-2">Clicks: {clicks}</p>
      <hr className="my-4" />
      <div
        className="article-contents prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: cleaned_content }}
      ></div>
    </div>
        </>

    );
}