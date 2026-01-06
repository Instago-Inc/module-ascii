## v1.0.2 - Clear ASCII messaging

Docs now highlight the ascii toAscii transliteration helper and its simple example so developers immediately understand how the module keeps names and snippets ASCII-safe.

### Changed
- Updated README and docs copy to focus on transliteration, workflow friendliness, and the tangible result of predictable ASCII output for logs and filenames.

## v1.0.1 - Reliable ASCII normalization

Baseline release adds the ascii transliteration helper, complete with diacritic stripping and explicit mappings to keep Latin-based input predictable for downstream consumers.

### Added
- `toAscii` helper with NFKD normalization, explicit character map fallbacks, and non-ASCII stripping for consistent ASCII output.
