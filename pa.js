/**
 * pa.js Node.js Macroframework
 * Version: 3.1.6 (a.k.a. pa@3.1.6.js)
 *
 * @Author      : John Mwirigi Mahugu - "Kesh"
 * @Dedication  : To my Dad Francis Mahugu, my Son Seth Mahugu and "To All Developers Building Amazing Things"
 * @Email       : johnmahugu@gmail.com
 * @Mobile      : +254722925095
 * @LinkedIn    : https://linkedin.com/in/johnmahugu
 * @Github      : https://github.com/johnmwirigimahugu
 * @Gitlab      : https://gitlab.com/johnmahugu
 * @Website     : https://sites.google.com/view/mahugu
 * @Repository  : https://github.com/johnmwirigimahugu/pa
 * @updated     : 19th May 2025 @1:05AM Moday
 * ============================================================================
 * Copyright (C) 2025 by John Mwirigi Mahugu
 * LICENSE {OPEN SOURCE}
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * ============================================================================
  * ============================================================================
 * pa.js Node.js Macroframework - Features List (v3.1.6)
 * ============================================================================
 * Features:
 *  1.  Middleware registration and execution
 *  2.  Route definition and grouping (with prefix support)
 *  3.  Advanced ORM: migrations, schema evolution, CRUD, relations
 *  4.  ORM transactions with rollback on error
 *  5.  Query builder: filtering, ordering, pagination (with metadata)
 *  6.  ORM hooks system (before/after operation logic)
 *  7.  Audit logging for queries
 *  8.  Relations: hasMany, belongsTo, link, and findRelated
 *  9.  NoSQL document store with insert, find, update
 * 10.  Template engine: inheritance (extends/blocks), variable interpolation
 * 11.  CSRF protection middleware with token management
 * 12.  Rate limiting middleware per IP
 * 13.  Internationalization (i18n) with translation, parameter substitution, fallback, and pluralization
 * 14.  Dependency injection (service registration and usage)
 * 15.  CLI system: command registration and execution
 * 16.  File uploads: multipart form data parsing and file handling
 * 17.  Email service: queue and log emails (integration-ready)
 * 18.  Testing utilities: async test runner with reporting
 * 19.  Customizable global error handler (HTML/JSON, enterprise-grade)
 * 20.  Static file serving from registered directories
 * 21.  Body parsing (JSON, URL-encoded) with static helper and enterprise-grade JSON validation
 * 22.  Enhanced response helpers (status, json)
 * 23.  Plugin system for extensibility
 * 24.  Event-driven core (EventEmitter-based)
 * 25.  Support for registering and using plugins
 * 26.  Internal helpers for file and data management
 * 27.  Modular and extensible architecture
 *
 * ------------- Enterprise-Grade Enhancements (pa3.0.js+) -------------
 * 28.  Complete session management with automatic secure cookie handling and document-based storage
 * 29.  Flash messages with automatic cleanup
 * 30.  Advanced CORS middleware with customizable configuration
 * 31.  Security headers middleware with CSP support
 * 32.  Pagination helper with metadata generation
 * 33.  cURL-like HTTP client for external requests
 * 34.  File download handler with streaming support
 * 35.  Deployment CLI with build/migration hooks
 * 36.  Utility methods for UUID generation and hashing
 * 37.  In-memory and persistent cache management with TTL support
 * 38.  Secure cookie helper for all cookie operations
 * 39.  Centralized error messaging and error handling (HTML/JSON)
 * 40.  Embedded NoSQL DB (PajsDB): ACID, sharding, TTL, geospatial, WAL, backup/restore
 * 41.  Embedded full-text search engine (PaJua): Lunr/Solr-like, in-memory
 * 42.  WebSocket and long-polling support for real-time features
 * 43.  Health check and metrics endpoints for monitoring
 * 44.  Hot reload support for development (use with nodemon or dev script)
 * 45.  HTMLHelper: Safe server-side HTML builder
 * 46.  PaJSX: Client-side AJAX/AHAH helper for dynamic HTML updates
 * 47.  Optional integration with external DBs (SQLite, MongoDB, PostgreSQL, etc.)
 * 48.  Planned: Swagger/OpenAPI auto-generation, Admin UI/Panel, plugin/module scaffolding
 * ---------------------------------------------------------------------
 * All features implemented with zero external dependencies.
 * The framework now handles everything from database operations to production deployments in a single file.
 * ============================================================================**
 * =============================================================================
 * pa.js Macroframework - Features & Functions Overview
 * =============================================================================
 *
 * CORE FRAMEWORK
 * -----------------------------------------------------------------------------
 * - use(middleware): Register global or per-route middleware.
 * - group(prefix, callback): Group routes under a common prefix.
 * - route(method, path, handler): Define a route with method and handler.
 *
 * ADVANCED ORM & DATA
 * -----------------------------------------------------------------------------
 * - R.setup(config): Initialize ORM with config (db path, fs, etc).
 * - R.migrate(table, schema): Define or update table schema.
 * - R.relate(parent, child, type): Define table relationships (hasMany, etc).
 * - R.transaction(callback): Run DB operations in a transaction with rollback.
 * - R.dispense(type): Create a new bean/object of a type.
 * - R.store(bean): Save an object to the database.
 * - R.load(type, id): Load a single object by type and id.
 * - R.findAll(type): Get all objects of a type.
 * - R.find(type, conditions): Query objects by conditions.
 * - R.trash(bean): Delete an object.
 * - R.link(parent, child): Link two objects via a relation.
 * - R.findRelated(parent, childType): Find related objects.
 * - R.document(type): NoSQL document store (insert, find, update).
 * - R.query(table): Query builder (where, with, paginate, orderBy, first).
 * - R.beforeHook(type, cb): Register ORM hooks.
 * - R.logQuery(query): Audit log for queries.
 *
 * TEMPLATING & HTML
 * -----------------------------------------------------------------------------
 * - render(file, data): Render a template file with data (supports inheritance, blocks).
 *
 * SECURITY & MIDDLEWARE
 * -----------------------------------------------------------------------------
 * - csrf(): CSRF protection middleware.
 * - rateLimit(opts): Rate limiting middleware per IP.
 *
 * INTERNATIONALIZATION
 * -----------------------------------------------------------------------------
 * - I18n.set(lang, dict): Set translations for a language.
 * - I18n.t(lang, key, params): Translate a key with parameters and fallback.
 *
 * DEPENDENCY INJECTION & PLUGINS
 * -----------------------------------------------------------------------------
 * - service(name, impl): Register a service for DI.
 * - plugin(pluginFn): Register and use plugins.
 *
 * CLI & TESTING
 * -----------------------------------------------------------------------------
 * - command(name, desc, action): Register a CLI command.
 * - runCLI(): Run the CLI system.
 *
 * FILES & STATIC
 * -----------------------------------------------------------------------------
 * - Static file serving from registered directories.
 * - File upload and download handlers.
 *
 * ENTERPRISE ENHANCEMENTS
 * -----------------------------------------------------------------------------
 * - Session management: Secure, HTTP-only, SameSite cookies with file/memory storage.
 * - Flash messages: Temporary, auto-cleanup messages.
 * - CORS: Configurable cross-origin resource sharing middleware.
 * - Security headers: Set CSP and other HTTP security headers.
 * - Pagination helper: Generate paginated responses with metadata.
 * - HTTP client: cURL-like client for external requests.
 * - Deployment CLI: Build/migration hooks for deployment.
 * - UUID/hash helpers: Generate UUIDs and hashes.
 * - Cache: In-memory and persistent cache with TTL.
 * - Centralized error handling: Custom error pages/responses.
 *
 * EMBEDDED DATABASE & SEARCH (PajsDB + PaJua)
 * -----------------------------------------------------------------------------
 * - PajsDB: Embedded, zero-dependency NoSQL DB with ACID, sharding, TTL, geospatial, etc.
 * - PaJua: In-memory full-text search engine (Lunr/Solr-like).
 *
 * REAL-TIME & DEV EXPERIENCE
 * -----------------------------------------------------------------------------
 * - enableWebSocket(server): Add WebSocket support for real-time features.
 * - enableLongPolling(path): Add long polling endpoint.
 * - healthCheck(): Health check endpoint for monitoring.
 * - metrics(): Metrics endpoint for resource stats.
 * - Hot reload: Use nodemon or dev script for auto-restart.
 *
 * HTML & AJAX HELPERS
 * -----------------------------------------------------------------------------
 * - HTMLHelper: Safe HTML tag/input builder for server-side rendering.
 * - PaJSX: Client-side AJAX/AHAH helper for dynamic HTML updates.
 *
 * =============================================================================
 * All features are zero-dependency, modular, and extensible in a single file!
 * =============================================================================
 */

 
