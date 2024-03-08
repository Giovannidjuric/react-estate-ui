import './filter.scss';

const Filter = () => {

  return (
    <div className="filter">
        <h1>Search results for <b>London</b></h1>
        <div className='top'>
            <div className='item'>
                <label htmlFor="location">
                    Location
                </label>
                <input 
                    type="text" 
                    id="city"
                    name="city"
                    placeholder='City Location'
                    />
            </div>
        </div>
        <div className='bottom'>
        <div className='item'>
                <label htmlFor="type">
                    Type
                </label>
                <select name="type" id="type" defaultValue={"any"}>
                    <option value="any">any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor="property">
                    Property
                </label>
                <select name="property" id="property">
                    <option value="any">any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor="minPrice">
                    Min Price
                </label>
                <input type="number" min={0} max={10000000} placeholder='any'/>
            </div>
            <div className='item'>
                <label htmlFor="maxPrice">
                    Max Price
                </label>
                <input type="number" placeholder='any' name="maxPrice" id="maxPrice"/>
            </div>
            <div className='item'>
                <label htmlFor="bedroom">
                    Bedroom
                </label>
                <input type="text" placeholder='any' id="bedroom" name="bedroom"/>
            </div>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Filter