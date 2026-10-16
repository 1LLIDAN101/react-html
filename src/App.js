/// -- САЙТ С КАРТОЧКАМИ ДЛЯ СЕБЯ    -- https://www.figma.com/design/kGpqWpF5lrCUn51IqRJWUg/Ecommerce-Website-Design--Community-?node-id=0-1&p=f&t=59JMTgXqrs2qzVAD-0
import { phones } from "./cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="left">
          <img src="./images/burger.png" className="burger" />
          <span>MegaMart</span>
        </div>
        <div className="middle">
          <img src="./images/Search.png" className="search-input" />
          <input placeholder="Search essentials, groceries and more..." />
          <img src="./images/burger.png" className="burger-input" />
        </div>

        <div className="right">
          <img src="./images/user.png"></img>
          <span>SIGN IN / CART</span>
          <br></br>
          <img src="./images/buy.png"></img>

          <span>BUY</span>
        </div>
      </header>
      <div className="main-cards">
        <div className="main-btns">
          <div>
            <span>Groceries</span>
            <img src="./images/main-btn1.png" />
          </div>

          <div>
            <span>Premium Fruits</span>
            <img src="./images/main-btn2.png" />
          </div>

          <div>
            <span>Home & Kitchen</span>
            <img src="./images/main-btn2.png" />
          </div>

          <div>
            <span>Electronics</span>
            <img src="./images/main-btn2.png" />
          </div>

          <div>
            <span>Beauty</span>
            <img src="./images/main-btn2.png" />
          </div>

          <div>
            <span>Home Improvement</span>
            <img src="./images/main-btn2.png" />
          </div>

          <div>
            <span>Sports, Toys & Luggage</span>
            <img src="./images/main-btn2.png" />
          </div>
        </div>

        <div className="main-banner">
          <div className="banner-text">
            <p>Best Deal Online on smart watches</p>
            <h1>SMART WEARABLE.</h1>
            <p>UP to 80% OFF</p>
            <img src="./images/dots.png" />
          </div>

          <img src="./images/watch.png" className="banner-watch" />
          <div className="arrows">
            <div className="arrow-left">
              <img src="./images/arrow-left.png" />
            </div>
            <div className="arrow-right">
              <img src="./images/arrow-right.png" />
            </div>
          </div>
        </div>
        {/* выва */}

        <div className="phones">
          <div className="txt-top">
            <h2>
              Grab the best deal on <span>Smartphones</span>
              <br></br>
              <br></br>
              <span>View All</span>
            </h2>
          </div>

          <div className="cards">
            {phones.map((phone) => (
              <div className="card ">
                <div className="card-img">
                  <span>{phone.sale}</span>
                  <img src={phone.img} />
                </div>
                <p>{phone.name}</p>
                <span>{phone.price}</span>
                <span className="oldPrice">{phone.old}</span>

                <span className="save">Save - {phone.save}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
