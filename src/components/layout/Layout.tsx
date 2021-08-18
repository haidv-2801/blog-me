import React from 'react';

const Layout: React.FC = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

export default Layout;
