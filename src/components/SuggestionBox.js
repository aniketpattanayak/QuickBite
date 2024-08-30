import React, { useState } from 'react';

function SuggestionBox() {

  return (
    <div className="suggestion-box">
      <input
        type="text"
        className="suggestion-input"
        placeholder="Any suggestions? We will pass it on..."
      />
    </div>
  );
}

export default SuggestionBox;
