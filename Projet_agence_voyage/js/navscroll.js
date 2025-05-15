
    const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-[#D9D9D9]");
      nav.classList.add("shadow-[2px_4px_32px_5px_rgba(0,0,0,0.2)]");
    } else {
      nav.classList.remove("bg-[#D9D9D9]");
      nav.classList.remove("shadow-[2px_4px_32px_5px_rgba(0,0,0,0.2)]");
      nav.classList.add("bg-transparent");
    }
  });
