import React from 'react';
import { HomePageStyled } from './HomePage.styled';
import addImage from 'images/add.jpg';
import searchImage from 'images/search.jpg';
import editImage from 'images/edit.jpg';
import deleteImage from 'images/delete.jpg';

const HomePage = () => {
  const homePageInfo = [
    { title: 'Add contact', image: addImage },
    { title: 'Search contact', image: searchImage },
    { title: 'Edit contact', image: editImage },
    { title: 'Delete contact', image: deleteImage },
  ];
  return (
    <HomePageStyled>
      <h1 className="title main-title">Your personal phonbook</h1>
      <p className="slogan">
        Stop relying on memory - save phone numbers in a secure application
      </p>
      <ul className="info-list">
        {homePageInfo.map(data => (
          <li className="info-item" key={data.title}>
            <p className="info-title">{data.title}</p>
            <img
              className="info-image"
              src={data.image}
              alt={data.title}
              width="310"
              height="160"
            ></img>
          </li>
        ))}
      </ul>
    </HomePageStyled>
  );
};

export default HomePage;
