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

//Upon form submission, dynamically create elements that will display the customer’s name, selected rating, and comments in the designated feedback display area.
const feedbackDisplay = document.getElementById('feedbackDisplay');
const feedbackItem = document.createElement('div');
feedbackItem.className = 'feedback-item';

const feedbackName = document.createElement('p');
feedbackName.textContent = `Name: ${name}`;
feedbackItem.appendChild(feedbackName);

const feedbackRating = document.createElement('p');
feedbackRating.textContent = `Rating: ${rating}`;
feedbackItem.appendChild(feedbackRating);

const feedbackComments = document.createElement('p');
feedbackComments.textContent = `Comments: ${comments}`;
feedbackItem.appendChild(feedbackComments);

//Append the submitted feedback to the display area upon successful form submission.
 feedbackDisplay.appendChild(feedbackItem);
 
});
