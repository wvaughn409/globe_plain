import ReactDOM from 'react-dom';
import Globe from 'react-globe.gl';

const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: i,
      city: `City ${i}`,
      coordinates: [Math.random() * 360 - 180, Math.random() * 180 - 90],
    });
  }
  return data;
};


const App = () => {

  
  const options = {
    enableClouds: true,
    cloudsOpacity: 0.4,
    cloudsResolution: 10,
    cloudsColor: 'white'
    
  };



  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      hexBinMerge={true}
      hexBinPointWeight="pop"
      hexBinResolution={4}
      {...options}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;