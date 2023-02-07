const data = [
  {
    id: 1,
    img: "./assets/accessory1.jpg",
    nameItem: "360° Dog Carrier",
    description:
      "This folding pet carrier for dogs features 360-degrees of mesh with a zippered entrance and panoramic sunroof. It is crafted with thermal heat retention technology, scratch-resistant ballistic nylon and a comfy Sherpa padding. This folding dog carrier is constructed with a sturdy PVC frame and collapses down to just four-inches. It is equipped with a handlebar for your convenience and a built-in leash holder for safety.",
    value: 42,
    addCart: "Add to Cart",
    tag: ["Accessories"],
  },
  {
    id: 2,
    img: "./assets/accessory2.jpg",
    nameItem: "Kangaroo Backpack",
    description:
      "This lightweight and spacious backpack is comfortable for both you and your furry friend. The soft padding behind the backpack straps distributes weight and helps reduce back pain. Your pet will travel in comfort as well—with mesh windows that provide consistent ventilation while offering great views. Now more quality time with your sidekick is yours, thanks to this durable, multi-functional carrier!",
    value: 69,
    addCart: "Add to Cart",
    tag: ["Accessories"],
  },
  {
    id: 3,
    img: "./assets/accessory3.jpg",
    nameItem: "Dog Sweater",
    description:
      "This gorgeous turtleneck sweater is chunky and snuggly soft, providing your pup with plenty of comfort! It has ribbed arm holes and a sculpted body shape that's grrr-eat for boy and girl doggies. This timeless, luxurious cable knit sweater can be worn outside to keep your buddy warm, or inside as a fashion fur-ward statement piece!",
    value: 40,
    addCart: "Add to Cart",
    tag: ["Accessories"],
  },
  {
    id: 4,
    img: "./assets/accessory4.jpg",
    nameItem: "Dog Raincoat",
    description:
      "This doggy raincoat is water-resistant to help keep your pup dry come drizzle or downpour, and it's fit with secure belly straps to ensure a snug fit—and a drier pooch. The built-in leash hole lets you attach a leash to a collar worn underneath the raincoat, so you can always be ready to dash. Plus, it's available in different sizes to fit pups of most proportions.",
    value: 30,
    addCart: "Add to Cart",
    tag: ["Accessories"],
  },
  {
    id: 5,
    img: "./assets/accessory5.jpg",
    nameItem: "Dog Parka",
    description:
      "This piece combines comfort and warmth with style. It features fur-esh colors, a tackable vegan fur-trimmed fleece hood, deep faux pockets, and contrast pocket-tabs, hood-tabs and piping for an extra pop! This water-repellent parka is adjustable thanks to the patented Elasto-Fit Technology, making it great for playtime or daily walks!",
    value: 58,
    addCart: "Add to Cart",
    tag: ["Accessories"],
  },
  {
    id: 6,
    img: "./assets/accessory6.jpg",
    nameItem: "Birthday Cake Hat",
    description:
      "Are you planning a birthday party for the special pup in your life? No celebration is complete without a birthday hat! This Birthday Cake Dog Hat is the perfect way to make sure your dog is picture-ready and knows that it is their special day! To make sure that your party pup's hat is secure, this hat has ear straps and an adjustable toggle that allows you to get a snug, perfect fit. It comes in an extra-small/small and medium/large size, which will fit dogs of most sizes.",
    value: 5,
    addCart: "Add to Cart",
    tag: ["Accessories"],
  },
  {
    id: 7,
    img: "./assets/toy1.jpg",
    nameItem: "Microwave Dinner Plush",
    description:
      "Let your dog play with their food with this retro puzzle toy! This TV dinner includes a tray and five plushy food toys with squeakers inside that grab your dog's attention and keep them thinking about how to dig their dinner surprises out of the base tray. So, while you enjoy the throwback look, they'll enjoy a more active mind and beat their boredom with a bit of puzzling fun.",
    value: 11,
    addCart: "Add to Cart",
    tag: ["Toys"],
  },
  {
    id: 8,
    img: "./assets/toy2.jpg",
    nameItem: "Mosquito Dog Toy",
    description:
      "This Mosquito Dog Toy is su-paw soft and cuddly, but durable enough to withstand rough play, too. Its bright colors and fun shape will appeal to both pups and pup parents. The puncture-proof squeakers help to keep your furbaby engaged and withstand even the most enthusiastic, playful dogs. A tough, durable liner is designed for rough play so your best friend can enjoy hours of fun with this toy. It's ideal for tugging, tossing and fetching.",
    value: 8,
    addCart: "Add to Cart",
    tag: ["Toys"],
  },
  {
    id: 9,
    img: "./assets/toy3.jpg",
    nameItem: "Volcano Hide & Seek",
    description:
      "Let the games begin! This plush puzzle toy comes with a soft volcano and six squeaky dinosaurs for some hide-and-seek fun. Stuff them in the volcano and watch your pup pull them out one by one. Puzzle games are a great way to prevent boredom, provide daily mental stimulation, and bond with your pooch. The squeakers really get your dog's attention, and the soft, snuggly textures are perfect for nap time, too.",
    value: 11,
    addCart: "Add to Cart",
    tag: ["Toys"],
  },
  {
    id: 10,
    img: "./assets/toy4.jpg",
    nameItem: "Grogu Plush",
    description:
      "Modeled after The Child—affectionately known as Baby Yoda by fans of The Mandalorian™ all over the world—this is positively the cutest plushie in the galaxy. This round plush toy, available only at Chewy, has a soft cover, plush stuffing, a squeaker inside and extra crinkle paper in his ears to remind your pup that play is The Way. Whether it's time for some fun and games like fetch or catch, or your pup just needs a good cuddle buddy, The Child is just the bounty of snuggly fun your dog has been waiting for!",
    value: 9,
    addCart: "Add to Cart",
    tag: ["Toys"],
  },
  {
    id: 11,
    img: "./assets/toy5.jpg",
    nameItem: "Forest Friends Plush",
    description:
      "Introduce your dog to a trio of new forest friends with this three-pack of fox, raccoon and squirrel toys straight from the woods! Not only are they just about the cutest toys around, they're stuffing-free for less mess if playtime gets a little rough, they have three squeakers inside so your pup can have all the loud fun they love, and they have crinkle paper in their big, bushy tails, too. Give one a squeak and toss it for a game of fetch or catch, or you can even hide them around the house and go on an adventure together to find all their best woodland buddies.",
    value: 9,
    addCart: "Add to Cart",
    tag: ["Toys"],
  },
  {
    id: 12,
    img: "./assets/toy6.jpg",
    nameItem: "Zebra Rope Toy",
    description:
      "Send your pup on a safari of fun! This zebra rope toy is made for everyday, interactive play—from fetch to catch and all other kinds of interactive games. With a knotted ball in the middle, four rope legs sticking out of the ball and a squeaky zebra head on top, this toy is made to keep your pup engaged in playtime and up for all the exercise they need.",
    value: 9,
    addCart: "Add to Cart",
    tag: ["Toys"],
  },
  {
    id: 13,
    img: "./assets/beds1.jpg",
    nameItem: "Orthopedic Dog Bed",
    description:
      "This ergonomically-designed bed provides therapeutic back and neck support with its unique contoured shape and features a plush sleep surface. It is made from medical-grade orthopedic foam for a soft, yet firm feel for a more restorative night's rest. The step-on design of this bed also makes it ideal for smaller, older or disabled pets.",
    value: 66,
    addCart: "Add to Cart",
    tag: ["Beds"],
  },
  {
    id: 14,
    img: "./assets/beds2.jpg",
    nameItem: "Bolster Dog Bed",
    description:
      "This Bolster Dog Bed helps support your furry friend for a solid night of snoozing! It features a low bolster design so your pal can easily step in and out of this comfy sleeping spot. The super-soft fabric creates a dreamy place for snuggling and the classic rectangle design looks good in any room of the house. And when it's time to clean up, just remove the supportive orthopedic insert and pop it into the washing machine. It's the paw-fect place for your best bud to get some quality nap time in!",
    value: 34,
    addCart: "Add to Cart",
    tag: ["Beds"],
  },
  {
    id: 15,
    img: "./assets/beds3.jpg",
    nameItem: "Sofa Dog Bed",
    description:
      "This Chesterfield-style sofa features velvet upholstery, nail head trim and a button-tufted back, with a solid foam cushion that'll support your bestie in luxury. Made with durable furniture-grade construction and vibration-absorbing feet for stability, it's designed to last, and fits pets up to 80 pounds.",
    value: 349,
    addCart: "Add to Cart",
    tag: ["Beds"],
  },
  {
    id: 16,
    img: "./assets/beds4.jpg",
    nameItem: "2-in-1 Honeycomb Bed",
    description:
      "This versatile design offers 360-degree cozy foam hut coverage for those moments when she would love a little alone time. For more social settings, press down the top and the hut transforms into a convenient and comfortable bed! This hut is paw-fect for both cats and small dogs and comes with a separate cushion that's easy to remove for quick clean up. The bed's exterior is crafted with lightweight, luxurious micro plush that'll have your girl feeling like she's lounging on a comfy cloud!",
    value: 29,
    addCart: "Add to Cart",
    tag: ["Beds"],
  },
  {
    id: 17,
    img: "./assets/beds5.jpg",
    nameItem: "Canopy Dog Bed",
    description:
      "For sunbathing without the glaring rays, drop the canopy curtains for some coverage, or tie them back for a nice view of the sunset and a refreshing breeze. The stylish base is made of synthetic rattan that's perfect for the outdoors, and the canopy is supported with sturdy PVC and iron. An included waterproof cushion can be removed for cleaning by hand. Elevate your pet's style and comfort with the canopy bed of their dreams",
    value: 157,
    addCart: "Add to Cart",
    tag: ["Beds"],
  },
  {
    id: 18,
    img: "./assets/beds6.jpg",
    nameItem: "Fluffy Dog Bed",
    description:
      "The round design creates a protective atmosphere, while the bolstered edge gives additional orthopedic support and serves as a paw-sitively purr-fect headrest. Unique insulation layer radiates warmth from your pet's own body heat. It's machine washable, dryer-safe and comes in a soft faux-shag material that will keep your pal warm, cozy and comforted.",
    value: 34,
    addCart: "Add to Cart",
    tag: ["Beds"],
  },
];

