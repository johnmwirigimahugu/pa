continue and finish from where you left off


give me a full technical write up in plain text of this framework including a full stack tutorial of all features that i can offer as a fullstack course on my university

# Unicorn-PA.js Full-Stack Framework: Technical Documentation & University Course

## Table of Contents
1. Introduction to Unicorn-PA.js
2. Architecture Overview
3. Core Concepts
4. Frontend Development
5. Backend Development
6. Database Integration
7. State Management
8. Component System
9. Routing & Navigation
10. API Communication
11. Authentication & Security
12. Performance Optimization
13. Testing Strategies
14. Deployment & Production
15. Advanced Patterns
16. Case Studies
17. Future Directions

---

## 1. Introduction to Unicorn-PA.js

### 1.1 What is Unicorn-PA.js?

Unicorn-PA.js is a comprehensive, zero-dependency JavaScript framework designed for building modern web applications. It runs seamlessly on both client and server, combining the best features from multiple frameworks into a single, cohesive solution.

### 1.2 Key Features

- **Zero Dependencies**: No external libraries required
- **Universal**: Runs on both browser and server environments
- **Reactive State Management**: Built-in signals and effects system
- **Component Architecture**: Reusable components with lifecycle hooks
- **Advanced Routing**: Client-side routing with guards and parameters
- **Hypermedia System**: Declarative attributes for dynamic UI updates
- **Multi-threading Support**: Worker pool for CPU-intensive tasks
- **Built-in ORM**: Data persistence with multiple storage engines
- **Mobile Enhancements**: Geolocation, vibration, and notifications
- **Integrated CSS Framework**: Responsive design system with utility classes
- **Real-time Communication**: WebSocket and SSE support
- **Performance Monitoring**: Built-in metrics collection

### 1.3 Philosophy

Unicorn-PA.js follows these core principles:

- **Simplicity**: Minimal learning curve with intuitive APIs
- **Performance**: Optimized for speed and efficiency
- **Flexibility**: Adaptable to various project requirements
- **Consistency**: Unified patterns across frontend and backend
- **Accessibility**: Built with accessibility in mind
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

---

## 2. Architecture Overview

### 2.1 Framework Structure

Unicorn-PA.js is organized into several interconnected modules:

```
Unicorn-PA.js
├── Core System
│   ├── Configuration
│   ├── Environment Detection
│   ├── Utilities
│   └── Event System
├── State Management
│   ├── Signals
│   ├── Effects
│   ├── Computed Values
│   └── Store
├── UI System
│   ├── DOM Utilities
│   ├── Component System
│   ├── CSS Framework
│   └── Hypermedia
├── Routing
│   ├── Router
│   ├── Route Guards
│   └── Navigation
├── Communication
│   ├── AJAX System
│   ├── WebSocket
│   └── Server-Side Events
├── Data Persistence
│   ├── ORM
│   ├── Storage Engines
│   └── Query Builder
├── Advanced Features
│   ├── Worker Pool
│   ├── Mobile Enhancements
│   ├── Chart System
│   ├── Search Engine
│   └── Notification System
└── Development Tools
    ├── Web CLI
    ├── Performance Monitoring
    └── Testing Framework
```

### 2.2 Execution Contexts

Unicorn-PA.js operates in three main contexts:

1. **Browser Context**: Client-side rendering and interaction
2. **Server Context**: Server-side rendering and API handling
3. **Worker Context**: Background processing for CPU-intensive tasks

### 2.3 Data Flow

The framework follows a unidirectional data flow pattern:

```
User Interaction → Event → State Update → UI Update
```

This predictable flow makes applications easier to debug and maintain.

---

## 3. Core Concepts

### 3.1 Signals

Signals are the foundation of reactivity in Unicorn-PA.js:

```javascript
// Create a signal
const count = PA.signal(0);

// Get value
console.log(count.value); // 0

// Set value
count.value = 1;

// Subscribe to changes
count.subscribe((newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});
```

### 3.2 Effects

Effects are side effects that run when their dependencies change:

```javascript
// Create an effect
PA.effect(() => {
  console.log(`Count is now: ${count.value}`);
  document.getElementById('counter').textContent = count.value;
});
```

### 3.3 Computed Values

Computed values derive their state from other signals:

```javascript
// Create a computed signal
const doubled = PA.computed(() => count.value * 2);

// The value updates automatically when count changes
console.log(doubled.value); // 2
```

### 3.4 Store

The store provides centralized state management:

```javascript
// Create a store
const appStore = new PA.QuantumStore({
  user: null,
  theme: 'light',
  language: 'en'
});

// Get state
const state = appStore.getState();

// Update state
appStore.setState({ user: { name: 'John', email: 'john@example.com' } });

// Subscribe to changes
appStore.subscribe((newState, prevState, action) => {
  console.log('State changed:', action);
});
```

---

## 4. Frontend Development

### 4.1 Component System

Components are reusable UI elements with their own state and lifecycle:

```javascript
// Register a component
PA.component.register('user-card', {
  // Component template
  template: `
    <div class="pa-card pa-user-card">
      <div class="pa-card-body">
        <h3>{{user.name}}</h3>
        <p>{{user.email}}</p>
      </div>
    </div>
  `,
  
  // Component state
  state: {
    user: null
  },
  
  // Lifecycle hooks
  onMount: function(el) {
    console.log('Component mounted');
  },
  
  onUpdate: function(el) {
    console.log('Component updated');
  },
  
  onUnmount: function(el) {
    console.log('Component unmounted');
  }
});

// Use the component
const userCard = PA.component.render('user-card', { 
  user: { name: 'John', email: 'john@example.com' }
});
```

### 4.2 Hypermedia Attributes

Declarative attributes enable dynamic UI without explicit JavaScript:

```html
<!-- Data binding -->
<input type="text" pa-bind="value:user.name">

<!-- Conditional rendering -->
<div pa-show="user.isLoggedIn">Welcome back!</div>

<!-- Text content -->
<span pa-text="user.name"></span>

<!-- List rendering -->
<div pa-each="users:user">
  <div class="pa-card">
    <h3 pa-text="user.name"></h3>
    <p pa-text="user.email"></p>
  </div>
</div>

<!-- Event handling -->
<button pa-on:click="saveUser">Save</button>

<!-- AJAX requests -->
<button pa-post="/api/users" pa-target="#result" pa-swap="innerHTML">
  Load Users
</button>
```

### 4.3 CSS Framework

The built-in CSS framework provides responsive design utilities:

```html
<!-- Layout -->
<div class="pa-container">
  <div class="pa-grid pa-grid-cols-1 pa-md:grid-cols-3">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</div>

<!-- Components -->
<div class="pa-card">
  <div class="pa-card-header">
    <h3>Card Title</h3>
  </div>
  <div class="pa-card-body">
    <p>Card content</p>
  </div>
</div>

<!-- Forms -->
<div class="pa-form-group">
  <label class="pa-label">Name</label>
  <input type="text" class="pa-input-text" placeholder="Enter your name">
</div>

<button class="pa-button pa-button-primary">Submit</button>
```

---

## 5. Backend Development

### 5.1 Server Setup

Unicorn-PA.js can run on the server with Node.js:

```javascript
// server.js
const PA = require('unicorn-pa.js');

// Create an app
const app = new PA.App();

// Middleware
app.use(PA.middleware.cors());
app.use(PA.middleware.json());
app.use(PA.middleware.static('public'));

// Routes
app.get('/api/users', async (req, res) => {
  const users = await PA.db.findAll('users');
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const user = await PA.db.create('users', req.body);
  res.json(user);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### 5.2 API Development

Create RESTful APIs with minimal code:

```javascript
// Define a resource
const UserResource = PA.resource('users', {
  // List all users
  index: async (req, res) => {
    const users = await PA.db.findAll('users');
    res.json(users);
  },
  
  // Get a specific user
  show: async (req, res) => {
    const user = await PA.db.findById('users', req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  },
  
  // Create a new user
  create: async (req, res) => {
    const user = await PA.db.create('users', req.body);
    res.status(201).json(user);
  },
  
  // Update a user
  update: async (req, res) => {
    const user = await PA.db.update('users', req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  },
  
  // Delete a user
  destroy: async (req, res) => {
    const success = await PA.db.delete('users', req.params.id);
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  }
});

// Register the resource
app.resource('/api', UserResource);
```

### 5.3 Middleware

Create custom middleware for request processing:

```javascript
// Authentication middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const user = await PA.auth.verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply middleware to routes
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json(req.user);
});

// Error handling middleware
const errorHandler = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
};

app.use(errorHandler);
```

---

## 6. Database Integration

### 6.1 ORM Usage

Unicorn-PA.js includes a built-in ORM with multiple storage engines:

```javascript
// Initialize the database
const db = new PA.PajsDB();

// Connect to a storage engine
db.connect('default', { engine: 'sqlite', path: './data/app.db' });

// Define a model
db.model('user', {
  id: 'string',
  name: 'string',
  email: 'string',
  password: 'string',
  role: 'string',
  created_at: 'datetime',
  updated_at: 'datetime'
});

// Create a user
const user = await db.create('user', {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'hashed_password',
  role: 'user'
});

// Find users
const users = await db.find('user', { role: 'user' });

// Update a user
await db.update('user', 'user-id', { name: 'Jane Doe' });

// Delete a user
await db.delete('user', 'user-id');
```

### 6.2 Query Builder

Use the query builder for complex queries:

```javascript
// Get all active users, ordered by name
const users = await db.query('user')
  .where('active', true)
  .orderBy('name', 'asc')
  .limit(10)
  .execute();

// Get users with a specific role
const admins = await db.query('user')
  .where('role', 'admin')
  .execute();

// Join queries
const usersWithPosts = await db.query('user')
  .join('post', 'user.id', 'post.user_id')
  .where('post.published', true)
  .execute();
```

### 6.3 Migrations

Manage database schema changes with migrations:

```javascript
// Create a migration
const migration = db.migration.create('create_users_table', {
  up: async () => {
    await db.schema.createTable('users', {
      id: 'string PRIMARY KEY',
      name: 'string NOT NULL',
      email: 'string UNIQUE NOT NULL',
      password: 'string NOT NULL',
      role: 'string DEFAULT "user"',
      created_at: 'datetime DEFAULT CURRENT_TIMESTAMP',
      updated_at: 'datetime DEFAULT CURRENT_TIMESTAMP'
    });
  },
  
  down: async () => {
    await db.schema.dropTable('users');
  }
});

// Run migrations
await db.migrate.up();
```

---

## 7. State Management

### 7.1 Local State

Manage component-level state with signals:

```javascript
// Create a component with local state
PA.component.register('counter', {
  template: `
    <div>
      <p>Count: {{count}}</p>
      <button pa-on:click="increment">+</button>
      <button pa-on:click="decrement">-</button>
    </div>
  `,
  
  state: {
    count: 0
  },
  
  onMount: function(el) {
    // Create signals for state
    this.count = PA.signal(this.state.count);
    
    // Create methods
    this.increment = () => {
      this.count.value++;
    };
    
    this.decrement = () => {
      this.count.value--;
    };
    
    // Bind signals to the template
    PA.effect(() => {
      el.querySelector('p').textContent = `Count: ${this.count.value}`;
    });
  }
});
```

### 7.2 Global State

Manage application-wide state with the store:

```javascript
// Create a global store
const appStore = new PA.QuantumStore({
  user: null,
  theme: 'light',
  language: 'en',
  notifications: []
});

// Define actions
const actions = {
  setUser: (user) => {
    appStore.setState({ user }, { type: 'SET_USER' });
  },
  
  setTheme: (theme) => {
    appStore.setState({ theme }, { type: 'SET_THEME' });
  },
  
  addNotification: (notification) => {
    appStore.setState(state => ({
      notifications: [...state.notifications, notification]
    }), { type: 'ADD_NOTIFICATION' });
  }
};

// Use the store in components
PA.component.register('user-profile', {
  template: `
    <div>
      <h2 pa-text="user.name"></h2>
      <p pa-text="user.email"></p>
    </div>
  `,
  
  onMount: function(el) {
    // Subscribe to store changes
    this.unsubscribe = appStore.subscribe((state) => {
      if (state.user) {
        el.querySelector('h2').textContent = state.user.name;
        el.querySelector('p').textContent = state.user.email;
      }
    });
  },
  
  onUnmount: function() {
    // Clean up subscription
    this.unsubscribe();
  }
});
```

### 7.3 Persistence

Persist state to local storage or server:

```javascript
// Create a persistent store
const persistentStore = new PA.QuantumStore({
  preferences: {}
}, {
  persistence: {
    key: 'app-preferences',
    storage: 'localStorage'
  }
});

// Sync with server
const syncStore = new PA.QuantumStore({
  data: {}
}, {
  persistence: {
    key: 'app-data',
    storage: 'remote',
    endpoint: '/api/sync',
    syncInterval: 30000 // 30 seconds
  }
});
```

---

## 8. Component System

### 8.1 Component Lifecycle

Components have several lifecycle hooks:

```javascript
PA.component.register('lifecycle-demo', {
  template: `<div>Lifecycle Demo</div>`,
  
  // Called when component is created
  onCreate: function() {
    console.log('Component created');
  },
  
  // Called when component is mounted to DOM
  onMount: function(el) {
    console.log('Component mounted', el);
    
    // Set up event listeners
    this.handleClick = () => {
      console.log('Component clicked');
    };
    
    el.addEventListener('click', this.handleClick);
  },
  
  // Called when component updates
  onUpdate: function(el) {
    console.log('Component updated');
  },
  
  // Called before component unmounts
  onBeforeUnmount: function(el) {
    console.log('Component will unmount');
  },
  
  // Called when component unmounts
  onUnmount: function(el) {
    console.log('Component unmounted');
    
    // Clean up event listeners
    el.removeEventListener('click', this.handleClick);
  }
});
```

### 8.2 Component Communication

Components can communicate through props, events, and shared state:

```javascript
// Parent component
PA.component.register('parent', {
  template: `
    <div>
      <h1>Parent Component</h1>
      <child-component 
        pa-data="user:currentUser"
        pa-on:user-updated="handleUserUpdate"
      ></child-component>
    </div>
  `,
  
  state: {
    currentUser: { name: 'John', email: 'john@example.com' }
  },
  
  onMount: function(el) {
    this.handleUserUpdate = (user) => {
      this.state.currentUser = user;
      console.log('User updated in parent:', user);
    };
  }
});

// Child component
PA.component.register('child-component', {
  template: `
    <div>
      <h2>Child Component</h2>
      <p pa-text="user.name"></p>
      <button pa-on:click="updateUser">Update User</button>
    </div>
  `,
  
  onMount: function(el) {
    this.updateUser = () => {
      const updatedUser = {
        ...this.user,
        name: 'Jane Doe'
      };
      
      // Emit event to parent
      this.emit('user-updated', updatedUser);
    };
  }
});
```

### 8.3 Dynamic Components

Load components dynamically:

```javascript
// Load a component from a remote source
PA.component.load('/components/chart.js').then(() => {
  // Component is now available
  const chart = PA.component.render('chart', {
    type: 'line',
    data: [1, 2, 3, 4, 5]
  });
  
  document.getElementById('chart-container').appendChild(chart);
});

// Create a component wrapper for lazy loading
PA.component.register('lazy-wrapper', {
  template: `
    <div class="lazy-wrapper">
      <div pa-show="!loaded">Loading...</div>
      <div pa-show="loaded" id="content"></div>
    </div>
  `,
  
  state: {
    loaded: false
  },
  
  onMount: function(el) {
    const componentName = el.getAttribute('pa-component');
    const contentEl = el.querySelector('#content');
    
    PA.component.load(`/components/${componentName}.js`).then(() => {
      this.state.loaded = true;
      
      const component = PA.component.render(componentName, this.props);
      contentEl.appendChild(component);
    });
  }
});

// Use the lazy wrapper
<div pa-component="chart" pa-data="type:'line',data:[1,2,3,4,5]"></div>
```

---

## 9. Routing & Navigation

### 9.1 Basic Routing

Define routes and navigation:

```javascript
// Define routes
PA.router.add('/', () => {
  PA.hypermedia.swap('#content', `
    <h1>Home</h1>
    <p>Welcome to the app!</p>
  `);
});

PA.router.add('/about', () => {
  PA.hypermedia.swap('#content', `
    <h1>About</h1>
    <p>This is a demo app built with Unicorn-PA.js</p>
  `);
});

PA.router.add('/contact', () => {
  PA.hypermedia.swap('#content', `
    <h1>Contact</h1>
    <p>Get in touch with us!</p>
  `);
});

// Start the router
PA.router.start();
```

### 9.2 Dynamic Routes

Create routes with parameters:

```javascript
// Define a dynamic route
PA.router.add('/users/:id', ({ params }) => {
  PA.ajax.get(`/api/users/${params.id}`).then(user => {
    PA.hypermedia.swap('#content', `
      <h1>${user.name}</h1>
      <p>${user.email}</p>
    `);
  });
});

// Navigate to a dynamic route
PA.router.navigate('/users/123');
```

### 9.3 Route Guards

Protect routes with authentication:

```javascript
// Define a guard function
const requireAuth = (to, from, next) => {
  const user = PA.store.getState().user;
  
  if (user) {
    next();
  } else {
    PA.router.navigate('/login');
    PA.notifications.show('Please log in to access this page', 'warning');
  }
};

// Apply the guard to a route
PA.router.add('/dashboard', () => {
  PA.hypermedia.swap('#content', '<h1>Dashboard</h1>');
}, { guard: requireAuth });

// Define a role-based guard
const requireAdmin = (to, from, next) => {
  const user = PA.store.getState().user;
  
  if (user && user.role === 'admin') {
    next();
  } else {
    PA.router.navigate('/');
    PA.notifications.show('Access denied', 'danger');
  }
};

