const kakao = {
  imageLink: "images/kakao.jpg",
  title: "Kakao",
  deployedLink: "https://seulram.github.io/kakao-clone-2.0/",
  githubLink: "https://github.com/Seulram/kakao-clone-2.0",
  description:
    "HTML/CSS Online Bootcamp 2 weeks | HTML5, CSS3, Flexbox, Github",
  technologies: ["HTM5", "CSS3"],
};

const project = document.querySelector(".projects");

function makeImage() {
  const imageContainer = document.querySelector(".image__container");
  const image = document.createElement("img");
  image.src = kakao.imageLink;
  image.className = "image";
  imageContainer.appendChild(image);
}

function init() {
  const items = document.createElement("div");
  project.appendChild(items);
  items.className = "items";

  const imageContainer = document.createElement("div");
  const projectContainer = document.createElement("div");
  imageContainer.className = "image__container";
  projectContainer.className = "project__container";
  items.appendChild(imageContainer);
  items.appendChild(projectContainer);

  makeImage();
}

init();
