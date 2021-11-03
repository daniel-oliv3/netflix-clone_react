import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';


export default () => {

  useEffect(() => {
    const loadeAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadeAll();
  }, []);


  return (
    <div>
      Olá, Mundo!
    </div>
  );
}


