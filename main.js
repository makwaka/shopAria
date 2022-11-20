// items
const product = [
    {
        id: 1,
        title: 'Samsung Galaxy Z-Fold',
        category: 'smartphone',
        price: '210,000',
        img:"./images/z-fold.jpg",
        about: 'The Samsung Galaxy Z Fold 3 is a High-end premium fold device that comes with a solid build quality, a good long-lasting battery, and a good camera that is feature-packed.' ,
    },

    {
        id: 2,
        title: 'Tecno Camon 18 premier',
        category: 'smartphone',
        price: '28,000',
        img:"./images/Tecno-Camon-18-Premier-.png",
        about: "CAMON 18 Premier is powered by Helio MKT G96 chip and Octa-Core CPU, let your phone's performance take a leap forward, and you deserve a super smooth experience." ,
    },
    {
        id: 3,
        title: 'Apple Iphone 14',
        category: 'smartphone',
        price: '146,000',
        img:"./images/iphone14.jpg",
        about: "iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro. A15 Bionic, with a 5-core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultrafluid. An updated internal design delivers better thermal efficiency, so you can stay in the action longer." ,
    },
    {
        id: 4,
        title: 'Sony Xperia 10 plus',
        category: 'smartphone',
        price: '27,000',
        img:"./images/xperia.jpg",
        about: "Sony Xperia 10 Plus mobile was launched in February 2019. The phone comes with a 6.50-inch touchscreen display offering a resolution of 1080x2520 pixels.",
    },

    {
        id: 5,
        title: 'ASUS ZenBook Pro Duo',
        category: 'laptop',
        price: '354,999',
        img:"./images/asus.jpg",
        about: "ZenBook Pro Duo 15 OLED lets you get things done in style: calmly, efficiently, and with zero fuss. It's your powerful and elegant next-level companion for on-the-go productivity and creativity, featuring an amazing 4K OLED HDR touchscreen.",
    },
    {
        id: 6,
        title: 'HP EliteBook X360 1030-G2 Core i7',
        category: 'laptop',
        price: '57,000',
        img:"./images/hp.webp",
        about: "A top of the line that can process data very fast. I can also turn at an angle of 360 degrees enabling the user to have better view.",
    },
    {
        id: 7,
        title: 'HP Omen Gaming Laptop 15',
        category: 'laptop',
        price: '173,599',
        img:"./images/omen.webp",
        about: "Ultra-thin, ultra-light, and unbelievably powerful—the OMEN 15 Gaming Laptop packs high-performance graphics and processing power into a sleek design. Take your gaming anywhere and experience performance in a lightweight package. This OMEN gaming computer is equipped with an Intel i7 processor, 6 GB of dedicated graphics, and a 4-zone RGB-backlit keyboard with 26-key rollover anti-ghosting technology.",
    },

    {
        id: 8,
        title: 'Dell Latitude 7320, Intel Core i7',
        category: 'laptop',
        price: '221,599',
        img:"./images/dell.webp",
        about: "he Latitude 7320 Core i7 13.3” is a slim 13-inch metal slate with a brushed aluminum back panel and a flexible kickstand that reclines almost flat. The resulting form factor is practically identical to that of the Surface Pro 7 and Lenovo ThinkPad X12 Detachable. The fingerprint sensor conveniently is located on the back panel in the top-right corner.",
    },
    {
        id: 9,
        title: 'HP ProDesk 400 G7 MT, Intel Core i7 ',
        category: 'desktop',
        price: '138,000',
        img:"./images/desktop1.webp",
        about: "Power through your day with a high-performance 10th Gen Intel Core processor and options that include Intel Optane memory HDD storage and up to 64 GB of DDR4 memory.",
    },
    {
        id: 10,
        title: 'HP 290 G3 Microtower PC, i5',
        category: 'desktop',
        price: '64,000',
        img:"./images/desktop2.webp",
        about: "HP 290 G4 Microtower PC, Intel® Core™ i5-10500, 4 GB DDR4-2666 MHz RAM (1 x 4 GB) (2 DIMM), 1 TB 7200 rpm SATA HDD (Two 3.5″ (2.5″) HDD Internal drive bays), DOS, HP USB wired keyboard, USB wired optical mouse; 1 Year Warranty from Seller; Ports Front: 1 headphone/microphone combo, 4 SuperSpeed USB 5Gbps signaling rate.",
    },
    {
        id: 11,
        title: 'Lenovo V50t Gen 2-13IOB, Intel Core i7',
        category: 'desktop',
        price: '93,000',
        img:"./images/desktop3.webp",
        about: "The Lenovo V50t Gen 2 13IOB combines powerful processing with high-performing memory. It runs seamlessly and has a user-friendly interface, making faster boot times and system optimization a breeze to configure. With enhanced security and a wealth of ports, this easy-to-manage tower is sure to boost your productivity.",
    },
    {
        id: 12,
        title: 'Apple iMac with Retina 5K display Core i7',
        category: 'desktop',
        price: '93,000',
        img:"./images/desktop4.webp",
        about: "The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully designed, incredibly intuitive, and packed with powerful tools that let you take any idea to the next level. And the 27-inch model elevates the experience in every way, with a faster processor and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display.",
    },
];

// select from HTML
 const mainBoard = document.querySelector('.main-board');

//  When page or DOM loads

window.addEventListener('DOMContentLoaded', () => {
    displayItems(product);
    displayProductBtns();
});

// Show items
function displayItems(productItems){
    // for every item in the array above, 'dress'(return) it with the HTML 'clothing' or structure.
    let displayProducts = productItems.map((item) =>{

        return `<article class="product-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="product-info">
            <header>
            <h5>${item.title}</h5>
            <h5 class="price">${item.price}</h5>
            </header>
            <p class="product-text">${item.about}</p>
        </div>
    </article>`
    })
    // Join for same continous flow.
  displayProducts =  displayProducts.join('');
//   the main class inner HTML now show the items or the articles
  mainBoard.innerHTML = displayProducts;
}

// Iterate through the categories. If the category item is not has not been found yet when iterating, push or add it to the end of the category list. Thus there will be a list of only unique categories without repetition.
// The initial value is ['all']. currval is the first item. If we dont find an item in the category, add it to end of the accumulator(all) list and return the accumulator

function displayProductBtns() {
    const categories = product.reduce((accumulator, currVal) =>{
        if(!accumulator.includes(currVal.category)){
            accumulator.push(currVal.category);
        }
            return accumulator;
         },
        ['all']);

    // Now select the button box and all the buttons inside for filter functionality.

    const filterBox = document.querySelector('.filter-box');


    const categoryBtns = categories.map((category) =>{
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('');

    filterBox.innerHTML =categoryBtns;

    const filterBtns = filterBox.querySelectorAll('.filter-btn');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const productCategory = product.filter((productItem) =>{
        // If the productItem category is the same as the category that has been selected, return the productItem
        if(productItem.category === category){
            return productItem;
        }
    });
    // If the category is all, display amm product items, else display the specific category of button clicked.
    if(category === 'all'){
        displayItems(product);
    }else{
        displayItems(productCategory);
    }
        });
    });
}