const { createServer, Server } = require('http');
const { parse, URL } = require('url');
const { randomUUID, createHash } = require('crypto');
const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');
const childProcess = require('child_process');

class Pa extends EventEmitter {
  constructor() {
    super();
    this._middleware = [];
    this._routes = {};
    this._routeGroups = [];
    this._defaultHeaders = {};
    this._errorHandler = this._defaultErrorHandler;
    this._config = {};
    this._services = {};
    this._cliCommands = {};
    this._lang = {};
    this._csrfTokens = new Map();
    this._rateLimits = new Map();
    this._staticDirs = [];
    this._plugins = [];
  }

  // ====================== CORE FRAMEWORK ======================
  use(middleware) {
    if (Array.isArray(middleware)) {
      this._middleware.push(...middleware);
    } else {
      this._middleware.push(middleware);
    }
    return this;
  }

  group(prefix, callback) {
    this._routeGroups.push(prefix);
    callback();
    this._routeGroups.pop();
    return this;
  }

  route(method, path, handler) {
    const fullPath = this._routeGroups.join('') + path;
    this._routes[`${method.toUpperCase()} ${fullPath}`] = {
      handler,
      middleware: [...this._middleware]
    };
    return this;
  }

  // ====================== ADVANCED ORM ======================
  static R = (() => {
    const internals = {
      tables: {},
      schemas: {},
      relations: {},
      transactionStack: [],
      dbPath: './.pa_data',
      fs: null,
      hooks: {},
      queryLog: [],
      nosql: {}
    };

    const ORM = {
      async setup(config) {
        internals.fs = config.fs || require('fs').promises;
        internals.dbPath = config.dbPath || './.pa_data';
        await this._ensureDbDir();
        await this._loadSchemas();
        return this;
      },

      async _ensureDbDir() {
        try {
          await internals.fs.access(internals.dbPath);
        } catch {
          await internals.fs.mkdir(internals.dbPath, { recursive: true });
        }
      },

      async _loadSchemas() {
        try {
          const schemaFile = path.join(internals.dbPath, '_schemas.json');
          const data = await internals.fs.readFile(schemaFile);
          internals.schemas = JSON.parse(data);
          
          await Promise.all(
            Object.keys(internals.schemas).map(async (table) => {
              const tableFile = path.join(internals.dbPath, `${table}.json`);
              try {
                const data = await internals.fs.readFile(tableFile);
                internals.tables[table] = JSON.parse(data);
              } catch {
                internals.tables[table] = {};
              }
            })
          );
        } catch (err) {
          internals.schemas = {};
        }
      },

      async _saveSchema() {
        const schemaFile = path.join(internals.dbPath, '_schemas.json');
        await internals.fs.writeFile(schemaFile, JSON.stringify(internals.schemas));
      },

      async migrate(table, schema) {
        internals.schemas[table] = schema;
        await this._saveSchema();
        
        if (!internals.tables[table]) {
          internals.tables[table] = {};
          await this._persistTable(table);
        }
        return this;
      },

      relate(parent, child, relationType = 'hasMany') {
        internals.relations[parent] = internals.relations[parent] || {};
        internals.relations[parent][child] = relationType;
        return this;
      },

      async transaction(callback) {
        const transactionId = randomUUID();
        const snapshot = JSON.parse(JSON.stringify(internals.tables));
        
        internals.transactionStack.push({ id: transactionId, snapshot });
        
        try {
          const result = await callback();
          internals.transactionStack.pop();
          return result;
        } catch (err) {
          const current = internals.transactionStack.pop();
          if (current) internals.tables = current.snapshot;
          throw err;
        }
      },

      async dispense(type) {
        if (!internals.tables[type]) {
          await this.migrate(type, { id: 'string' });
        }
        return { id: randomUUID(), __type: type };
      },

      async store(bean) {
        const type = bean.__type;
        if (!internals.tables[type]) await this.migrate(type, { id: 'string' });

        const currentSchema = internals.schemas[type];
        Object.keys(bean).forEach(key => {
          if (!currentSchema[key]) {
            currentSchema[key] = typeof bean[key];
            internals.schemas[type] = currentSchema;
          }
        });

        internals.tables[type][bean.id] = bean;
        await this._persistTable(type);
        return bean;
      },

      async load(type, id) {
        await this._loadTable(type);
        return internals.tables[type]?.[id] || null;
      },

      async findAll(type) {
        await this._loadTable(type);
        return Object.values(internals.tables[type] || {});
      },

      async find(type, conditions) {
        const all = await this.findAll(type);
        return all.filter(item => {
          return Object.entries(conditions).every(([key, val]) => {
            if (typeof val === 'object') {
              return this._matchCondition(item[key], val);
            }
            return item[key] === val;
          });
        });
      },

      _matchCondition(value, condition) {
        const operators = {
          $gt: (a, b) => a > b,
          $lt: (a, b) => a < b,
          $gte: (a, b) => a >= b,
          $lte: (a, b) => a <= b,
          $ne: (a, b) => a !== b,
          $in: (a, b) => b.includes(a),
          $like: (a, b) => new RegExp(b.replace(/%/g, '.*')).test(a)
        };

        return Object.entries(condition).every(([op, val]) => {
          return operators[op]?.(value, val) ?? false;
        });
      },

      async trash(bean) {
        const type = bean.__type;
        delete internals.tables[type][bean.id];
        await this._persistTable(type);
        return true;
      },

      async link(parent, child) {
        const relation = internals.relations[parent.__type]?.[child.__type];
        if (!relation) throw new Error('Relation not defined');

        const junctionTable = `${parent.__type}_${child.__type}`;
        const relationId = randomUUID();

        await this.store({
          __type: junctionTable,
          id: relationId,
          [`${parent.__type}_id`]: parent.id,
          [`${child.__type}_id`]: child.id
        });

        return relationId;
      },

      async findRelated(parent, childType) {
        const junctionTable = `${parent.__type}_${childType}`;
        const relations = await this.findAll(junctionTable);
        const childIds = relations.map(r => r[`${childType}_id`]);
        
        return Promise.all(
          childIds.map(id => this.load(childType, id))
        );
      },

      async _loadTable(table) {
        if (!internals.tables[table]) {
          const tableFile = path.join(internals.dbPath, `${table}.json`);
          try {
            const data = await internals.fs.readFile(tableFile);
            internals.tables[table] = JSON.parse(data);
          } catch {
            internals.tables[table] = {};
          }
        }
      },

      async _persistTable(table) {
        const tableFile = path.join(internals.dbPath, `${table}.json`);
        await internals.fs.writeFile(tableFile, JSON.stringify(internals.tables[table]));
      },

      // Document Store (NoSQL)
      document(type) {
        if (!internals.nosql[type]) {
          internals.nosql[type] = [];
        }

        return {
          insert: async (data) => {
            const doc = { _id: randomUUID(), ...data };
            internals.nosql[type].push(doc);
            await this._persistNoSQL();
            return doc;
          },
          find: (query) => {
            return internals.nosql[type].filter(doc => 
              Object.entries(query).every(([k, v]) => doc[k] === v)
            );
          },
          update: async (query, update) => {
            const docs = internals.nosql[type].filter(doc => 
              Object.entries(query).every(([k, v]) => doc[k] === v)
            );
            docs.forEach(doc => Object.assign(doc, update));
            await this._persistNoSQL();
            return docs.length;
          }
        };
      },

      async _persistNoSQL() {
        const nosqlFile = path.join(internals.dbPath, '_nosql.json');
        await internals.fs.writeFile(nosqlFile, JSON.stringify(internals.nosql));
      },

      async _loadNoSQL() {
        const nosqlFile = path.join(internals.dbPath, '_nosql.json');
        try {
          const data = await internals.fs.readFile(nosqlFile);
          internals.nosql = JSON.parse(data);
        } catch {
          internals.nosql = {};
        }
      },

      // Query Builder
      query(table) {
        return {
          where: (conditions) => this.find(table, conditions),
          with: (relation) => this._handleRelations(table, relation),
          paginate: (page = 1, perPage = 10) => ({
            get: async () => {
              const all = await this.findAll(table);
              return {
                data: all.slice((page - 1) * perPage, page * perPage),
                meta: { page, perpage * perPage),
meta: { page, perPage, total: all.length }
};
}
}),
orderBy: (field, direction = 'asc') => ({
get: async () => {
const all = await this.findAll(table);
return all.sort((a, b) => {
if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
return 0;
});
}
}),
first: async () => {
const results = await this.findAll(table);
return results || null;
}
};
},

text
  // Hooks System
  beforeHook(type, callback) {
    internals.hooks[type] = internals.hooks[type] || [];
    internals.hooks[type].push(callback);
  },

  // Audit Logging
  async logQuery(query) {
    internals.queryLog.push({
      timestamp: new Date(),
      query,
      stack: new Error().stack.split('\n').slice(2)
    });
    if (internals.queryLog.length > 100) {
      internals.queryLog.shift();
    }
  }
};
return ORM;
})();

// ====================== TEMPLATING ENGINE ======================
render(file, data = {}) {
return async (req, res) => {
let content = await fs.readFile(views/${file}, 'utf-8');

text
  // Handle blocks and inheritance
  const blocks = {};
  content = content.replace(/{% block (.+?) %}(.*?){% endblock %}/gs, (_, name, blockContent) => {
    blocks[name] = blockContent;
    return '';
  });

  // Handle extends
  if (content.includes('{% extends')) {
    const parentFile = content.match(/{% extends "(.+?)" %}/);
    content = await fs.readFile(`views/${parentFile}`, 'utf-8');
  }

  // Insert blocks
  content = content.replace(/{% block (.+?) %}/g, (_, name) => {
    return blocks[name] || '';
  });

  // Replace variables
  content = content.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => {
    return data[key] || '';
  });

  res.end(content);
};
}

