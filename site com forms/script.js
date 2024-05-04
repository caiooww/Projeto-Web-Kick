const movieList = document.getElementById('movie-list');
const reviewForm = document.getElementById('review-form');
const submitReviewButton = document.getElementById('submit-review');

let movieReviews = [];

// function to generate movie list
function generateMovieList() {
    movieList.innerHTML = '';
    movieReviews.forEach((review) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${review.title} - Rating: ${review.rating}/5`;
        movieList.appendChild(listItem);
    });
}

// function to handle review submission
function handleReviewSubmission(event) {
    event.preventDefault();
    const title = document.getElementById('movie-title').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;
    const newReview = { title, rating, reviewText };
    movieReviews.push(newReview);
    generateMovieList();
    reviewForm.reset();
}

// add event listener to submit review button
submitReviewButton.addEventListener('click', handleReviewSubmission);

// generate initial movie list
generateMovieList();