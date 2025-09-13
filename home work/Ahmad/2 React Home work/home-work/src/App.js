import Shop from './shopping cart/cart';
import './App.css';

function App() {
  let info = [
    {
      img: "img1.webp",
      des: "Lightweight running shoes with superior cushioning and breathable mesh upper",
      type: "Sport",
      off: "60",
      free: "Free",
      info: "New Balance 530 Gray",
      priceBefore: 180.99,
      btn: "Add to cart",
      btnFav: "Favorit"
    },
    {
      img: "img2.webp",
      des: "Lightweight running shoes with superior cushioning and breathable mesh upper",
      type: "Sport",
      off: "10",
      free: "Free",
      info: "Venum Elite Custom Boxhandschuhe",
      priceBefore: 180.99,
      btn: "Add to cart",
      btnFav: "Favorit"
    },
    {
      img: "img3.avif",
      des: "Lightweight running shoes with superior cushioning and breathable mesh upper",
      type: "Sport",
      off: "10",
      free: "Free",
      info: `UFC Khamzat Chimaev Champion`,
      priceBefore: 180.99,
      btn: "Add to cart",
      btnFav: "Favorit"
    }
  ];

  return (
    <div className='w-full h-screen flex justify-evenly p-15'>
      {
        info.map((i) => (
          <div className='w-[426px] h-[686px] p-5 bg-[#E6E6E6] rounded-[32px] flex justify-between'>
            <Shop data={i} />
          </div>
        ))
      }

    </div>
  )


}

export default App;
