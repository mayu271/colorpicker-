import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#000000');
  const [previousColors, setPreviousColors] = useState([]);

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setPreviousColors([...previousColors, color]); // Store the current color before updating
    setColor(selectedColor); // Update to the new color
  };

  const handlePreviousColorClick = (prevColor) => {
    setColor(prevColor); // Set the clicked previous color as the current color
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Color Picker</h1>
      <input 
        type="color" 
        value={color} 
        onChange={handleColorChange}
        style={{ width: '100px', height: '100px', border: 'none', cursor: 'pointer' }} 
      />
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <p>Selected Color: <span style={{ fontWeight: 'bold' }}>{color}</span></p>
        <div>
          <h2>Previous Colors:</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {previousColors.map((prevColor, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <button
                  onClick={() => handlePreviousColorClick(prevColor)}
                  style={{
                    backgroundColor: prevColor,
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    width: '100px',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  {prevColor}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
