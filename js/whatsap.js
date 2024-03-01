function sendMessage() {
  // Get form data
  var name = document.getElementById("name").value;
  var serviceType = document.getElementById("serviceType").value;
  var date = document.getElementById("date").value;

  // Construct message
  var message = "Service Enquiry:\nName: " + name + "\nService Type: " + serviceType + "\nDate of Service: " + date;

  // Construct WhatsApp URL
  var phoneNumber = "919074915435"; // Replace with your WhatsApp number
  var encodedMessage = encodeURIComponent(message);
  var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  // Open WhatsApp with pre-filled message
  window.location.href = whatsappURL;

  return false; // Prevent form submission
}