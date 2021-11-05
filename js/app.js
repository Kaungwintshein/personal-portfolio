new WOW().init();
$(".navbar-toggler").on("click", function () {
  let ariaExpend = $(this).attr("aria-expanded");
  if (ariaExpend == "false") {
    $(".my-nav").addClass("bg-primary");
  } else {
    $(".my-nav").removeClass("bg-primary");
  }
});

$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("show");
  if (result) {
    $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
  } else {
    $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
  }
});

let screenHeight = $(window).height();
$(window).scroll(function () {
  let currentPosition = $(this).scrollTop();
  if (currentPosition >= screenHeight - 200) {
    $(".my-nav").addClass("navbar-scroll");
  } else {
    $(".my-nav").removeClass("navbar-scroll");
    setActive("home");
  }
});

function setActive(current) {
  $(".nav-link").removeClass("current-section");
  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        let currentSectionId = $(this.element).attr("id");
        setActive(currentSectionId);
      }
    },
    {
      offset: "150px",
    }
  );

  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        let currentSectionId = $(this.element).attr("id");
        console.log(direction);
        console.log(currentSectionId);
        setActive(currentSectionId);
      }
    },
    {
      offset: "-150px",
    }
  );
}
navScroll();
