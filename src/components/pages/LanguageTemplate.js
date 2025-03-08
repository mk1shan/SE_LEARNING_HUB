import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Language-specific resources and learning paths
const languageResources = {
  python: {
    name: 'Python',
    icon: 'python',
    description: 'Python is a high-level, interpreted programming language known for its simplicity and readability.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'Python for Beginners',
            url: 'https://www.python.org/about/gettingstarted/',
            type: 'documentation',
            platform: 'Python.org'
          },
          {
            name: 'Python Basics Tutorial',
            url: 'https://www.w3schools.com/python/',
            type: 'tutorial',
            platform: 'W3Schools'
          },
          {
            name: 'Python Crash Course',
            url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
            type: 'course',
            platform: 'freeCodeCamp'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'Python Data Structures',
            url: 'https://realpython.com/python-data-structures/',
            type: 'tutorial',
            platform: 'Real Python'
          },
          {
            name: 'OOP in Python',
            url: 'https://docs.python.org/3/tutorial/classes.html',
            type: 'documentation',
            platform: 'Python.org'
          },
          {
            name: 'Python Testing',
            url: 'https://docs.pytest.org/en/stable/',
            type: 'documentation',
            platform: 'pytest'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'Python Design Patterns',
            url: 'https://refactoring.guru/design-patterns/python',
            type: 'documentation',
            platform: 'Refactoring Guru'
          },
          {
            name: 'Advanced Python Features',
            url: 'https://docs.python.org/3/howto/functional.html',
            type: 'documentation',
            platform: 'Python.org'
          },
          {
            name: 'Python Concurrency',
            url: 'https://realpython.com/python-concurrency/',
            type: 'tutorial',
            platform: 'Real Python'
          }
        ]
      }
    ]
  },
  javascript: {
    name: 'JavaScript',
    icon: 'js',
    description: 'JavaScript is a versatile programming language that powers the web and modern full-stack development.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'JavaScript Fundamentals',
            url: 'https://javascript.info/',
            type: 'tutorial',
            platform: 'JavaScript.info'
          },
          {
            name: 'JavaScript Guide',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            type: 'documentation',
            platform: 'MDN'
          },
          {
            name: 'JavaScript Course',
            url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
            type: 'course',
            platform: 'freeCodeCamp'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'Async JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
            type: 'documentation',
            platform: 'MDN'
          },
          {
            name: 'ES6+ Features',
            url: 'https://es6.io/',
            type: 'course',
            platform: 'ES6.io'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'JavaScript Design Patterns',
            url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
            type: 'book',
            platform: 'Addy Osmani'
          },
          {
            name: 'JavaScript Performance',
            url: 'https://web.dev/fast/',
            type: 'documentation',
            platform: 'web.dev'
          }
        ]
      }
    ]
  },
  java: {
    name: 'Java',
    icon: 'java',
    description: 'Java is a class-based, object-oriented programming language designed for portability and cross-platform development.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'Java Tutorial for Beginners',
            url: 'https://docs.oracle.com/javase/tutorial/java/index.html',
            type: 'documentation',
            platform: 'Oracle'
          },
          {
            name: 'Java Programming Course',
            url: 'https://www.codecademy.com/learn/learn-java',
            type: 'course',
            platform: 'Codecademy'
          },
          {
            name: 'Java for Complete Beginners',
            url: 'https://www.edx.org/learn/java',
            type: 'course',
            platform: 'edX'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'Java Collections Framework',
            url: 'https://docs.oracle.com/javase/tutorial/collections/',
            type: 'documentation',
            platform: 'Oracle'
          },
          {
            name: 'Multithreading in Java',
            url: 'https://www.baeldung.com/java-concurrency',
            type: 'tutorial',
            platform: 'Baeldung'
          },
          {
            name: 'Spring Boot Guide',
            url: 'https://spring.io/guides',
            type: 'documentation',
            platform: 'Spring'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'Java Design Patterns',
            url: 'https://java-design-patterns.com/',
            type: 'documentation',
            platform: 'Java Design Patterns'
          },
          {
            name: 'Advanced Java Programming',
            url: 'https://www.udemy.com/course/advanced-java-programming/',
            type: 'course',
            platform: 'Udemy'
          },
          {
            name: 'Java Memory Model',
            url: 'https://jenkov.com/tutorials/java-concurrency/java-memory-model.html',
            type: 'tutorial',
            platform: 'Jenkov'
          }
        ]
      }
    ]
  },
  cpp: {
    name: 'C++',
    icon: 'cpp',
    description: 'C++ is a powerful systems programming language that extends C with object-oriented features.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'C++ Tutorial',
            url: 'https://www.learncpp.com/',
            type: 'tutorial',
            platform: 'LearnCpp'
          },
          {
            name: 'C++ Programming Course',
            url: 'https://www.programiz.com/cpp-programming',
            type: 'tutorial',
            platform: 'Programiz'
          },
          {
            name: 'C++ Fundamentals',
            url: 'https://isocpp.org/get-started',
            type: 'documentation',
            platform: 'ISO C++'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'Modern C++',
            url: 'https://docs.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp',
            type: 'documentation',
            platform: 'Microsoft'
          },
          {
            name: 'STL Tutorial',
            url: 'https://www.geeksforgeeks.org/cpp-stl-tutorial/',
            type: 'tutorial',
            platform: 'GeeksforGeeks'
          },
          {
            name: 'C++ Templates',
            url: 'https://www.cplusplus.com/doc/tutorial/templates/',
            type: 'documentation',
            platform: 'cplusplus.com'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'Advanced C++ Features',
            url: 'https://en.cppreference.com/w/',
            type: 'documentation',
            platform: 'CPP Reference'
          },
          {
            name: 'Design Patterns in C++',
            url: 'https://refactoring.guru/design-patterns/cpp',
            type: 'documentation',
            platform: 'Refactoring Guru'
          },
          {
            name: 'Modern C++ Design',
            url: 'https://github.com/boostorg/boost',
            type: 'documentation',
            platform: 'Boost'
          }
        ]
      }
    ]
  },
  csharp: {
    name: 'C#',
    icon: 'csharp',
    description: 'C# is a modern, object-oriented programming language designed for building apps on the .NET platform.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'C# Tutorial',
            url: 'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
            type: 'documentation',
            platform: 'Microsoft'
          },
          {
            name: 'C# Programming Guide',
            url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/',
            type: 'documentation',
            platform: 'Microsoft'
          },
          {
            name: 'C# Fundamentals',
            url: 'https://channel9.msdn.com/Series/CSharp-Fundamentals-for-Absolute-Beginners',
            type: 'video-course',
            platform: 'Microsoft Channel 9'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'ASP.NET Core',
            url: 'https://docs.microsoft.com/en-us/aspnet/core/',
            type: 'documentation',
            platform: 'Microsoft'
          },
          {
            name: 'LINQ Tutorial',
            url: 'https://www.tutorialsteacher.com/linq',
            type: 'tutorial',
            platform: 'TutorialsTeacher'
          },
          {
            name: 'Entity Framework Core',
            url: 'https://docs.microsoft.com/en-us/ef/core/',
            type: 'documentation',
            platform: 'Microsoft'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'Advanced C# Features',
            url: 'https://docs.microsoft.com/en-us/dotnet/csharp/advanced-topics/',
            type: 'documentation',
            platform: 'Microsoft'
          },
          {
            name: 'Design Patterns in C#',
            url: 'https://refactoring.guru/design-patterns/csharp',
            type: 'documentation',
            platform: 'Refactoring Guru'
          },
          {
            name: 'Concurrent Programming',
            url: 'https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/',
            type: 'documentation',
            platform: 'Microsoft'
          }
        ]
      }
    ]
  },
  ruby: {
    name: 'Ruby',
    icon: 'ruby',
    description: 'Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'Ruby in Twenty Minutes',
            url: 'https://www.ruby-lang.org/en/documentation/quickstart/',
            type: 'tutorial',
            platform: 'Ruby-Lang'
          },
          {
            name: 'Ruby Fundamentals',
            url: 'https://rubymonk.com/',
            type: 'interactive',
            platform: 'RubyMonk'
          },
          {
            name: 'Learn Ruby',
            url: 'https://www.codecademy.com/learn/learn-ruby',
            type: 'course',
            platform: 'Codecademy'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'Ruby on Rails Tutorial',
            url: 'https://www.railstutorial.org/',
            type: 'book',
            platform: 'Rails Tutorial'
          },
          {
            name: 'Ruby Best Practices',
            url: 'https://rubystyle.guide/',
            type: 'documentation',
            platform: 'Ruby Style Guide'
          },
          {
            name: 'Testing with RSpec',
            url: 'https://rspec.info/documentation/',
            type: 'documentation',
            platform: 'RSpec'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'Ruby Under a Microscope',
            url: 'http://patshaughnessy.net/ruby-under-a-microscope',
            type: 'book',
            platform: 'Pat Shaughnessy'
          },
          {
            name: 'Ruby Metaprogramming',
            url: 'https://pragprog.com/titles/ppmetr2/metaprogramming-ruby-2/',
            type: 'book',
            platform: 'Pragmatic Bookshelf'
          },
          {
            name: 'Ruby Performance',
            url: 'https://github.com/ruby/ruby/blob/master/doc/contributing.rdoc',
            type: 'documentation',
            platform: 'Ruby'
          }
        ]
      }
    ]
  },
  php: {
    name: 'PHP',
    icon: 'php',
    description: 'PHP is a popular server-side scripting language designed for web development.',
    levels: [
      {
        title: 'Beginner',
        resources: [
          {
            name: 'PHP Manual',
            url: 'https://www.php.net/manual/en/',
            type: 'documentation',
            platform: 'PHP.net'
          },
          {
            name: 'PHP Tutorial',
            url: 'https://www.w3schools.com/php/',
            type: 'tutorial',
            platform: 'W3Schools'
          },
          {
            name: 'Learn PHP',
            url: 'https://www.phptutorial.net/',
            type: 'tutorial',
            platform: 'PHP Tutorial'
          }
        ]
      },
      {
        title: 'Intermediate',
        resources: [
          {
            name: 'Laravel Framework',
            url: 'https://laravel.com/docs',
            type: 'documentation',
            platform: 'Laravel'
          },
          {
            name: 'PHP Composer',
            url: 'https://getcomposer.org/doc/',
            type: 'documentation',
            platform: 'Composer'
          },
          {
            name: 'Modern PHP',
            url: 'https://phptherightway.com/',
            type: 'documentation',
            platform: 'PHP The Right Way'
          }
        ]
      },
      {
        title: 'Advanced',
        resources: [
          {
            name: 'PHP Design Patterns',
            url: 'https://refactoring.guru/design-patterns/php',
            type: 'documentation',
            platform: 'Refactoring Guru'
          },
          {
            name: 'Advanced PHP Programming',
            url: 'https://phpdelusions.net/',
            type: 'documentation',
            platform: 'PHP Delusions'
          },
          {
            name: 'PHP Security',
            url: 'https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet',
            type: 'documentation',
            platform: 'OWASP'
          }
        ]
      }
    ]
  }
};

