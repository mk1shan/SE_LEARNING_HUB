import { useState, useEffect, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { learningPaths } from '../../data/learningPaths';

function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState(() => {
    // Initialize from localStorage if available
    const cached = localStorage.getItem('devToArticles');
    return cached ? JSON.parse(cached) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const refreshTimerRef = useRef(null);
  const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
  const mounted = useRef(true);
  const [page, setPage] = useState(1);
  const DEVTO_API = 'https://dev.to/api/articles';
  const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const fetchDevToArticles = async (pageNum) => {
    const timestamp = new Date().getTime();
    const response = await fetch(
      `${DEVTO_API}?page=${pageNum}&per_page=9&tags=javascript,webdev,react&state=rising&_t=${timestamp}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Dev.to articles: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('No articles found');
    }
    
    return data.map(article => ({
      id: article.id,
      title: article.title,
      description: article.description || article.title,
      url: article.url,
      image: article.cover_image || article.social_image,
      publishedAt: article.published_at,
      reactions: article.positive_reactions_count,
      source: { name: 'Dev.to' }
    }));
  };

  const fetchArticles = useCallback(async (pageNum = 1, shouldAppend = false) => {
    if (!mounted.current) return;

    try {
      // Check cache first
      const cached = localStorage.getItem('devToArticles');
      const cacheTimestamp = localStorage.getItem('devToArticlesTimestamp');
      const now = new Date().getTime();

      if (cached && cacheTimestamp && (now - parseInt(cacheTimestamp)) < CACHE_EXPIRY && pageNum === 1) {
        setArticles(JSON.parse(cached));
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      const newArticles = await fetchDevToArticles(pageNum);
      
      if (mounted.current) {
        setArticles(prevArticles => {
          let updatedArticles;
          if (shouldAppend) {
            const existingIds = new Set(prevArticles.map(a => a.id));
            const uniqueNewArticles = newArticles.filter(a => !existingIds.has(a.id));
            updatedArticles = [...prevArticles, ...uniqueNewArticles];
          } else {
            updatedArticles = newArticles;
          }

          // Update cache if this is the first page
          if (pageNum === 1) {
            localStorage.setItem('devToArticles', JSON.stringify(updatedArticles));
            localStorage.setItem('devToArticlesTimestamp', new Date().getTime().toString());
          }

          return updatedArticles;
        });
      }
    } catch (err) {
      if (mounted.current) {
        setError(err.message);
      }
    } finally {
      if (mounted.current) {
        setLoading(false);
      }
    }
  }, []);

  const loadMoreArticles = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage, true);
  }, [page, fetchArticles]);

  // Initial fetch on mount
  useEffect(() => {
    mounted.current = true;
    fetchArticles(1, false);
    return () => {
      mounted.current = false;
    };
  }, [fetchArticles]);

  // Auto-refresh setup with cleanup
  useEffect(() => {
    if (!mounted.current) return;

    const refreshArticles = () => {
      if (mounted.current) {
        fetchArticles(1, false);
      }
    };

    const intervalId = setInterval(refreshArticles, REFRESH_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchArticles, REFRESH_INTERVAL]);

  const getPathIcon = (pathId) => {
    switch (pathId) {
      case 'software-engineering':
        return 'laptop-code';
      case 'frontend':
        return 'desktop';
      case 'backend':
        return 'server';
      case 'ui-ux':
        return 'paint-brush';
      case 'qa-testing':
        return 'check-circle';
      case 'data-structures':
        return 'project-diagram';
      case 'mobile-development':
        return 'mobile-alt';
      case 'devops':
        return 'code-branch';
      case 'cloud-computing':
        return 'cloud';
      default:
        return 'code';
    }
  };

  const filteredPaths = Object.entries(learningPaths)
    .filter(([id, path]) =>
      path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(([id, path]) => ({
      id,
      icon: getPathIcon(id),
      title: path.title,
      description: path.description
    }));

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div className="typing-container">
            <h1>Software Engineering Learning Hub</h1>
          </div>
          <p className="hero-description">
            Your comprehensive platform for mastering software engineering. Learn from structured paths, real-world projects, and expert guidance.
          </p>
          
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('paths')} className="hero-button primary">
              <FontAwesomeIcon icon="graduation-cap" /> Start Learning
            </button>
            <a href="/certifications" className="hero-button secondary">
              <FontAwesomeIcon icon="certificate" /> View Certifications
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <FontAwesomeIcon icon="book" className="stat-icon" />
              <span className="number">6+</span>
              <span className="label">Learning Paths</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon="users" className="stat-icon" />
              <span className="number">10k+</span>
              <span className="label">Students</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon="clock" className="stat-icon" />
              <span className="number">100+</span>
              <span className="label">Hours Content</span>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator" onClick={() => scrollToSection('paths')}>
          <FontAwesomeIcon icon="chevron-down" />
        </div>
      </header>

      <section id="paths" className="learning-paths">
        <h2>Learning Paths</h2>
        <p className="section-subtitle">Choose your path and start learning today</p>
        
        <div className="paths-toolbar">
          <div className="search-container">
            <FontAwesomeIcon icon="search" className="search-icon" />
            <input
              type="text"
              placeholder="Search learning paths..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="path-search"
            />
          </div>
        </div>

        <div className="path-grid">
          {filteredPaths.map((path) => (
            <div
              key={path.id}
              className="path-card"
              onClick={() => navigate(`/path-template?path=${path.id}`)}
            >
              <div className="path-card-content">
                <FontAwesomeIcon icon={path.icon} className="card-icon" />
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
              <div className="path-card-overlay">
                <button className="explore-btn">
                  <FontAwesomeIcon icon="arrow-right" /> Explore Path
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="articles" className="articles-section">
        <h2>Latest Tech Articles</h2>
        <p className="section-subtitle">Stay updated with the latest in software engineering</p>
        
        <div className="articles-grid">
          {!loading && !error && articles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image-container">
                <img 
                  src={article.image || `https://via.placeholder.com/400x200?text=No+Image+Available`}
                  alt={article.title}
                  className="article-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x200?text=No+Image+Available';
                  }}
                />
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{truncateText(article.description)}</p>
                <div className="article-meta">
                  <span className="article-date">
                    <FontAwesomeIcon icon="calendar" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="article-source">
                    <FontAwesomeIcon icon="newspaper" />
                    {article.source.name}
                  </span>
                </div>
                <div className="article-footer">
                  <span className="article-reactions">
                    <FontAwesomeIcon icon="heart" />
                    {article.reactions || 0}
                  </span>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="article-link"
                  >
                    Read More <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {loading && (
            <div className="loading-message">
              <FontAwesomeIcon icon="spinner" spin />
              <p>Loading latest articles...</p>
              <p className="loading-subtext">This may take a few moments</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              <FontAwesomeIcon icon="exclamation-circle" />
              <p>{error}</p>
              <button onClick={fetchArticles} className="retry-button">
                <FontAwesomeIcon icon="redo" /> Try Again
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <FontAwesomeIcon icon="chalkboard-teacher" className="feature-icon" />
            <h3>Expert-Led Learning</h3>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon="project-diagram" className="feature-icon" />
            <h3>Real Projects</h3>
            <p>Build your portfolio with practical, hands-on projects</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon="users" className="feature-icon" />
            <h3>Community Support</h3>
            <p>Join a community of learners and mentors</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon="certificate" className="feature-icon" />
            <h3>Get Certified</h3>
            <p>Earn recognized certificates upon completion</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of successful developers who have transformed their careers with us.</p>
          <button onClick={() => scrollToSection('paths')} className="cta-button">
            <FontAwesomeIcon icon="rocket" /> Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;