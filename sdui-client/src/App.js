import React, { useState, useEffect } from 'react';
import DynamicComponent from './DynamicComponent';

function App() {
  const [uiConfig, setUiConfig] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/ui-config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        setUiConfig(data);
      })
      .catch((error) => console.error('Error fetching UI config:', error));
  }, []);

  if (!uiConfig) return <div>Loading...</div>;

  return (
    <div style={{ margin: '10rem' }}>
      {uiConfig.components.map((component, index) => (
        <DynamicComponent key={index} type={component.type} props={component.props} />
      ))}
    </div>
  );
}

export default App;
