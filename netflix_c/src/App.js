import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';


export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadeAll = async() => {
            // Pegando a lista TOTAL
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadeAll();
    }, []);

return (
    <div className="pages">
        <section className="lits">
            {movieList.map((item, key) => (
                <div>
                    {item.title}
                </div>
            ))}
        </section>
    </div>
);
}


