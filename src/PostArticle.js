import axios from 'axios';
import { useEffect, useState } from 'react';
import { Article } from './Article';

export const PostArticle = () => {
    const [Publicaciones, setPublicaciones] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
    .then((response) => {
        setPublicaciones(response.data.data);
    })
    .catch((error) => {
        console.log(error);
    });
    }, [])
    return (
        <div>
            {Publicaciones.map(post => <Article key = {post.id} {...post}/> )}
        </div>
    )
}
