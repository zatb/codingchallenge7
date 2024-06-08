//U36432650

//Implement Form Submission and Validation
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value.trim();

//Validate that all fields are filled out. If any field is empty, display an alert.
    if (name === '' || rating === '' || comments === '') {
        alert('Please fill out all fields.');
        return;
    }

 // Append the submitted feedback to the display area upon successful form submission.
 feedbackDisplay.appendChild(feedbackItem);

});