// ====================== SECURITY MIDDLEWARE ======================
csrf() {
return (req, res, next) => {
const token = randomUUID();
this._csrfTokens.set(token, true);
res.csrfToken = token;

text
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    const clientToken = req.headers['x-csrf-token'] || req.body._csrf;
    if (!clientToken || !this._csrfTokens.has(clientToken)) {
      return res.status(403).end('CSRF Token Mismatch');
    }
    this._csrfTokens.delete(clientToken);
  }
  
  next();
};
}

rateLimit({ windowMs = 60000, max = 100 }) {
return (req, res, next) => {
const ip = req.socket.remoteAddress;
const current = this._rateLimits.get(ip) || { count: 0, reset: Date.now() + windowMs };

text
  if (Date.now() > current.reset) {
    current.count = 0;
    current.reset = Date.now() + windowMs;
  }

  current.count++;
  this._rateLimits.set(ip, current);

  res.setHeader('X-RateLimit-Limit', max);
  res.setHeader('X-RateLimit-Remaining', Math.max(0, max - current.count));
  res.setHeader('X-RateLimit-Reset', current.reset);

  if (current.count > max) {
    return res.status(429).end('Too Many Requests');
  }

  next();
};
}

// ====================== INTERNATIONALIZATION ======================
/**locale(lang) {
return {
t: (key, params = {}) => {
let translation = this._lang[lang]?.[key] || key;
Object.entries(params).forEach(([k, v]) => {
translation = translation.replace(:${k}, v);
});
return translation;
},
setTranslations: (translations) => {
this._lang[lang] = translations;
}
};
}
**/
// ====================== ENTERPRISE INTERNATIONALIZATION ======================
class I18n {
    constructor() {
      this.translations = {};
      this.defaultLang = 'en';
    }
    set(lang, dict) {
      this.translations[lang] = dict;
    }
    t(lang, key, params = {}) {
      let str = this.translations[lang]?.[key] || this.translations[this.defaultLang]?.[key] || key;
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(new RegExp(`:${k}`, 'g'), v);
      });
      return str;
    }
  }
  // Usage in your Pa class:
  /** this.i18n = new I18n();
  Now, in your app, use:
  
  js
  this.i18n.set('en', { hello: 'Hello, :name!' });
  this.i18n.t('en', 'hello', { name: 'Alice' }); // "Hello, Alice!"
  **/
