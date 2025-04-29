// Polyfills for Node.js built-ins
import { Buffer } from 'buffer';
import process from 'process';

// Make Buffer available globally
window.Buffer = Buffer;
// Make process available globally
window.process = process; 