import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, faServer, faDatabase, faCloud, faGlobe, 
    faNetworkWired, faVial, faSitemap, faBrain, faBook,
    faUniversity, faLeaf, faCheckCircle, faCheckDouble,
    faExternalLinkAlt, faMobile, faLaptopCode, faShieldAlt, faGraduationCap, faGamepad, faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { 
    faAws, faGoogle, faMicrosoft, faNode, faGithub, faGitlab, faPython 
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
    faCode, faServer, faDatabase, faCloud, faGlobe,
    faNetworkWired, faVial, faSitemap, faBrain, faBook,
    faUniversity, faLeaf, faPython, faCheckCircle, faCheckDouble,
    faExternalLinkAlt, faAws, faGoogle, faMicrosoft, faNode,
    faGithub, faGitlab, faMobile, faLaptopCode, faShieldAlt, faGraduationCap, faGamepad, faBuilding
);

function Certifications() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const certifications = {
    webdev: [
      {
        title: 'freeCodeCamp Full Stack Development',
        level: 'Comprehensive',
        platform: 'freeCodeCamp',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Responsive Design', 'Data Structures'],
        examLink: 'https://www.freecodecamp.org/learn/'
      },
      {
        title: 'The Odin Project',
        level: 'Comprehensive',
        platform: 'Odin',
        skills: ['HTML/CSS', 'JavaScript', 'Ruby', 'Rails', 'Git', 'Testing', 'Computer Science'],
        examLink: 'https://www.theodinproject.com/'
      },
      {
        title: 'CS50x Introduction to Computer Science',
        level: 'Foundation',
        platform: 'Harvard',
        skills: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures', 'Web Development'],
        examLink: 'https://cs50.harvard.edu/x/'
      },
      {
        title: 'Full Stack Open',
        level: 'Advanced',
        platform: 'University of Helsinki',
        skills: ['React', 'Node.js', 'Testing', 'TypeScript', 'CI/CD', 'GraphQL'],
        examLink: 'https://fullstackopen.com/en/'
      }
    ],
    algorithms: [
      {
        title: 'Algorithms Specialization',
        level: 'Advanced',
        platform: 'Stanford',
        skills: ['Algorithm Design', 'Data Structures', 'Graph Algorithms', 'NP-Completeness'],
        examLink: 'https://www.coursera.org/specializations/algorithms'
      },
      {
        title: 'LeetCode Learning Tracks',
        level: 'All Levels',
        platform: 'LeetCode',
        skills: ['Problem Solving', 'Data Structures', 'Dynamic Programming', 'System Design'],
        examLink: 'https://leetcode.com/explore/'
      }
    ],
    cloud: [
      {
        title: 'AWS Cloud Practitioner Essentials',
        level: 'Foundation',
        platform: 'AWS',
        skills: ['Cloud Concepts', 'AWS Services', 'Security', 'Architecture'],
        examLink: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials'
      },
      {
        title: 'Google Cloud Basics',
        level: 'Foundation',
        platform: 'Google',
        skills: ['Cloud Computing', 'GCP Services', 'Cloud Architecture', 'Security'],
        examLink: 'https://cloud.google.com/training/free-training'
      },
      {
        title: 'Azure Fundamentals Learning Path',
        level: 'Foundation',
        platform: 'Microsoft',
        skills: ['Cloud Concepts', 'Azure Services', 'Security', 'Pricing'],
        examLink: 'https://learn.microsoft.com/training/paths/azure-fundamentals/'
      }
    ],
    backend: [
      {
        title: 'Node.js Learning Path',
        level: 'Intermediate',
        platform: 'NodeJS',
        skills: ['Node.js', 'Express', 'APIs', 'Authentication', 'Databases'],
        examLink: 'https://nodejs.dev/learn'
      },
      {
        title: 'Spring Framework Guide',
        level: 'Intermediate',
        platform: 'Spring',
        skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Microservices'],
        examLink: 'https://spring.io/guides'
      },
      {
        title: 'Python Django Tutorial',
        level: 'Intermediate',
        platform: 'Django',
        skills: ['Django', 'Python', 'Web Development', 'ORM', 'Authentication'],
        examLink: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/'
      }
    ],
    databases: [
      {
        title: 'MongoDB University',
        level: 'Comprehensive',
        platform: 'MongoDB',
        skills: ['MongoDB', 'Aggregation', 'Data Modeling', 'Performance'],
        examLink: 'https://university.mongodb.com/'
      },
      {
        title: 'PostgreSQL Tutorial',
        level: 'Comprehensive',
        platform: 'PostgreSQL',
        skills: ['SQL', 'Database Design', 'Performance Tuning', 'Administration'],
        examLink: 'https://www.postgresqltutorial.com/'
      }
    ],
    devops: [
      {
        title: 'DevOps with Docker',
        level: 'Intermediate',
        platform: 'University of Helsinki',
        skills: ['Docker', 'Containers', 'DevOps', 'CI/CD'],
        examLink: 'https://devopswithdocker.com/'
      },
      {
        title: 'Kubernetes Basics',
        level: 'Intermediate',
        platform: 'Kubernetes',
        skills: ['Kubernetes', 'Container Orchestration', 'Microservices'],
        examLink: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/'
      },
      {
        title: 'GitLab CI/CD',
        level: 'Intermediate',
        platform: 'GitLab',
        skills: ['CI/CD', 'DevOps', 'Automation', 'Pipeline Management'],
        examLink: 'https://docs.gitlab.com/ee/ci/quick_start/'
      }
    ],
    testing: [
      {
        title: 'Testing JavaScript',
        level: 'Comprehensive',
        platform: 'TestingJavaScript',
        skills: ['Jest', 'React Testing', 'Integration Testing', 'E2E Testing'],
        examLink: 'https://testingjavascript.com/'
      },
      {
        title: 'Cypress Testing Guide',
        level: 'Intermediate',
        platform: 'Cypress',
        skills: ['Cypress', 'E2E Testing', 'Integration Testing', 'Test Automation'],
        examLink: 'https://docs.cypress.io/guides/overview/why-cypress'
      }
    ],
    systemDesign: [
      {
        title: 'System Design Primer',
        level: 'Advanced',
        platform: 'GitHub',
        skills: ['System Design', 'Scalability', 'Performance', 'Distributed Systems'],
        examLink: 'https://github.com/donnemartin/system-design-primer'
      },
      {
        title: 'Microservices Architecture',
        level: 'Advanced',
        platform: 'Microsoft',
        skills: ['Microservices', 'Cloud Design Patterns', 'Resilience', 'Security'],
        examLink: 'https://learn.microsoft.com/training/paths/create-microservices-with-dotnet/'
      }
    ],
    mobile: [
      {
        title: 'Android Development for Beginners',
        level: 'Foundation',
        platform: 'Google',
        skills: ['Android Studio', 'Kotlin', 'Material Design', 'App Components'],
        examLink: 'https://developer.android.com/courses'
      },
      {
        title: 'Flutter & Dart Complete Guide',
        level: 'Comprehensive',
        platform: 'Flutter',
        skills: ['Flutter', 'Dart', 'Cross-platform', 'UI Development'],
        examLink: 'https://flutter.dev/learn'
      },
      {
        title: 'React Native Learning Path',
        level: 'Intermediate',
        platform: 'Meta',
        skills: ['React Native', 'Mobile Development', 'Native APIs', 'App Store'],
        examLink: 'https://reactnative.dev/docs/getting-started'
      }
    ],

    frontend: [
      {
        title: 'React Learning Path',
        level: 'Comprehensive',
        platform: 'Meta',
        skills: ['React', 'Hooks', 'State Management', 'Performance'],
        examLink: 'https://react.dev/learn'
      },
      {
        title: 'Vue.js Fundamentals',
        level: 'Foundation',
        platform: 'Vue',
        skills: ['Vue.js', 'Composition API', 'Vue Router', 'State Management'],
        examLink: 'https://vueschool.io/courses?filter=free-courses'
      },
      {
        title: 'Modern JavaScript Course',
        level: 'Foundation',
        platform: 'JavaScript.info',
        skills: ['ES6+', 'Async/Await', 'DOM', 'Web APIs'],
        examLink: 'https://javascript.info/'
      }
    ],

    security: [
      {
        title: 'Web Security Academy',
        level: 'Comprehensive',
        platform: 'PortSwigger',
        skills: ['Web Security', 'OWASP', 'Penetration Testing', 'Security Testing'],
        examLink: 'https://portswigger.net/web-security'
      },
      {
        title: 'Google Security Training',
        level: 'Foundation',
        platform: 'Google',
        skills: ['Security Fundamentals', 'Network Security', 'Cloud Security'],
        examLink: 'https://www.coursera.org/professional-certificates/google-cybersecurity'
      },
      {
        title: 'Application Security Path',
        level: 'Advanced',
        platform: 'OWASP',
        skills: ['AppSec', 'Secure Coding', 'Threat Modeling', 'Security Testing'],
        examLink: 'https://owasp.org/www-project-juice-shop/'
      }
    ],

    computerScience: [
      {
        title: 'OSSU Computer Science',
        level: 'Comprehensive',
        platform: 'OSSU',
        skills: ['Programming', 'Math', 'Algorithms', 'Operating Systems'],
        examLink: 'https://github.com/ossu/computer-science'
      },
      {
        title: 'MIT OpenCourseWare',
        level: 'Advanced',
        platform: 'MIT',
        skills: ['Computer Science', 'Algorithms', 'Systems', 'Theory'],
        examLink: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/'
      },
      {
        title: 'Teach Yourself CS',
        level: 'Comprehensive',
        platform: 'TeachYourselfCS',
        skills: ['Programming', 'Architecture', 'Algorithms', 'Math'],
        examLink: 'https://teachyourselfcs.com/'
      }
    ],

    gamedev: [
      {
        title: 'Unity Learn Platform',
        level: 'Comprehensive',
        platform: 'Unity',
        skills: ['Unity Engine', 'C#', 'Game Design', '3D Development', 'Physics'],
        examLink: 'https://learn.unity.com/'
      },
      {
        title: 'Unreal Engine 5 Foundations',
        level: 'Foundation',
        platform: 'Epic',
        skills: ['Unreal Engine', 'Blueprints', 'Level Design', '3D Graphics'],
        examLink: 'https://dev.epicgames.com/community/learning'
      },
      {
        title: 'Godot Game Development',
        level: 'Foundation',
        platform: 'Godot',
        skills: ['Godot Engine', 'GDScript', '2D Games', '3D Games', 'Open Source'],
        examLink: 'https://docs.godotengine.org/en/stable/getting_started/introduction/learning_paths.html'
      }
    ],

    mlForSE: [
      {
        title: 'Machine Learning for Coders',
        level: 'Intermediate',
        platform: 'fast.ai',
        skills: ['Python', 'PyTorch', 'ML Fundamentals', 'Neural Networks'],
        examLink: 'https://www.fast.ai/'
      },
      {
        title: 'TensorFlow Developer Path',
        level: 'Foundation',
        platform: 'Google',
        skills: ['TensorFlow', 'Keras', 'ML Models', 'Deep Learning'],
        examLink: 'https://www.tensorflow.org/learn'
      },
      {
        title: 'ML Engineering for Production',
        level: 'Advanced',
        platform: 'DeepLearning.AI',
        skills: ['MLOps', 'Model Deployment', 'ML Systems', 'Production ML'],
        examLink: 'https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/'
      }
    ],

    architecture: [
      {
        title: 'Software Architecture Path',
        level: 'Advanced',
        platform: 'Microsoft',
        skills: ['System Design', 'Architecture Patterns', 'Cloud Architecture', 'Scalability'],
        examLink: 'https://learn.microsoft.com/training/paths/azure-solutions-architect/'
      },
      {
        title: 'Clean Architecture Guide',
        level: 'Advanced',
        platform: 'CleanCoder',
        skills: ['Clean Architecture', 'SOLID', 'Design Patterns', 'Best Practices'],
        examLink: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html'
      },
      {
        title: 'Software Design & Architecture',
        level: 'Advanced',
        platform: 'Coursera',
        skills: ['Design Patterns', 'Architecture Styles', 'OO Design', 'System Quality'],
        examLink: 'https://www.coursera.org/specializations/software-design-architecture'
      }
    ]
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  const filterCertifications = () => {
    if (selectedPlatform === 'all') {
      return Object.values(certifications).flat();
    }
    return certifications[selectedPlatform] || [];
  };

  return (
    <main className="certifications-container">
      <header className="hero certifications-hero">
        <div className="hero-content">
          <h1>Free Software Engineering Resources</h1>
          <p>Curated collection of high-quality free learning resources and certifications</p>
        </div>
      </header>

      <section className="certifications-section">
        <div className="platform-filter">
          <button
            className={`platform-btn ${selectedPlatform === 'all' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('all')}
          >
            <FontAwesomeIcon icon="globe" /> All Resources
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'webdev' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('webdev')}
          >
            <FontAwesomeIcon icon="code" /> Full Stack
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'algorithms' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('algorithms')}
          >
            <FontAwesomeIcon icon="brain" /> Algorithms
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'cloud' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('cloud')}
          >
            <FontAwesomeIcon icon="cloud" /> Cloud
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'backend' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('backend')}
          >
            <FontAwesomeIcon icon="server" /> Backend
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'databases' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('databases')}
          >
            <FontAwesomeIcon icon="database" /> Databases
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'devops' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('devops')}
          >
            <FontAwesomeIcon icon="network-wired" /> DevOps
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'testing' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('testing')}
          >
            <FontAwesomeIcon icon="vial" /> Testing
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'systemDesign' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('systemDesign')}
          >
            <FontAwesomeIcon icon="sitemap" /> System Design
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'mobile' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('mobile')}
          >
            <FontAwesomeIcon icon="mobile" /> Mobile Dev
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'frontend' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('frontend')}
          >
            <FontAwesomeIcon icon="laptop-code" /> Frontend
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'security' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('security')}
          >
            <FontAwesomeIcon icon="shield-alt" /> Security
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'computerScience' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('computerScience')}
          >
            <FontAwesomeIcon icon="graduation-cap" /> CS
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'gamedev' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('gamedev')}
          >
            <FontAwesomeIcon icon="gamepad" /> Game Dev
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'mlForSE' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('mlForSE')}
          >
            <FontAwesomeIcon icon="brain" /> ML for SE
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'architecture' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('architecture')}
          >
            <FontAwesomeIcon icon="building" /> Architecture
          </button>
        </div>

        <div className="certifications-grid">
          {filterCertifications().map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <FontAwesomeIcon 
                  icon={
                    cert.platform === 'freeCodeCamp' ? 'code' :
                    cert.platform === 'Odin' ? 'book' :
                    cert.platform === 'Harvard' ? 'university' :
                    cert.platform === 'University of Helsinki' ? 'university' :
                    cert.platform === 'Stanford' ? 'university' :
                    cert.platform === 'LeetCode' ? 'code' :
                    cert.platform === 'AWS' ? ['fab', 'aws'] :
                    cert.platform === 'Google' ? ['fab', 'google'] :
                    cert.platform === 'Microsoft' ? ['fab', 'microsoft'] :
                    cert.platform === 'NodeJS' ? ['fab', 'node'] :
                    cert.platform === 'Spring' ? 'leaf' :
                    cert.platform === 'Django' ? 'python' :
                    cert.platform === 'MongoDB' ? 'database' :
                    cert.platform === 'PostgreSQL' ? 'database' :
                    cert.platform === 'Kubernetes' ? 'cubes' :
                    cert.platform === 'GitLab' ? ['fab', 'gitlab'] :
                    cert.platform === 'TestingJavaScript' ? 'check-circle' :
                    cert.platform === 'Cypress' ? 'check-double' :
                    cert.platform === 'GitHub' ? ['fab', 'github'] :
                    cert.platform === 'Unity' ? 'gamepad' :
                    cert.platform === 'Epic' ? 'gamepad' :
                    cert.platform === 'Godot' ? 'gamepad' :
                    cert.platform === 'fast.ai' ? 'brain' :
                    cert.platform === 'DeepLearning.AI' ? 'brain' :
                    cert.platform === 'CleanCoder' ? 'building' :
                    cert.platform === 'Coursera' ? 'graduation-cap' :
                    'code'
                  } 
                  className="platform-icon" 
                />
                <h3>{cert.title}</h3>
                <span className="level-badge">{cert.level}</span>
              </div>
              <div className="skills-section">
                <h4>What You'll Learn:</h4>
                <div className="skills-list">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <a href={cert.examLink} className="exam-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="external-link-alt" /> Start Learning
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Certifications;