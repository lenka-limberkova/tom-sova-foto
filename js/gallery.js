// Filtrování pomocí tlačítek
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

function applyFilter(filter, btn) {
  filterBtns.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  items.forEach(item => {
    if (item.classList.contains(filter)) {
      if (item.classList.contains("gallery")) {
        item.style.display = "flex";
      } else {
        item.style.display = "block";
      }
    } else {
      item.style.display = "none";
    }
  });
}

// Kliknutí na tlačítka
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    applyFilter(filter, btn);
  });
});

// --- Výchozí nastavení ---
// najdi tlačítko pro fotografie (data-filter="foto")
const defaultBtn = document.querySelector('.filter-btn[data-filter="foto"]');
if (defaultBtn) {
  applyFilter("foto", defaultBtn);
}