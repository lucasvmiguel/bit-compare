import React from 'react';
import {Link} from 'react-router-dom';

const Categories = () => (
  <div className="padding-top-2 scrollmenu">
    <div className="center category-item">
      <Link to="/busca?conteudo=notebook">
        <img src="svgs/laptop.svg" className="width-3" alt="some-category"/>
        <p>Notebook</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=xbox">
        <img src="svgs/videogame.svg" className="width-3" alt="some-category"/>
        <p>Xbox</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=smarthphone">
        <img src="svgs/smartphone.svg" className="width-3" alt="some-category"/>
        <p>Smartphone</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=eletrodomestico">
        <img src="svgs/microwave.svg" className="width-3" alt="some-category"/>
        <p>Eletrodoméstico</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=ps4">
        <img src="svgs/videogame.svg" className="width-3" alt="some-category"/>
        <p>Playstation 4</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=geladeira">
        <img src="svgs/fridge.svg" className="width-3" alt="some-category"/>
        <p>Geladeira</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=jogos">
        <img src="svgs/videogame.svg" className="width-3" alt="some-category"/>
        <p>Jogos</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=tv">
        <img src="svgs/computer.svg" className="width-3" alt="some-category"/>
        <p>Televisão</p>
      </Link>
    </div>
    <div className="center category-item">
      <Link to="/busca?conteudo=2em1">
        <img src="svgs/laptop.svg" className="width-3" alt="some-category"/>
        <p>Computadores 2 em 1</p>
      </Link>
    </div>
  </div>
);

export default Categories;