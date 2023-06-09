// ENABLE ALL OVERLAY POPOVERS ON THE SERVICE PAGE
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Loop through each popover element
popoverTriggerList.forEach((popover) => {
  // Initialize the popover instance and add {html: true} to render html in the popover body
  const instance = new bootstrap.Popover(popover, { html: true });

  // Set the content for each popover instance
  if (popover.id === 'popover1') {
    instance.setContent({
      '.popover-header': 'Dog Walking Price',
      '.popover-body': 'Regular rate: 5 euros per hour<br><br>Special rates for extended bookings available upon request.<br>Our dog walking services include:<ul><li>30-minute, 60-minute, and 90-minute walks</li><li>Pick-up and drop-off service</li></ul>'
    });
  } else if (popover.id === 'popover2') {
    instance.setContent({
      '.popover-header': 'Pet Sitting Price',
      '.popover-body': 'Regular rate: 20 euros a day<br><br>Discounts available for multiple pets and extended bookings. Our pet sitting services include:<ul><li>24/7 care and attention</li><li>Feeding, watering, and medication administration</li><li>Litter box and cage cleaning</li></ul>'
    });
  } else if (popover.id === 'popover3') {
    instance.setContent({
        '.popover-header': 'Puppy Care Price',
        '.popover-body': 'Regular rate: 25 euros a day<br><br>Contact us for more information on our puppy care packages. Our puppy care services include:<ul><li>Basic training and socialization exercises</li><li>Feeding, watering, and medication administration</li><li>Puppy-proofing and safety checks</li><li>Potty training and clean-up</li></ul>'

    });
  }
});

//CREATE AND SAVE THE SERVICE REQUEST OBJECT FROM THE FORM
function createObject() {
  // Retrieve form inputs
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail4').value;
  const phone = document.getElementById('inputPhone').value;
  const address = document.getElementById('inputAddress').value;
  const city = document.getElementById('inputCity').value;
  const breed = document.getElementById('inputBreed').value;
  const dogAge = document.getElementById('inputDogAge').value;
  const serviceType = document.getElementById('serviceType').value;
  const preferredTime = document.getElementById('inputTime').value;
  const preferredDate = document.getElementById('inputDate').value;

  // Create an object with the form data
  const formData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    city: city,
    breed: breed,
    dogAge: dogAge,
    serviceType: serviceType,
    preferredTime: preferredTime,
    preferredDate: preferredDate
  };

  // I USE THIS DATA IN THE NEXT CODEBLOCK IN SUCCESS MESSAGE AFTER FORM SUBMISSION
  return formData;
}

//4. SUCCESS MESSAGE PROMPT APPEARS when service request form is filled in and submitted successfully
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the form data
  const formData = createObject();
  
    const successAlert = document.getElementById('success-alert');
    successAlert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            Thank you ${formData.name.toUpperCase()}! Expect an email form us at ${formData.email.toUpperCase()} soon!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
});


//5. KEYUP EVENT to validate phone input in form
const phoneField = document.getElementById("inputPhone");
const submitButton = document.querySelector('button[type="submit"]');

phoneField.addEventListener("keyup", function(event) {
  // Validate the input and show error message
  if (!/^\+?\d{8,}$/.test(phoneField.value)) {
    document.getElementById("phone-error").textContent = "Please input a valid phone number";
  } else {
    document.getElementById("phone-error").textContent = "";
  }
});

//blocks the submission and shows an error message if invalid input (for now just phon input)
submitButton.addEventListener("click", function(event) {
  // Validate the phone field and prevent form submission if needed
  if (!/^\+?\d{8,}$/.test(phoneField.value)) {
    event.preventDefault();
    document.getElementById("input-error").textContent = "Cannot submit form with invalid inputs. Please check!";
  } else {
    document.getElementById("input-error").textContent = "";
  }
});

//6. BEFOREUNLOAD DOM EVENT asks user if they're sure they want to leave page
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});




