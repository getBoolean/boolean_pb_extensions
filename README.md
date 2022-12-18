# getBoolean's Paperback Extensions

Status: **In Development** (not ready for use)

Extensions for Paperback v0.7 (extensions v0.6) written in Dart

## Contributing

This project uses [dpaperback_cli](https://github.com/getBoolean/dpaperback_cli/) to bundle and serve the sources. It can be installed globally or as a dev dependency,

## Folder Structure

```plaintext
lib/
  -> source1/            # Can be any name
       -> source1.dart   # Entry file with `main` method, must be the same name as the folder above
       -> includes/      # Optional assets such as the source icon
  -> source2/
  ...
pubspec.yaml             # Dependencies used in any of the sources. Dart has tree shaking, so any dependencies not used in a source will not be bundled.
```

## Dependencies

- [dart_pb_extensions_common](https://github.com/getBoolean/dart_pb_extensions_common): Wrapper for Paperback's JavaScript models, allowing for interop between JavaScript and Dart.
