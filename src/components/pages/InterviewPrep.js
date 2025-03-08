import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../../styles/interview-prep.css';

library.add(faCertificate);

const codingPatterns = {
  'coding-patterns': {
    title: 'Coding Patterns',
    icon: 'code',
    topics: [
      {
        title: 'Common Patterns',
        items: [
          'Two Pointers',
          'Sliding Window',
          'Fast & Slow Pointers',
          'Merge Intervals',
          'Cyclic Sort'
        ],
        resources: [
          {
            name: 'Grokking Coding Patterns',
            url: 'https://www.educative.io/courses/grokking-coding-interview-patterns'
          },
          {
            name: 'LeetCode Patterns',
            url: 'https://seanprashad.com/leetcode-patterns/'
          }
        ],
        questions: [
          {
            id: 'pat1',
            question: 'When should you use the Two Pointers pattern?',
            answer: 'Use Two Pointers when dealing with:\n1. Sorted arrays\n2. Finding pairs with target sum\n3. Comparing elements from ends\n4. In-place array operations\nExample: Remove duplicates, three sum problems',
            difficulty: 'medium'
          },
          {
            id: 'pat2',
            question: 'Explain the Sliding Window pattern with an example',
            answer: 'Sliding Window is used for array/string problems where we need to find/calculate something among continuous elements.\n\nExample: Find max sum subarray of size k\n```javascript\nfunction maxSum(arr, k) {\n  let maxSum = 0;\n  let windowSum = 0;\n  \n  // First window\n  for(let i = 0; i < k; i++) {\n    windowSum += arr[i];\n  }\n  \n  maxSum = windowSum;\n  \n  // Slide window\n  for(let i = k; i < arr.length; i++) {\n    windowSum = windowSum - arr[i-k] + arr[i];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  \n  return maxSum;\n}```',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
};

const algorithmPatterns = {
  'algorithms': {
    title: 'Algorithm Design',
    icon: 'project-diagram',
    topics: [
      {
        title: 'Common Algorithms',
        items: [
          'Binary Search',
          'Depth-First Search',
          'Breadth-First Search',
          'Dynamic Programming',
          'Backtracking'
        ],
        resources: [
          {
            name: 'Algorithm Visualizations',
            url: 'https://visualgo.net/'
          },
          {
            name: 'Algorithm Design Canvas',
            url: 'https://www.byte-by-byte.com/algorithm-design-canvas/'
          }
        ],
        questions: [
          {
            id: 'alg1',
            question: 'When is Binary Search applicable?',
            answer: 'Binary Search is applicable when:\n1. Array is sorted\n2. Need to find a specific value\n3. Can access middle element\n4. Can eliminate half the remaining elements\n\nTime Complexity: O(log n)',
            difficulty: 'easy'
          },
          {
            id: 'alg2',
            question: 'Compare DFS vs BFS approaches',
            answer: 'DFS (Depth-First Search):\n- Uses stack (recursive/explicit)\n- Less memory for deep trees\n- Good for path finding\n\nBFS (Breadth-First Search):\n- Uses queue\n- Less memory for wide trees\n- Finds shortest path\n- Level by level traversal',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
};

const interviewData = {
  general: {
    title: 'General Software Engineering',
    icon: 'code',
    topics: [
      {
        title: 'Data Structures & Algorithms',
        items: [
          'Arrays and Strings',
          'Linked Lists',
          'Trees and Graphs',
          'Dynamic Programming',
          'System Design'
        ],
        resources: [
          {
            name: 'LeetCode Top Interview Questions',
            url: 'https://leetcode.com/explore/interview/card/top-interview-questions-easy/'
          },
          {
            name: 'System Design Primer',
            url: 'https://github.com/donnemartin/system-design-primer'
          },
          {
            name: 'Grokking Algorithms',
            url: 'https://www.manning.com/books/grokking-algorithms'
          }
        ],
        questions: [
          {
            id: 'dsa1',
            question: 'What is the difference between Array and LinkedList?',
            answer: 'Arrays store elements in contiguous memory locations and provide O(1) access, while LinkedLists store elements in nodes with references, providing O(1) insertion/deletion but O(n) access.',
            difficulty: 'easy'
          },
          {
            id: 'dsa2',
            question: 'Explain time complexity of common operations in a Binary Search Tree',
            answer: 'In a balanced BST: Search, Insert, Delete are O(log n). In worst case (skewed tree): O(n)',
            difficulty: 'medium'
          }
        ]
      },
      {
        title: 'Core CS Concepts',
        items: [
          'Operating Systems',
          'Database Systems',
          'Network Fundamentals',
          'Object-Oriented Design',
          'Design Patterns'
        ],
        resources: [
          {
            name: 'OOAD Interview Questions',
            url: 'https://www.geeksforgeeks.org/oops-interview-questions/'
          },
          {
            name: 'Backend Interview Handbook',
            url: 'https://roadmap.sh/backend'
          }
        ]
      }
    ]
  },
  oop: {
    title: 'Object-Oriented Programming',
    icon: 'cubes',
    topics: [
      {
        title: 'OOP Fundamentals',
        items: [
          'Encapsulation',
          'Inheritance',
          'Polymorphism',
          'Abstraction',
          'SOLID Principles'
        ],
        resources: [
          {
            name: 'SOLID Principles Made Easy',
            url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design'
          },
          {
            name: 'OOP Design Patterns',
            url: 'https://refactoring.guru/design-patterns'
          }
        ],
        questions: [
          {
            id: 'oop1',
            question: 'What is encapsulation and why is it important?',
            answer: 'Encapsulation is bundling data and methods that operate on that data within a single unit/class, hiding internal details and providing an interface. It helps in maintaining data integrity and reducing system complexity.',
            difficulty: 'easy'
          },
          {
            id: 'oop2',
            question: 'Explain the Liskov Substitution Principle',
            answer: 'LSP states that objects of a superclass should be replaceable with objects of its subclasses without affecting program correctness. This ensures that inheritance is used correctly.',
            difficulty: 'medium'
          },
          {
            id: 'oop3',
            question: 'What is the difference between abstract class and interface?',
            answer: 'Abstract Class:\n1. Can have implementation\n2. Single inheritance\n3. Can have constructor\n4. Can have state\n\nInterface:\n1. Only method signatures\n2. Multiple inheritance\n3. No constructor\n4. No state\n5. All methods public by default',
            difficulty: 'medium'
          },
          {
            id: 'oop4',
            question: 'Explain Dependency Injection and its benefits',
            answer: '1. Design pattern where dependencies are passed in rather than created\n2. Benefits:\n- Easier testing\n- Loose coupling\n- More flexible code\n- Better separation of concerns\n3. Common in modern frameworks',
            difficulty: 'hard'
          }
        ]
      }
    ]
  },
  sql: {
    title: 'SQL & Databases',
    icon: 'database',
    topics: [
      {
        title: 'SQL Fundamentals',
        items: [
          'Basic Queries & Joins',
          'Aggregations & Group By',
          'Subqueries',
          'Indexes & Performance',
          'Normalization'
        ],
        resources: [
          {
            name: 'SQL Zoo Interactive Tutorials',
            url: 'https://sqlzoo.net/'
          },
          {
            name: 'Use The Index, Luke!',
            url: 'https://use-the-index-luke.com/'
          }
        ],
        questions: [
          {
            id: 'sql1',
            question: 'What is the difference between INNER and LEFT JOIN?',
            answer: 'INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from left table and matching rows from right table, with NULL for non-matching right table rows.',
            difficulty: 'easy'
          },
          {
            id: 'sql2',
            question: 'Explain database normalization and its forms',
            answer: '1NF: Atomic values, 2NF: No partial dependencies, 3NF: No transitive dependencies. Normalization reduces redundancy and maintains data integrity.',
            difficulty: 'medium'
          },
          {
            id: 'sql3',
            question: 'What are indexes and when should you use them?',
            answer: 'Indexes improve query performance by creating data structures for faster data retrieval. Use them on:\n1. Primary keys\n2. Foreign keys\n3. Frequently queried columns\n4. Columns used in WHERE clauses\nBut consider: They slow down INSERT/UPDATE operations and use extra storage.',
            difficulty: 'medium'
          },
          {
            id: 'sql4',
            question: 'Write a query to find duplicate records in a table',
            answer: 'SELECT column1, column2, COUNT(*) as count\nFROM table_name\nGROUP BY column1, column2\nHAVING COUNT(*) > 1;',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  github: {
    title: 'Git & GitHub',
    icon: ['fab', 'github'],
    topics: [
      {
        title: 'Version Control Basics',
        items: [
          'Basic Git Commands',
          'Branching & Merging',
          'Pull Requests',
          'Merge Conflicts',
          'Git Best Practices'
        ],
        resources: [
          {
            name: 'GitHub Learning Lab',
            url: 'https://lab.github.com/'
          },
          {
            name: 'Git Flow Workflow',
            url: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow'
          }
        ],
        questions: [
          {
            id: 'git1',
            question: 'What is the difference between git merge and git rebase?',
            answer: 'Git merge creates a new commit combining changes from both branches, preserving history. Git rebase moves the entire feature branch to begin on the tip of the main branch, creating a linear history.',
            difficulty: 'medium'
          },
          {
            id: 'git2',
            question: 'How do you resolve a merge conflict?',
            answer: '1. Git marks the conflicted files\n2. Open the files and look for conflict markers (<<<<<<<, =======, >>>>>>>)\n3. Choose which changes to keep\n4. Remove conflict markers\n5. Add and commit the resolved files',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  frontend: {
    title: 'Frontend Development',
    icon: 'desktop',
    topics: [
      {
        title: 'JavaScript & Web Fundamentals',
        items: [
          'ES6+ Features & Modern JavaScript',
          'DOM Manipulation & Events',
          'Promises, Async/Await',
          'Browser Storage & Web APIs',
          'Performance Optimization'
        ],
        resources: [
          {
            name: 'Modern JavaScript Tutorial',
            url: 'https://javascript.info/'
          },
          {
            name: 'Frontend Masters',
            url: 'https://frontendmasters.com/'
          }
        ]
      },
      {
        title: 'Frontend Frameworks',
        items: [
          'React Core Concepts',
          'State Management (Redux/Context)',
          'Component Lifecycle',
          'Vue.js/Angular Basics',
          'Testing (Jest, React Testing Library)'
        ],
        resources: [
          {
            name: 'React Documentation',
            url: 'https://beta.reactjs.org/'
          },
          {
            name: 'Testing Guides',
            url: 'https://testing-library.com/docs/react-testing-library/intro/'
          }
        ]
      }
    ]
  },
  'system-design': {
    title: 'System Design',
    icon: 'sitemap',
    topics: [
      {
        title: 'System Design Fundamentals',
        items: [
          'Scalability & Performance',
          'Load Balancing',
          'Caching Strategies',
          'Database Sharding',
          'Microservices Architecture'
        ],
        resources: [
          {
            name: 'System Design Interview - Alex Xu',
            url: 'https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF'
          },
          {
            name: 'Distributed Systems Course',
            url: 'https://www.distributed-systems.net/index.php/courses/'
          }
        ],
        questions: [
          {
            id: 'sd1',
            question: 'How would you design a URL shortening service like TinyURL?',
            answer: '1. Generate unique short URLs (hash function or counter-based)\n2. Store mapping in database\n3. Handle redirects\n4. Consider: Rate limiting, Analytics, Cache layer\n5. Scale: Use multiple servers, Database sharding',
            difficulty: 'medium'
          },
          {
            id: 'sd2',
            question: 'Explain the trade-offs between different types of load balancing algorithms',
            answer: '1. Round Robin: Simple but might not consider server load\n2. Least Connections: Better load distribution but more overhead\n3. IP Hash: Session persistence but potential uneven distribution\n4. Weighted Round Robin: Control over traffic distribution',
            difficulty: 'hard'
          }
        ]
      }
    ]
  },
  'behavioral': {
    title: 'Behavioral Questions',
    icon: 'comments',
    topics: [
      {
        title: 'Common Behavioral Questions',
        items: [
          'Leadership & Team Work',
          'Conflict Resolution',
          'Project Management',
          'Problem Solving',
          'Time Management'
        ],
        resources: [
          {
            name: 'STAR Method Guide',
            url: 'https://www.themuse.com/advice/star-interview-method'
          },
          {
            name: 'Behavioral Interview Preparation',
            url: 'https://www.pramp.com/behavioral-interviews'
          }
        ],
        questions: [
          {
            id: 'beh1',
            question: 'Tell me about a time you had to deal with a difficult team member',
            answer: 'Use STAR format:\n1. Situation: Specific project context\n2. Task: Your role and responsibility\n3. Action: Steps taken to resolve the conflict\n4. Result: Positive outcome and lessons learned',
            difficulty: 'medium'
          },
          {
            id: 'beh2',
            question: 'Describe a challenging project you led and how you ensured its success',
            answer: '1. Project scope and challenges\n2. Leadership approach\n3. Risk management\n4. Team coordination\n5. Results and metrics\n6. Lessons learned',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
};

const freeCertificates = {
  'certificates': {
    title: 'Free Certificates & Courses',
    icon: 'certificate',
    topics: [
      {
        title: 'Web Development',
        items: [
          'freeCodeCamp Full Stack Certification',
          'The Odin Project',
          'CS50 Web Programming',
          'MongoDB University Certifications',
          'Google Web Development Course'
        ],
        resources: [
          {
            name: 'freeCodeCamp Certifications',
            url: 'https://www.freecodecamp.org/learn'
          },
          {
            name: 'The Odin Project',
            url: 'https://www.theodinproject.com/'
          },
          {
            name: 'CS50 Web Programming',
            url: 'https://cs50.harvard.edu/web/'
          },
          {
            name: 'MongoDB University',
            url: 'https://university.mongodb.com/'
          }
        ]
      },
      {
        title: 'Cloud & DevOps',
        items: [
          'AWS Cloud Practitioner',
          'Google Cloud Essential Training',
          'Microsoft Azure Fundamentals',
          'Docker and Kubernetes Basics',
          'DevOps Fundamentals'
        ],
        resources: [
          {
            name: 'AWS Skill Builder',
            url: 'https://explore.skillbuilder.aws/'
          },
          {
            name: 'Google Cloud Skills Boost',
            url: 'https://www.cloudskillsboost.google/'
          },
          {
            name: 'Microsoft Learn',
            url: 'https://learn.microsoft.com/training/'
          }
        ]
      },
      {
        title: 'Data Science & AI',
        items: [
          'Google Data Analytics Certificate',
          'IBM Data Science Professional',
          'Deep Learning Specialization',
          'TensorFlow Developer Certificate',
          'Machine Learning by Stanford'
        ],
        resources: [
          {
            name: 'Google Data Analytics',
            url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
          },
          {
            name: 'IBM Data Science',
            url: 'https://www.coursera.org/professional-certificates/ibm-data-science'
          },
          {
            name: 'DeepLearning.AI Courses',
            url: 'https://www.deeplearning.ai/'
          }
        ]
      },
      {
        title: 'Cybersecurity',
        items: [
          'CompTIA Security+ Prep',
          'Google Cybersecurity Certificate',
          'Cisco Networking Basics',
          'NSE 1 & 2 Certification',
          'ISC2 CC Certification'
        ],
        resources: [
          {
            name: 'TryHackMe',
            url: 'https://tryhackme.com/'
          },
          {
            name: 'Cisco Networking Academy',
            url: 'https://www.netacad.com/'
          },
          {
            name: 'Fortinet Training',
            url: 'https://training.fortinet.com/'
          }
        ]
      }
    ]
  }
};

const enhancedInterviewData = {
  ...interviewData,
  ...codingPatterns,
  ...algorithmPatterns,
  ...freeCertificates
};

function InterviewPrep() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeQuestions, setActiveQuestions] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (questionId) => {
    setActiveQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const createTopicElement = (topic) => {
    return (
      <div className="topic">
        <div className="topic-header">
          <h3>{topic.title}</h3>
        </div>
        <ul className="topic-items">
          {topic.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="resources">
          <h4>Recommended Resources:</h4>
          <ul>
            {topic.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="external-link-alt" /> {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {topic.questions && (
          <div className="qa-section">
            <h4>Common Interview Questions</h4>
            {topic.questions.map((qa) => (
              <div key={qa.id} className="question" onClick={() => toggleQuestion(qa.id)}>
                <h4>
                  {qa.question}
                  <span className={`difficulty-badge difficulty-${qa.difficulty}`}>
                    {qa.difficulty}
                  </span>
                </h4>
                <div className={`answer ${activeQuestions[qa.id] ? 'active' : ''}`}>
                  {qa.answer}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const filteredData = Object.entries(enhancedInterviewData)
    .filter(([_, data]) => 
      data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.topics.some(topic => 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.items.some(item => 
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    )
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  return (
    <>
      <header className="hero interview-hero">
        <div className="hero-content">
          <h1>Interview Preparation Guide</h1>
          <p>Master technical interviews with our comprehensive guide and practice questions</p>
          
          <div className="search-container">
            <FontAwesomeIcon icon="search" className="search-icon" />
            <input
              type="text"
              placeholder="Search topics, patterns, or questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="hero-stats">
            <div className="stat">
              <FontAwesomeIcon icon="book" />
              <span className="number">500+</span>
              <span className="label">Resources</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon="code-branch" />
              <span className="number">9</span>
              <span className="label">Topics</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon="certificate" />
              <span className="number">15+</span>
              <span className="label">Free Certificates</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon="users" />
              <span className="number">10K+</span>
              <span className="label">Engineers Prepared</span>
            </div>
          </div>
        </div>
      </header>

      <main className="interview-container">
        <nav className="interview-categories" aria-label="Interview topics">
          {Object.entries(filteredData).map(([category, data]) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <FontAwesomeIcon icon={data.icon} />
              {data.title}
            </button>
          ))}
        </nav>

        <div className="interview-content">
          {Object.entries(filteredData).map(([category, data]) => (
            <div
              key={category}
              className={`interview-section ${activeCategory === category ? 'active' : ''}`}
              id={`${category}-interview`}
            >
              <h2>
                <FontAwesomeIcon icon={data.icon} /> {data.title}
              </h2>
              <div className="interview-topics">
                {data.topics.map((topic, index) => createTopicElement(topic))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="floating-nav">
        <button className="scroll-top" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon="arrow-up" />
        </button>
      </div>
    </>
  );
}

export default InterviewPrep;