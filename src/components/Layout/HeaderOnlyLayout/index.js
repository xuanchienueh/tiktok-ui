import React from 'react';
import Header from '../components/Header';

function HeaderOnlyLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnlyLayout;
