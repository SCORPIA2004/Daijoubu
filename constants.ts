import { RoadmapTemplate, Resource } from './types';

export const LEARNING_RESOURCES: Record<string, Record<string, Resource[]>> = {
  beginner: {
    fundamentals: [
      { title: 'Python Basics', type: 'course', url: '#', description: 'Interactive Python fundamentals' },
      { title: 'Automate the Boring Stuff', type: 'book', url: '#', description: 'Free practical Python book' },
    ],
    automation: [
      { title: 'Automate the Boring Stuff', type: 'book', url: '#', description: 'The bible of automation' },
      { title: 'Real Python Scripting', type: 'guide', url: '#', description: 'Real-world automation patterns' },
    ],
    web: [
      { title: 'Flask Mega-Tutorial', type: 'guide', url: '#', description: 'Start building web apps' },
      { title: 'Django for Beginners', type: 'course', url: '#', description: 'Web framework fundamentals' },
    ],
    data: [
      { title: 'Pandas Getting Started', type: 'guide', url: '#', description: 'Data manipulation basics' },
      { title: 'Kaggle Learn', type: 'course', url: '#', description: 'Micro-courses for data science' },
    ],
    ml: [
      { title: 'Fast.ai', type: 'course', url: '#', description: 'Top-down ML learning' },
      { title: 'Scikit-learn 101', type: 'guide', url: '#', description: 'Machine learning library basics' },
    ],
    other: [
      { title: 'PyGame Zero', type: 'tool', url: '#', description: 'Make retro games simply' },
    ]
  },
  intermediate: {
    fundamentals: [
      { title: 'Python Tricks', type: 'book', url: '#', description: 'Write pythonic code' },
      { title: 'Fluent Python', type: 'book', url: '#', description: 'Deep dive into internals' },
    ],
    automation: [
      { title: 'Celery Docs', type: 'guide', url: '#', description: 'Distributed task queues' },
      { title: 'Airflow Intro', type: 'guide', url: '#', description: 'Workflow orchestration' },
    ],
    web: [
      { title: 'FastAPI Documentation', type: 'guide', url: '#', description: 'Modern async web APIs' },
      { title: 'Test-Driven Development', type: 'book', url: '#', description: 'TDD with Python' },
    ],
    data: [
      { title: 'Python for Data Analysis', type: 'book', url: '#', description: 'The pandas definitive guide' },
      { title: 'Streamlit', type: 'tool', url: '#', description: 'Turn scripts into data apps' },
    ],
    ml: [
      { title: 'Hugging Face Course', type: 'course', url: '#', description: 'Transformers and NLP' },
      { title: 'Deep Learning with Python', type: 'book', url: '#', description: 'Keras creator book' },
    ],
    other: [
      { title: 'Architecture Patterns', type: 'guide', url: '#', description: 'Cosmic Python' },
    ]
  },
  advanced: {
    fundamentals: [
      { title: 'CPython Internals', type: 'guide', url: '#', description: 'Understanding the interpreter' },
      { title: 'Concurrency in Python', type: 'guide', url: '#', description: 'Asyncio and threading mastery' },
    ],
    // Fallbacks for other categories use intermediate resources or generic advanced ones
    automation: [
        { title: 'Kubernetes Operators', type: 'guide', url: '#', description: 'Automating infra with Python' }
    ],
    web: [
        { title: 'Microservices Patterns', type: 'book', url: '#', description: 'Distributed systems' }
    ],
    data: [
        { title: 'Data Engineering on GCP', type: 'course', url: '#', description: 'Cloud scale data' }
    ],
    ml: [
        { title: 'MLOps Engineering', type: 'guide', url: '#', description: 'Deploying ML at scale' }
    ],
    other: [
        { title: 'System Design', type: 'guide', url: '#', description: 'Large scale architecture' }
    ]
  },
};

export const ROADMAP_TEMPLATES: Record<string, RoadmapTemplate> = {
  beginner_intensive: {
    level: 'Beginner',
    difficulty: 'Hardcore Mode (10+ hrs/wk)',
    duration: '8 Weeks',
    phases: [
      { title: 'Phase 1: The Foundation', content: 'Syntax, variables, loops, and logic.', topics: ['Variables', 'Conditionals', 'Loops', 'Functions'] },
      { title: 'Phase 2: Data Structures', content: 'Organizing data efficiently.', topics: ['Lists', 'Dictionaries', 'Sets', 'Tuples'] },
      { title: 'Phase 3: The Toolkit', content: 'Reading files and handling errors.', topics: ['File I/O', 'Exceptions', 'Pip', 'Virtual Envs'] },
      { title: 'Phase 4: First Boss', content: 'Build a complete project from scratch.', topics: ['Project Structure', 'Git Basics', 'Deployment'] },
    ],
  },
  beginner_moderate: {
    level: 'Beginner',
    difficulty: 'Adventure Mode (4-6 hrs/wk)',
    duration: '4 Months',
    phases: [
      { title: 'Phase 1: Basics', content: 'Getting comfortable with syntax.', topics: ['Syntax', 'Math', 'Strings'] },
      { title: 'Phase 2: Logic', content: 'Control flow and decision making.', topics: ['If/Else', 'Loops', 'Logic Gates'] },
      { title: 'Phase 3: Functions', content: 'Reusable code blocks.', topics: ['Functions', 'Scope', 'Modules'] },
      { title: 'Phase 4: Capstone', content: 'A simple CLI tool or game.', topics: ['Mini-Project', 'Debugging'] },
    ],
  },
  intermediate_focus: {
    level: 'Intermediate',
    difficulty: 'Specialist Mode',
    duration: '3 Months',
    phases: [
      { title: 'Phase 1: OOP & Classes', content: 'Object Oriented Programming principles.', topics: ['Classes', 'Inheritance', 'Polymorphism'] },
      { title: 'Phase 2: Advanced Data', content: 'Iterators, Generators, and Decorators.', topics: ['Decorators', 'Lambdas', 'List Comprehensions'] },
      { title: 'Phase 3: Domain Deep Dive', content: 'Libraries specific to your goal.', topics: ['Framework Mastery', 'API Integration', 'DB Connection'] },
      { title: 'Phase 4: Portfolio', content: 'A production-ready application.', topics: ['Testing', 'Documentation', 'Packaging'] },
    ],
  },
  advanced_mastery: {
    level: 'Advanced',
    difficulty: 'Legendary Mode',
    duration: '6 Months',
    phases: [
      { title: 'Phase 1: Architecture', content: 'Design patterns and clean code.', topics: ['SOLID', 'Design Patterns', 'Architecture'] },
      { title: 'Phase 2: Performance', content: 'Optimization and concurrency.', topics: ['Asyncio', 'Multiprocessing', 'Profiling'] },
      { title: 'Phase 3: Scale', content: 'Building for millions.', topics: ['Distributed Systems', 'Caching', 'Queues'] },
      { title: 'Phase 4: Contribution', content: 'Open source and mentorship.', topics: ['OSS Contribution', 'Public Speaking', 'Mentoring'] },
    ],
  },
};