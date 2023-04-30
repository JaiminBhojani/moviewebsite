import React from 'react'
import MovieCard from '../components/Moviecard';
import styles from '../styles/common.module.css';

const Movie = async () => {

    // await new Promise(executorresolve=>setTimeout(resolve,timeout,2000));

    const url = process.env.RAPID_KEY;
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
    // console.log(data);
    const main_data = data.titles;


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.containes}>
                    <h1>Series And Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie
