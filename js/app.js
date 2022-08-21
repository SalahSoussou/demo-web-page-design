let togel = false;
links.onclick = () => {
  togel = !togel;
  menuIcon.classList.add(togel ? "fa-times" : "fa-bars");
  menuIcon.classList.remove(togel ? "fa-bars" : "fa-times");
  navUl.style.display = togel ? "block" : "none";
};
