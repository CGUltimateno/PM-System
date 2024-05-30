document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const reason = document.getElementById('reason').value;

  // Validate phone number format
  const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number (e.g., 123-456-7890).');
    return;
  }

  // Display success message
  document.getElementById('message').innerText = `Thank you, ${name}. Your appointment is scheduled for ${date} at ${time}.`;

  // Clear the form
  document.getElementById('appointmentForm').reset();
});
