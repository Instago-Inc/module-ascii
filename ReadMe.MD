# module/ascii - V8 module

ASCII helpers to encode/decode payloads without pulling in a heavyweight dependency. Use it when you just need base64/ASCII data helpers while keeping your workflow fast and readable. Learn more at https://instago.ai.

## Technical reference

### Usage
- `const ascii = require('ascii@latest');`

### Exports
- `encode(text)` → ASCII-safe base64 string.
- `decode(b64)` → UTF-8 text from an ASCII-safe base64 string.
- `encodeJson(obj)` → base64 of JSON (handles object serialization).
- `decodeJson(b64)` → parse JSON encoded via `encodeJson`.
- `encodeHtml(text)` → similar to `encode` but also escapes `+`/`/` to stay URL-safe.
- `decodeHtml(str)` → reverse of `encodeHtml`.

### Configuration
- No environment keys are required. Set `ascii.debug=1` in your workflow envs if you want extra logging.

### Example
```js
const ascii = require('ascii@latest');

const encoded = ascii.encodeJson({ foo: 'bar' });
console.log('payload', encoded);

const decoded = ascii.decodeJson(encoded);
console.log('decoded', decoded);
```
