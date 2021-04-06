const menu = [
    {
        name: "Vegetable Sandwich",
        price: "$15.99",
        img: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi libero pariatur praesentium facere voluptatum sed dolorum corrupti ex assumenda quis ea harum sequi animi itaque ad rerum aut molestias."
    },
    {
        name: "Pizza",
        price: "$19.99",
        img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi libero pariatur praesentium facere voluptatum sed dolorum corrupti ex assumenda quis ea harum sequi animi itaque ad rerum aut molestias."
    },
    {
        name: "Pancakes",
        price: "$14.99",
        img: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi libero pariatur praesentium facere voluptatum sed dolorum corrupti ex assumenda quis ea harum sequi animi itaque ad rerum aut molestias."
    },
    {
        name: "Hamburger",
        price: "$12.99",
        img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi libero pariatur praesentium facere voluptatum sed dolorum corrupti ex assumenda quis ea harum sequi animi itaque ad rerum aut molestias."
    },
    {
        name: "French Fries",
        price: "$8.99",
        img: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi libero pariatur praesentium facere voluptatum sed dolorum corrupti ex assumenda quis ea harum sequi animi itaque ad rerum aut molestias."
    }
]

const menuInBody = document.getElementById("menu");

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < menu.length; i++) {
        let htmlText = `<article class="menu-item">
        <img src="${menu[i].img}">
        <div class="header">
            <h2 class="name">${menu[i].name}</h2>
            <h2 class="price">${menu[i].price}</h2>
            <hr>
            <p>${menu[i].desc}</p>
        </div>
    </article>`;
        menuInBody.innerHTML += htmlText;
    }
    
});