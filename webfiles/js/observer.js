const guests = document.querySelectorAll(".guests-container article");
const parteners = document.querySelectorAll(".partners-container div");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  { threshold: 0.4 }
);

guests.forEach((guest) => observer.observe(guest));
parteners.forEach((partener) => observer.observe(partener));