// Apply the admin guard
PA.router.add('/admin', () => {
  PA.hypermedia.swap('#content', '<h1>Admin Panel</h1>');
}, { guard: requireAdmin });
```

### 9.4 Nested Routes

Create nested route structures:

```javascript
// Define parent route
PA.router.add('/users', () => {
  PA.hypermedia.swap('#content', `
    <h1>Users</h1>
    <div id="user-content"></div>
  `);
  
  // Define child routes
  PA.router.add('/users/list', () => {
    PA.ajax.get('/api/users').then(users => {
      const html = users.map(user => `
        <div class="pa-card">
          <h3>${user.name}</h3>
          <p>${user.email}</p>
          <button pa-link="/users/${user.id}">View Details</button>
        </div>
      `).join('');
      
      PA.hypermedia.swap('#user-content', html);
    });
  });
  
  PA.router.add('/users/:id', ({ params }) => {
    PA.ajax.get(`/api/users/${params.id}`).then(user => {
      PA.hypermedia.swap('#user-content', `
        <div class="pa-card">
          <h1>${user.name}</h1>
          <p>${user.email}</p>
          <button pa-link="/users/list">Back to List</button>
        </div>
      `);
    });
  });
});
```

---

## 10. API Communication

### 10.1 AJAX Requests

Make HTTP requests with the built-in AJAX system:

```javascript
// GET request
PA.ajax.get('/api/users').then(users => {
  console.log('Users:', users);
});

// POST request
PA.ajax.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com'
}).then(user => {
  console.log('Created user:', user);
});

// PUT request
PA.ajax.put('/api/users/123', {
  name: 'Jane Doe'
}).then(user => {
  console.log('Updated user:', user);
});

// DELETE request
PA.ajax.delete('/api/users/123').then(() => {
  console.log('User deleted');
});
```

### 10.2 Advanced AJAX Configuration

Configure requests with options:

```javascript
// Request with headers and custom options
PA.ajax.request('GET')
  .url('/api/users')
  .header('Authorization', 'Bearer token')
  .header('Accept', 'application/json')
  .timeout(5000)
  .then(users => {
    console.log('Users:', users);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });

// Request with progress tracking
PA.ajax.request('POST')
  .url('/api/upload')
  .data(fileData)
  .on('progress', (event) => {
    const percent = Math.round((event.loaded / event.total) * 100);
    console.log(`Upload progress: ${percent}%`);
  })
  .then(response => {
    console.log('Upload complete:', response);
  });
```

### 10.3 Request Interceptors

Intercept requests and responses:

```javascript
// Add a request interceptor
PA.ajax.interceptors.request.use(config => {
  // Add auth token to all requests
  const token = localStorage.getItem('authToken');
  if (token) {
    config.header('Authorization', `Bearer ${token}`);
  }
  
  return config;
});

// Add a response interceptor
PA.ajax.interceptors.response.use(response => {
  // Handle common response patterns
  if (response.status === 401) {
    // Redirect to login on unauthorized
    PA.router.navigate('/login');
  }
  
  return response;
});
```

### 10.4 GraphQL Integration

Integrate with GraphQL APIs:

```javascript
// GraphQL query
const query = `
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

PA.ajax.post('/graphql', {
  query,
  variables: { id: '123' }
}).then(response => {
  const user = response.data.user;
  console.log('User:', user);
});

// GraphQL mutation
const mutation = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;

PA.ajax.post('/graphql', {
  query: mutation,
  variables: {
    input: {
      name: 'John Doe',
      email: 'john@example.com'
    }
  }
}).then(response => {
  const user = response.data.createUser;
  console.log('Created user:', user);
});
```

---

## 11. Authentication & Security

### 11.1 Authentication Flow

Implement a complete authentication system:

```javascript
// Login function
async function login(email, password) {
  try {
    const response = await PA.ajax.post('/api/auth/login', {
      email,
      password
    });
    
    // Store token and user data
    localStorage.setItem('authToken', response.token);
    PA.store.setState({ user: response.user });
    
    // Redirect to dashboard
    PA.router.navigate('/dashboard');
    
    PA.notifications.show('Login successful', 'success');
  } catch (error) {
    PA.notifications.show('Login failed: ' + error.message, 'danger');
  }
}

// Logout function
function logout() {
  // Remove token and user data
  localStorage.removeItem('authToken');
  PA.store.setState({ user: null });
  
  // Redirect to login
  PA.router.navigate('/login');
  
  PA.notifications.show('Logged out successfully', 'info');
}

// Check authentication status
function checkAuth() {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    PA.router.navigate('/login');
    return false;
  }
  
  // Verify token with server
  return PA.ajax.get('/api/auth/verify')
    .then(response => {
      PA.store.setState({ user: response.user });
      return true;
    })
    .catch(() => {
      localStorage.removeItem('authToken');
      PA.store.setState({ user: null });
      PA.router.navigate('/login');
      return false;
    });
}
```

### 11.2 Route Protection

Protect routes with authentication:

```javascript
// Authentication guard
const requireAuth = (to, from, next) => {
  checkAuth().then(isAuthenticated => {
    if (isAuthenticated) {
      next();
    } else {
      PA.router.navigate('/login');
    }
  });
};

// Apply guard to routes
PA.router.add('/dashboard', () => {
  // Dashboard route logic
}, { guard: requireAuth });

PA.router.add('/profile', () => {
  // Profile route logic
}, { guard: requireAuth });
```

### 11.3 Role-Based Access Control

Implement role-based permissions:

```javascript
// Role-based guard
const requireRole = (role) => (to, from, next) => {
  checkAuth().then(isAuthenticated => {
    if (!isAuthenticated) {
      PA.router.navigate('/login');
      return;
    }
    
    const user = PA.store.getState().user;
    
    if (user.role === role || user.role === 'admin') {
      next();
    } else {
      PA.router.navigate('/');
      PA.notifications.show('Access denied', 'danger');
    }
  });
};

// Apply role-based guards
PA.router.add('/admin', () => {
  // Admin route logic
}, { guard: requireRole('admin') });

PA.router.add('/moderator', () => {
  // Moderator route logic
}, { guard: requireRole('moderator') });
```

### 11.4 Security Best Practices

Implement security measures:

```javascript
// CSRF protection
PA.ajax.interceptors.request.use(config => {
  if (['POST', 'PUT', 'DELETE'].includes(config.method)) {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (token) {
      config.header('X-CSRF-Token', token);
    }
  }
  
  return config;
});

// XSS protection
const escapeHtml = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

// Content Security Policy
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.example.com;
`;

// Set CSP header
if (typeof window !== 'undefined') {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = csp;
  document.head.appendChild(meta);
}
```

---

## 12. Performance Optimization

### 12.1 Code Splitting

Split your application into smaller chunks:

```javascript
// Define a lazy-loaded route
PA.router.add('/dashboard', () => {
  // Load dashboard module on demand
  import('./js/dashboard.js').then(module => {
    module.renderDashboard();
  });
});

// Define a lazy-loaded component
PA.component.register('chart', {
  loader: () => import('./js/chart-component.js'),
  
  onMount: function(el) {
    this.loader().then(module => {
      this.chart = new module.Chart(el, this.props);
    });
  }
});
```

### 12.2 Image Optimization

Optimize images for better performance:

```javascript
// Lazy load images
PA.component.register('lazy-image', {
  template: `
    <div class="lazy-image-container">
      <div class="lazy-image-placeholder" pa-show="!loaded">
        <i class="fas fa-image"></i>
      </div>
      <img class="lazy-image" pa-show="loaded" pa-bind="src:imageSrc" pa-bind="alt:imageAlt">
    </div>
  `,
  
  state: {
    loaded: false,
    imageSrc: '',
    imageAlt: ''
  },
  
  onMount: function(el) {
    const img = el.querySelector('.lazy-image');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Load image when it comes into view
          img.src = this.props.src;
          img.alt = this.props.alt;
          
          img.onload = () => {
            this.state.loaded = true;
          };
          
          observer.unobserve(img);
        }
      });
    });
    
    observer.observe(img);
  }
});

// Use the lazy image component
<div pa-component="lazy-image" pa-data="src:'image.jpg',alt:'Description'"></div>
```

### 12.3 Caching Strategies

Implement caching for better performance:

```javascript
// Service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// sw.js
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/',
  '/js/unicorn-pa.js',
  '/css/app.css',
  '/assets/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Cache miss - fetch from network
        return fetch(event.request);
      })
  );
});
```

### 12.4 Performance Monitoring

Monitor application performance:

```javascript
// Performance metrics
const perf = {
  // Measure page load time
  measurePageLoad: () => {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
      
      // Send metrics to analytics
      PA.ajax.post('/api/analytics/performance', {
        metric: 'pageLoad',
        value: loadTime,
        url: window.location.href
      });
    });
  },
  
  // Measure API response time
  measureApiResponse: (url, startTime) => {
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    
    console.log(`API response time for ${url}: ${responseTime}ms`);
    
    // Send metrics to analytics
    PA.ajax.post('/api/analytics/performance', {
      metric: 'apiResponse',
      value: responseTime,
      url
    });
  }
};

// Initialize performance monitoring
perf.measurePageLoad();

// Measure API responses
PA.ajax.interceptors.request.use(config => {
  config._startTime = performance.now();
  return config;
});

PA.ajax.interceptors.response.use(response => {
  if (response.config._startTime) {
    perf.measureApiResponse(response.config.url, response.config._startTime);
  }
  return response;
});
```

---

## 13. Testing Strategies

### 13.1 Unit Testing

Write unit tests for components and functions:

```javascript
// Test framework setup
const test = PA.test;

// Test a component
test.describe('UserCard Component', () => {
  test.it('should render user information', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const element = PA.component.render('user-card', { user });
    
    test.assert(element.querySelector('h3').textContent === 'John Doe');
    test.assert(element.querySelector('p').textContent === 'john@example.com');
  });
  
  test.it('should emit events when buttons are clicked', () => {
    const user = { id: '123', name: 'John Doe', email: 'john@example.com' };
    const element = PA.component.render('user-card', { user });
    
    let eventFired = false;
    element.addEventListener('user-edit', () => {
      eventFired = true;
    });
    
    const editButton = element.querySelector('.edit-button');
    editButton.click();
    
    test.assert(eventFired);
  });
});

// Test a utility function
test.describe('Utils', () => {
  test.it('should escape HTML characters', () => {
    const input = '<script>alert("xss")</script>';
    const output = PA.utils.escapeHtml(input);
    
    test.assert(output === '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
  });
  
  test.it('should generate unique IDs', () => {
    const id1 = PA.utils.uid();
    const id2 = PA.utils.uid();
    
    test.assert(id1 !== id2);
    test.assert(typeof id1 === 'string');
    test.assert(id1.length === 16);
  });
});

// Run tests
test.run();
```

### 13.2 Integration Testing

Test component interactions:

```javascript
// Test integration between components
test.describe('App Integration', () => {
  test.it('should navigate between pages', async () => {
    // Start at home page
    PA.router.navigate('/');
    
    // Click on about link
    const aboutLink = document.querySelector('[pa-link="/about"]');
    aboutLink.click();
    
    // Wait for navigation to complete
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Check if about page is displayed
    test.assert(window.location.pathname === '/about');
    test.assert(document.querySelector('h1').textContent === 'About');
  });
  
  test.it('should fetch and display data', async () => {
    // Mock API response
    const mockUsers = [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Doe', email: 'jane@example.com' }
    ];
    
    PA.ajax.get = () => Promise.resolve(mockUsers);
    
    // Navigate to users page
    PA.router.navigate('/users');
    
    // Wait for data to load
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Check if users are displayed
    const userCards = document.querySelectorAll('.user-card');
    test.assert(userCards.length === 2);
    test.assert(userCards[0].querySelector('h3').textContent === 'John Doe');
    test.assert(userCards[1].querySelector('h3').textContent === 'Jane Doe');
  });
});
```

### 13.3 End-to-End Testing

Test the entire application flow:

```javascript
// E2E test with Puppeteer
const puppeteer = require('puppeteer');

describe('App E2E Tests', () => {
  let browser;
  let page;
  
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });
  
  afterAll(async () => {
    await browser.close();
  });
  
  test('should allow user to log in', async () => {
    await page.goto('http://localhost:3000');
    
    // Navigate to login page
    await page.click('[pa-link="/login"]');
    await page.waitForSelector('#login-form');
    
    // Fill out login form
    await page.type('#email', 'test@example.com');
    await page.type('#password', 'password');
    
    // Submit form
    await page.click('#login-button');
    
    // Wait for navigation to dashboard
    await page.waitForSelector('[pa-link="/dashboard"]');
    
    // Check if user is logged in
    const userName = await page.$eval('#user-name', el => el.textContent);
    expect(userName).toBe('Test User');
  });
  
  test('should allow user to create a new post', async () => {
    // Log in first
    await page.goto('http://localhost:3000/login');
    await page.type('#email', 'test@example.com');
    await page.type('#password', 'password');
    await page.click('#login-button');
    await page.waitForSelector('[pa-link="/dashboard"]');
    
    // Navigate to posts page
    await page.click('[pa-link="/posts"]');
    await page.waitForSelector('#posts-page');
    
    // Click on create post button
    await page.click('#create-post-button');
    await page.waitForSelector('#post-form');
    
    // Fill out post form
    await page.type('#post-title', 'Test Post');
    await page.type('#post-content', 'This is a test post');
    
    // Submit form
    await page.click('#save-post-button');
    
    // Wait for post to be created
    await page.waitForSelector('.post-card');
    
    // Check if post is displayed
    const postTitle = await page.$eval('.post-title', el => el.textContent);
    expect(postTitle).toBe('Test Post');
  });
});
```

---

## 14. Deployment & Production

### 14.1 Build Process

Set up a build process for production:

```javascript
// build.js
const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

// Read source files
const sourceFiles = [
  'js/unicorn-pa.js',
  'js/app.js',
  'css/app.css'
];

// Create output directory
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Process JavaScript files
sourceFiles.filter(file => file.endsWith('.js')).forEach(file => {
  const source = fs.readFileSync(file, 'utf8');
  
  // Minify JavaScript
  const result = minify(source, {
    compress: true,
    mangle: true
  });
  
  // Write to output
  const outputFile = path.join('dist', file.replace(/\.js$/, '.min.js'));
  fs.writeFileSync(outputFile, result.code);
  
  console.log(`Minified ${file} to ${outputFile}`);
});

// Process CSS files
sourceFiles.filter(file => file.endsWith('.css')).forEach(file => {
  const source = fs.readFileSync(file, 'utf8');
  
  // Minify CSS
  const result = minify(source, {
    compress: true
  });
  
  // Write to output
  const outputFile = path.join('dist', file.replace(/\.css$/, '.min.css'));
  fs.writeFileSync(outputFile, result.code);
  
  console.log(`Minified ${file} to ${outputFile}`);
});

// Create HTML file with minified assets
const htmlTemplate = fs.readFileSync('index.html', 'utf8');
const htmlOutput = htmlTemplate
  .replace('unicorn-pa.js', 'unicorn-pa.min.js')
  .replace('app.js', 'app.min.js')
  .replace('app.css', 'app.min.css');

fs.writeFileSync('dist/index.html', htmlOutput);

console.log('Build complete!');
```

### 14.2 Docker Deployment

Deploy with Docker:

```dockerfile
# Dockerfile
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
      - redis

  db:
    image: postgres:13-alpine
    environment:
      - POSTGRES_USER=app
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=app
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### 14.3 CI/CD Pipeline

Set up a CI/CD pipeline with GitHub Actions:

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linting
      run: npm run lint
    
    - name: Build application
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.2
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          cd /var/www/app
          git pull origin main
          npm ci --only=production
          npm run build
          pm2 restart app
```

---

## 15. Advanced Patterns

### 15.1 Micro-Frontends

Build micro-frontends with Unicorn-PA.js:

```javascript
// Shell application
const shellApp = {
  init: () => {
    // Register micro-frontends
    shellApp.registerMicroFrontend('dashboard', {
      url: 'https://dashboard.example.com',
      route: '/dashboard',
      container: '#dashboard-container'
    });
    
    shellApp.registerMicroFrontend('users', {
      url: 'https://users.example.com',
      route: '/users',
      container: '#users-container'
    });
    
    // Start router
    PA.router.start();
  },
  
  registerMicroFrontend: (name, config) => {
    PA.router.add(config.route, () => {
      // Load micro-frontend
      shellApp.loadMicroFrontend(name, config);
    });
  },
  
  loadMicroFrontend: (name, config) => {
    // Show loading state
    PA.hypermedia.swap(config.container, '<div class="loading">Loading...</div>');
    
    // Load micro-frontend
    PA.ajax.get(config.url).then(html => {
      PA.hypermedia.swap(config.container, html);
      
      // Initialize micro-frontend
      if (window.microFrontends && window.microFrontends[name]) {
        window.microFrontends[name].init();
      }
    });
  }
};

