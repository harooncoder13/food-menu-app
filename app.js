const restaurantMenu = [
  {
    title: " Biryani",
    price: 300,
    description: "Bohut tasty biryani",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs98mWzpqdzTefx6qdTN2X-Us2MFdhWA91Yi2guZaXw&s=10",
    category: "Lunch",
  },

  {
    title: " Korma",
    price: 350,
    description: "Bohut tasty qorma",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgRVXuiE74BrK4ydXoMTKENq8kwKcrjKgVCBxt08KQ&s",
    category: "Lunch",
  },

  {
    title: "Halwa puri",
    price: 400,
    description: "Bohut tasty Halwa puri",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MNa-w1qX3g-NBdIhnoIx_n25W_rOmeNDC-iuyta0dQ&s=10",
    category: "Breakfast",
  },

  {
    title: "Paaey",
    price: 450,
    description: "Bohut tasty paaey",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvXpOTJ2vZZWmoqP2eZjwLPFPQKiRqpIvOsG-Gz2jrg&s=10",
    category: "Breakfast",
  },

  {
    title: "Banana Milk Shake",
    price: 250,
    description: "Bohut tasty shake",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuPZLgrGbfQBoIQsdHwB8FScRNgTR_JXY1Gm7JP5UGQ&s=10",
    category: "Shakes",
  },
];

// const myMenuHtml = `  <div class="img">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs98mWzpqdzTefx6qdTN2X-Us2MFdhWA91Yi2guZaXw&s=10"
//           alt=""
//         />
//       </div>

//       <div class="title">
//         <h1>Biryani</h1>
//       </div>

//       <div class="price">
//         <p>300</p>
//       </div>

//       <div class="description">
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsam
//           nisi saepe perferendis perspiciatis earum assumenda magni eius
//           recusandae vitae, ullam eos minus aliquid, asperiores ratione fugit
//           quasi necessitatibus placeat!
//         </p>
//       </div>`;




menu()

function menu(category) {
      const myMenuHtmlForBody = restaurantMenu.filter(function(menu) {
        if(category) {
          return menu.category.toLowerCase() === category.toLowerCase()
        }else {
          return true
        }
      
     }).map(function (menu) {
  return myMenuHtml = `  <div class="img">
        <img
          src="${menu.imgUrl}"
          alt=""
        />
      </div>

      <div class="title">
        <h1>${menu.title}</h1>
      </div>

      <div class="price">
        <p>${menu.price}</p>
      </div>

      <div class="description">
        <p>
          ${menu.description}
        </p>
      </div>`;

      // return myMenuHtml;
});

document.querySelector('.foodItems').innerHTML = myMenuHtmlForBody.join(''); 
}