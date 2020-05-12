const headerItem = document.querySelectorAll(".header__item");

function click(event) {
  const text = event.target.innerText;
  if (text == "SKILLS") {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  } else if (text == "PROJECTS") {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  } else if (text == "HOME") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

function scroll() {
  const scroll = window.scrollY;

  if (scroll >= 1200 && scroll < 1800) {
    if (!headerItem[1].classList.contains("hover")) {
      headerItem[1].classList.add("hover");
    }
    if (headerItem[0].classList.contains("hover")) {
      headerItem[0].classList.remove("hover");
    }
    if (headerItem[2].classList.contains("hover")) {
      headerItem[2].classList.remove("hover");
    }
  } else if (scroll >= 1800) {
    if (!headerItem[2].classList.contains("hover")) {
      headerItem[2].classList.add("hover");
    }
    if (headerItem[0].classList.contains("hover")) {
      headerItem[0].classList.remove("hover");
    }
    if (headerItem[1].classList.contains("hover")) {
      headerItem[1].classList.remove("hover");
    }
  } else {
    if (!headerItem[0].classList.contains("hover")) {
      headerItem[0].classList.add("hover");
    }
    if (headerItem[2].classList.contains("hover")) {
      headerItem[2].classList.remove("hover");
    }
    if (headerItem[1].classList.contains("hover")) {
      headerItem[1].classList.remove("hover");
    }
  }
}

for (let index = 0; index < headerItem.length; index++) {
  headerItem[index].addEventListener("click", click);
}

window.addEventListener("scroll", scroll);
