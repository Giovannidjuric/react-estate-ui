import { useEffect, useState } from 'react';
import './SearchBar.scss';

const types = ['buy', 'rent'];

const SearchBar = () => {


    const [query, setQuery] = useState({
        'type': 'buy',
        'location': '',
        'minPrice': 0,
        'maxPrice': 0,
    })

    useEffect(() => {
        console.log(query);
    }, [query]);

    const switchType = (value) => {
        setQuery(prev => ({...prev, type: value}))
        
    }

  return (
    <div className='searchBar'>
        <div className='type'>
            {
                types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={type === query.type ? 'active' : ''}>{type}</button>
                ))
            }
        </div>
        <form action="">
            <input type="text" name="location" placeholder='City Location'/>
            <input type="number" name="minPrice" min={0} max={10000000} placeholder='Min Price'/>
            <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Max Pricr'/>
        <button>
            <img src="/search.png" alt="" />
        </button>
        </form>
    </div>
  )
}

export default SearchBar