import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ padding: 20, border: '2px solid red' }}>
      <Link to='/'>홈</Link>
      <br />
      <Link to='survey'>설문조사</Link>
      <br />
      <Link to='board'>게시판</Link>
      <br />
    </div>
  );
};

export default Header;
