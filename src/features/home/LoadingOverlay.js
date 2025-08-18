import { useSelector } from 'react-redux';

const LoadingOverlay = () => (
  <div className="loading-overlay">
    <div className="spinner-container">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

export default LoadingOverlay;