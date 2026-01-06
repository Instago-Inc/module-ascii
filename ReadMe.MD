# module/ascii - V8 module

Turn names, labels, and snippets into plain ASCII for clean logs and predictable filenames. This module focuses on simple transliteration of common Latin-based characters and strips everything else.

It is intentionally small and workflow-friendly. Learn more at https://instago.ai.

## Technical reference

### Usage
- `const ascii = require('ascii@latest');`

### Exports
- `toAscii(input)` → ASCII-only string with basic Latin transliteration applied.

### Configuration
- No environment keys are required.

### Example
```js
const ascii = require('ascii@latest');

const name = 'Jürgen Østergård';
const safe = ascii.toAscii(name);
console.log(safe); // "Jurgen Ostergard"
```
