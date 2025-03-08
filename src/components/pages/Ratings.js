import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFirebase } from '../../contexts/FirebaseContext';
import '../../styles/ratings.css';

function Ratings() {
  const [newRating, setNewRating] = useState(5);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const { ratings, loading, error, addRating } = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert('Please add a comment');
      return;
    }

    const success = await addRating({
      rating: newRating,
      comment: comment.trim(),
      userName: userName.trim()
    });

    if (success) {
      setNewRating(5);
      setComment('');
      setUserName('');
    } else {
      alert('Failed to submit rating. Please try again.');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon="star"
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading) {
    return (
      <div className="ratings-container">
        <div className="loading">
          <FontAwesomeIcon icon="spinner" spin />
          <p>Loading ratings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ratings-container">
        <div className="error">
          <p>Error: {error}</p>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ratings-container">
      <h1 className="ratings-title">Community Ratings & Reviews</h1>
      
      <form onSubmit={handleSubmit} className="rating-form">
        <div className="rating-input">
          <label htmlFor="rating">Rating</label>
          <div className="stars-input" aria-label="Select rating from 1 to 5 stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon="star"
                className={star <= newRating ? 'star-filled' : 'star-empty'}
                onClick={() => setNewRating(star)}
                style={{ cursor: 'pointer' }}
                role="button"
                aria-label={`Rate ${star} stars`}
              />
            ))}
          </div>
        </div>

        <div className="rating-input">
          <label htmlFor="name">Name (optional)</label>
          <input
            id="name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
          />
        </div>

        <div className="rating-input">
          <label htmlFor="comment">Your Review</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about the platform..."
            required
            className="comment-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>

      <div className="ratings-list">
        {ratings.map((rating) => (
          <div key={rating.id} className="rating-item">
            <div className="rating-header">
              <div className="rating-info">
                <h3>{rating.username}</h3>
                <div className="stars">{renderStars(rating.rating)}</div>
              </div>
              <span className="rating-date">
                {formatDate(rating.timestamp)}
              </span>
            </div>
            <p className="rating-comment">{rating.comment}</p>
          </div>
        ))}
        {ratings.length === 0 && (
          <div className="no-ratings">
            <p>No ratings yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ratings;