//3 Scripts: SMOOTH SCROLL, GOOGLE MAPS, CHANGE CLASS

//SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//CHANGE CSS CLASS IN HTML
	$(document).scroll(function() {
	var swap_class = document.getElementById("change_class");

	   if($(window).scrollTop() === 0) {
	     swap_class.classList.remove("menu_color_change");
	   } else {
	   		swap_class.classList.add("menu_color_change");
	   	}
	});

//GOOGLE MAPS
 function initMap() {
            // Coordinates of Avore Beach, Portugal
            var avoreBeach = { lat: 41.330245, lng: -8.737748 };  

            // Create a new map centered on Avore Beach
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,  // Zoom level
                center: avoreBeach,  // Center map at Avore Beach
            });

            // Custom marker icon (you can replace this URL with your own icon)
            var customIcon = {
                url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',  // Custom icon URL
                scaledSize: new google.maps.Size(50, 50),  // Scale the icon
            };

            // Add a marker with a custom icon at Avore Beach
            var marker = new google.maps.Marker({
                position: avoreBeach,
                map: map,
                title: 'DeepBlue, Portugal',
                icon: customIcon,  // Set the custom icon
            });
        }

var popup = document.getElementById("popup-form");
var openPopupBtn = document.getElementById("open-popup");
var closePopupBtn = document.getElementById("close-popup");
var body = document.body;
var backgroundContent = document.getElementById("background-content");

// Open the popup when the button is clicked
openPopupBtn.onclick = function() {
    popup.style.display = "flex";
    body.classList.add('popup-active');
    backgroundContent.classList.add('content-block'); // Disable background content interactions
}

// Close the popup when the close button is clicked
closePopupBtn.onclick = function() {
    popup.style.display = "none";
    body.classList.remove('popup-active');
    backgroundContent.classList.remove('content-block'); // Re-enable background content interactions
}

// Close the popup when the user clicks outside the form
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        body.classList.remove('popup-active');
        backgroundContent.classList.remove('content-block'); // Re-enable background content interactions
    }
}


function validateForm() {
  // Get form values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Simple email validation regex
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get error message elements
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  // Validation flags
  var isValid = true; // Assume form is valid

  // Validate name
  if (name === "") {
      nameError.style.display = "block"; // Show error if name is empty
      isValid = false; // Set valid flag to false
  } else {
      nameError.style.display = "none"; // Hide error if valid
  }

  // Validate email
  if (!emailPattern.test(email)) {
      emailError.style.display = "block"; // Show error if email is invalid
      isValid = false; // Set valid flag to false
  } else {
      emailError.style.display = "none"; // Hide error if valid
  }

  // Validate message
  if (message === "") {
      messageError.style.display = "block"; // Show error if message is empty
      isValid = false; // Set valid flag to false
  } else {
      messageError.style.display = "none"; // Hide error if valid
  }

  // If all fields are valid, open email client
  if (isValid) {
      sendEmail(name, email, message); // Only call sendEmail() if form is valid
  }
}

// Function to open email client with pre-filled form data
function sendEmail(name, email, message) {
  // Construct mailto link
  var subject = encodeURIComponent("New Contact Us Message from " + name);
  var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
  var mailtoLink = "mailto:xutabesa@zohomail.eu?subject=" + subject + "&body=" + body;

  // Open the user's email client with pre-filled data
  window.location.href = mailtoLink;
}