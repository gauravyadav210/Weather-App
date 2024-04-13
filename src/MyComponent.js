import React, { useEffect, useState, useRef, setSearch } from 'react';
import './App.css'; //Here you can Import CSS file for styling
import WeatherApp from './WeatherApp';
export const cityName = []
function App() {
  const [locations, setLocations] = useState([]); // State to store locations from the site
  const [filteredLocations, setFilteredLocations] = useState([]); 
  const [page, setPage] = useState(1); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' }); 
  const loader = useRef(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=50`);
        const data = await response.json();
        // Update locations state with new data
        setLocations(prevLocations => [...prevLocations, ...data.results]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, [page]);

  useEffect(() => {
  
    const filtered = locations.filter(location =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredLocations(filtered);
  }, [searchQuery, locations]);

  useEffect(() => {
    if (sortConfig.key !== null) {
    
      const sortedLocations = [...filteredLocations].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setFilteredLocations(sortedLocations);
    }
  }, [sortConfig]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: '20px',
        threshold: 0.1,
      }
    );

    if (loader.current) {
      
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
      
        observer.unobserve(loader.current);
      }
    };
  }, []); 

  const handleSearchChange = event => {
    
    setSearchQuery(event.target.value);
  };

  const handleSort = key => {
    
    if (sortConfig.key === key) {
      setSortConfig({ ...sortConfig, direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSortConfig({ key, direction: 'asc' });
    }
  };

  const handleCityNameRightClick = (event, cityName) => {
    
    event.preventDefault();
    // Open weather page for the city in a new tab
    window.open(`https://openweathermap.org/find?q=${cityName}`, '_blank');
  };

  return (
    <div className="container">
      <h1>Locations</h1>
      <input
        type="text"
        placeholder="Search locations..."
        value={searchQuery}
        onChange={handleSearchChange}

      />
      <table>

        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>City Name</th>
            <th onClick={() => handleSort('cou_name_en')}>Country</th>
            <th onClick={() => handleSort('timezone')}>Timezone</th>
            {/* Add more column headers as needed */}
          </tr>
        </thead>

        <tbody>
          {filteredLocations.map(location => (
            <tr key={location.geoname_id}>
              <td
                onContextMenu={event => handleCityNameRightClick(event, location.name)}
              >
                <a href={`https://openweathermap.org/find?q=${location.name}`}>{location.name}</a>
              </td>
              <td>{location.cou_name_en}</td>
              <td>{location.timezone}</td>
              {/* Display more information in additional columns */}
            </tr>
          ))}
        </tbody>
      </table>
      <div ref={loader} className="loader">Loading...</div> {/* Loader element */}
    </div>
  );
}

export default App;