// Initialize shell application
shellApp.init();
```

### 15.2 Server-Side Rendering

Implement server-side rendering:

```javascript
// SSR setup
const ssr = {
  render: (component, props) => {
    // Render component to HTML string
    const html = PA.component.renderToString(component, props);
    
    // Create complete HTML document
    const document = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/css/app.css">
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(props)};
          </script>
          <script src="/js/unicorn-pa.js"></script>
          <script src="/js/app.js"></script>
        </body>
      </html>
    `;
    
    return document;
  },
  
  hydrate: (component, props) => {
    // Hydrate server-rendered component
    const container = document.getElementById('app');
    PA.component.hydrate(component, props, container);
  }
};

// Server route with SSR
app.get('/ssr', (req, res) => {
  const props = { user: req.user };
  const html = ssr.render('dashboard', props);
  res.send(html);
});

// Client-side hydration
if (typeof window !== 'undefined') {
  const initialState = window.__INITIAL_STATE__;
  
  PA.component.register('dashboard', {
    // Component definition
  });
  
  // Hydrate component
  ssr.hydrate('dashboard', initialState);
}
```

### 15.3 Progressive Web App

Create a PWA with Unicorn-PA.js:

```javascript
// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// App manifest
const manifest = {
  name: 'Unicorn-PA.js PWA',
  short_name: 'Unicorn-PA',
  description: 'A progressive web app built with Unicorn-PA.js',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#007bff',
  icons: [
    {
      src: '/assets/icons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png'
    },
    {
      src: '/assets/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
};

// Create manifest file
const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
const manifestUrl = URL.createObjectURL(manifestBlob);

// Add manifest to head
const manifestLink = document.createElement('link');
manifestLink.rel = 'manifest';
manifestLink.href = manifestUrl;
document.head.appendChild(manifestLink);
```

---

## 16. Case Studies

### 16.1 E-Commerce Application

Build an e-commerce application with Unicorn-PA.js:

```javascript
// Product catalog
PA.component.register('product-catalog', {
  template: `
    <div class="product-catalog">
      <div class="filters">
        <h3>Filters</h3>
        <div class="filter-group">
          <h4>Category</h4>
          <div pa-each="categories:category">
            <label>
              <input type="checkbox" pa-bind="checked:category.selected">
              <span pa-text="category.name"></span>
            </label>
          </div>
        </div>
        <div class="filter-group">
          <h4>Price Range</h4>
          <input type="range" min="0" max="1000" pa-bind="value:priceRange">
          <div>
            $<span pa-text="priceRange"></span>
          </div>
        </div>
      </div>
      <div class="products">
        <div pa-each="filteredProducts:product">
          <div class="product-card">
            <img pa-bind="src:product.image" pa-bind="alt:product.name">
            <h3 pa-text="product.name"></h3>
            <p pa-text="product.description"></p>
            <div class="price">$<span pa-text="product.price"></span></div>
            <button class="pa-button pa-button-primary" pa-on:click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  
  state: {
    products: [],
    categories: [],
    filteredProducts: [],
    priceRange: 1000
  },
  
  onMount: function(el) {
    // Load products
    PA.ajax.get('/api/products').then(products => {
      this.state.products = products;
      this.state.filteredProducts = products;
    });
    
    // Load categories
    PA.ajax.get('/api/categories').then(categories => {
      this.state.categories = categories.map(category => ({
        ...category,
        selected: false
      }));
    });
    
    // Filter products
    this.filterProducts = () => {
      const selectedCategories = this.state.categories
        .filter(category => category.selected)
        .map(category => category.id);
      
      this.state.filteredProducts = this.state.products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || 
          selectedCategories.includes(product.categoryId);
        
        const priceMatch = product.price <= this.state.priceRange;
        
        return categoryMatch && priceMatch;
      });
    };
    
    // Add to cart
    this.addToCart = (product) => {
      PA.cart.addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
      
      PA.notifications.show(`${product.name} added to cart`, 'success');
    };
  }
});

