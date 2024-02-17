// Form.js

import React from 'react';

function TextBox() {
  return (
    <div>
      <label htmlFor="textbox">Enter your text:</label>
      <input type="text" id="textbox" name="textbox" />
    </div>
  );
}

export default TextBox;