function LanguageTemplate() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [activeLevel, setActiveLevel] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');
    
    if (lang && languageResources[lang]) {
      setCurrentLanguage(languageResources[lang]);
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  const getResourceIcon = (type) => {
    const iconMap = {
      'documentation': 'book',
      'tutorial': 'chalkboard-teacher',
      'course': 'graduation-cap',
      'video': 'play-circle',
      'book': 'book-open',
      'interactive': 'laptop-code'
    };
    return iconMap[type] || 'link';
  };

  if (!currentLanguage) {
    return (
      <div className="loading-container">
        <FontAwesomeIcon icon="spinner" spin />
        <p>Loading language resources...</p>
      </div>
    );
  }

  return (
    <div className="language-template">
      <header className="language-header">
        <div className="language-header-content">
          <FontAwesomeIcon icon={['fab', currentLanguage.icon]} className="language-icon" />
          <h1>{currentLanguage.name} Programming</h1>
          <p>{currentLanguage.description}</p>
        </div>
      </header>

      <div className="language-content">
        <div className="level-nav">
          {currentLanguage.levels.map((level, index) => (
            <button
              key={level.title}
              className={`level-nav-item ${activeLevel === index ? 'active' : ''}`}
              onClick={() => setActiveLevel(index)}
            >
              {level.title}
            </button>
          ))}
        </div>

        <div className="level-content">
          <h2>{currentLanguage.levels[activeLevel].title} Level Resources</h2>
          <div className="resources-grid">
            {currentLanguage.levels[activeLevel].resources.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">
                  <FontAwesomeIcon icon={getResourceIcon(resource.type)} />
                </div>
                <div className="resource-content">
                  <h3>{resource.name}</h3>
                  <span className="platform-badge">
                    <FontAwesomeIcon icon="building" />
                    {resource.platform}
                  </span>
                  <div className="resource-type">
                    <FontAwesomeIcon icon="tag" />
                    <span>{resource.type}</span>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    Visit Resource <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageTemplate;