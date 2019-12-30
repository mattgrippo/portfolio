//other stuff

(function () {
  "use strict";

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function () {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  // OffCanvass
  var offCanvass = function () {
    $("body").on(
      "click",
      ".js-fh5co-menu-btn, .js-fh5co-offcanvass-close",
      function () {
        $("#fh5co-offcanvass").toggleClass("fh5co-awake");
      }
    );
  };

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("#fh5co-offcanvass").hasClass("fh5co-awake")) {
          $("#fh5co-offcanvass").removeClass("fh5co-awake");
        }
      }
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
        if ($("#fh5co-offcanvass").hasClass("fh5co-awake")) {
          $("#fh5co-offcanvass").removeClass("fh5co-awake");
        }
      }
    });
  };

  // Magnific Popup

  var magnifPopup = function () {
    $(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      titleSrc: "title",
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is("img") ?
            openerElement :
            openerElement.find("img");
        }
      }
    });
  };

  var animateBoxWayPoint = function () {
    if ($(".animate-box").length > 0) {
      $(".animate-box").waypoint(
        function (direction) {
          if (direction === "down" && !$(this).hasClass("animated")) {
            $(this.element).addClass("bounceIn animated");
          }
        }, {
          offset: "75%"
        }
      );
    }
  };

  $(function () {
    magnifPopup();
    offCanvass();
    mobileMenuOutsideClick();
    animateBoxWayPoint();
  });
})();

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");

var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");

var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");

var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
};

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    modal.style.display = "none";
  }
});

modal.onclick = function () {
  modal.style.display = "none";
};

modal2.onclick = function () {
  modal2.style.display = "none";
};

modal3.onclick = function () {
  modal3.style.display = "none";
};

modal4.onclick = function () {
  modal4.style.display = "none";
};

modal5.onclick = function () {
  modal5.style.display = "none";
};