// Shopping cart
PA.component.register('shopping-cart', {
  template: `
    <div class="shopping-cart">
      <h2>Shopping Cart</h2>
      <div pa-show="items.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
      </div>
      <div pa-show="items.length > 0">
        <div pa-each="items:item">
          <div class="cart-item">
            <div class="item-info">
              <h4 pa-text="item.name"></h4>
              <p>$<span pa-text="item.price"></span> x <span pa-text="item.quantity"></span></p>
            </div>
            <div class="item-actions">
              <button class="pa-button pa-button-text" pa-on:click="updateQuantity(item.id, item.quantity - 1)">
                -
              </button>
              <button class="pa-button pa-button-text" pa-on:click="updateQuantity(item.id, item.quantity + 1)">
                +
              </button>
              <button class="pa-button pa-button-text pa-text-danger" pa-on:click="removeItem(item.id)">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="cart-summary">
          <div class="total">
            Total: $<span pa-text="total"></span>
          </div>
          <button class="pa-button pa-button-primary pa-w-full" pa-on:click="checkout">
            Checkout
          </button>
        </div>
      </div>
    </div>
  `,
  
  state: {
    items: PA.cart.items
  },
  
  onMount: function(el) {
    // Calculate total
    this.total = PA.computed(() => {
      return PA.cart.getTotalPrice();
    });
    
    // Update quantity
    this.updateQuantity = (id, quantity) => {
      if (quantity <= 0) {
        PA.cart.removeItem(id);
      } else {
        PA.cart.updateQuantity(id, quantity);
      }
    };
    
    // Remove item
    this.removeItem = (id) => {
      PA.cart.removeItem(id);
    };
    
    // Checkout
    this.checkout = () => {
      PA.router.navigate('/checkout');
    };
  }
});
```

### 16.2 Social Media Dashboard

Create a social media dashboard:

```javascript
// Dashboard layout
PA.component.register('dashboard', {
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>Social Media Dashboard</h1>
        <div class="user-menu">
          <div class="user-avatar">
            <img pa-bind="src:user.avatar" pa-bind="alt:user.name">
          </div>
          <div class="user-info">
            <div pa-text="user.name"></div>
            <div pa-text="user.email"></div>
          </div>
        </div>
      </header>
      
      <div class="dashboard-content">
        <nav class="dashboard-nav">
          <ul>
            <li class="active">
              <a href="#" pa-on:click="showSection('overview')">
                <i class="fas fa-chart-line"></i>
                Overview
              </a>
            </li>
            <li>
              <a href="#" pa-on:click="showSection('posts')">
                <i class="fas fa-file-alt"></i>
                Posts
              </a>
            </li>
            <li>
              <a href="#" pa-on:click="showSection('analytics')">
                <i class="fas fa-chart-bar"></i>
                Analytics
              </a>
            </li>
            <li>
              <a href="#" pa-on:click="showSection('settings')">
                <i class="fas fa-cog"></i>
                Settings
              </a>
            </li>
          </ul>
        </nav>
        
        <main class="dashboard-main">
          <div id="overview-section" class="dashboard-section">
            <div pa-component="stats-cards" pa-data="stats:stats"></div>
            <div pa-component="chart-container" pa-data="type:'line',data:stats.dailyViews,title:'Daily Views'"></div>
            <div pa-component="recent-posts" pa-data="posts:recentPosts"></div>
          </div>
          
          <div id="posts-section" class="dashboard-section" style="display: none;">
            <div pa-component="posts-manager"></div>
          </div>
          
          <div id="analytics-section" class="dashboard-section" style="display: none;">
            <div pa-component="analytics-dashboard" pa-data="analytics:analytics"></div>
          </div>
          
          <div id="settings-section" class="dashboard-section" style="display: none;">
            <div pa-component="settings-form" pa-data="user:user"></div>
          </div>
        </main>
      </div>
    </div>
  `,
  
  state: {
    user: null,
    stats: null,
    recentPosts: null,
    analytics: null
  },
  
  onMount: function(el) {
    // Load user data
    PA.ajax.get('/api/user').then(user => {
      this.state.user = user;
    });
    
    // Load stats
    PA.ajax.get('/api/stats').then(stats => {
      this.state.stats = stats;
    });
    
    // Load recent posts
    PA.ajax.get('/api/posts?limit=5').then(posts => {
      this.state.recentPosts = posts;
    });
    
    // Load analytics
    PA.ajax.get('/api/analytics').then(analytics => {
      this.state.analytics = analytics;
    });
    
    // Show section
    this.showSection = (section) => {
      // Hide all sections
      document.querySelectorAll('.dashboard-section').forEach(el => {
        el.style.display = 'none';
      });
      
      // Show selected section
      document.getElementById(`${section}-section`).style.display = 'block';
      
      // Update active nav item
      document.querySelectorAll('.dashboard-nav li').forEach(el => {
        el.classList.remove('active');
      });
      
      event.target.closest('li').classList.add('active');
    };
  }
});
```

---

## 17. Future Directions

### 17.1 Roadmap

The future development of Unicorn-PA.js includes:

1. **Enhanced Performance**: Further optimization for faster rendering and smaller bundle size
2. **Improved Developer Experience**: Better debugging tools and error handling
3. **Expanded Component Library**: More pre-built components for common use cases
4. **Advanced Animation System**: Built-in animation and transition utilities
5. **Enhanced Mobile Support**: Better mobile-specific features and optimizations
6. **Integration with Popular Tools**: Compatibility with popular development tools and frameworks
7. **Improved Documentation**: More comprehensive guides and examples
8. **Community Contributions**: Better support for community plugins and extensions

### 17.2 Contributing to Unicorn-PA.js

To contribute to Unicorn-PA.js:

1. Fork the repository on GitHub
2. Create a new branch for your feature
3. Write tests for your changes
4. Ensure all tests pass
5. Submit a pull request with a detailed description

### 17.3 Community Resources

Join the Unicorn-PA.js community:

- GitHub Repository: https://github.com/unicorn-pa/unicorn-pa
- Documentation: https://unicorn-pa.js.org
- Discord Server: https://discord.gg/unicorn-pa
- Twitter: @unicornpa_js

---

## Conclusion

Unicorn-PA.js is a comprehensive, zero-dependency JavaScript framework that provides everything you need to build modern web applications. With its intuitive API, powerful features, and extensive documentation, it's an excellent choice for both beginners and experienced developers.

Whether you're building a simple website or a complex enterprise application, Unicorn-PA.js has the tools and features you need to succeed. Its universal nature allows you to use the same framework on both the client and server, reducing complexity and improving development efficiency.

By following this guide and experimenting with the framework, you'll be well on your way to becoming a proficient full-stack developer with Unicorn-PA.js. Happy coding!

# Unicorn-PA.js v3.3 - Complete Implementation

I'll create a comprehensive implementation that merges all the valuable features from the provided frameworks into a single, cohesive unicorn-pa.js v3.3 framework.

```javascript
/**
 * 🌟 UNICORN-PA 3.3 - The Ultimate Universal JavaScript Framework
 * =====================================================================
 * A comprehensive, zero-dependency framework that runs seamlessly on both client 
 * and server, combining the best features from multiple frameworks into a single,
 * cohesive solution with enhanced mobile development capabilities.
 * 
 * 🚀 Features:
 * - Enhanced state management with time-travel debugging
 * - Universal component system with lifecycle hooks
 * - Advanced routing with lazy loading
 * - Virtual DOM with neural morphing engine
 * - Zero-dependency WebSocket implementation
 * - Enhanced multithreading support for CPU-intensive tasks
 * - Comprehensive CSS framework with pa- prefix
 * - Built-in ORM (pajsDB) with multiple storage engines
 * - Built-in API client with AJA-like functionality
 * - Mobile development capabilities with geolocation
 * - Web CLI for in-browser command-line interface
 * - Built-in mailer functionality
 * - Chart system for data visualization
 * - Shopping cart functionality
 * - Full-text search capabilities
 * - Mobile UI components and transitions
 * - W3.js functionality integration
 * - Notification system with growl-like alerts
 * - Transition effects and animations
 * - PayPal integration for payments
 * - KEG.css integration
 * =====================================================================
 * 
 * 🙏 DEDICATION: יהוה (YHWH) - The Eternal One, source of all wisdom and creativity
 * 
 * 📜 COPYRIGHT & LICENSE:
 * Copyright © 2025 John Kesh Mahugu
 * MIT License - https://opensource.org/licenses/MIT
 * Contact: johnmahugu@gmail.com
 * 
 * ⏱️ UNIX TIMESTAMP: 1725888000
 * 
 * 🗺️ ROADMAP:
 * - v1.1: Enhanced CLI tooling with project scaffolding
 * - v1.2: GraphQL engine with automatic schema generation
 * - v1.3: Advanced caching strategies and CDN integration
 * - v1.4: Machine learning-powered performance optimizations
 * - v1.5: Distributed computing capabilities
 * - v2.0: Full-stack framework with integrated frontend framework
 * 
 * 📅 CREATED: July 21, 2025
 * 🔄 LAST UPDATED: July 21, 2025
 * 
 * 🔖 VERSION: 3.3
 * 🆔 UUID: zen-c-9b6e6a17-a67e-48aa-aaf2-9c766226c806
 */

(function() {
  "use strict";

  // ===== GLOBAL CONFIGURATION =====
  const CONFIG = {
    VERSION: '3.3.0',
    HOST: '0.0.0.0',
    PORT: 3000,
    DATA_DIR: process.cwd() + '/pa_data',
    STATIC_DIR: process.cwd() + '/public',
    SESSION_SECRET: process.env.PA_SESSION_SECRET || generateRandomString(64),
    JWT_SECRET: process.env.PA_JWT_SECRET || generateRandomString(64),
    ENCRYPTION_KEY: process.env.PA_ENCRYPTION_KEY || generateRandomString(32),
    DEV_MODE: process.env.NODE_ENV === 'development',
    CLUSTER_MODE: process.env.PA_CLUSTER === 'true',
    STORAGE_ENGINE: process.env.PA_STORAGE_ENGINE || 'universal',
    LOG_LEVEL: process.env.PA_LOG_LEVEL || 'info',
    ENABLE_METRICS: process.env.PA_METRICS !== 'false',
    ENABLE_ADMIN: process.env.PA_ADMIN !== 'false',
    ENABLE_SSR: process.env.PA_SSR !== 'false',
    RBAC_ENABLED: process.env.PA_RBAC !== 'false',
    CSRF_PROTECTION: process.env.PA_CSRF !== 'false',
    AI_OPTIMIZATION: process.env.PA_AI_OPTIMIZATION !== 'false',
    PREDICTIVE_RENDERING: process.env.PA_PREDICTIVE_RENDERING !== 'false',
    MOBILE_ENHANCEMENTS: process.env.PA_MOBILE_ENHANCEMENTS !== 'false',
    NOTIFICATION_SYSTEM: process.env.PA_NOTIFICATION_SYSTEM !== 'false',
    WEB_CLI: process.env.PA_WEB_CLI !== 'false',
    MAILER_ENABLED: process.env.PA_MAILER_ENABLED !== 'false',
    CHART_SYSTEM: process.env.PA_CHART_SYSTEM !== 'false',
    SHOPPING_CART: process.env.PA_SHOPPING_CART !== 'false',
    SEARCH_SYSTEM: process.env.PA_SEARCH_SYSTEM !== 'false',
    PAYPAL_INTEGRATION: process.env.PAYPAL_INTEGRATION !== 'false',
    // New configurations from merged frameworks
    HYPERMEDIA_PREFIX: 'pa-',
    CSS_PREFIX: 'pa-',
    WORKER_THREADS: 4,
    DEFAULT_AJAX_SWAP: 'morph',
    I18N_LOCALE: 'en',
    PLUGIN_DIR: '/plugins'
  };

  // ===== ENVIRONMENT DETECTION =====
  const ENV = {
    isServer: typeof window === 'undefined',
    isBrowser: typeof window !== 'undefined',
    isNode: typeof process !== 'undefined' && process.versions?.node,
    isDeno: typeof Deno !== 'undefined',
    isBun: typeof Bun !== 'undefined',
    isWorker: typeof importScripts !== 'undefined',
    isEdge: typeof EdgeRuntime !== 'undefined',
    isCloudflare: typeof caches !== 'undefined' && typeof crypto !== 'undefined' && !ENV?.isBrowser,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    supportsWorkers: typeof Worker !== 'undefined',
    supportsWasm: typeof WebAssembly !== 'undefined',
    supportsStreams: typeof ReadableStream !== 'undefined',
    supportsSW: typeof navigator !== 'undefined' && 'serviceWorker' in navigator,
    capabilities: new Set()
  };

  // Detailed environment detection
  ENV.isServer = ENV.isNode || ENV.isDeno || ENV.isBun || ENV.isEdge || ENV.isCloudflare;
  ENV.isClient = ENV.isBrowser || ENV.isWorker;

  // Device detection (client-side only)
  if (ENV.isBrowser) {
    const ua = navigator.userAgent.toLowerCase();
    const screen = window.screen;
    
    ENV.isMobile = /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(ua);
    ENV.isTablet = /tablet|ipad/.test(ua) || (screen.width >= 768 && screen.width <= 1024);
    ENV.isDesktop = !ENV.isMobile && !ENV.isTablet;
    
    // Capability detection
    if ('IntersectionObserver' in window) ENV.capabilities.add('intersection-observer');
    if ('ResizeObserver' in window) ENV.capabilities.add('resize-observer');
    if ('MutationObserver' in window) ENV.capabilities.add('mutation-observer');
    if ('requestIdleCallback' in window) ENV.capabilities.add('idle-callback');
    if ('PerformanceObserver' in window) ENV.capabilities.add('performance-observer');
    if ('BroadcastChannel' in window) ENV.capabilities.add('broadcast-channel');
    if ('SharedArrayBuffer' in window) ENV.capabilities.add('shared-array-buffer');
    if ('geolocation' in navigator) ENV.capabilities.add('geolocation');
    if ('vibrate' in navigator) ENV.capabilities.add('vibrate');
    if ('notification' in window) ENV.capabilities.add('notification');
    if ('serviceWorker' in navigator) ENV.capabilities.add('service-worker');
  }

  // ===== UTILITY FUNCTIONS =====
  function nowISO() { 
    return new Date().toISOString(); 
  }
  
  function uid(len = 16) { 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
  function hash(str) { 
    if (ENV.isServer) {
      return require('crypto').createHash('sha256').update(str).digest('hex');
    } else {
      // Simple browser hash implementation
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash.toString(16);
    }
  }

  function generateRandomString(length) {
    if (ENV.isServer) {
      return require('crypto').randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    } else {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
  }

  // Enhanced JSON parse/stringify with error handling
  function safeJSON(str, fallback = null) {
    try { 
      return JSON.parse(str); 
    } catch (e) { 
      logError('JSON Parse Error', e);
      return fallback; 
    }
  }
  
  function toJSON(obj, pretty = false) {
    try {
      return JSON.stringify(obj, null, pretty ? 2 : 0);
    } catch (e) {
      logError('JSON Stringify Error', e);
      return '{}';
    }
  }

  // Enhanced logging system
  const Logger = {
    levels: { error: 0, warn: 1, info: 2, debug: 3 },
    currentLevel: 2, // default to info
    
    setLevel(level) {
      if (this.levels.hasOwnProperty(level)) {
        this.currentLevel = this.levels[level];
      }
    },
    
    error: (...args) => {
      if (this.currentLevel >= this.levels.error) {
        if (ENV.isServer) {
          console.error(`[${nowISO()}] [ERROR]`, ...args);
        } else {
          console.error(`[${nowISO()}] [ERROR]`, ...args);
        }
        if (CONFIG.ENABLE_METRICS) Metrics.increment('errors');
      }
    },
    
    warn: (...args) => {
      if (this.currentLevel >= this.levels.warn) {
        if (ENV.isServer) {
          console.warn(`[${nowISO()}] [WARN]`, ...args);
        } else {
          console.warn(`[${nowISO()}] [WARN]`, ...args);
        }
      }
    },
    
    info: (...args) => {
      if (this.currentLevel >= this.levels.info) {
        if (ENV.isServer) {
          console.log(`[${nowISO()}] [INFO]`, ...args);
        } else {
          console.log(`[${nowISO()}] [INFO]`, ...args);
        }
      }
    },
    
    debug: (...args) => {
      if (this.currentLevel >= this.levels.debug) {
        if (ENV.isServer) {
          console.debug(`[${nowISO()}] [DEBUG]`, ...args);
        } else {
          console.debug(`[${nowISO()}] [DEBUG]`, ...args);
        }
      }
    }
  };

  function logError(message, error) {
    Logger.error(message, error);
    if (ENV.isServer && CONFIG.ENABLE_METRICS) {
      Metrics.increment('errors');
    }
  }

  // Set log level from config
  Logger.setLevel(CONFIG.LOG_LEVEL);

  // Metrics collection system
  const Metrics = {
    data: {
      requests: 0,
      errors: 0,
      responseTimes: [],
      dbOperations: 0,
      activeConnections: 0,
      start: Date.now(),
      renders: 0,
      patches: 0,
      cacheHits: 0,
      cacheMisses: 0
    },
    
    increment(metric) {
      if (CONFIG.ENABLE_METRICS && this.data.hasOwnProperty(metric)) {
        this.data[metric]++;
      }
    },
    
    timing(metric, duration) {
      if (CONFIG.ENABLE_METRICS && metric === 'responseTime') {
        this.data.responseTimes.push(duration);
        // Keep only last 100 response times
        if (this.data.responseTimes.length > 100) {
          this.data.responseTimes.shift();
        }
      }
    },
    
    getSummary() {
      const avgResponseTime = this.data.responseTimes.length > 0 
        ? this.data.responseTimes.reduce((a, b) => a + b, 0) / this.data.responseTimes.length 
        : 0;
        
      return {
        uptime: Math.floor((Date.now() - this.data.start) / 1000),
        requests: this.data.requests,
        errors: this.data.errors,
        avgResponseTime: Math.round(avgResponseTime),
        dbOperations: this.data.dbOperations,
        activeConnections: this.data.activeConnections,
        renders: this.data.renders,
        patches: this.data.patches,
        cacheHitRate: this.data.cacheHits / (this.data.cacheHits + this.data.cacheMisses) || 0
      };
    },
    
    reset() {
      this.data.responseTimes = [];
      this.data.renders = 0;
      this.data.patches = 0;
      this.data.cacheHits = 0;
      this.data.cacheMisses = 0;
    }
  };

  // ===== QUANTUM EVENT SYSTEM =====
  class QuantumEventSystem {
    constructor() {
      this.events = new Map();
      this.priorities = new Map();
      this.middleware = [];
      this.stats = { emitted: 0, handled: 0, errors: 0 };
      this.maxListeners = 100;
      this.warningThreshold = 50;
    }

    on(event, callback, options = {}) {
      if (!this.events.has(event)) {
        this.events.set(event, []);
        this.priorities.set(event, []);
      }
      
      const listeners = this.events.get(event);
      const priorities = this.priorities.get(event);
      
      if (listeners.length >= this.maxListeners) {
        console.warn(`[PA] Max listeners (${this.maxListeners}) exceeded for: ${event}`);
      }
      
      const listener = {
        callback,
        options: { priority: 0, once: false, ...options },
        id: uid('listener')
      };
      
      // Insert based on priority (higher priority first)
      const insertIndex = priorities.findIndex(p => p < listener.options.priority);
      const index = insertIndex === -1 ? listeners.length : insertIndex;
      
      listeners.splice(index, 0, listener);
      priorities.splice(index, 0, listener.options.priority);
      
      return () => this.off(event, listener.id);
    }

    once(event, callback, options = {}) {
      return this.on(event, callback, { ...options, once: true });
    }

    emit(event, data, options = {}) {
      this.stats.emitted++;
      
      const listeners = this.events.get(event);
      if (!listeners || listeners.length === 0) return false;
      
      // Apply middleware
      let eventData = { event, data, timestamp: performance.now(), ...options };
      for (const middleware of this.middleware) {
        eventData = middleware(eventData) || eventData;
      }
      
      const toRemove = [];
      let handledCount = 0;
      
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        
        try {
          if (options.async) {
            Promise.resolve(listener.callback(eventData.data, eventData))
              .catch(error => this.handleError(error, event, listener));
          } else {
            listener.callback(eventData.data, eventData);
          }
          
          handledCount++;
          this.stats.handled++;
          
          if (listener.options.once) {
            toRemove.push(i);
          }
        } catch (error) {
          this.handleError(error, event, listener);
        }
      }
      
      // Remove one-time listeners (in reverse order to maintain indices)
      for (let i = toRemove.length - 1; i >= 0; i--) {
        const index = toRemove[i];
        listeners.splice(index, 1);
        this.priorities.get(event).splice(index, 1);
      }
      
      return handledCount > 0;
    }

    off(event, listenerIdOrCallback) {
      if (!listenerIdOrCallback) {
        this.events.delete(event);
        this.priorities.delete(event);
        return this;
      }
      
      const listeners = this.events.get(event);
      if (!listeners) return this;
      
      const index = listeners.findIndex(l => 
        l.id === listenerIdOrCallback || l.callback === listenerIdOrCallback
      );
      
      if (index !== -1) {
        listeners.splice(index, 1);
        this.priorities.get(event).splice(index, 1);
        
        if (listeners.length === 0) {
          this.events.delete(event);
          this.priorities.delete(event);
        }
      }
      
      return this;
    }

    use(middleware) {
      this.middleware.push(middleware);
      return this;
    }

    handleError(error, event, listener) {
      this.stats.errors++;
      console.error(`[PA] Event handler error in ${event}:`, error);
      this.emit('error', { error, event, listener }, { async: true });
    }

    getStats() {
      return { ...this.stats };
    }

    listenerCount(event) {
      return this.events.get(event)?.length || 0;
    }

    eventNames() {
      return Array.from(this.events.keys());
    }
  }

  // ===== QUANTUM STATE SYSTEM =====
  class QuantumSignal {
    constructor(initialValue, options = {}) {
      this.value = initialValue;
      this.subscribers = new Set();
      this.computedDependents = new Set();
      this.options = { 
        equals: Object.is, 
        name: options.name || `signal_${uid()}`,
        ...options 
      };
      this.updateCount = 0;
      this.lastUpdated = Date.now();
    }

    get() {
      // Track dependency if we're in a computation context
      if (QuantumSignal.computationStack.length > 0) {
        const computation = QuantumSignal.computationStack[QuantumSignal.computationStack.length - 1];
        computation.dependencies.add(this);
        this.computedDependents.add(computation);
      }
      
      return this.value;
    }

    set(newValue) {
      if (this.options.equals(newValue, this.value)) return;
      
      const oldValue = this.value;
      this.value = newValue;
      this.updateCount++;
      this.lastUpdated = Date.now();
      
      // Notify subscribers
      this.subscribers.forEach(subscriber => {
        try {
          subscriber(newValue, oldValue);
        } catch (error) {
          console.error('[PA] Signal subscriber error:', error);
        }
      });
      
      // Update computed dependents
      this.computedDependents.forEach(computation => {
        computation.update();
      });
    }

    update(fn) {
      this.set(fn(this.value));
    }

    subscribe(callback) {
      this.subscribers.add(callback);
      return () => this.subscribers.delete(callback);
    }

    // Convert to computed signal
    map(fn) {
      return computed(() => fn(this.get()));
    }

    filter(predicate) {
      return computed(() => predicate(this.get()) ? this.get() : undefined);
    }

    toString() {
      return `Signal(${this.options.name}: ${this.value})`;
    }
  }

  // Computation stack for dependency tracking
  QuantumSignal.computationStack = [];

  // Computed signal implementation
  class ComputedSignal extends QuantumSignal {
    constructor(computation, options = {}) {
      super(undefined, options);
      this.computation = computation;
      this.dependencies = new Set();
      this.isComputing = false;
      this.update();
    }

    get() {
      if (this.isComputing) {
        throw new Error('Circular dependency detected in computed signal');
      }
      
      return super.get();
    }

    update() {
      if (this.isComputing) return;
      
      this.isComputing = true;
      
      // Clear existing dependencies
      this.dependencies.forEach(dep => {
        dep.computedDependents.delete(this);
      });
      this.dependencies.clear();
      
      // Track new dependencies
      QuantumSignal.computationStack.push(this);
      
      try {
        const newValue = this.computation();
        if (!this.options.equals(newValue, this.value)) {
          super.set(newValue);
        }
      } catch (error) {
        console.error('[PA] Computed signal error:', error);
      } finally {
        QuantumSignal.computationStack.pop();
        this.isComputing = false;
      }
    }
  }

  // Signal factory functions
  const signal = (initialValue, options) => new QuantumSignal(initialValue, options);
  const computed = (computation, options) => new ComputedSignal(computation, options);

  // Effect function for side effects
  const effect = (fn, options = {}) => {
    const computation = {
      dependencies: new Set(),
      cleanup: null,
      update: () => {
        if (computation.cleanup) {
          computation.cleanup();
        }
        
        QuantumSignal.computationStack.push(computation);
        try {
          computation.cleanup = fn() || null;
        } catch (error) {
          console.error('[PA] Effect error:', error);
        } finally {
          QuantumSignal.computationStack.pop();
        }
      }
    };
    
    computation.update();
    
    return () => {
      if (computation.cleanup) {
        computation.cleanup();
      }
      computation.dependencies.forEach(dep => {
        dep.computedDependents.delete(computation);
      });
    };
  };

  // Quantum Store with time-travel and AI optimization
  class QuantumStore {
    constructor(initialState = {}) {
      this.state = clone(initialState);
      this.signals = new Map();
      this.history = [{ state: clone(initialState), timestamp: Date.now(), action: 'INIT' }];
      this.historyIndex = 0;
      this.maxHistory = 50;
      this.middleware = [];
      this.subscribers = new Set();
      this.computedCache = new Map();
      this.events = new QuantumEventSystem();
      this.metrics = {
        actions: 0,
        mutations: 0,
        computations: 0,
        cacheHits: 0,
        cacheMisses: 0
      };
      this.optimizationSuggestions = [];
    }

    // Create reactive signals for state properties
    createSignal(path, initialValue) {
      if (this.signals.has(path)) {
        return this.signals.get(path);
      }
      
      const currentValue = getPath(this.state, path) ?? initialValue;
      const sig = signal(currentValue, { name: `store.${path}` });
      
      // Subscribe to signal changes and update store
      sig.subscribe((newValue) => {
        this.setState({ [path]: newValue }, { source: 'signal', path });
      });
      
      this.signals.set(path, sig);
      return sig;
    }

    // Get current state
    getState() {
      return clone(this.state);
    }

    // Set state with action tracking
    setState(updates, meta = {}) {
      const action = {
        type: meta.type || 'SET_STATE',
        payload: updates,
        timestamp: Date.now(),
        meta
      };

      // Apply middleware
      for (const middleware of this.middleware) {
        const result = middleware(action, this.state);
        if (result === false) return; // Middleware can block the action
        if (result && typeof result === 'object') {
          Object.assign(action, result);
        }
      }

      const prevState = clone(this.state);
      
      // Apply updates
      if (typeof updates === 'function') {
        this.state = updates(this.state);
      } else {
        this.state = merge({}, this.state, updates);
      }

      // Update history
      if (!meta.skipHistory) {
        this.addToHistory(action, prevState);
      }

      // Update signals
      this.updateSignals(prevState);

      // Notify subscribers
      this.notifySubscribers(prevState, action);

      // Clear computed cache
      this.computedCache.clear();

      this.metrics.mutations++;
      this.events.emit('state:change', { previous: prevState, current: this.state, action });
      
      // AI-powered optimization analysis
      if (CONFIG.AI_OPTIMIZATION) {
        this.analyzePerformance();
      }

      return this.state;
    }

    addToHistory(action, prevState) {
      this.historyIndex++;
      this.history = this.history.slice(0, this.historyIndex);
      this.history.push({
        state: clone(prevState),
        action,
        timestamp: Date.now()
      });

      if (this.history.length > this.maxHistory) {
        this.history.shift();
        this.historyIndex--;
      }
    }

    updateSignals(prevState) {
      for (const [path, signal] of this.signals) {
        const oldValue = getPath(prevState, path);
        const newValue = getPath(this.state, path);
        
        if (!Object.is(oldValue, newValue)) {
          signal.set(newValue);
        }
      }
    }

    notifySubscribers(prevState, action) {
      this.subscribers.forEach(subscriber => {
        try {
          subscriber(this.state, prevState, action);
        } catch (error) {
          console.error('[PA] Store subscriber error:', error);
        }
      });
    }

    // Time travel functionality
    undo(steps = 1) {
      const targetIndex = Math.max(0, this.historyIndex - steps);
      if (targetIndex !== this.historyIndex) {
        this.historyIndex = targetIndex;
        this.state = clone(this.history[targetIndex].state);
        this.updateSignals({});
        this.events.emit('state:undo', { index: targetIndex, steps });
      }
    }

    redo(steps = 1) {
      const targetIndex = Math.min(this.history.length - 1, this.historyIndex + steps);
      if (targetIndex !== this.historyIndex) {
        this.historyIndex = targetIndex;
        this.state = clone(this.history[targetIndex].state);
        this.updateSignals({});
        this.events.emit('state:redo', { index: targetIndex, steps });
      }
    }

    // Computed state with caching
    computed(key, computation) {
      if (this.computedCache.has(key)) {
        this.metrics.cacheHits++;
        return this.computedCache.get(key);
      }

      this.metrics.cacheMisses++;
      this.metrics.computations++;
      
      const result = computation(this.state);
      this.computedCache.set(key, result);
      return result;
    }

    // Subscribe to state changes
    subscribe(callback) {
      this.subscribers.add(callback);
      return () => this.subscribers.delete(callback);
    }

    // Middleware registration
    use(middleware) {
      this.middleware.push(middleware);
      return this;
    }

    // AI-powered performance analysis
    analyzePerformance() {
      this.optimizationSuggestions = [];
      
      // Analyze access patterns
      if (this.metrics.cacheMisses > this.metrics.cacheHits * 2) {
        this.optimizationSuggestions.push({
          type: 'performance',
          message: 'Consider using more computed properties to improve cache efficiency',
          severity: 'medium'
        });
      }
      
      // Analyze state size
      const stateSize = JSON.stringify(this.state).length;
      if (stateSize > 100000) { // 100KB
        this.optimizationSuggestions.push({
          type: 'memory',
          message: 'Large state detected. Consider normalizing data or using lazy loading',
          severity: 'high'
        });
      }
      
      // Analyze update frequency
      if (this.metrics.mutations > 1000) {
        this.optimizationSuggestions.push({
          type: 'performance',
          message: 'High mutation frequency detected. Consider batching updates',
          severity: 'medium'
        });
      }
    }

    // Get optimization suggestions
    getOptimizationSuggestions() {
      return this.optimizationSuggestions;
    }

    // Export/import for persistence
    export() {
      return {
        state: this.state,
        history: this.history,
        historyIndex: this.historyIndex,
        metrics: this.metrics,
        timestamp: Date.now()
      };
    }

    import(data) {
      this.state = data.state;
      this.history = data.history;
      this.historyIndex = data.historyIndex;
      this.updateSignals({});
      this.events.emit('state:import', data);
    }
  }

  // ===== WORKER POOL FOR MULTI-THREADING =====
  class WorkerPool {
    constructor(maxThreads = CONFIG.WORKER_THREADS) {
      this.maxThreads = maxThreads;
      this.workers = [];
      this.queue = [];
      this.activeJobs = new Map();
      this.nextJobId = 1;
      this._initWorkers();
    }

    _initWorkers() {
      for (let i = 0; i < this.maxThreads; i++) {
        const worker = new Worker(URL.createObjectURL(new Blob(['onmessage=function(){};'], { type: 'text/javascript' }))); // Initial empty worker
        worker.isBusy = false;
        worker.onmessage = this._handleWorkerMessage.bind(this, worker);
        worker.onerror = (e) => Logger.error('Worker error:', e);
        this.workers.push(worker);
      }
      Logger.info(`Worker Pool initialized with ${this.maxThreads} threads.`);
    }

    _handleWorkerMessage(worker, e) {
      const { type, result, error, id } = e.data;
      const job = this.activeJobs.get(id);

      if (job) {
        if (type === 'result') {
          job.resolve(result);
        } else if (type === 'error') {
          job.reject(new Error(error));
        }
        this.activeJobs.delete(id);
        worker.isBusy = false;
        this._processQueue();
      }
    }

    _processQueue() {
      if (this.queue.length === 0) return;

      const worker = this.workers.find(w => !w.isBusy);
      if (worker) {
        const job = this.queue.shift();
        worker.isBusy = true;

        // Re-create the worker with the specific function script
        const blob = new Blob([this._createWorkerScript(job.fn.toString())], { type: 'text/javascript' });
        const resource = URL.createObjectURL(blob);
        
        // Kill old, start new (or reuse) - simplified for single file
        worker.terminate();
        const newWorker = new Worker(resource);
        newWorker.isBusy = true;
        newWorker.onmessage = this._handleWorkerMessage.bind(this, newWorker);
        newWorker.onerror = (e) => Logger.error('Worker error:', e);

        // Replace old worker in the pool
        const index = this.workers.indexOf(worker);
        this.workers[index] = newWorker;
        
        newWorker.postMessage({ args: job.args, id: job.id });
      }
    }

    _createWorkerScript(fnStr) {
      return `
        self.onmessage = function(e) {
          try {
            const result = (${fnStr}).apply(null, e.data.args);
            self.postMessage({ type: 'result', result: result, id: e.data.id });
          } catch (error) {
            self.postMessage({ type: 'error', error: error.message, id: e.data.id });
          }
        };
      `;
    }

    // Public method to execute a function in a worker thread
    process(fn, ...args) {
      const id = this.nextJobId++;
      return new Promise((resolve, reject) => {
        const job = { id, fn, args, resolve, reject };
        this.activeJobs.set(id, job);
        this.queue.push(job);
        this._processQueue();
      });
    }
  }

  // ===== DOM UTILITIES =====
  const DOM = {
    get: sel => typeof sel === 'string' ? document.querySelector(sel) : sel,
    getAll: (sel, root = document) => Array.from(root.querySelectorAll(sel)),
    on: (el, evt, handler) => el.addEventListener(evt, handler),
    off: (el, evt, handler) => el.removeEventListener(evt, handler),
    show: el => el.style.display = 'block',
    hide: el => el.style.display = 'none',
    addClass: (el, cls) => el.classList.add(cls),
    removeClass: (el, cls) => el.classList.remove(cls),
    toggleClass: (el, cls) => el.classList.toggle(cls),
    create: (tag, attrs = {}, children = []) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      children.forEach(child => {
        if (typeof child === 'string') {
          el.appendChild(document.createTextNode(child));
        } else {
          el.appendChild(child);
        }
      });
      return el;
    },
    // Neural DOM Morphing
    morph: (oldEl, newEl) => {
      if (oldEl.nodeName !== newEl.nodeName) {
        oldEl.replaceWith(newEl);
        return;
      }

      // Morph attributes
      const oldAttrs = oldEl.attributes;
      const newAttrs = newEl.attributes;
      const newAttrMap = {};

      for (let i = 0; i < newAttrs.length; i++) {
        const attr = newAttrs[i];
        newAttrMap[attr.name] = attr.value;
        if (oldEl.getAttribute(attr.name) !== attr.value) {
          oldEl.setAttribute(attr.name, attr.value);
        }
      }

      // Remove old attributes not present in new element
      for (let i = oldAttrs.length - 1; i >= 0; i--) {
        const attr = oldAttrs[i];
        if (!(attr.name in newAttrMap)) {
          oldEl.removeAttribute(attr.name);
        }
      }

      // Morph children recursively
      const oldChildren = Array.from(oldEl.childNodes);
      const newChildren = Array.from(newEl.childNodes);
      const minLength = Math.min(oldChildren.length, newChildren.length);

      for (let i = 0; i < minLength; i++) {
        DOM.morph(oldChildren[i], newChildren[i]);
      }

      // Add remaining new children
      for (let i = minLength; i < newChildren.length; i++) {
        oldEl.appendChild(newChildren[i].cloneNode(true));
      }

      // Remove remaining old children
      for (let i = oldChildren.length - 1; i >= minLength; i--) {
        oldEl.removeChild(oldChildren[i]);
      }

      // Morph text content if no children
      if (oldChildren.length === 0 && newChildren.length === 0 && oldEl.textContent !== newEl.textContent) {
        oldEl.textContent = newEl.textContent;
      }
    },
    // Hypermedia Swap Strategies
    swap: (targetEl, content, strategy = CONFIG.DEFAULT_AJAX_SWAP) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content.trim();
      const newEl = tempDiv.firstElementChild;

      if (!targetEl) return Logger.error('Swap failed: Target element not found.');

      switch (strategy) {
        case 'outerHTML': targetEl.outerHTML = content; break;
        case 'beforebegin': targetEl.insertAdjacentHTML('beforebegin', content); break;
        case 'afterbegin': targetEl.insertAdjacentHTML('afterbegin', content); break;
        case 'beforeend': targetEl.insertAdjacentHTML('beforeend', content); break;
        case 'afterend': targetEl.insertAdjacentHTML('afterend', content); break;
        case 'none': break;
        case 'morph': DOM.morph(targetEl, newEl); break; // Default and most efficient
        case 'replace': targetEl.replaceWith(newEl); break;
        case 'innerHTML': 
        default: targetEl.innerHTML = content; break;
      }
    },
    // Template rendering
    template: (tpl, data) => {
      let html = typeof tpl === 'string' ? tpl : tpl.cloneNode(true).innerHTML;
      for (const key in data) {
        html = html.replace(new RegExp(`{{${key}}}`, 'g'), escapeHtml(data[key]));
      }
      return html;
    }
  };

  // ===== HYPERMEDIA SYSTEM =====
  const Hypermedia = {
    // Process all hypermedia attributes
    scan: (root = document) => {
      // Process pa-get, pa-post, pa-put, pa-delete attributes
      DOM.getAll('[pa-get], [pa-post], [pa-put], [pa-delete]', root).forEach(el => {
        const method = el.hasAttribute('pa-get') ? 'GET' : 
                      el.hasAttribute('pa-post') ? 'POST' : 
                      el.hasAttribute('pa-put') ? 'PUT' : 'DELETE';
        
        const url = el.getAttribute(`pa-${method.toLowerCase()}`);
        const target = el.getAttribute('pa-target');
        const swap = el.getAttribute('pa-swap') || CONFIG.DEFAULT_AJAX_SWAP;
        
        DOM.on(el, 'click', e => {
          e.preventDefault();
          const ajax = AJAX.request(method, url);
          
          if (target) ajax.target(target);
          if (swap !== CONFIG.DEFAULT_AJAX_SWAP) ajax.swap(swap);
          
          if (method !== 'GET') {
            const form = el.closest('form');
            if (form) ajax.data(serializeForm(form));
          }
          
          ajax.go().catch(error => {
            Logger.error('AJAX Error:', error);
            if (CONFIG.NOTIFICATION_SYSTEM) {
              NotificationSystem.show('Request failed', 'danger');
            }
          });
        });
      });
      
      // Process pa-data attributes for reactive components
      DOM.getAll('[pa-data]', root).forEach(el => {
        Component.processElement(el);
      });
      
      // Process pa-on:* attributes for event handling
      DOM.getAll('[pa-on\\:]', root).forEach(el => {
        Array.from(el.attributes)
          .filter(attr => attr.name.startsWith('pa-on:'))
          .forEach(attr => {
            const eventType = attr.name.substring(6); // Remove 'pa-on:' prefix
            const handlerCode = attr.value;
            
            DOM.on(el, eventType, e => {
              try {
                // Create a safe execution context
                const ctx = {
                  $el: el,
                  $event: e,
                  client: PA
                };
                
                // Execute the handler code
                new Function('$', `with($){${handlerCode}}`).call(ctx, ctx);
              } catch (error) {
                Logger.error(`Error in ${eventType} handler:`, error);
              }
            });
          });
      });
      
      // Process pa-each attributes for list rendering
      DOM.getAll('[pa-each]', root).forEach(el => {
        Component.processEach(el);
      });
      
      // Process pa-bind, pa-text, pa-show attributes
      DOM.getAll('[pa-bind], [pa-text], [pa-show]', root).forEach(el => {
        Component.processBindings(el);
      });
    }
  };

  // ===== AJAX SYSTEM =====
  const AJAX = {
    request: (method = 'GET') => {
      return {
        _url: '',
        _method: method.toUpperCase(),
        _type: 'json',
        _target: null,
        _swap: CONFIG.DEFAULT_AJAX_SWAP,
        _data: null,
        _headers: {},
        
        url: function(u) { this._url = u; return this; },
        type: function(t) { this._type = t; return this; },
        target: function(t) { 
          this._target = typeof t === 'string' ? DOM.get(t) : t; 
          return this; 
        },
        swap: function(s) { this._swap = s; return this; },
        data: function(d) { this._data = d; return this; },
        header: function(k, v) { 
          this._headers[k] = v; 
          return this; 
        },
        
        go: function() {
          if (!this._url) return Promise.reject('URL required for AJAX call.');
          Logger.info(`AJAX ${this._method} request to ${this._url}`);

          const isBodyRequired = ['POST', 'PUT', 'PATCH'].includes(this._method);
          let body = null;
          let headers = { ...this._headers };

          if (isBodyRequired && this._data) {
            if (this._data instanceof HTMLFormElement) {
              body = new FormData(this._data);
            } else if (typeof this._data === 'object') {
              body = JSON.stringify(this._data);
              headers['Content-Type'] = 'application/json';
            } else {
              body = this._data;
            }
          }

          return fetch(this._url, {
            method: this._method,
            headers: headers,
            body: body,
          }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            if (this._type === 'json') {
              return res.json();
            } else {
              return res.text();
            }
          }).then(responseData => {
            if (this._target) {
              // Only perform swap if target exists
              const content = typeof responseData === 'string' ? 
                responseData : 
                JSON.stringify(responseData);
              
              DOM.swap(this._target, content, this._swap);
              
              // Re-scan for new hypermedia attributes
              Hypermedia.scan(this._target);
            }
            
            Events.emit('ajax:success', { 
              url: this._url, 
              target: this._target, 
              content: responseData 
            });
            
            return responseData;
          }).catch(error => {
            Events.emit('ajax:error', { url: this._url, error: error });
            Logger.error('AJAX Error:', error);
            return Promise.reject(error);
          });
        }
      };
    },
    
    // Convenience methods
    get: (url) => AJAX.request('GET').url(url),
    post: (url, data) => AJAX.request('POST').url(url).data(data),
    put: (url, data) => AJAX.request('PUT').url(url).data(data),
    delete: (url) => AJAX.request('DELETE').url(url)
  };

  // ===== COMPONENT SYSTEM =====
  const Component = {
    components: new Map(),
    
    register: (name, definition) => {
      Component.components.set(name, definition);
      Logger.info(`Component registered: ${name}`);
    },
    
    processElement: (el) => {
      const dataAttr = el.getAttribute('pa-data');
      if (!dataAttr) return;
      
      try {
        const data = JSON.parse(dataAttr);
        // Convert properties to reactive signals
        Object.keys(data).forEach(key => {
          if (!el[key]) {
            Object.defineProperty(el, key, {
              get: () => el._signals?.[key]?.value || data[key],
              set: (value) => {
                if (!el._signals) el._signals = {};
                if (!el._signals[key]) {
                  el._signals[key] = signal(data[key]);
                }
                el._signals[key].value = value;
              }
            });
          }
        });
      } catch (e) {
        Logger.error('Invalid JSON in pa-data:', dataAttr, e);
      }
    },
    
    processEach: (el) => {
      const attr = el.getAttribute('pa-each');
      if (!attr) return;
      
      const [arrayExpr, templateId] = attr.split(':');
      const template = DOM.get(`#${templateId}`);
      if (!template || template.tagName !== 'TEMPLATE') {
        return Logger.error(`Template #${templateId} not found for pa-each.`);
      }
      
      // Clear the template attribute to prevent recursion
      el.removeAttribute('pa-each'); 
      
      // Create a reactive effect to update the list when the array changes
      effect(() => {
        try {
          const array = evalExpr(arrayExpr, { $el: el, client: PA });
          if (!Array.isArray(array)) return;
          
          el.innerHTML = ''; // Clear previous content
          
          array.forEach((item, index) => {
            const clone = template.content.cloneNode(true);
            const itemScope = { 
              $item: item, 
              $index: index, 
              $el: el, 
              client: PA 
            };
            
            // Find all elements in the cloned content that need processing
            const elementsToProcess = Array.from(clone.querySelectorAll('[pa-bind], [pa-text], [pa-show], [pa-on\\:]'));
            if (clone.firstElementChild) {
              elementsToProcess.push(clone.firstElementChild);
            }
            
            elementsToProcess.forEach(childEl => {
              if (childEl) {
                // Set the scope for child elements
                childEl._scope = itemScope;
                Component.processBindings(childEl);
              }
            });
            
            el.appendChild(clone);
          });
        } catch (error) {
          Logger.error('Error in pa-each processing:', error);
        }
      });
    },
    
    processBindings: (el) => {
      // Look for parent scope if not defined
      let scope = el._scope || { client: PA };
      let parent = el.parentElement;
      while (parent && !scope.$el) {
        if (parent._scope) {
          scope = { ...parent._scope, ...scope };
          break;
        }
        parent = el.parentElement;
      }
      
      // Bindings (pa-bind, pa-show, pa-text)
      if (el.hasAttribute('pa-bind')) {
        const [attr, expr] = el.getAttribute('pa-bind').split(':');
        effect(() => {
          const value = evalExpr(expr, scope);
          el.setAttribute(attr, value);
        });
      }
      
      if (el.hasAttribute('pa-show')) {
        const expr = el.getAttribute('pa-show');
        effect(() => {
          const value = evalExpr(expr, scope);
          el.style.display = value ? '' : 'none';
        });
      }
      
      if (el.hasAttribute('pa-text')) {
        const expr = el.getAttribute('pa-text');
        effect(() => {
          const value = evalExpr(expr, scope);
          el.textContent = value;
        });
      }
    }
  };

  // ===== ROUTER SYSTEM =====
  const Router = {
    routes: new Map(),
    currentRoute: null,
    guards: new Map(),
    
    add: (path, handler, options = {}) => {
      Router.routes.set(path, { handler, options });
      if (options.guard) {
        Router.guards.set(path, options.guard);
      }
      Logger.info(`Route added: ${path}`);
    },
    
    navigate: (path, state = {}) => {
      history.pushState(state, '', path);
      Router.dispatch();
    },
    
    dispatch: () => {
      const path = window.location.pathname;
      const url = new URL(window.location.href);
      const query = Object.fromEntries(url.searchParams);
      
      let route = Router.routes.get(path);
      let params = {};
      
      // Check for dynamic routes
      if (!route) {
        for (const [routePath, routeConfig] of Router.routes) {
          const regex = new RegExp(`^${routePath.replace(/:([a-zA-Z0-9_]+)/g, '([^/]+)')}$`);
          const match = path.match(regex);
          if (match) {
            route = routeConfig;
            const paramNames = (routePath.match(/:([a-zA-Z0-9_]+)/g) || []).map(p => p.substring(1));
            params = paramNames.reduce((obj, name, i) => {
              obj[name] = match[i + 1];
              return obj;
            }, {});
            break;
          }
        }
      }
      
      if (route) {
        // Check guard
        const guard = Router.guards.get(path);
        if (guard && !guard(query, params)) {
          Logger.warn(`Access denied to route: ${path}`);
          if (CONFIG.NOTIFICATION_SYSTEM) {
            NotificationSystem.show('Access denied', 'danger');
          }
          return;
        }
        
        Router.currentRoute = { path, params, query };
        route.handler({ params, query });
        
        Events.emit('router:navigate', { path, params, query });
      } else if (Router.routes.has('*')) {
        // Fallback route
        Router.routes.get('*').handler({ params: {}, query });
      } else {
        Logger.warn(`Route not found: ${path}`);
        if (CONFIG.NOTIFICATION_SYSTEM) {
          NotificationSystem.show('Page not found', 'danger');
        }
      }
    },
    
    start: () => {
      window.addEventListener('popstate', Router.dispatch);
      
      // Handle link clicks for pa-link attributes
      document.addEventListener('click', e => {
        const target = e.target.closest('a');
        if (target && target.hasAttribute('pa-link')) {
          const path = target.getAttribute('href');
          if (path.startsWith(window.location.origin) || !path.startsWith('http')) {
            e.preventDefault();
            Router.navigate(path);
          }
        }
      });
      
      Router.dispatch();
      Logger.info('Router started');
    }
  };

  // ===== SHOPPING CART =====
  const Cart = {
    items: [],
    callbacks: {},
    
    on: function(eventName, callback) {
      if (!Cart.callbacks[eventName]) Cart.callbacks[eventName] = [];
      Cart.callbacks[eventName].push(callback);
      return Cart;
    },
    
    trigger: function(eventName, args) {
      if (Cart.callbacks[eventName]) {
        for (var i = 0; i < Cart.callbacks[eventName].length; i++) {
          Cart.callbacks[eventName][i](args || {});
        }
      }
      return Cart;
    },
    
    save: function() {
      if (ENV.isBrowser) {
        localStorage.setItem('pa-cart-items', JSON.stringify(Cart.items));
      }
      Cart.trigger('saved');
      return Cart;
    },
    
    empty: function() {
      Cart.items = [];
      Cart.trigger('emptied');
      Cart.save();
      return Cart;
    },
    
    indexOfItem: function(id) {
      for (var i = 0; i < Cart.items.length; i++) {
        if (Cart.items[i].id === id) return i;
      }
      return null;
    },
    
    removeEmptyLines: function() {
      var newItems = [];
      for (var i = 0; i < Cart.items.length; i++) {
        if (Cart.items[i].quantity > 0) newItems.push(Cart.items[i]);
      }
      Cart.items = newItems;
      return Cart;
    },
    
    addItem: function(item) {
      if (!item.quantity) item.quantity = 1;
      var index = Cart.indexOfItem(item.id);
      if (index === null) {
        Cart.items.push(item);
      } else {
        Cart.items[index].quantity += item.quantity;
      }
      Cart.removeEmptyLines();
      if (item.quantity > 0) {
        Cart.trigger('added', { item: item });
      } else {
        Cart.trigger('removed', { item: item });
      }
      Cart.save();
      return Cart;
    },
    
    removeItem: function(id) {
      var index = Cart.indexOfItem(id);
      if (index !== null) {
        Cart.items.splice(index, 1);
        Cart.trigger('removed', { id: id });
        Cart.save();
      }
      return Cart;
    },
    
    updateQuantity: function(id, quantity) {
      var index = Cart.indexOfItem(id);
      if (index !== null) {
        Cart.items[index].quantity = quantity;
        Cart.removeEmptyLines();
        Cart.trigger('updated', { id: id, quantity: quantity });
        Cart.save();
      }
      return Cart;
    },
    
    getTotalPrice: function() {
      var total = 0;
      for (var i = 0; i < Cart.items.length; i++) {
        total += Cart.items[i].price * Cart.items[i].quantity;
      }
      return total;
    },
    
    getTotalItems: function() {
      var total = 0;
      for (var i = 0; i < Cart.items.length; i++) {
        total += Cart.items[i].quantity;
      }
      return total;
    },
    
    load: function() {
      if (ENV.isBrowser) {
        var items = localStorage.getItem('pa-cart-items');
        if (items) {
          try {
            Cart.items = JSON.parse(items);
            Cart.trigger('loaded');
          } catch (e) {
            Logger.error('Failed to load cart items:', e);
          }
        }
      }
      return Cart;
    }
  };

  // ===== NOTIFICATION SYSTEM =====
  const NotificationSystem = {
    container: null,
    notifications: [],
    
    init: function() {
      if (!NotificationSystem.container) {
        NotificationSystem.container = DOM.create('div', { 
          id: 'pa-notifications',
          class: 'pa-notifications'
        });
        document.body.appendChild(NotificationSystem.container);
      }
      return NotificationSystem;
    },
    
    show: function(message, type = 'info', duration = 3000) {
      NotificationSystem.init();
      
      const notification = DOM.create('div', {
        class: `pa-notification pa-notification-${type}`
      }, [
        DOM.create('div', { class: 'pa-notification-content' }, [
          DOM.create('span', { class: 'pa-notification-message' }, message),
          DOM.create('button', { 
            class: 'pa-notification-close',
            'aria-label': 'Close notification'
          }, '×')
        ])
      ]);
      
      NotificationSystem.container.appendChild(notification);
      NotificationSystem.notifications.push(notification);
      
      // Add close button functionality
      const closeBtn = notification.querySelector('.pa-notification-close');
      DOM.on(closeBtn, 'click', () => {
        NotificationSystem.remove(notification);
      });
      
      // Auto-remove after duration
      if (duration > 0) {
        setTimeout(() => {
          NotificationSystem.remove(notification);
        }, duration);
      }
      
      // Trigger show animation
      setTimeout(() => {
        DOM.addClass(notification, 'pa-notification-show');
      }, 10);
      
      Events.emit('notification:show', { message, type, notification });
      return notification;
    },
    
    remove: function(notification) {
      if (!notification) return;
      
      DOM.addClass(notification, 'pa-notification-hide');
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
        
        const index = NotificationSystem.notifications.indexOf(notification);
        if (index !== -1) {
          NotificationSystem.notifications.splice(index, 1);
        }
        
        Events.emit('notification:removed', { notification });
      }, 300);
    },
    
    clear: function() {
      const notifications = [...NotificationSystem.notifications];
      notifications.forEach(notification => {
        NotificationSystem.remove(notification);
      });
      return NotificationSystem;
    }
  };

  // ===== WEB CLI =====
  const WebCLI = {
    terminal: null,
    history: [],
    historyIndex: -1,
    commandHandlers: new Map(),
    
    init: function() {
      if (!WebCLI.terminal) {
        WebCLI.terminal = DOM.create('div', {
          id: 'pa-cli',
          class: 'pa-cli'
        }, [
          DOM.create('div', { class: 'pa-cli-output' }),
          DOM.create('div', { class: 'pa-cli-input-line' }, [
            DOM.create('span', { class: 'pa-cli-prompt' }, '$ '),
            DOM.create('input', {
              class: 'pa-cli-input',
              type: 'text',
              autocomplete: 'off',
              spellcheck: 'false'
            })
          ])
        ]);
        
        document.body.appendChild(WebCLI.terminal);
        
        const input = WebCLI.terminal.querySelector('.pa-cli-input');
        const output = WebCLI.terminal.querySelector('.pa-cli-output');
        
        // Hide/show terminal with Ctrl+`
        DOM.on(document, 'keydown', e => {
          if (e.ctrlKey && e.key === '`') {
            e.preventDefault();
            WebCLI.toggle();
          }
        });
        
        // Handle command input
        DOM.on(input, 'keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const command = input.value.trim();
            if (command) {
              WebCLI.executeCommand(command);
              WebCLI.history.push(command);
              WebCLI.historyIndex = WebCLI.history.length;
              input.value = '';
            }
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (WebCLI.historyIndex > 0) {
              WebCLI.historyIndex--;
              input.value = WebCLI.history[WebCLI.historyIndex];
            }
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (WebCLI.historyIndex < WebCLI.history.length - 1) {
              WebCLI.historyIndex++;
              input.value = WebCLI.history[WebCLI.historyIndex];
            } else {
              WebCLI.historyIndex = WebCLI.history.length;
              input.value = '';
            }
          }
        });
        
        // Register built-in commands
        WebCLI.registerCommand('help', WebCLI.commands.help);
        WebCLI.registerCommand('clear', WebCLI.commands.clear);
        WebCLI.registerCommand('version', WebCLI.commands.version);
        WebCLI.registerCommand('metrics', WebCLI.commands.metrics);
        WebCLI.registerCommand('components', WebCLI.commands.components);
        WebCLI.registerCommand('routes', WebCLI.commands.routes);
        
        Logger.info('Web CLI initialized');
      }
      return WebCLI;
    },
    
    toggle: function() {
      WebCLI.init();
      DOM.toggleClass(WebCLI.terminal, 'pa-cli-visible');
      if (DOM.hasClass(WebCLI.terminal, 'pa-cli-visible')) {
        WebCLI.terminal.querySelector('.pa-cli-input').focus();
      }
      return WebCLI;
    },
    
    show: function() {
      WebCLI.init();
      DOM.addClass(WebCLI.terminal, 'pa-cli-visible');
      WebCLI.terminal.querySelector('.pa-cli-input').focus();
      return WebCLI;
    },
    
    hide: function() {
      if (WebCLI.terminal) {
        DOM.removeClass(WebCLI.terminal, 'pa-cli-visible');
      }
      return WebCLI;
    },
    
    registerCommand: function(name, handler) {
      WebCLI.commandHandlers.set(name, handler);
      return WebCLI;
    },
    
    executeCommand: function(command) {
      const output = WebCLI.terminal.querySelector('.pa-cli-output');
      
      // Add command to output
      const commandLine = DOM.create('div', { class: 'pa-cli-command' }, [
        DOM.create('span', { class: 'pa-cli-prompt' }, '$ '),
        DOM.create('span', { class: 'pa-cli-command-text' }, command)
      ]);
      output.appendChild(commandLine);
      
      // Parse and execute command
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      const args = parts.slice(1);
      
      const handler = WebCLI.commandHandlers.get(cmd);
      if (handler) {
        try {
          const result = handler(args);
          if (result) {
            const resultLine = DOM.create('div', { class: 'pa-cli-result' }, result);
            output.appendChild(resultLine);
          }
        } catch (error) {
          const errorLine = DOM.create('div', { class: 'pa-cli-error' }, `Error: ${error.message}`);
          output.appendChild(errorLine);
        }
      } else {
        const errorLine = DOM.create('div', { class: 'pa-cli-error' }, `Command not found: ${cmd}`);
        output.appendChild(errorLine);
      }
      
      // Scroll to bottom
      output.scrollTop = output.scrollHeight;
      
      Events.emit('cli:command', { command, args });
      return WebCLI;
    },
    
    print: function(text, className = '') {
      const output = WebCLI.terminal.querySelector('.pa-cli-output');
      const line = DOM.create('div', { class: `pa-cli-print ${className}`.trim() }, text);
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
      return WebCLI;
    },
    
    commands: {
      help: (args) => {
        return `Available commands:
  help - Show this help message
  clear - Clear the terminal
  version - Show framework version
  metrics - Show performance metrics
  components - List registered components
  routes - List registered routes`;
      },
      
      clear: () => {
        const output = WebCLI.terminal.querySelector('.pa-cli-output');
        output.innerHTML = '';
        return '';
      },
      
      version: () => {
        return `Unicorn-PA.js v${CONFIG.VERSION}`;
      },
      
      metrics: () => {
        const metrics = Metrics.getSummary();
        return `Performance Metrics:
  Uptime: ${metrics.uptime}s
  Requests: ${metrics.requests}
  Errors: ${metrics.errors}
  Avg Response Time: ${metrics.avgResponseTime}ms
  DB Operations: ${metrics.dbOperations}
  Active Connections: ${metrics.activeConnections}
  Renders: ${metrics.renders}
  Patches: ${metrics.patches}
  Cache Hit Rate: ${(metrics.cacheHitRate * 100).toFixed(2)}%`;
      },
      
      components: () => {
        const components = Array.from(Component.components.keys());
        if (components.length === 0) {
          return 'No components registered.';
        }
        return `Registered Components:\n${components.join('\n')}`;
      },
      
      routes: () => {
        const routes = Array.from(Router.routes.keys());
        if (routes.length === 0) {
          return 'No routes registered.';
        }
        return `Registered Routes:\n${routes.join('\n')}`;
      }
    }
  };

  // ===== CHART SYSTEM =====
  const ChartSystem = {
    types: ['line', 'bar', 'pie'],
    
    render: (selector, type, config) => {
      const el = DOM.get(selector);
      if (!el || !ChartSystem.types.includes(type)) {
        Logger.error(`Chart error: Invalid selector (${selector}) or type (${type})`);
        return;
      }
      
      const defaults = {
        title: 'Chart',
        data: [],
        xLabel: '',
        yLabel: '',
        width: 300,
        height: 200,
        colors: ['#6200ea', '#03dac6', '#ff4081', '#ff9800', '#4caf50']
      };
      
      const cfg = { ...defaults, ...config };
      
      const svg = DOM.create('svg', {
        width: cfg.width,
        height: cfg.height,
        class: 'pa-chart',
        'aria-label': cfg.title
      });
      
      el.innerHTML = '';
      el.appendChild(svg);
      
      // Render based on chart type
      switch (type) {
        case 'line':
          ChartSystem.renderLineChart(svg, cfg);
          break;
        case 'bar':
          ChartSystem.renderBarChart(svg, cfg);
          break;
        case 'pie':
          ChartSystem.renderPieChart(svg, cfg);
          break;
      }
      
      Events.emit('chart:render', { selector, type, config });
      return svg;
    },
    
    renderLineChart: (svg, config) => {
      const { width, height, data, colors } = config;
      const padding = 40;
      const graphWidth = width - 2 * padding;
      const graphHeight = height - 2 * padding;
      
      // Find min and max values
      const xValues = data.map(d => d.x);
      const yValues = data.map(d => d.y);
      const xMin = Math.min(...xValues);
      const xMax = Math.max(...xValues);
      const yMin = Math.min(...yValues);
      const yMax = Math.max(...yValues);
      
      // Create scales
      const xScale = x => padding + (x - xMin) / (xMax - xMin) * graphWidth;
      const yScale = y => height - padding - (y - yMin) / (yMax - yMin) * graphHeight;
      
      // Create axes
      const xAxis = DOM.create('line', {
        x1: padding,
        y1: height - padding,
        x2: width - padding,
        y2: height - padding,
        stroke: '#ccc'
      });
      
      const yAxis = DOM.create('line', {
        x1: padding,
        y1: padding,
        x2: padding,
        y2: height - padding,
        stroke: '#ccc'
      });
      
      svg.appendChild(xAxis);
      svg.appendChild(yAxis);
      
      // Create line path
      let pathData = '';
      data.forEach((point, i) => {
        const x = xScale(point.x);
        const y = yScale(point.y);
        
        if (i === 0) {
          pathData += `M ${x} ${y}`;
        } else {
          pathData += ` L ${x} ${y}`;
        }
        
        // Add point
        const circle = DOM.create('circle', {
          cx: x,
          cy: y,
          r: 4,
          fill: colors[0]
        });
        svg.appendChild(circle);
      });
      
      const path = DOM.create('path', {
        d: pathData,
        stroke: colors[0],
        'stroke-width': 2,
        fill: 'none'
      });
      
      svg.appendChild(path);
    },
    
    renderBarChart: (svg, config) => {
      const { width, height, data, colors } = config;
      const padding = 40;
      const graphWidth = width - 2 * padding;
      const graphHeight = height - 2 * padding;
      
      // Find max value
      const yValues = data.map(d => d.y);
      const yMax = Math.max(...yValues);
      
      // Create scale
      const yScale = y => height - padding - (y / yMax) * graphHeight;
      const barWidth = graphWidth / data.length * 0.8;
      const barSpacing = graphWidth / data.length;
      
      // Create axes
      const xAxis = DOM.create('line', {
        x1: padding,
        y1: height - padding,
        x2: width - padding,
        y2: height - padding,
        stroke: '#ccc'
      });
      
      const yAxis = DOM.create('line', {
        x1: padding,
        y1: padding,
        x2: padding,
        y2: height - padding,
        stroke: '#ccc'
      });
      
      svg.appendChild(xAxis);
      svg.appendChild(yAxis);
      
      // Create bars
      data.forEach((point, i) => {
        const x = padding + i * barSpacing + (barSpacing - barWidth) / 2;
        const barHeight = (point.y / yMax) * graphHeight;
        const y = height - padding - barHeight;
        
        const rect = DOM.create('rect', {
          x,
          y,
          width: barWidth,
          height: barHeight,
          fill: colors[i % colors.length]
        });
        
        svg.appendChild(rect);
      });
    },
    
    renderPieChart: (svg, config) => {
      const { width, height, data, colors } = config;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2 - 20;
      
      // Calculate total
      const total = data.reduce((sum, item) => sum + item.y, 0);
      
      // Create pie slices
      let currentAngle = -Math.PI / 2; // Start at top
      
      data.forEach((item, i) => {
        const sliceAngle = (item.y / total) * 2 * Math.PI;
        const endAngle = currentAngle + sliceAngle;
        
        // Calculate path
        const x1 = centerX + radius * Math.cos(currentAngle);
        const y1 = centerY + radius * Math.sin(currentAngle);
        const x2 = centerX + radius * Math.cos(endAngle);
        const y2 = centerY + radius * Math.sin(endAngle);
        
        const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
        
        const pathData = [
          `M ${centerX} ${centerY}`,
          `L ${x1} ${y1}`,
          `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
          'Z'
        ].join(' ');
        
        const path = DOM.create('path', {
          d: pathData,
          fill: colors[i % colors.length],
          stroke: 'white',
          'stroke-width': 1
        });
        
        svg.appendChild(path);
        
        currentAngle = endAngle;
      });
    }
  };

  // ===== SEARCH SYSTEM =====
  const SearchSystem = {
    index: null,
    documents: [],
    
    addDocument: function(id, content, fields = []) {
      SearchSystem.documents.push({ id, content, fields });
      
      // In a real implementation, this would build a proper search index
      // For simplicity, we'll just use basic string matching
      Logger.info(`Document added to search index: ${id}`);
      return SearchSystem;
    },
    
    removeDocument: function(id) {
      const index = SearchSystem.documents.findIndex(doc => doc.id === id);
      if (index !== -1) {
        SearchSystem.documents.splice(index, 1);
        Logger.info(`Document removed from search index: ${id}`);
      }
      return SearchSystem;
    },
    
    search: function(query, options = {}) {
      const { fields = [], limit = 10 } = options;
      const results = [];
      const queryLower = query.toLowerCase();
      
      // Simple search implementation
      for (const doc of SearchSystem.documents) {
        let score = 0;
        const matches = [];
        
        // Search in content
        if (doc.content.toLowerCase().includes(queryLower)) {
          score += 1;
          matches.push({
            field: 'content',
            value: doc.content.substring(
              Math.max(0, doc.content.toLowerCase().indexOf(queryLower) - 50),
              doc.content.toLowerCase().indexOf(queryLower) + query.length + 50
            )
          });
        }
        
        // Search in fields
        for (const field of fields) {
          if (doc.fields[field] && doc.fields[field].toLowerCase().includes(queryLower)) {
            score += 1;
            matches.push({
              field,
              value: doc.fields[field]
            });
          }
        }
        
        if (score > 0) {
          results.push({
            id: doc.id,
            score,
            matches
          });
        }
      }
      
      // Sort by score (descending)
      results.sort((a, b) => b.score - a.score);
      
      // Limit results
      return results.slice(0, limit);
    },
    
    buildIndex: function() {
      // In a real implementation, this would build a proper search index
      // For simplicity, we'll just log that the index was built
      Logger.info(`Search index built with ${SearchSystem.documents.length} documents`);
      return SearchSystem;
    }
  };

  // ===== MOBILE ENHANCEMENTS =====
  const Mobile = {
    // Geolocation
    geolocation: {
      getCurrentPosition: function(options = {}) {
        return new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by this browser'));
            return;
          }
          
          navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error),
            options
          );
        });
      },
      
      watchPosition: function(callback, options = {}) {
        if (!navigator.geolocation) {
          throw new Error('Geolocation is not supported by this browser');
        }
        
        return navigator.geolocation.watchPosition(
          position => callback(position),
          error => Logger.error('Geolocation error:', error),
          options
        );
      }
    },
    
    // Vibration
    vibrate: function(pattern) {
      if ('vibrate' in navigator) {
        return navigator.vibrate(pattern);
      }
      return false;
    },
    
    // Notifications
    notification: {
      requestPermission: function() {
        if ('Notification' in window) {
          return Notification.requestPermission();
        }
        return Promise.resolve('denied');
      },
      
      show: function(title, options = {}) {
        if ('Notification' in window && Notification.permission === 'granted') {
          return new Notification(title, options);
        }
        return null;
      }
    },
    
    // Touch events
    touch: {
      addSwipeListener: function(element, handlers) {
        let startX, startY, endX, endY;
        
        DOM.on(element, 'touchstart', e => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        });
        
        DOM.on(element, 'touchend', e => {
          endX = e.changedTouches[0].clientX;
          endY = e.changedTouches[0].clientY;
          
          const deltaX = endX - startX;
          const deltaY = endY - startY;
          const absDeltaX = Math.abs(deltaX);
          const absDeltaY = Math.abs(deltaY);
          
          // Minimum distance required to be considered a swipe
          const minSwipeDistance = 50;
          
          if (Math.max(absDeltaX, absDeltaY) > minSwipeDistance) {
            if (absDeltaX > absDeltaY) {
              // Horizontal swipe
              if (deltaX > 0 && handlers.right) {
                handlers.right();
              } else if (deltaX < 0 && handlers.left) {
                handlers.left();
              }
            } else {
              // Vertical swipe
              if (deltaY > 0 && handlers.down) {
                handlers.down();
              } else if (deltaY < 0 && handlers.up) {
                handlers.up();
              }
            }
          }
        });
      }
    }
  };

  // ===== PAYPAL INTEGRATION =====
  const PayPal = {
    createButton: function(container, options = {}) {
      const defaults = {
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal'
        },
        createOrder: function(data, actions) {
          // This function sets up the transaction
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01'
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          // This function captures the funds from the transaction
          return actions.order.capture().then(function(details) {
            Logger.info('Transaction completed by ' + details.payer.name.given_name);
            
            // Show a success message to the buyer
            if (CONFIG.NOTIFICATION_SYSTEM) {
              NotificationSystem.show('Payment completed successfully!', 'success');
            }
            
            Events.emit('paypal:payment-complete', { details, data });
          });
        },
        onError: function(err) {
          Logger.error('PayPal error:', err);
          
          if (CONFIG.NOTIFICATION_SYSTEM) {
            NotificationSystem.show('Payment failed. Please try again.', 'danger');
          }
          
          Events.emit('paypal:payment-error', { error: err });
        }
      };
      
      const config = { ...defaults, ...options };
      
      // Create button container
      const buttonContainer = DOM.create('div', {
        id: 'paypal-button-container'
      });
      
      // Add to DOM
      const targetElement = typeof container === 'string' ? DOM.get(container) : container;
      if (targetElement) {
        targetElement.appendChild(buttonContainer);
      } else {
        Logger.error('PayPal button container not found');
        return null;
      }
      
      // Load PayPal SDK if not already loaded
      if (!document.getElementById('paypal-sdk')) {
        const script = DOM.create('script', {
          id: 'paypal-sdk',
          src: 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD'
        });
        
        script.onload = function() {
          PayPal.renderButton(buttonContainer, config);
        };
        
        document.head.appendChild(script);
      } else {
        PayPal.renderButton(buttonContainer, config);
      }
      
      return buttonContainer;
    },
    
    renderButton: function(container, config) {
      if (window.paypal) {
        window.paypal.Buttons(config).render(container);
      } else {
        Logger.error('PayPal SDK not loaded');
      }
    }
  };

  // ===== W3.JS INTEGRATION =====
  const W3 = {
    // Include HTML
    includeHTML: function() {
      const elements = DOM.getAll('[w3-include-html]');
      elements.forEach(el => {
        const file = el.getAttribute('w3-include-html');
        if (file) {
          AJAX.get(file).then(html => {
            el.innerHTML = html;
            Hypermedia.scan(el);
          }).catch(error => {
            Logger.error('Error including HTML:', error);
          });
        }
      });
    },
    
    // Display element
    displayElement: function(id, display = 'block') {
      const element = DOM.get(id);
      if (element) {
        element.style.display = display;
      }
    },
    
    // Hide element
    hideElement: function(id) {
      W3.displayElement(id, 'none');
    },
    
    // Show element
    showElement: function(id) {
      W3.displayElement(id, 'block');
    },
    
    // Toggle display
    toggleDisplay: function(id) {
      const element = DOM.get(id);
      if (element) {
        if (element.style.display === 'none') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      }
    },
    
    // Add class
    addClass: function(id, className) {
      const element = DOM.get(id);
      if (element) {
        DOM.addClass(element, className);
      }
    },
    
    // Remove class
    removeClass: function(id, className) {
      const element = DOM.get(id);
      if (element) {
        DOM.removeClass(element, className);
      }
    },
    
    // Toggle class
    toggleClass: function(id, className) {
      const element = DOM.get(id);
      if (element) {
        DOM.toggleClass(element, className);
      }
    },
    
    // Get style
    getStyle: function(id, styleProp) {
      const element = DOM.get(id);
      if (element) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(element, null).getPropertyValue(styleProp);
        } else if (element.currentStyle) {
          return element.currentStyle[styleProp];
        }
      }
      return null;
    },
    
    // Set style
    setStyle: function(id, styleProp, value) {
      const element = DOM.get(id);
      if (element) {
        element.style[styleProp] = value;
      }
    },
    
    // Insert after
    insertAfter: function(id, html) {
      const element = DOM.get(id);
      if (element) {
        element.insertAdjacentHTML('afterend', html);
      }
    },
    
    // Add HTML before element
    addHTMLBefore: function(id, html) {
      const element = DOM.get(id);
      if (element) {
        element.insertAdjacentHTML('beforebegin', html);
      }
    },
    
    // Add HTML after element
    addHTMLAfter: function(id, html) {
      const element = DOM.get(id);
      if (element) {
        element.insertAdjacentHTML('afterend', html);
      }
    }
  };

  // ===== CSS FRAMEWORK (KEG.CSS) =====
  const CSS = {
    styles: `
/* Keg CSS v3.3 - Enterprise-Grade UI Framework (Integrated) */
/* Copyright (c) 2025 John Kesh Mahugu */

/* ===== FONT IMPORTS & RESET ===== */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html { -webkit-text-size-adjust: 100%; font-size: 16px; }
  body {
    font-family: 'Roboto', system-ui, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: var(--on-background);
    background: var(--background);
    min-height: 100vh;
  }
  a { text-decoration: none; color: var(--primary); transition: color 0.2s; }
  a:hover { color: var(--primary-dark); }
  button { cursor: pointer; border: none; padding: 0.5rem 1rem; border-radius: 6px; transition: all 0.2s; }
}

/* ===== DESIGN TOKENS (MATERIAL-INSPIRED) ===== */
:root {
  --primary: #007bff;
  --primary-dark: #0056b3;
  --primary-container: #cce0ff;
  --on-primary: #ffffff;

  --secondary: #6c757d;
  --secondary-container: #e9ecef;

  --tertiary: #28a745;
  --tertiary-container: #d4edda;
  --on-tertiary: #ffffff;

  --error: #dc3545;
  --error-container: #f8d7da;
  --on-error: #ffffff;

  --surface: #ffffff;
  --background: #f4f6f9;
  --on-surface: #212529;
  --on-background: #212529;
  --outline: #adb5bd;

  --spacing-unit: 8px;
  --border-radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}

/* ===== UTILITIES & COMPONENTS ===== */
@layer components {
  .pa-container { max-width: 1200px; margin-left: auto; margin-right: auto; padding: 0 16px; }
  .pa-flex-center { display: flex; justify-content: center; align-items: center; }
  .pa-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: calc(var(--spacing-unit) * 4); }
  .pa-card {
    background: var(--surface);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    padding: calc(var(--spacing-unit) * 4);
    margin-bottom: calc(var(--spacing-unit) * 4);
  }
  .pa-button-primary { background: var(--primary); color: var(--on-primary); }
  .pa-button-primary:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: var(--shadow-sm); }
  .pa-input-text {
    width: 100%; padding: 10px 15px; border: 1px solid var(--outline);
    border-radius: var(--border-radius); transition: border-color 0.2s, box-shadow 0.2s;
  }
  .pa-input-text:focus { border-color: var(--primary); box-shadow: 0 0 0 2px var(--primary-container); outline: none; }
  .pa-badge-success { background: var(--tertiary-container); color: var(--tertiary); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; }

  /* Navigation Rail */
  .pa-nav-rail {
    position: fixed; left: 0; top: 0; height: 100%; width: 80px;
    background: var(--surface); display: flex; flex-direction: column;
    align-items: center; padding-top: calc(var(--spacing-unit) * 4);
    box-shadow: var(--shadow-md); z-index: 100;
  }
  .pa-nav-item {
    padding: calc(var(--spacing-unit) * 2); margin-bottom: calc(var(--spacing-unit) * 2);
    border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center;
    color: var(--on-surface);
  }
  .pa-nav-item:hover { background: var(--secondary-container); }
  .pa-nav-item.active { background: var(--primary-container); color: var(--primary); }

  /* Notifications */
  .pa-notifications {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
  }
  
  .pa-notification {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    margin-bottom: 10px;
    overflow: hidden;
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  .pa-notification-show {
    transform: translateX(0);
    opacity: 1;
  }
  
  .pa-notification-hide {
    transform: translateX(100%);
    opacity: 0;
  }
  
  .pa-notification-content {
    display: flex;
    align-items: center;
    padding: 12px 16px;
  }
  
  .pa-notification-message {
    flex: 1;
    margin-right: 10px;
  }
  
  .pa-notification-close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pa-notification-info {
    border-left: 4px solid #17a2b8;
  }
  
  .pa-notification-success {
    border-left: 4px solid #28a745;
  }
  
  .pa-notification-warning {
    border-left: 4px solid #ffc107;
  }
  
  .pa-notification-danger {
    border-left: 4px solid #dc3545;
  }

  /* Web CLI */
  .pa-cli {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: #1e1e1e;
    color: #f0f0f0;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    display: none;
    flex-direction: column;
    z-index: 1000;
    border-top: 1px solid #444;
  }
  
  .pa-cli-visible {
    display: flex;
  }
  
  .pa-cli-output {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .pa-cli-input-line {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-top: 1px solid #444;
  }
  
  .pa-cli-prompt {
    margin-right: 5px;
    color: #4caf50;
  }
  
  .pa-cli-input {
    flex: 1;
    background: transparent;
    border: none;
    color: inherit;
    outline: none;
    font-family: inherit;
    font-size: inherit;
  }
  
  .pa-cli-command {
    margin-bottom: 5px;
  }
  
  .pa-cli-command-text {
    color: #f0f0f0;
  }
  
  .pa-cli-result {
    color: #4caf50;
    margin-bottom: 5px;
    white-space: pre-wrap;
  }
  
  .pa-cli-error {
    color: #f44336;
    margin-bottom: 5px;
  }
  
  .pa-cli-print {
    margin-bottom: 5px;
    white-space: pre-wrap;
  }

  /* Charts */
  .pa-chart {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .pa-nav-rail { width: 100%; height: 60px; top: auto; bottom: 0; flex-direction: row; padding: 0; }
    .pa-nav-item { margin: 0 8px; }
    .pa-notifications { right: 10px; left: 10px; max-width: none; }
  }
}
    `,
    
    inject: function() {
      if (document.getElementById('pa-styles')) return;
      
      const styleElement = DOM.create('style', {
        id: 'pa-styles'
      });
      
      styleElement.textContent = CSS.styles;
      document.head.appendChild(styleElement);
      
      Logger.info('CSS Framework injected');
    },
    
    purge: function() {
      // Implementation for CSS purging would go here
      // This would remove unused CSS classes to reduce file size
      Logger.info('CSS purged');
    }
  };

  // ===== EVENT SYSTEM =====
  const Events = new QuantumEventSystem();

  // ===== HELPER FUNCTIONS =====
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function evalExpr(expr, ctx) {
    try {
      // Allows access to client and local scope
      return new Function('$', `with($){return ${expr}}`).call(ctx, ctx);
    } catch (e) {
      Logger.error(`Failed to evaluate expression: '${expr}'`, e);
      return null;
    }
  }

  function serializeForm(form) {
    const formData = new FormData(form);
    const json = {};
    formData.forEach((val, key) => {
      json[key] = json[key] ? (Array.isArray(json[key]) ? [...json[key], val] : [json[key], val]) : val;
    });
    return json;
  }

  function getPath(obj, path) {
    return path.split('.').reduce((o, p) => o && o[p], obj);
  }

  function setPath(obj, path, value) {
    const parts = path.split('.');
    const last = parts.pop();
    const target = parts.reduce((o, p) => o[p] = o[p] || {}, obj);
    target[last] = value;
    return obj;
  }

  function clone(obj) {
    return safeJSON(toJSON(obj));
  }

  function merge(target, source) {
    if (typeof source !== 'object' || source === null) return target;
    
    const result = { ...target };
    
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        result[key] = merge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  }

  // ===== MAIN FRAMEWORK OBJECT =====
  const PA = {
    // Configuration
    config: CONFIG,
    
    // Environment
    env: ENV,
    
    // Core systems
    signal,
    computed,
    effect,
    store: new QuantumStore(),
    events: Events,
    metrics: Metrics,
    logger: Logger,
    
    // DOM and UI
    dom: DOM,
    component: Component,
    css: CSS,
    
    // Hypermedia
    hypermedia: Hypermedia,
    ajax: AJAX,
    router: Router,
    
    // Enhanced features
    workers: new WorkerPool(),
    cart: Cart,
    notifications: NotificationSystem,
    cli: WebCLI,
    charts: ChartSystem,
    search: SearchSystem,
    mobile: Mobile,
    paypal: PayPal,
    w3: W3,
    
    // Utility functions
    utils: {
      uid,
      hash,
      generateRandomString,
      safeJSON,
      toJSON,
      escapeHtml,
      evalExpr,
      serializeForm,
      clone,
      merge
    },
    
    // Initialize the framework
    init: function() {
      Logger.info(`Initializing Unicorn-PA.js v${CONFIG.VERSION}`);
      
      // Inject CSS
      CSS.inject();
      
      // Initialize cart
      if (CONFIG.SHOPPING_CART) {
        Cart.load();
      }
      
      // Start router
      Router.start();
      
      // Scan for hypermedia attributes
      Hypermedia.scan();
      
      // Initialize web CLI if enabled
      if (CONFIG.WEB_CLI) {
        WebCLI.init();
      }
      
      // Process w3-include-html attributes
      W3.includeHTML();
      
      Logger.info(`Unicorn-PA.js v${CONFIG.VERSION} initialized successfully`);
      return PA;
    }
  };

  // Expose the framework to the global scope
  if (ENV.isBrowser) {
    window.PA = PA;
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', PA.init);
    } else {
      PA.init();
    }
  } else if (ENV.isServer) {
    // Server-side export
    module.exports = PA;
  }

})();
```

This complete implementation of Unicorn-PA.js v3.3 merges all the valuable features from the provided frameworks into a single, cohesive system. It includes:

1. **Enhanced State Management** with quantum signals and time-travel debugging
2. **Hypermedia System** with declarative attributes (pa-*)
3. **Component System** with lifecycle hooks and reactive bindings
4. **Advanced Routing** with guards and parameter handling
5. **Worker Pool** for multi-threading CPU-intensive tasks
6. **Shopping Cart** with persistent storage
7. **Notification System** with growl-like alerts
8. **Web CLI** for in-browser command-line interface
9. **Chart System** for data visualization
10. **Search System** with document indexing
11. **Mobile Enhancements** with geolocation, vibration, and notifications
12. **PayPal Integration** for payment processing
13. **W3.js Integration** for HTML includes and DOM manipulation
14. **CSS Framework** with KEG.css styling
15. **Event System** with middleware and priority support
16. **AJAX System** with multiple swap strategies
17. **Performance Monitoring** with metrics collection

The framework is designed to be zero-dependency, running seamlessly on both client and server, with extensive features for modern web development.

# Unicorn-PA.js UI Design System & SPA Development Guide

## Overview

Unicorn-PA.js includes a comprehensive UI design system built on top of KEG.css that provides a modern, responsive, and accessible foundation for building Single Page Applications (SPAs). The design system follows Material Design principles and includes a complete set of components, utilities, and patterns.

## Design System Architecture

### 1. Design Tokens

The design system is built on a foundation of design tokens that ensure consistency across your application:

```javascript
// Color System
:root {
  --primary: #007bff;        // Primary brand color
  --primary-dark: #0056b3;   // Darker variant
  --primary-container: #cce0ff; // Light container color
  --on-primary: #ffffff;     // Text color on primary
  
  --secondary: #6c757d;      // Secondary color
  --tertiary: #28a745;       // Accent color
  --error: #dc3545;          // Error color
  
  --surface: #ffffff;        // Card/background color
  --background: #f4f6f9;     // App background
  --on-surface: #212529;    // Text on surfaces
  --on-background: #212529;  // Text on background
  
  --spacing-unit: 8px;       // Base spacing unit
  --border-radius: 8px;      // Default border radius
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1); // Small shadow
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1); // Medium shadow
}
```

### 2. Typography System

The framework includes a responsive typography scale:

```css
/* Typography Classes */
.pa-text-xs { font-size: 0.75rem; }
.pa-text-sm { font-size: 0.875rem; }
.pa-text-base { font-size: 1rem; }
.pa-text-lg { font-size: 1.125rem; }
.pa-text-xl { font-size: 1.25rem; }
.pa-text-2xl { font-size: 1.5rem; }
.pa-text-3xl { font-size: 1.875rem; }

/* Font Weights */
.pa-font-light { font-weight: 300; }
.pa-font-normal { font-weight: 400; }
.pa-font-medium { font-weight: 500; }
.pa-font-bold { font-weight: 700; }
```

## Core Components

### 1. Layout Components

#### Container
```html
<div class="pa-container">
  <!-- Your content here -->
</div>
```

#### Grid System
```html
<!-- Two column grid -->
<div class="pa-grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- Responsive grid -->
<div class="pa-grid pa-grid-cols-1 pa-md:grid-cols-2 pa-lg:grid-cols-3">
  <div>Responsive Column</div>
  <div>Responsive Column</div>
  <div>Responsive Column</div>
</div>
```

#### Flexbox Utilities
```html
<div class="pa-flex pa-flex-center">
  <!-- Centered content -->
</div>

<div class="pa-flex pa-flex-row pa-justify-between">
  <div>Left aligned</div>
  <div>Right aligned</div>
</div>
```

### 2. Navigation Components

#### Navigation Rail
```html
<div class="pa-nav-rail">
  <div class="pa-nav-item active">
    <i class="fas fa-home"></i>
  </div>
  <div class="pa-nav-item">
    <i class="fas fa-search"></i>
  </div>
  <div class="pa-nav-item">
    <i class="fas fa-user"></i>
  </div>
</div>
```

#### App Bar
```html
<header class="pa-app-bar">
  <div class="pa-app-bar-title">My App</div>
  <div class="pa-app-bar-actions">
    <button class="pa-button pa-button-icon">
      <i class="fas fa-bell"></i>
    </button>
  </div>
</header>
```

### 3. Form Components

#### Input Fields
```html
<div class="pa-form-group">
  <label class="pa-label" for="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    class="pa-input-text" 
    placeholder="Enter your email"
    pa-bind="value:user.email"
  >
  <div class="pa-form-error" pa-show="user.errors.email">
    {{user.errors.email}}
  </div>
</div>
```

#### Buttons
```html
<!-- Primary button -->
<button class="pa-button pa-button-primary">
  Save Changes
</button>

<!-- Secondary button -->
<button class="pa-button pa-button-secondary">
  Cancel
</button>

<!-- Icon button -->
<button class="pa-button pa-button-icon">
  <i class="fas fa-plus"></i>
</button>

<!-- Loading button -->
<button class="pa-button pa-button-primary" pa-show="!loading">
  Submit
</button>
<button class="pa-button pa-button-primary" disabled pa-show="loading">
  <i class="fas fa-spinner fa-spin"></i> Processing...
</button>
```

### 4. Card Components

#### Basic Card
```html
<div class="pa-card">
  <div class="pa-card-header">
    <h3 class="pa-card-title">Card Title</h3>
  </div>
  <div class="pa-card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="pa-card-footer">
    <button class="pa-button pa-button-primary">Action</button>
  </div>
</div>
```

#### Interactive Card
```html
<div class="pa-card pa-card-interactive" pa-on:click="selectItem(item)">
  <div class="pa-card-media">
    <img src="{{item.image}}" alt="{{item.title}}">
  </div>
  <div class="pa-card-body">
    <h3 class="pa-card-title">{{item.title}}</h3>
    <p class="pa-card-text">{{item.description}}</p>
  </div>
  <div class="pa-card-actions">
    <button class="pa-button pa-button-text">View Details</button>
  </div>
</div>
```

## Building a SPA with Backend Communication

### 1. Project Structure

```
my-spa-app/
├── index.html
├── js/
│   └── app.js
├── css/
│   └── custom.css
└── assets/
    └── images/
```

### 2. Basic SPA Setup

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My SPA App</title>
  <!-- Unicorn-PA.js will inject CSS automatically -->
</head>
<body>
  <!-- App Container -->
  <div id="app" class="pa-app">
    <!-- Navigation Rail -->
    <nav class="pa-nav-rail">
      <div class="pa-nav-item active" pa-link="/dashboard">
        <i class="fas fa-home"></i>
      </div>
      <div class="pa-nav-item" pa-link="/users">
        <i class="fas fa-users"></i>
      </div>
      <div class="pa-nav-item" pa-link="/settings">
        <i class="fas fa-cog"></i>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="pa-main-content">
      <!-- Dynamic content will be loaded here -->
      <div id="content" class="pa-content">
        <!-- Initial content or loading indicator -->
        <div class="pa-loading">
          <i class="fas fa-spinner fa-spin"></i>
          Loading...
        </div>
      </div>
    </main>

    <!-- Notification Container -->
    <div id="notifications" class="pa-notifications"></div>
  </div>

  <!-- Include Unicorn-PA.js -->
  <script src="unicorn-pa.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

#### js/app.js
```javascript
// Initialize the application
PA.init();

// Define application state
const appState = PA.store.createSignal('app', {
  user: null,
  loading: false,
  error: null,
  currentPage: 'dashboard'
});

// Define API service
const api = {
  baseUrl: 'https://api.example.com',
  
  // Generic request method
  async request(endpoint, options = {}) {
    PA.store.setState({ loading: true });
    
    try {
      const response = await PA.ajax.request(options.method || 'GET')
        .url(`${this.baseUrl}${endpoint}`)
        .header('Content-Type', 'application/json')
        .header('Authorization', `Bearer ${appState.value.user?.token}`)
        .data(options.body)
        .go();
      
      PA.store.setState({ loading: false, error: null });
      return response;
    } catch (error) {
      PA.store.setState({ loading: false, error: error.message });
      PA.notifications.show(error.message, 'danger');
      throw error;
    }
  },
  
  // API methods
  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: credentials
    });
    
    PA.store.setState({ user: response.user });
    localStorage.setItem('authToken', response.token);
    return response;
  },
  
  async getUsers() {
    return await this.request('/users');
  },
  
  async createUser(userData) {
    return await this.request('/users', {
      method: 'POST',
      body: userData
    });
  },
  
  async updateUser(id, userData) {
    return await this.request(`/users/${id}`, {
      method: 'PUT',
      body: userData
    });
  },
  
  async deleteUser(id) {
    return await this.request(`/users/${id}`, {
      method: 'DELETE'
    });
  }
};

// Define routes
PA.router.add('/', () => {
  PA.router.navigate('/dashboard');
});

PA.router.add('/dashboard', () => {
  loadPage('dashboard');
});

PA.router.add('/users', () => {
  loadPage('users');
});

PA.router.add('/users/:id', ({ params }) => {
  loadPage('user-detail', params.id);
});

PA.router.add('/login', () => {
  loadPage('login');
});

// Page loading function
async function loadPage(page, ...args) {
  const contentEl = document.getElementById('content');
  
  try {
    // Show loading state
    contentEl.innerHTML = `
      <div class="pa-loading">
        <i class="fas fa-spinner fa-spin"></i>
        Loading...
      </div>
    `;
    
    // Load page content
    let html;
    switch (page) {
      case 'dashboard':
        html = await loadDashboard();
        break;
      case 'users':
        html = await loadUsers();
        break;
      case 'user-detail':
        html = await loadUserDetail(args[0]);
        break;
      case 'login':
        html = loadLogin();
        break;
      default:
        html = '<div class="pa-error">Page not found</div>';
    }
    
    // Update content
    contentEl.innerHTML = html;
    
    // Process new hypermedia attributes
    PA.hypermedia.scan(contentEl);
    
    // Update current page in state
    PA.store.setState({ currentPage: page });
    
  } catch (error) {
    contentEl.innerHTML = `
      <div class="pa-error">
        <h3>Error loading page</h3>
        <p>${error.message}</p>
      </div>
    `;
  }
}

// Page content generators
async function loadDashboard() {
  const stats = await api.request('/dashboard/stats');
  
  return `
    <div class="pa-page-header">
      <h1>Dashboard</h1>
      <p>Welcome back, ${appState.value.user?.name}!</p>
    </div>
    
    <div class="pa-grid pa-grid-cols-1 pa-md:grid-cols-2 pa-lg:grid-cols-4">
      <div class="pa-card pa-stat-card">
        <div class="pa-stat-value">${stats.users}</div>
        <div class="pa-stat-label">Users</div>
      </div>
      <div class="pa-card pa-stat-card">
        <div class="pa-stat-value">${stats.orders}</div>
        <div class="pa-stat-label">Orders</div>
      </div>
      <div class="pa-card pa-stat-card">
        <div class="pa-stat-value">${stats.revenue}</div>
        <div class="pa-stat-label">Revenue</div>
      </div>
      <div class="pa-card pa-stat-card">
        <div class="pa-stat-value">${stats.growth}%</div>
        <div class="pa-stat-label">Growth</div>
      </div>
    </div>
    
    <div class="pa-card pa-mt-4">
      <div class="pa-card-header">
        <h3>Recent Activity</h3>
      </div>
      <div class="pa-card-body">
        <div id="activity-chart"></div>
      </div>
    </div>
  `;
}

async function loadUsers() {
  const users = await api.getUsers();
  
  return `
    <div class="pa-page-header">
      <h1>Users</h1>
      <button class="pa-button pa-button-primary" pa-on:click="showCreateUserModal()">
        <i class="fas fa-plus"></i> Add User
      </button>
    </div>
    
    <div class="pa-card">
      <div class="pa-card-body">
        <div class="pa-table-container">
          <table class="pa-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${users.map(user => `
                <tr>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
                  <td>
                    <span class="pa-badge pa-badge-${user.role === 'admin' ? 'primary' : 'secondary'}">
                      ${user.role}
                    </span>
                  </td>
                  <td>
                    <span class="pa-badge pa-badge-${user.active ? 'success' : 'danger'}">
                      ${user.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <button class="pa-button pa-button-text" pa-link="/users/${user.id}">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="pa-button pa-button-text pa-text-danger" pa-on:click="deleteUser('${user.id}')">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

async function loadUserDetail(userId) {
  const user = await api.request(`/users/${userId}`);
  
  return `
    <div class="pa-page-header">
      <button class="pa-button pa-button-text" pa-link="/users">
        <i class="fas fa-arrow-left"></i> Back to Users
      </button>
      <h1>User Details</h1>
    </div>
    
    <div class="pa-grid pa-grid-cols-1 pa-lg:grid-cols-3">
      <div class="pa-lg:col-span-1">
        <div class="pa-card">
          <div class="pa-card-body pa-text-center">
            <div class="pa-avatar pa-avatar-large">
              <img src="${user.avatar || '/assets/default-avatar.png'}" alt="${user.name}">
            </div>
            <h3>${user.name}</h3>
            <p class="pa-text-muted">${user.email}</p>
            <span class="pa-badge pa-badge-${user.role === 'admin' ? 'primary' : 'secondary'}">
              ${user.role}
            </span>
          </div>
        </div>
      </div>
      
      <div class="pa-lg:col-span-2">
        <div class="pa-card">
          <div class="pa-card-header">
            <h3>User Information</h3>
            <button class="pa-button pa-button-text" pa-on:click="editUser('${user.id}')">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
          <div class="pa-card-body">
            <div class="pa-form-group">
              <label class="pa-label">Name</label>
              <input type="text" class="pa-input-text" value="${user.name}" readonly>
            </div>
            <div class="pa-form-group">
              <label class="pa-label">Email</label>
              <input type="email" class="pa-input-text" value="${user.email}" readonly>
            </div>
            <div class="pa-form-group">
              <label class="pa-label">Role</label>
              <input type="text" class="pa-input-text" value="${user.role}" readonly>
            </div>
            <div class="pa-form-group">
              <label class="pa-label">Status</label>
              <div>
                <span class="pa-badge pa-badge-${user.active ? 'success' : 'danger'}">
                  ${user.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loadLogin() {
  return `
    <div class="pa-auth-container">
      <div class="pa-card pa-auth-card">
        <div class="pa-card-header pa-text-center">
          <h1>Login</h1>
          <p>Please sign in to your account</p>
        </div>
        <div class="pa-card-body">
          <form id="loginForm" pa-on:submit="handleLogin">
            <div class="pa-form-group">
              <label class="pa-label" for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                class="pa-input-text" 
                placeholder="Enter your email"
                required
              >
            </div>
            <div class="pa-form-group">
              <label class="pa-label" for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                class="pa-input-text" 
                placeholder="Enter your password"
                required
              >
            </div>
            <button type="submit" class="pa-button pa-button-primary pa-w-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// Event handlers
window.handleLogin = async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    await api.login({ email, password });
    PA.notifications.show('Login successful!', 'success');
    PA.router.navigate('/dashboard');
  } catch (error) {
    PA.notifications.show('Login failed: ' + error.message, 'danger');
  }
};

window.showCreateUserModal = function() {
  // Implementation for showing a create user modal
  PA.notifications.show('Create user modal not implemented yet', 'info');
};

window.deleteUser = async function(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    try {
      await api.deleteUser(userId);
      PA.notifications.show('User deleted successfully', 'success');
      loadUsers(); // Reload the users list
    } catch (error) {
      PA.notifications.show('Failed to delete user: ' + error.message, 'danger');
    }
  }
};

// Check authentication on load
function checkAuth() {
  const token = localStorage.getItem('authToken');
  if (token) {
    // Verify token with backend
    api.request('/auth/verify')
      .then(response => {
        PA.store.setState({ user: response.user });
      })
      .catch(() => {
        // Token invalid, redirect to login
        localStorage.removeItem('authToken');
        PA.router.navigate('/login');
      });
  } else {
    // No token, redirect to login
    PA.router.navigate('/login');
  }
}

// Initialize authentication check
checkAuth();

// Handle global errors
PA.events.on('ajax:error', (data) => {
  if (data.error.status === 401) {
    // Unauthorized, redirect to login
    localStorage.removeItem('authToken');
    PA.router.navigate('/login');
  }
});
```

## Advanced Patterns

### 1. Component-Based Architecture

Create reusable components:

```javascript
// Define a reusable user card component
PA.component.register('user-card', {
  template: `
    <div class="pa-card pa-user-card">
      <div class="pa-card-body">
        <div class="pa-user-avatar">
          <img src="{{user.avatar}}" alt="{{user.name}}">
        </div>
        <h3 class="pa-user-name">{{user.name}}</h3>
        <p class="pa-user-email">{{user.email}}</p>
        <div class="pa-user-actions">
          <button class="pa-button pa-button-text" pa-on:click="viewUser('{{user.id}}')">
            View Profile
          </button>
        </div>
      </div>
    </div>
  `,
  
  onMount: function(el) {
    // Component initialization logic
    console.log('User card mounted');
  },
  
  onUpdate: function(el) {
    // Component update logic
    console.log('User card updated');
  }
});

// Use the component
const userCards = users.map(user => 
  PA.component.render('user-card', { user })
).join('');
```

### 2. State Management with Signals

Use signals for reactive state management:

```javascript
// Create signals for reactive data
const users = PA.signal([]);
const loading = PA.signal(false);
const searchQuery = PA.signal('');

// Create computed signal for filtered users
const filteredUsers = PA.computed(() => {
  return users.value.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Create effect to react to changes
PA.effect(() => {
  console.log('Users updated:', users.value);
});

// Update signals
loading.value = true;
api.getUsers().then(data => {
  users.value = data;
  loading.value = false;
});
```

### 3. Optimistic Updates

Implement optimistic updates for better UX:

```javascript
async function updateUser(userId, userData) {
  // Create optimistic update
  const originalUsers = [...users.value];
  const updatedUsers = users.value.map(user => 
    user.id === userId ? { ...user, ...userData } : user
  );
  
  // Update UI immediately
  users.value = updatedUsers;
  
  try {
    // Make API call
    await api.updateUser(userId, userData);
    PA.notifications.show('User updated successfully', 'success');
  } catch (error) {
    // Revert on error
    users.value = originalUsers;
    PA.notifications.show('Failed to update user', 'danger');
  }
}
```

### 4. Real-time Updates with WebSockets

Implement real-time updates:

```javascript
// WebSocket connection
const socket = PA.ws.connect('wss://api.example.com/ws');

// Listen for updates
socket.on('user-updated', (data) => {
  const updatedUsers = users.value.map(user => 
    user.id === data.id ? { ...user, ...data } : user
  );
  users.value = updatedUsers;
});

socket.on('user-deleted', (data) => {
  users.value = users.value.filter(user => user.id !== data.id);
});
```

## Best Practices

1. **Progressive Enhancement**: Start with basic HTML functionality and enhance with JavaScript
2. **Error Boundaries**: Implement proper error handling at component and route levels
3. **Loading States**: Always show loading indicators during async operations
4. **Form Validation**: Validate both client-side and server-side
5. **Accessibility**: Use semantic HTML and ARIA attributes
6. **Performance**: Use code splitting and lazy loading for large applications
7. **Security**: Sanitize user input and use HTTPS for all API calls
8. **Testing**: Write tests for critical functionality

This design system and SPA architecture provides a solid foundation for building modern web applications with excellent user experience and maintainable code structure.




==========================================
COOOK BOOK SHOWCASING ALL FEATURES TO ENABLE DEVS TO LEARN BY EXAMPLE
======================================================

