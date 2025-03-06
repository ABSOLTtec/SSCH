document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const mobileNavLinks = document.querySelector(".mobile-nav-links");

  menuButton.addEventListener("mouseenter", function () {
      mobileNavLinks.style.display = "flex";
  });

  menuButton.addEventListener("mouseleave", function () {
      setTimeout(() => {
          mobileNavLinks.style.display = "none";
      }, 500);
  });

  mobileNavLinks.addEventListener("mouseenter", function () {
      mobileNavLinks.style.display = "flex";
  });

  mobileNavLinks.addEventListener("mouseleave", function () {
      mobileNavLinks.style.display = "none";
  });
});
