// Окно формы обратной связи

var feedbackLink = document.querySelector(".feedback-btn");

if (feedbackLink) {
  var feedbackModal = document.querySelector(".feedback");
  var closeFeedbackModal = feedbackModal.querySelector(".modal-close-btn");
  var feedbackForm = feedbackModal.querySelector("form");
  var userName = feedbackModal.querySelector("[name=name]");
  var userEmail = feedbackModal.querySelector("[name=email]");
  var message = feedbackModal.querySelector("[name=message]");
  var isStorageOn = true;
  var savedName = "";
  var savedEmail = "";
  
  try {
    savedName = localStorage.getItem("name");
    savedEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageOn = false;
  }
  
  feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("open-modal");
    if (savedName) {
      userName.value = savedName;
      userEmail.focus();
    } else {
      userName.focus();
    }
    if (savedEmail) {
      userEmail.value = savedEmail;
      message.focus();
    }
  });
  
  feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !message.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя, email и текст сообщения");
    } else {
      if (isStorageOn) {
        localStorage.setItem("name", userName.value);
        localStorage.setItem("email", userEmail.value);
      }
    }
  });
  
  closeFeedbackModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("open-modal");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      if (feedbackModal.classList.contains("open-modal")) {
        feedbackModal.classList.remove("open-modal");
      }
    }
  });
}

// Окно карты

var mapLink = document.querySelector(".map");

if (mapLink) {
  var mapModal = document.querySelector(".big-map");
  var closeMapModal = mapModal.querySelector(".modal-close-btn");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("open-modal");
  });
  
  closeMapModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("open-modal");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      if (mapModal.classList.contains("open-modal")) {
        mapModal.classList.remove("open-modal");
      }
    }
  });
}

// Окно сообщения о добавлении товара в корзину

var toCartLinks = document.querySelectorAll(".buy-btn");
var cartLink = document.querySelector(".cart-btn");
var cartNotificationModal = document.querySelector(".cart-notification");
var closeCartNotificationModal = cartNotificationModal.querySelectorAll(".cart-notification-close");
var notEmptyCart = cartLink.classList.contains("not-empty");

for (i = 0; i < toCartLinks.length; i++) {
  toCartLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    // подсветка в хедере при добавлении товара в корзину
    if (!notEmptyCart) {
      cartLink.classList.add("not-empty");
    }
    cartNotificationModal.classList.add("open-modal");
  });
}

for (i = 0; i < closeCartNotificationModal.length; i++) {
  closeCartNotificationModal[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartNotificationModal.classList.remove("open-modal");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    if (cartNotificationModal.classList.contains("open-modal")) {
      cartNotificationModal.classList.remove("open-modal");
    }
  }
});

// Подсветка в хедере при добавлении товара в закладки

var toBookmarksLinks = document.querySelectorAll(".to-bookmarks-btn");
var bookmarksLink = document.querySelector(".user-bookmarks-btn");

if (!bookmarksLink.classList.contains("not-empty")) {
  for (i = 0; i < toBookmarksLinks.length; i++) {
    toBookmarksLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      bookmarksLink.classList.add("not-empty");
    });
  }
}