let checkout = [];

function createCards(list) {
  let li = document.createElement("li");
  li.classList.add("li");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");
  let img = document.createElement("img");
  img.src = list.img;
  img.alt = list.nameItem;
  img.classList.add("img-card");
  let tag = document.createElement("p");
  tag.classList.add("tag");
  tag.innerText = list.tag;
  let title = document.createElement("p");
  title.classList.add("name");
  title.innerText = list.nameItem;
  let desc = document.createElement("p");
  desc.classList.add("desc");
  desc.innerText = list.description;
  let price = document.createElement("p");
  price.classList.add("price");
  if (list.value % 1 == 0) {
    price.innerText = `$ ${list.value},00`;
  } else {
    price.innerText = `$ ${list.value}`;
  }
  let addCart = document.createElement("button");
  addCart.classList.add("add-cart");
  addCart.innerText = list.addCart;
  addCart.setAttribute("onclick", `addItem(${list.id})`);
  imgDiv.append(img);
  li.append(imgDiv, tag, title, desc, price, addCart);

  return li;
}

function renderCards(list) {
  let itemsList = document.querySelector(".items-list");
  itemsList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const render = createCards(list[i]);
    itemsList.append(render);
  }
}

function filter(tag) {
  if (tag.toLowerCase() == "all") {
    renderCards(data);
  } else {
    let filtered = data.filter(function (element) {
      return element.tag[0].toLowerCase().includes(tag.toLowerCase());
    });
    renderCards(filtered);
  }
}

