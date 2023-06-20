import React from 'react';

const HomePage = () => {
  const homePageInfo = [
    { title: 'Add contact', image: 'images/add.jpg' },
    { title: 'Search contact', image: 'images/search.jpg' },
    { title: 'Edit contact', image: 'images/edit.jpg' },
    { title: 'Delete contact', image: 'images/delete.jpg' },
  ];
  return (
    <div>
      <h1 className="title main-title">Your personal phonbook</h1>
      <p>Stop relying on memory - save phone numbers in a secure application</p>
      <img src="images/add.jpg" alt="444" width="310" height="160" />
      <ul>
        {homePageInfo.map(data => (
          <li key={data.title}>
            <p>{data.title}</p>
            <img
              src={data.image}
              alt={data.title}
              width="310"
              height="160"
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
