



const container = document.querySelector(".profile-1");


function initializeCard(param = '') {
  let data = comGame.filter((item) => item?.p_name?.includes(param));
  let li = '';
  data.forEach((item) => {
    li += `<div class="info-profile">
       <img src="${item.img}" alt="${item.p_name}">
       <p class="name">Esther Adebanjo</p>
       <time>10:am</time>


       <div>
         <button class="join">
           Join
         </button>
       </div>

      </div> `;
  })

  container.innerHTML = li;
}



const profileCard = [
  {
    img: asset / img1.jpg,
    p_name: Esther + " " + Adebanjo,
  },

  {
    img: asset / img2.jpg,
    p_name: Boluwaji + " " + Adeko,
  },

  {
    img: asset / img3.jpg,
    p_name: Adedeji + " " + Okubanjo,
  },
];


initializeCard();


const searchBtn = document.querySelector(".search-bar");

