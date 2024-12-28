import { useState, useEffect } from 'react'
import './components/Card'
import './App.css'
import Card from './components/Card';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap gap-3'>
      {console.log(data)}
      {data? (data.map((v) => (
                <Card key={v} url={`https://picsum.photos/id/${v.id}/200/300`}  title={v.title} id={v.id}/>
        ))):(
          <div>Loading ...</div>
        )
      }
   
    </div>
  );
}

export default App
