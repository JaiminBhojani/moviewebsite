import Image from 'next/image';
import React from 'react'
import styles from '../../styles/common.module.css'

const Slug = async ({ params }) => {

    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '1a18e1ae39mshd76671fdc8c39f1p1b8691jsnf29ba146e20f',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;


    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default Slug