function search() {
  const searchResult = document.querySelector(".search-input").value;
  let filtered = data.filter(function (element) {
    return element.nameItem.toLowerCase().includes(searchResult.toLowerCase());
  });
  let search = document.getElementById("search-input");
  search.value = "";
  renderCards(filtered);
}

function addItem(id) {
  let item = data.find(function (product) {
    return product.id == id;
  });
  if (item) {
    checkout.push(item);
    renderCardsCheckout(checkout);
  }
}

function createCardsCheckout(list) {
  let li = document.createElement("li");
  li.classList.add("li-small");
  let imgDivSmall = document.createElement("div");
  imgDivSmall.classList.add("img-div-small");
  let img = document.createElement("img");
  img.src = list.img;
  img.alt = list.nameItem;
  img.classList.add("img-card");
  let div2 = document.createElement("div");
  let title = document.createElement("p");
  title.classList.add("title-small");
  title.innerText = list.nameItem;
  let price = document.createElement("p");
  price.classList.add("price-small");
  if (list.value % 1 == 0) {
    price.innerText = `$ ${list.value},00`;
  } else {
    price.innerText = `$ ${list.value}`;
  }
  let removeCart = document.createElement("button");
  removeCart.classList.add("button-small");
  removeCart.innerText = "Remove Item";
  removeCart.setAttribute("onclick", `removeItem(${list.id})`);
  div2.append(title, price, removeCart);
  imgDivSmall.append(img);
  li.append(imgDivSmall, div2);

  return li;
}

function renderCardsCheckout(list) {
  let itemsList = document.querySelector(".checkout-body");
  itemsList.innerHTML = "";
  if (list.length > 0) {
    itemsList.classList.add("full-list");
    itemsList.classList.remove("empty-list");
    let ul = document.createElement("ul");
    ul.classList.add("checkout-ul");
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      const render = createCardsCheckout(list[i]);
      ul.append(render);
      sum += list[i].value;
    }
    let div1 = document.createElement("div");
    div1.classList.add("checkout-div");
    let quantity = document.createElement("p");
    quantity.innerHTML = `Quantity: <span>${list.length}</span>`;
    quantity.classList.add("checkout-card");
    let total = document.createElement("p");
    total.classList.add("checkout-card");
    if (sum % 1 == 0) {
      total.innerHTML = `Total: <span>$ ${sum},00</span>`;
    } else {
      total.innerHTML = `Total: <span>$ ${sum}</span>`;
    }
    div1.append(quantity, total);
    itemsList.append(ul, div1);
  } else {
    itemsList.classList.add("empty-list");
    itemsList.classList.remove("full-list");
    let empty = document.createElement("p");
    empty.classList.add("empty1");
    empty.innerText = "Empty Cart";
    let empty2 = document.createElement("p");
    empty2.classList.add("empty2");
    empty2.innerText = "Add Items";
    itemsList.append(empty, empty2);
  }
}

function removeItem(id) {
  let item = checkout.findIndex(function (product) {
    return product.id == id;
  });
  if (item != -1) {
    checkout.splice(item, 1);
    renderCardsCheckout(checkout);
  }
}

renderCards(data);
renderCardsCheckout(checkout);
