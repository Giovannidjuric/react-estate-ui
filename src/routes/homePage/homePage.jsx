import './homePage.scss';
import SearchBar from '../../components/searchbar/SearchBar.jsx';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aperiam officiis similique distinctio magnam iusto, neque tenetur et veniam eum velit, 
            quis quibusdam cumque non ab maxime magni? Unde, qui odio!
          </p>
        <SearchBar />
        <div className="boxes">
          <div className="box">
            <h1>16+</h1>
            <h2>Years of experience</h2>
          </div>
          <div className="box">
            <h1>200+</h1>
            <h2>Awards won</h2>
          </div>
          <div className="box">
            <h1>1200</h1>
            <h2>Properties ready</h2>
          </div>
        </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage