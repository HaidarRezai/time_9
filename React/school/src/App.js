import Cart from "./div";
function App() {
  /*
  string
  number
  function
  array
  object
  boolean
  null/undefined
  */
  let obj = [
    {
      a: "Hello props",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "image/2.webp",
      images: ["image/pen.png", "image/profile.webp", "image/ocicoargo.webp"],
      btn: "Buy Now",
      price: 100,
      des: 100,
      al: function () {
        alert("Hello Props")
      },
      status: false,
      user_comment: [
        {
          name: "Ali",
          profile: "image/profile.webp",
          comment: "hello props nice to meet you"
        },
        {
          name: "Ahmed",
          profile: "image/ocicoargo.webp",
          comment: "Welcome to props"
        }
      ]
    },
    {
      a: "Hello react",
      p: "Id fugit praesentium magni mollitia .",
      img: "image/abcd.png",
      images: ["image/pen.png", "image/profile.webp", "image/ocicoargo.webp"],

      btn: "Add to cart",
      price: 300,
      des: 0,
      al: function () {
        alert("Hello React")
      },
      status: false,
      user_comment: [
        {
          name: "Ali",
          profile: "image/profile.webp",
          comment: "hello props nice to meet you"
        },
        {
          name: "Ahmed",
          profile: "image/ocicoargo.webp",
          comment: "Welcome to this page"
        }
      ]
    },
    {
      a: "Hello div",
      p: "Ea voluptates in velit impedit adipisci.",
      img: "image/bg.jpg",
      images: ["image/pen.png", "image/profile.webp", "image/ocicoargo.webp"],

      btn: "show Now",
      price: 250,
      des: 15,
      al: function () {
        alert("Hello Div")
      },
      status: false,
      user_comment: [
        {
          name: "Ali",
          profile: "image/profile.webp",
          comment: "hello props nice to meet you"
        },
        {
          name: "Ahmed",
          profile: "image/ocicoargo.webp",
          comment: "Welcome to props"
        }
      ]
    }
  ]
  return (
    <div className="w-[80%] grid grid-cols-3 gap-8 m-auto mt-[10vh]">
      {
        obj.map((i) => (
          <Cart status={i.status} a={i.a} p={i.p} img={i.img} btn={i.btn} al={i.al} price={i.price} des={i.des} images={i.images} user_comment={i.user_comment} />
        ))
      }
    </div>
  );
}

export default App;
// objects key value data p:lore