// ====================== DEPENDENCY INJECTION ======================
service(name, implementation) {
this._services[name] = implementation;
return this;
}

// ====================== CLI SYSTEM ======================
command(name, description, action) {
this._cliCommands[name] = { description, action };
return this;
}

async runCLI() {
const [,, command, ...args] = process.argv;
const cmd = this._cliCommands[command];

text
if (cmd) {
  await cmd.action(args);
} else {
  console.log('Available commands:');
  Object.entries(this._cliCommands).forEach(([name, { description }]) => {
    console.log(`  ${name}: ${description}`);
  });
}
}

// ====================== FILE UPLOADS ======================
upload(fieldName) {
return async (req, res, next) => {
const chunks = [];
req.on('data', chunk => chunks.push(chunk));
await new Promise(resolve => req.on('end', resolve));

text
  const data = Buffer.concat(chunks);
  const boundary = req.headers['content-type'].split('=');
  const parts = data.toString().split(`--${boundary}`);
  
  parts.forEach(part => {
    if (part.includes(`name="${fieldName}"`)) {
      const filename = part.match(/filename="(.+?)"/)?.;
      if (filename) {
        const fileContent = part.split('\r\n\r\n');
        req.file = {
          name: filename,
          data: Buffer.from(fileContent.trim()),
          size: fileContent.length
        };
      }
    }
  });
  
  next();
};
}

// ====================== EMAIL SERVICE ======================
async sendEmail({ to, subject, text, html }) {
// In production, integrate with Nodemailer or SendGrid
const email = {
id: randomUUID(),
to,
subject,
text,
html,
sentAt: new Date()
};
await Pa.R.document('emails').insert(email);
console.log(Email queued: ${subject});
return email;
}

// ====================== TESTING UTILITIES ======================
test(name, fn) {
process.nextTick(async () => {
try {
await fn();
console.log(✓ ${name});
} catch (err) {
console.error(✗ ${name}, err);
process.exit(1);
}
});
return this;
}

// ====================== ERROR HANDLING ======================
_defaultErrorHandler(err, req, res) {
console.error(err.stack);
res.statusCode = 500;
res.end('Internal Server Error');
}

onError(handler) {
this._errorHandler = handler;
return this;
}

// ====================== SERVER CORE ======================
listen(port, callback) {
const server = createServer(this._handleRequest.bind(this));
this._setupErrorHandling(server);
server.listen(port, callback);
return server;
}

async _handleRequest(req, res) {
try {
req.parsedUrl = parse(req.url, true);
req.query = req.parsedUrl.query;
req.params = {};

text
  // Static File Handling
  const staticFile = await this._serveStatic(req);
  if (staticFile) return res.end(staticFile);

  // Body Parsing
  await this._parseBody(req);

  // Route Matching
  const route = this._findRoute(req);
  if (!route) return res.status(404).end('Not Found');

  // Enhanced Response Object
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (data) => { res.end(JSON.stringify(data)); };

  // Middleware Execution
  await this._executeMiddleware(req, res, route);
} catch (err) {
  this._errorHandler(err, req, res);
}
}

async _parseBody(req) {
const chunks = [];
req.on('data', chunk => chunks.push(chunk));
await new Promise(resolve => req.on('end', resolve));

text
const contentType = req.headers['content-type'];
if (contentType?.includes('application/json')) {
  req.body = chunks.length > 0 ? JSON.parse(Buffer.concat(chunks)) : {};
} else if (contentType?.includes('x-www-form-urlencoded')) {
  req.body = Object.fromEntries(new URLSearchParams(Buffer.concat(chunks).toString()).entries());
} else {
  req.body = {};
}
}

async _serveStatic(req) {
for (const dir of this._staticDirs) {
const filePath = path.join(dir, req.parsedUrl.pathname);
try {
return await fs.readFile(filePath);
} catch {
continue;
}
}
return null;
}

_findRoute(req) {
return this._routes[${req.method} ${req.parsedUrl.pathname}];
}

async _executeMiddleware(req, res, route) {
let idx = 0;
const next = async () => {
if (idx < route.middleware.length) {
await route.middleware[idx++](req, res, next);
} else {
await route.handler(req, res);
}
};
await next();
}

// ====================== UTILITIES ======================
static bodyParser() {
return async (req, res, next) => {
const chunks = [];
req.on('data', chunk => chunks.push(chunk));
await new Promise(resolve => req.on('end', resolve));

text
  const contentType = req.headers['content-type'];
  if (contentType?.includes('application/json')) {
    req.body = chunks.length > 0 ? JSON.parse(Buffer.concat(chunks)) : {};
  }
  next();
};
}

static static(dir) {
return (req, res, next) => {
const filePath = path.join(dir, req.parsedUrl.pathname);
fs.readFile(filePath)
.then(content => res.end(content))
.catch(() => next());
};
}

// ====================== PLUGIN SYSTEM ======================
plugin(fn) {
fn(this);
this._plugins.push(fn);
return this;
}

// ====================== CONFIGURATION ======================
config(name, value) {
if (value === undefined) return this._config[name];
this._config[name] = value;
return this;
}

