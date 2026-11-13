// ---------- Link placeholders ----------
// Paste your real URLs between the quotes. Leave a value empty ("")
// to keep the button as a non-navigating placeholder.
const LINKS = {
  admin: "https://habalgo-admin-jzs.vercel.app",        // e.g. "admin/login.html"
  riderLogin: "https://habalgo-login.vercel.app/#login"    // e.g. "rider/login.html"
};

document.addEventListener("DOMContentLoaded", () => {
  const adminBtn = document.getElementById("admin-btn");
  const riderLoginBtn = document.getElementById("rider-login-btn");
  const getStartedBtn = document.getElementById("get-started-btn");

  // Apply a link if one is set; otherwise block navigation and log a note.
  function connect(el, url, label) {
    if (!el) return;
    if (url) {
      el.setAttribute("href", url);
    } else {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(label + " link not connected yet.");
      });
    }
  }

  connect(adminBtn, LINKS.admin, "Admin");
  connect(riderLoginBtn, LINKS.riderLogin, "Rider Login");

  // Get Started: placeholder action
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      console.log("Get Started action not connected yet.");
    });
  }

  // "Register as a Rider" (.register-rider-btn) keeps an empty href on purpose.
});
