import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loading({ text = 'Loading...' }) {
  return (
    <div className="loading-container">
      <FontAwesomeIcon icon="spinner" spin size="2x" />
      <p className="loading-text">{text}</p>
    </div>
  );
}

export default Loading;