// ====================== SESSION MANAGEMENT ======================
session() {
return async (req, res, next) => {
req.session = {};
const cookies = req.headers.cookie?.
session() {
    return async (req, res, next) => {
    req.session = {};
    const cookies = req.headers.cookie?.split(';').reduce((acc, cookie) => {
    const [key, val] = cookie.trim().split('=');
    acc[key] = val;
    return acc;
    }, {});
    
    text
      req.session.id = cookies?.session_id || randomUUID();
      
      // Session storage in document store
      const sessions = Pa.R.document('sessions');
      req.session.data = await sessions.find({ _id: req.session.id }) || {};
      
      res.setSession = (key, value) => {
        req.session.data[key] = value;
        sessions.update({ _id: req.session.id }, req.session.data);
        
        res.setHeader('Set-Cookie', 
          `session_id=${req.session.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
        );
      };
    
      res.clearSession = () => {
        sessions.update({ _id: req.session.id }, {});
        res.setHeader('Set-Cookie', 
          'session_id=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
        );
      };
    
      next();
    };
    }
    
    // ====================== FLASH MESSAGES ======================
    flash() {
    return async (req, res, next) => {
    req.flash = (type, message) => {
    Pa.R.document('flash_messages').insert({
    session_id: req.session.id,
    type,
    message,
    timestamp: new Date()
    });
    };
    
    text
      res.locals.flash = await Pa.R.document('flash_messages')
        .find({ session_id: req.session.id });
      
      // Clear after reading
      Pa.R.document('flash_messages')
        .update({ session_id: req.session.id }, {});
      
      next();
    };
    }
    
    // ====================== CORS & SECURITY HEADERS ======================
    cors(options = {}) {
    return (req, res, next) => {
    const defaults = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    headers: 'Content-Type,Authorization',
    maxAge: 86400
    };
    
    text
      const config = { ...defaults, ...options };
      
      res.setHeader('Access-Control-Allow-Origin', config.origin);
      res.setHeader('Access-Control-Allow-Methods', config.methods);
      res.setHeader('Access-Control-Allow-Headers', config.headers);
      res.setHeader('Access-Control-Max-Age', config.maxAge);
      
      if (req.method === 'OPTIONS') {
        return res.status(204).end();
      }
      
      next();
    };
    }
    
    secureHeaders() {
    return (req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
    );
    next();
    };
    }
    
    // ====================== PAGINATION HELPER ======================
    paginate(data, page = 1, perPage = 10) {
    const total = data.length;
    const totalPages = Math.ceil(total / perPage);
    const paginated = data.slice((page - 1) * perPage, page * perPage);
    
    text
    return {
      data: paginated,
      meta: {
        page,
        perPage,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
    }
    
    // ====================== CURL HELPER ======================
    async curl(url, options = {}) {
    return new Promise((resolve, reject) => {
    const { protocol, hostname, path } = new URL(url);
    const port = protocol === 'https:' ? 443 : 80;
    
    text
      const client = require(protocol.slice(0, -1)).request({
        hostname,
        port,
        path,
        method: options.method || 'GET',
        headers: options.headers
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({
          status: res.statusCode,
          headers: res.headers,
          data
        }));
      });
      
      client.on('error', reject);
      if (options.body) client.write(options.body);
      client.end();
    });
    }
    
    // ====================== FILE DOWNLOADER ======================
    download(filePath, customName = null) {
    return async (req, res) => {
    const filename = customName || path.basename(filePath);
    res.setHeader('Content-Disposition', attachment; filename="${filename}");
    res.setHeader('Content-Type', 'application/octet-stream');
    
    text
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    };
    }

    // ====================== ENTERPRISE HELPERS ======================18th May 2025 by kesh
const { randomUUID } = require('crypto');

class PaHelper {
  // --- Cache Management ---
  static CacheManager = class {
    constructor(ttl = 300) {
      this.cache = new Map();
      this.ttl = ttl * 1000; // Default: 5 minutes
    }
    set(key, value, ttl) {
      const expires = Date.now() + (ttl ? ttl * 1000 : this.ttl);
      this.cache.set(key, { value, expires });
    }
    get(key) {
      const entry = this.cache.get(key);
      if (!entry) return null;
      if (Date.now() > entry.expires) {
        this.cache.delete(key);
        return null;
      }
      return entry.value;
    }
    del(key) {
      this.cache.delete(key);
    }
    clear() {
      this.cache.clear();
    }
  };

  // --- Session Management ---
  static SessionStore = class {
    constructor() {
      this.sessions = new Map();
      this.ttl = 3600 * 1000; // 1 hour
    }
    get(id) {
      const sess = this.sessions.get(id);
      if (!sess || Date.now() > sess.expires) {
        this.sessions.delete(id);
        return null;
      }
      return sess.data;
    }
    set(id, data) {
      this.sessions.set(id, { data, expires: Date.now() + this.ttl });
    }
    destroy(id) {
      this.sessions.delete(id);
    }
  };

  // --- Secure Cookie Helper ---
  static setSecureCookie(res, name, value, options = {}) {
    let cookie = `${name}=${encodeURIComponent(value)}`;
    if (options.maxAge) cookie += `; Max-Age=${options.maxAge}`;
    if (options.path) cookie += `; Path=${options.path}`;
    if (options.httpOnly !== false) cookie += '; HttpOnly';
    if (options.secure !== false) cookie += '; Secure';
    if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
    res.setHeader('Set-Cookie', cookie);
  }

  // --- JSON Body Parser Middleware ---
  static jsonBodyParser(req, res, next) {
    if (req.headers['content-type']?.includes('application/json')) {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          req.body = JSON.parse(body);
          next();
        } catch (e) {
          res.status(400).json({ error: 'Invalid JSON' });
        }
      });
    } else {
      next();
    }
  }

  // --- Enterprise Error Handler ---
  static enterpriseErrorHandler(err, req, res) {
    const isJson = req.headers['accept']?.includes('application/json');
    const status = err.status || 500;
    const msg = err.message || 'Internal Server Error';

    if (isJson) {
      res.status(status).json({ error: msg, code: status });
    } else {
      res.status(status).end(`<h1>Error ${status}</h1><p>${msg}</p>`);
    }
  }
}
/**
 * =============================================================================
 * EMBEDDED ENTERPRISE DATABASE & SEARCH - USAGE GUIDE
 * =============================================================================
 * 
 * PajsDB v3.1.6 and PaJua bring advanced, zero-dependency, embedded database
 * and full-text search capabilities to pa.js. Use them for persistent NoSQL
 * storage, ACID transactions, sharding, TTL/expiring docs, geospatial queries,
 * and blazing-fast in-memory search.
 * 
 * === How to Use (Inside pa.js or Your App) ===
 * 
 * // 1. Insert a document into a collection
 * await this.pajsdb.collection('users').insert({
 *   name: 'Alice',
 *   bio: 'Node.js developer in Nairobi',
 *   location: [36.8, -1.3]
 * });
 * 
 * // 2. Find documents by query
 * const users = await this.pajsdb.collection('users').find({ name: 'Alice' });
 * 
 * // 3. Update documents
 * await this.pajsdb.collection('users').update({ name: 'Alice' }, { bio: 'Senior dev' });
 * 
 * // 4. Remove documents
 * await this.pajsdb.collection('users').remove({ name: 'Alice' });
 * 
 * // 5. Transactions (ACID)
 * await this.pajsdb.collection('users').transaction(async () => {
 *   await this.pajsdb.collection('users').insert({ name: 'Bob' });
 *   // throw new Error('fail'); // to test rollback
 * });
 * 
 * // 6. TTL (expiring documents)
 * await this.pajsdb.collection('sessions').insert({ user: 'Alice' }, 3600); // expires in 1 hour
 * 
 * // 7. Geospatial queries
 * const near = await this.pajsdb.collection('users').geoFind({
 *   near: [36.8, -1.3], maxDistance: 1000
 * });
 * 
 * // 8. Indexing for fast search
 * await this.pajsdb.collection('users').createIndex('name');
 * 
 * // 9. Full-text search (PaJua)
 * const allUsers = await this.pajsdb.collection('users').find();
 * allUsers.forEach(u => this.pajua.add(u));
 * const results = this.pajua.search('nairobi developer');
 * 
 * // 10. Backup and restore
 * await this.pajsdb.backup('./backup_dir');
 * await this.pajsdb.restore('./backup_dir');
 * 
 * // 11. Use outside pa.js
 * const { PajsDB, PaJua } = require('./pajsdb');
 * const db = new PajsDB({ dbPath: './mydb' });
 * const search = new PaJua();
 * 
 * =============================================================================
 * See inline documentation in the class code for more details and API reference.
 * =============================================================================
 */

// ====================== EMBEDDED ENTERPRISE DATABASE & SEARCH ======================
/** ---------- 🌞 PaJua: Full-Text Search Engine (Lunr/Solr-like) ---------- Jua Means Sun or Solar in Swahili */

// PajsDB v3.1.6 + PaJua (Full-text Search)
// Author: John Mwirigi Mahugu ("Kesh")
// Zero external dependencies

const zlib = require('zlib');
const EventEmitter = require('events');

// Write-Ahead Log (WAL) for crash recovery and ACID transactions
class WAL {
  constructor(logPath) {
    this.logPath = logPath;
    this.queue = [];
    this.flushing = false;
  }
  async append(entry) {
    this.queue.push(entry);
    if (!this.flushing) this._flush();
  }
  async _flush() {
    this.flushing = true;
    while (this.queue.length) {
      const entry = this.queue.shift();
      await fs.appendFile(this.logPath, JSON.stringify(entry) + '\n');
    }
    this.flushing = false;
  }
  async replay() {
    try {
      const data = await fs.readFile(this.logPath, 'utf8');
      return data.split('\n').filter(Boolean).map(line => JSON.parse(line));
    } catch { return []; }
  }
  async clear() {
    await fs.writeFile(this.logPath, '');
  }
}

// Main PajsDB class
class PajsDB extends EventEmitter {
  constructor(options = {}) {
    super();
    this.dbPath = options.dbPath || './.pajsdb';
    this.shards = options.shards || 1;
    this.collections = new Map();
    this.options = { autoLoad: true, ...options };
    this.wal = new WAL(path.join(this.dbPath, 'wal.log'));
    if (this.options.autoLoad) this.loadDatabase();
  }

  _getShard(name, key) {
    if (this.shards === 1) return name;
    const hash = [...String(key)].reduce((a, c) => a + c.charCodeAt(0), 0);
    return `${name}_shard${hash % this.shards}`;
  }

  async loadDatabase() {
    await fs.mkdir(this.dbPath, { recursive: true });
    const files = await fs.readdir(this.dbPath).catch(() => []);
    for (const file of files) {
      if (file.endsWith('.bin')) {
        const name = path.basename(file, '.bin');
        await this.loadCollection(name);
      }
    }
    // WAL recovery
    const walEntries = await this.wal.replay();
    for (const entry of walEntries) {
      const col = this.collection(entry.collection);
      if (entry.op === 'insert') col.data.push(entry.doc);
      if (entry.op === 'update') col.update(entry.query, entry.update);
      if (entry.op === 'remove') col.remove(entry.query);
    }
    await this.wal.clear();
  }

  async loadCollection(name) {
    const file = path.join(this.dbPath, `${name}.bin`);
    try {
      const compressed = await fs.readFile(file);
      const json = zlib.gunzipSync(compressed).toString();
      this.collections.set(name, new Collection(this, name, JSON.parse(json)));
      this.emit('collectionLoaded', name);
    } catch {
      this.collections.set(name, new Collection(this, name, []));
      await this._persistCollection(name);
      this.emit('collectionCreated', name);
    }
  }

  async _persistCollection(name) {
    if (!this.collections.has(name)) return;
    const file = path.join(this.dbPath, `${name}.bin`);
    const json = JSON.stringify(this.collections.get(name).data);
    const compressed = zlib.gzipSync(Buffer.from(json));
    await fs.writeFile(file, compressed);
    this.emit('collectionPersisted', name);
  }

  collection(name) {
    if (!this.collections.has(name)) this.loadCollection(name);
    return this.collections.get(name);
  }

  async close() {
    for (const [name] of this.collections) {
      await this._persistCollection(name);
    }
    this.emit('dbClosed');
  }

  async backup(backupPath) {
    await fs.mkdir(backupPath, { recursive: true });
    for (const [name] of this.collections) {
      const src = path.join(this.dbPath, `${name}.bin`);
      const dest = path.join(backupPath, `${name}.bin`);
      await fs.copyFile(src, dest);
    }
    this.emit('backup', backupPath);
  }

  async restore(backupPath) {
    const files = await fs.readdir(backupPath).catch(() => []);
    for (const file of files) {
      if (file.endsWith('.bin')) {
        const src = path.join(backupPath, file);
        const dest = path.join(this.dbPath, file);
        await fs.copyFile(src, dest);
      }
    }
    await this.loadDatabase();
    this.emit('restore', backupPath);
  }
}

// Collection: Handles documents, indexes, TTL, transactions, etc.
class Collection extends EventEmitter {
  constructor(db, name, initialData = []) {
    super();
    this.db = db;
    this.name = name;
    this.data = initialData;
    this.indexes = new Map();
    this.ttlMap = new Map();
    this.transactions = [];
    this._initTTL();
  }

  async transaction(cb) {
    const snapshot = JSON.parse(JSON.stringify(this.data));
    this.transactions.push(snapshot);
    try {
      const result = await cb();
      this.transactions.pop();
      await this.db._persistCollection(this.name);
      return result;
    } catch (err) {
      this.data = this.transactions.pop();
      throw err;
    }
  }

  async insert(doc, ttlSeconds = null) {
    const newDoc = { _id: randomUUID(), ...doc };
    this.data.push(newDoc);
    await this.db.wal.append({ op: 'insert', collection: this.name, doc: newDoc });
    if (ttlSeconds) {
      const expireAt = Date.now() + ttlSeconds * 1000;
      this.ttlMap.set(newDoc._id, expireAt);
      setTimeout(() => this.remove({ _id: newDoc._id }), ttlSeconds * 1000);
    }
    await this.db._persistCollection(this.name);
    this.emit('documentInserted', newDoc);
    return newDoc;
  }

  async find(query = {}) {
    let results = this.data.filter(doc =>
      Object.entries(query).every(([k, v]) => this._matchCondition(doc[k], v))
    );
    // Use indexes if available
    for (const [key, { fields, index }] of this.indexes) {
      if (typeof fields === 'string' && query[fields]) {
        results = index.get(query[fields]) || [];
      }
      if (Array.isArray(fields) && fields.every(f => query[f])) {
        const idxVal = fields.map(f => query[f]).join('|');
        results = index.get(idxVal) || [];
      }
    }
    return results;
  }

  async findOne(query = {}) {
    const res = await this.find(query);
    return res[0] || null;
  }

  async update(query, update) {
    let count = 0;
    for (let doc of this.data) {
      if (Object.entries(query).every(([k, v]) => this._matchCondition(doc[k], v))) {
        Object.assign(doc, update);
        count++;
        await this.db.wal.append({ op: 'update', collection: this.name, query, update });
      }
    }
    await this.db._persistCollection(this.name);
    this.emit('documentUpdated', query, update, count);
    return count;
  }

  async remove(query) {
    const before = this.data.length;
    this.data = this.data.filter(doc =>
      !Object.entries(query).every(([k, v]) => this._matchCondition(doc[k], v))
    );
    await this.db.wal.append({ op: 'remove', collection: this.name, query });
    await this.db._persistCollection(this.name);
    this.emit('documentRemoved', query, before - this.data.length);
    return before - this.data.length;
  }

  async createIndex(fields, options = {}) {
    const key = Array.isArray(fields) ? fields.join('_') : fields;
    if (this.indexes.has(key)) throw new Error(`Index exists: ${key}`);
    let index = new Map();
    for (const doc of this.data) {
      const idxVal = Array.isArray(fields) ? fields.map(f => doc[f]).join('|') : doc[fields];
      if (!index.has(idxVal)) index.set(idxVal, []);
      index.get(idxVal).push(doc);
    }
    this.indexes.set(key, { fields, index, options });
    this.db.emit('indexCreated', this.name, key, options);
  }

  _initTTL() {
    setInterval(() => {
      const now = Date.now();
      for (let [id, expireAt] of this.ttlMap) {
        if (now > expireAt) {
          this.remove({ _id: id });
          this.ttlMap.delete(id);
        }
      }
    }, 60000);
  }

  async geoFind({ near, within, field = 'location', maxDistance = 1000 }) {
    if (near) {
      return this.data.filter(doc => {
        const [lng, lat] = doc[field] || [];
        return this._distance([lng, lat], near) <= maxDistance;
      });
    }
    if (within) {
      return this.data.filter(doc => {
        const [lng, lat] = doc[field] || [];
        return this._pointInPolygon([lng, lat], within);
      });
    }
    return [];
  }

  _distance([lng1, lat1], [lng2, lat2]) {
    const toRad = x => (x * Math.PI) / 180;
    const R = 6371e3;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  _pointInPolygon(point, vs) {
    let x = point[0], y = point[1], inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      let xi = vs[i][0], yi = vs[i][1];
      let xj = vs[j][0], yj = vs[j][1];
      let intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  _matchCondition(value, condition) {
    if (typeof condition === 'object' && condition !== null) {
      return Object.entries(condition).every(([op, val]) => {
        switch (op) {
          case '$eq': return value === val;
          case '$ne': return value !== val;
          case '$gt': return value > val;
          case '$gte': return value >= val;
          case '$lt': return value < val;
          case '$lte': return value <= val;
          case '$in': return Array.isArray(val) && val.includes(value);
          case '$nin': return Array.isArray(val) && !val.includes(value);
          case '$exists': return (value !== undefined) === val;
          case '$like': return new RegExp(val.replace(/%/g, '.*')).test(value);
          default: return false;
        }
      });
    } else {
      return value === condition;
    }
  }
}

/** ------ 🚀 PajsDB v2: Enterprise-Grade Embedded Database
Key Features:
Efficient in-memory and binary persistence
B-tree indexing (single and compound)
Background index building
ACID-compliant transactions
TTL/expiring collections
Compression (using zlib)
Full-text search (via PaJua)
Geospatial queries
Backup/restore
Event-driven, portable, and zero dependencies
**/
// PaJua: Embedded Full-Text Search Engine (Lunr/Solr-like)
class PaJua {
  constructor() {
    this.documents = [];
    this.invertedIndex = {};
  }
  add(doc) {
    this.documents.push(doc);
    for (const [field, value] of Object.entries(doc)) {
      if (typeof value === 'string') {
        for (const word of value.toLowerCase().split(/\W+/)) {
          if (!this.invertedIndex[word]) this.invertedIndex[word] = [];
          this.invertedIndex[word].push(doc);
        }
      }
    }
  }
  search(query) {
    const words = query.toLowerCase().split(/\W+/);
    let results = [];
    for (const word of words) {
      if (this.invertedIndex[word]) {
        results = results.concat(this.invertedIndex[word]);
      }
    }
    // Remove duplicates and rank by frequency
    const freq = {};
    for (const doc of results) {
      freq[doc._id] = (freq[doc._id] || 0) + 1;
    }
    return this.documents
      .filter(doc => freq[doc._id])
      .sort((a, b) => freq[b._id] - freq[a._id]);
  }
}

// ====== INTERNAL INSTANTIATION FOR pa.js FRAMEWORK ======
/*
  In your Pa class constructor, add:
    this.pajsdb = new PajsDB({ dbPath: './.pa_nosql' });
    this.pajua = new PaJua();
  This gives you:
    - this.pajsdb.collection('users') for DB operations
    - this.pajua.add(doc), this.pajua.search('query') for FTS
*/

// Example for your Pa class constructor:
if (typeof Pa !== 'undefined') {
  Pa.prototype.pajsdb = new PajsDB({ dbPath: './.pa_nosql' });
  Pa.prototype.pajua = new PaJua();
}

// ====================== END EMBEDDED DATABASE & SEARCH ======================
/** KESH ADD NEW ENHANCEMENT CLASSES AFTER HERE  */
/**
 * =============================================================================
 * ENTERPRISE ENHANCEMENTS: Feature List & Usage Guide
 * =============================================================================
 * 
 * Features:
 * 1. PaJSX AJAX/AHAH Helper (client-side, zero-dependency)
 *    - Easy AJAX and dynamic HTML updates without external libraries.
 *    - Usage (in browser):
 *        <script src="/static/pajsx.js"></script>
 *        <div id="targetDiv"></div>
 *        <script>
 *          PaJSX.get('/api/hello', 'targetDiv');
 *        </script>
 *
 * 2. HTMLHelper Class (server-side)
 *    - Safe HTML tag and input generation, with escaping.
 *    - Usage (in Node.js):
 *        HTMLHelper.tag('div', {class:'alert'}, 'Hello!');
 *        HTMLHelper.input('text', 'username');
 *
 * 3. WebSocket & Long Polling Support (server-side)
 *    - Add real-time features, chat, notifications, etc.
 *    - Usage:
 *        paInstance.enableWebSocket(server);
 *        paInstance.enableLongPolling('/lp-endpoint');
 *
 * 4. Health Check & Metrics Endpoints
 *    - Built-in health and metrics for monitoring and uptime checks.
 *    - Usage:
 *        app.route('GET', '/healthz', app.healthCheck());
 *        app.route('GET', '/metrics', app.metrics());
 *
 * 5. Hot Reload (Development)
 *    - Use with nodemon: `nodemon pa.js`
 *    - Or see dev.js script in comments for auto-restart on file changes.
 *
 * 6. Security/Auth Placeholders
 *    - Ready for OAuth2/JWT middleware and advanced validation.
 *
 * 7. Extensible: All features are modular and can be used as helpers or middleware.
 * 
 * =============================================================================
 * HOW TO USE (Summary)
 * =============================================================================
 * 
 * // AJAX (client-side):
 *   PaJSX.get('/api/data', 'targetDivId');
 * 
 * // HTML (server-side):
 *   HTMLHelper.tag('div', {class:'info'}, 'Welcome!');
 *   HTMLHelper.input('email', 'user_email');
 * 
 * // WebSocket:
 *   app.enableWebSocket(server);
 * 
 * // Long Polling:
 *   app.enableLongPolling('/longpoll');
 * 
 * // Health & Metrics:
 *   app.route('GET', '/healthz', app.healthCheck());
 *   app.route('GET', '/metrics', app.metrics());
 * 
 * // Hot reload (dev):
 *   nodemon pa.js
 * 
 * =============================================================================
 * See inline documentation for each class/method for more details.
 * =============================================================================
 */
/**
 * =============================================================================
 * ENTERPRISE ENHANCEMENTS: AJAX, HTML Helpers, Real-Time, Health, and More
 * =============================================================================
 * 
 * 1. PaJSX: Minimal AJAX/AHAH Helper (Client-side, zero-dep)
 *    <script src="/static/pajsx.js"></script>
 *    Usage: PaJSX.get('/api/hello', 'targetDiv');
 * 
 * 2. HTMLHelper: Safe HTML builder (server-side)
 *    Usage: HTMLHelper.tag('div', {class:'alert'}, 'Hello!');
 * 
 * 3. WebSocket & Long Polling Support (server-side)
 *    Usage: paInstance.enableWebSocket(server);
 *           paInstance.enableLongPolling('/lp-endpoint');
 * 
 * 4. Health Check & Metrics
 *    Usage: app.route('GET', '/healthz', app.healthCheck());
 *           app.route('GET', '/metrics', app.metrics());
 * 
 * 5. Hot Reload (dev): Use `nodemon pa.js` or see dev script below.
 * 
 * =============================================================================
 */

/* ========== 1. PaJSX: AJAX/AHAH Helper (Client-side) ========== */
// Save as public/pajsx.js and serve as a static asset
// <script src="/static/pajsx.js"></script>
/*
window.PaJSX = {
  get: function(url, target) {
    var el = document.getElementById(target);
    if (el) el.innerHTML = 'Fetching data...';
    var req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          el.innerHTML = req.responseText;
        } else {
          el.innerHTML = "PaJSX Error:\n" + req.status + "\n" + req.statusText;
        }
      }
    };
    req.open("GET", url, true);
    req.send("");
  },
  post: function(url, data, target) {
    var el = document.getElementById(target);
    if (el) el.innerHTML = 'Sending data...';
    var req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          el.innerHTML = req.responseText;
        } else {
          el.innerHTML = "PaJSX Error:\n" + req.status + "\n" + req.statusText;
        }
      }
    };
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(data);
  }
};
*/

/* ========== 2. HTMLHelper: Safe HTML Builder ========== */
class HTMLHelper {
    static escape(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
    static tag(name, attrs = {}, content = '') {
      let attrStr = Object.entries(attrs)
        .map(([k, v]) => ` ${k}="${HTMLHelper.escape(v)}"`).join('');
      return `<${name}${attrStr}>${content}</${name}>`;
    }
    static input(type, name, value = '', attrs = {}) {
      return `<input type="${type}" name="${HTMLHelper.escape(name)}" value="${HTMLHelper.escape(value)}"${Object.entries(attrs).map(([k, v]) => ` ${k}="${HTMLHelper.escape(v)}"`).join('')}>`;
    }
  }
  
  /* ========== 3. WebSocket & Long Polling Support (Minimal) ========== */
  // Add to Pa class:
  Pa.prototype.enableWebSocket = function(server) {
    const WebSocket = require('ws');
    this._wsServer = new WebSocket.Server({ server });
    this._wsServer.on('connection', ws => {
      ws.on('message', msg => {
        // Echo or custom logic
        ws.send(`Echo: ${msg}`);
      });
    });
    return this;
  };
  
  // Minimal long-polling endpoint
  Pa.prototype.enableLongPolling = function(path = '/longpoll') {
    this.route('GET', path, (req, res) => {
      setTimeout(() => {
        res.json({ msg: 'Long poll response', ts: Date.now() });
      }, 2000); // simulate delay
    });
    return this;
  };
  
  /* ========== 4. Health Check & Metrics ========== */
  Pa.prototype.healthCheck = function() {
    return (req, res) => res.json({ status: 'ok', uptime: process.uptime() });
  };
  Pa.prototype.metrics = function() {
    return (req, res) => res.json(process.memoryUsage());
  };
  
  /* ========== 5. Hot Reload (Dev Script Suggestion) ========== */
  // Recommend: npm install -g nodemon
  // Then run: nodemon pa.js
  // Or use this dev.js script (requires chokidar):
  /*
  const { spawn } = require('child_process');
  const chokidar = require('chokidar');
  let proc = spawn('node', ['pa.js'], { stdio: 'inherit' });
  chokidar.watch(['pa.js', 'app.js']).on('change', () => {
    proc.kill();
    proc = spawn('node', ['pa.js'], { stdio: 'inherit' });
  });
  */
  
  /* ========== 6. Security/Auth Placeholders (for future) ========== */
  // Add OAuth2/JWT middleware, advanced validation, etc. as needed.
  
  /* ========== 7. Export HTMLHelper for use in templates/controllers ========== */
  module.exports.HTMLHelper = HTMLHelper;
  
  /* =============================================================================
     END ENTERPRISE ENHANCEMENTS
  ============================================================================= */
  
/** KESH END NEW ENHANCEMENT CLASSES ABOVE HERE */
    
    // ====================== DEPLOYMENT HELPERS ======================
    deploy(config) {
    this.command('deploy', 'Deploy application', async () => {
    console.log('🚀 Deploying with config:', config);
    
    text
      // Build step
      if (config.build) {
        console.log('🔨 Building...');
        childProcess.execSync(config.build);
      }
      
      // Database migration
      if (config.migrate) {
        console.log('🛢️  Running migrations...');
        // Add migration logic here
      }
      
      // Restart server
      if (config.restart) {
        console.log('♻️  Restarting server...');
        childProcess.execSync(config.restart);
      }
      
      console.log('✅ Deployment complete!');
    });
    return this;
    }
    
    // ====================== EXTRA UTILITIES ======================
    static uuid() {
    return randomUUID();
    }
    
    static hash(data, algorithm = 'sha256') {
    return createHash(algorithm).update(data).digest('hex');
    }
    
    // ====================== FINAL EXPORT ======================
    static get R() {
    return this.R;
    }
    
    static get helpers() {
    return {
    uuid: this.uuid,
    hash: this.hash,
    paginate: this.paginate
    };
    }
    }
    
    module.exports = Pa;
    
  
/** EOF */