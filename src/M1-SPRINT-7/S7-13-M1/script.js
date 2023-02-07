const users = [
  {
    name: "Madalena",
    profile: "Admin",
    sector: "Administration",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Baltazar",
    profile: "User",
    sector: "Reception",
  },
  {
    name: "Carmen",
    profile: "Admin",
    sector: "Business",
  },
  {
    name: "Madalena",
    profile: "Admin",
    sector: "Administration",
  },
  {
    name: "Madalena",
    profile: "Admin",
    sector: "Administration",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Carmen",
    profile: "Admin",
    sector: "Business",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
  {
    name: "Rafael",
    profile: "User",
    sector: "Finance",
  },
];

function createCards(list) {
  let li = document.createElement("li");
  let name = document.createElement("p");
  name.innerText = `Name: ${list.name}`;
  let profile = document.createElement("p");
  profile.innerText = `Profile: ${list.profile}`;
  let sector = document.createElement("p");
  sector.innerText = `Sector: ${list.sector}`;
  li.append(name, profile, sector);

  return li;
}

function renderCards(list) {
  const userList = document.querySelector(".userList");
  for (let i = 0; i < list.length; i++) {
    if (
      list[i].profile.toLowerCase() == "admin" &&
      list[i].sector.toLowerCase() == "administration"
    ) {
      const render = createCards(list[i]);
      render.classList.add("adAd");
      userList.append(render);
    } else if (list[i].profile.toLowerCase() == "admin") {
      const render = createCards(list[i]);
      render.classList.add("admin");
      userList.append(render);
    } else {
      const render = createCards(list[i]);
      render.classList.add("user");
      console.log(list[i]);
      userList.append(render);
    }
  }
}
renderCards(users);
