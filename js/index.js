let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header nav a");

//Notifikationer i början, som varnar om X problem
function notif() {
  // Check if the code has already played
  if (localStorage.getItem("codePlayed")) {
    return; // Exit the function if the code has already played
  }

  let x2 = document.querySelector("#myPopup2");
  x2.style.display = "block";
  let audio1 = new Audio("/attachment/Notif.mp3");
  audio1.play();

  setTimeout(() => {
    x2.style.display = "none";
  }, 5000);

  // Set the local storage flag to indicate that the code has played
  localStorage.setItem("codePlayed", true);
}

notif();
// Toggle the navbar and update the icon when the menu icon is clicked
menuIcon.onclick = () => {
  toggleNavbar();
};

// Add event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      toggleNavbar();
    }
  });
});

// Function to toggle the navbar and update the icon
function toggleNavbar() {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.classList.replace("bx-menu", "bx-expand-alt");
  } else {
    menuIcon.classList.replace("bx-expand-alt", "bx-menu");
  }
}

//---------------------------------Scroll sections active link ----------------------------------------//
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  let currentSection = "";

  // Update active navigation link
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      currentSection = id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
    }
  });

  // Update scrollbar
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";

  //---------------------------------Sticky Navbar ----------------------------------------//
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

//---------------------------------ScrollReveal ----------------------------------------//

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//---------------------------------Typed Js ----------------------------------------//

const profession = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Game Developer {Unreal X Unity}",
    "Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const myButton = document.getElementById("myButton");
const myPopup = document.getElementById("myPopup");
const closeBtn = document.querySelector(".close");

(function () {
  emailjs.init("8klebui6MpHSLYa6s");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve the form values
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var subject = document.getElementsByName("subject")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Prepare the template parameters
    var templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };
    var x;
    // Send the email using EmailJS
    emailjs.send("service_iskh108", "template_6fnoqjl", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        x = 1;
        setTimeout(() => {
          console.log("Clearing");
          location.reload();
          closeBtn.addEventListener("click", function () {
            myPopup.style.display = "none";
          });
        }, 2500);
        // Optionally, you can display a success message or redirect the user to a thank you page.
      },
      function (error) {
        console.log("FAILED...", error);
        x = 2;
        setTimeout(() => {
          console.log("Clearing");
          location.reload();
        }, 2500);
        // Optionally, you can display an error message to the user.
      }
    );
  });

function Facebook() {
  console.log("Send over to Facebook Page");
  window.open("https://www.facebook.com/me/");
}

function Instagram() {
  console.log("Send over to Instagram Page");
  window.open("https://www.instagram.com/furre_aka_furre/");
}

function Twitter() {
  window.open("https://twitter.com/CribJo");
}

function Reddit() {
  window.open("https://www.reddit.com/user/FurreModz/");
}

function DownloadCv() {
  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  // Start file download.
  download("Furkan - CV.txt", "HEJ DRA ÅT HELVETE");
}

if ((x = 1)) {
  myButton.addEventListener("click", function () {
    let audio1 = new Audio("/attachment/Sent.mp3");
    audio1.play();
    setTimeout(() => {
      myPopup.style.display = "block";
    }, 1000);
  });
}

//ReadMore Btns.

function toggleReadMore(className) {
  const description = document.querySelector("." + className);
  const button = description.nextElementSibling;

  if (description.classList.contains("expanded")) {
    description.style.maxHeight = "8rem";
    button.textContent = "Läs Mer";
  } else {
    description.style.maxHeight = description.scrollHeight + "px";
    button.textContent = "Läs Mindre";
  }

  description.classList.toggle("expanded");
}

function Shoppen() {
  //window.open("https://thejocrib.mysellix.io/");
}

window.addEventListener("DOMContentLoaded", function () {
  var videoPopup = document.getElementById("video-popup");
  var youtubeVideo = document.getElementById("youtube-video");

  videoPopup.classList.add("hidden");
  youtubeVideo.src = "";
  youtubeVideo.style.display = "none";
});

let popupDisplayed = false;

function AMV() {
  if (!popupDisplayed) {
    let x1 = document.querySelector("#myPopup1");
    x1.style.display = "block";
    let audio = new Audio("/attachment/Notif.mp3");
    audio.play();
    setTimeout(() => {
      x1.style.display = "none";
    }, 5000);

    popupDisplayed = true;
  }

  var videoPopup = document.getElementById("video-popup");
  var youtubeVideo = document.getElementById("youtube-video");

  if (videoPopup.classList.contains("hidden")) {
    videoPopup.classList.remove("hidden");
    youtubeVideo.src =
      "https://www.youtube.com/embed/YvTeNeRUG1Y?autoplay=1&controls=0&disablekb=1";
    youtubeVideo.style.display = "block";
  } else {
    videoPopup.classList.add("hidden");
    youtubeVideo.src = "";
    youtubeVideo.style.display = "none";
  }
}

function closeVideoPopup() {
  var videoPopup = document.getElementById("video-popup");
  var youtubeVideo = document.getElementById("youtube-video");

  videoPopup.classList.add("hidden");
  youtubeVideo.src = "";
  youtubeVideo.style.display = "none";
}

//Extra below noticication popup
function Yes() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  setTimeout(function () {
    popup.style.top = "0";
  }, 100);
  setTimeout(function () {
    hidePopup();
  }, 3000);
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.top = "-100px";
  setTimeout(function () {
    popup.classList.add("hidden");
  }, 500);
}
