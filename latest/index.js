(function() {
  // Basic ASCII transliteration for common Latin-based characters.
  // - Uses NFKD decomposition to strip combining diacritics.
  // - Adds explicit mappings for characters that don't decompose well (e.g., ß, Ø, Ł).
  const explicitMap = {
    'ß': 'ss', 'ẞ': 'SS',
    'Ø': 'O',  'ø': 'o',
    'Æ': 'AE', 'æ': 'ae',
    'Œ': 'OE', 'œ': 'oe',
    'Ð': 'D',  'ð': 'd',
    'Þ': 'Th', 'þ': 'th',
    'Ł': 'L',  'ł': 'l',
    'Đ': 'D',  'đ': 'd',
    'Č': 'C',  'č': 'c',
    'Š': 'S',  'š': 's',
    'Ž': 'Z',  'ž': 'z',
    'Ć': 'C',  'ć': 'c',
    'Ń': 'N',  'ń': 'n',
    'Ÿ': 'Y',  'ÿ': 'y'
  };

  function toAscii(input) {
    let s = '' + (input || '');
    s = s.replace(/[\u00A0]/g, ' '); // non-breaking space to regular
    s = s.replace(/[\u00df\u1e9e\u00d8\u00f8\u00c6\u00e6\u0152\u0153\u00d0\u00f0\u00de\u00fe\u0141\u0142\u0110\u0111\u010c\u010d\u0160\u0161\u017d\u017e\u0106\u0107\u0143\u0144\u0178\u00ff]/g,
      (ch) => explicitMap[ch] || ch);
    if (typeof s.normalize === 'function') {
      s = s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
    }
    // Remove anything non-ASCII
    s = s.replace(/[^\x00-\x7F]+/g, '');
    return s;
  }

  module.exports = { toAscii };
})();
