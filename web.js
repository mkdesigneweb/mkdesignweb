
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggle.textContent = '☀️ Mode clair';
    } else {
      toggle.textContent = '🌙 Mode sombre';
    }
  });

function toggleForm() {
  const form = document.getElementById("formulaireDevis");
  form.style.display = (form.style.display === "none") ? "block" : "none";
}