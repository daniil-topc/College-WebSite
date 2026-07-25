document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    `
    .about__image,
    .about__title,
    .about__text p,
    .about__button,
    .projects__title,
    .projects-card,
    .abilities__title,
    .abilities__item,
    .quotes__title,
    .quotes__card,
    .quotes__image,
    .game__title,
    .game__card,
    .sport__image,
    .sport__title,
    .sport__desc-title,
    .sport__desc p,
    .sport__btn,
    .goals__title,
    .goals__item
  `,
  );

  animatedElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  animatedElements.forEach((el) => observer.observe(el));

  const staggerGroups = [
    ".projects-card",
    ".abilities__item",
    ".quotes__card",
    ".game__card",
    ".goals__item",
  ];

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;

      el.addEventListener(
        "transitionend",
        () => {
          el.style.transitionDelay = "0s";
        },
        { once: true },
      );
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".header__nav-link");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.header__nav-link[href="#${entry.target.id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => navObserver.observe(section));

  document.querySelectorAll(".menu__item").forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("menu__toggle").checked = false;
    });
  });
});
