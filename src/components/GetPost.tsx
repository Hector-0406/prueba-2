import { useState, useEffect } from 'react';
import { ResponseAPI } from '../api/client';
import { getPosts } from '../utils/getData';
import './estilos.css';

export const GetPost = () => {

    const [posts, setPosts] = useState<ResponseAPI[]>([])

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <>
            <h1>Get Post 👇</h1><br />
            <h2>posts list</h2>

            <div className='grid'>
                {
                    posts.map(post => (
                        <div key={post.marca} className='card' >
                            <p>Marca: {post.marca}</p>
                            <p>Modelo: {post.modelo}</p>
                            <p>Año: {post.año}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

