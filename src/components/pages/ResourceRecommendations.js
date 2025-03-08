import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFirebase } from '../../contexts/FirebaseContext';
import '../../styles/resource-recommendations.css';

function ResourceRecommendations() {
  const [resourceName, setResourceName] = useState('');
  const [resourceLink, setResourceLink] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { addResource, error } = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!resourceName.trim() || !resourceLink.trim() || !email.trim()) {
      setSubmitMessage('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Basic URL validation
    try {
      new URL(resourceLink);
    } catch {
      setSubmitMessage('Please enter a valid URL (include http:// or https://)');
      setIsSubmitting(false);
      return;
    }

    try {
      const success = await addResource({
        name: resourceName,
        link: resourceLink,
        email: email
      });

      if (success) {
        setResourceName('');
        setResourceLink('');
        setEmail('');
        setSubmitMessage('Thank you for your recommendation! Check your email for confirmation.');
      } else {
        setSubmitMessage('Failed to submit recommendation. Please try again.');
      }
    } catch (err) {
      setSubmitMessage(error || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="resources-container">
      <h1 className="resources-title">Recommend a Resource</h1>
      <p className="resources-description">
        Help the community grow by recommending valuable learning resources. 
        We'll review your submission and add it to our collection.
      </p>

      <form onSubmit={handleSubmit} className="resource-form">
        <div className="form-group">
          <label htmlFor="resourceName">
            <FontAwesomeIcon icon="book" className="input-icon" /> Resource Name
          </label>
          <input
            id="resourceName"
            type="text"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            placeholder="e.g., React Documentation"
            required
            className="resource-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resourceLink">
            <FontAwesomeIcon icon="link" className="input-icon" /> Resource Link
          </label>
          <input
            id="resourceLink"
            type="url"
            value={resourceLink}
            onChange={(e) => setResourceLink(e.target.value)}
            placeholder="https://example.com"
            required
            className="resource-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <FontAwesomeIcon icon="envelope" className="input-icon" /> Your Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="resource-input"
            disabled={isSubmitting}
          />
          <small className="email-hint">
            We'll send you a thank you email and notify you when your resource is approved.
          </small>
        </div>

        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('Failed') || submitMessage.includes('error') ? 'error' : 'success'}`}>
            {submitMessage}
          </div>
        )}

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <FontAwesomeIcon icon="spinner" spin /> Submitting...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon="plus" /> Submit Resource
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ResourceRecommendations;