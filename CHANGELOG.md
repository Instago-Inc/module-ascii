# v1.0.1 - Reliable ASCII normalization

Baseline release adds the ascii transliteration helper, complete with diacritic stripping and explicit mappings to keep Latin-based input predictable for downstream consumers.

### Added
- `toAscii` helper with NFKD normalization, explicit character map fallbacks, and non-ASCII stripping for consistent ASCII output.
