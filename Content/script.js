const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
};

document.getElementById("backToTopBtn").addEventListener("click", function() {
  event.preventDefault();
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
});


// Tampilkan tanggal hari ini di elemen "currentDate"
const currentDateElement = document.getElementById("currentDate");
const currentDate = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
currentDateElement.innerText = currentDate.toLocaleDateString(undefined, options);