import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

const title = 'Működik';

ReactDOM.render(
  <div>
    {title}
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
