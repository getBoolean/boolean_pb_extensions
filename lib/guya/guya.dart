import 'package:dart_pb_extensions_common/js.dart';
import 'package:dart_pb_extensions_common/paperback.dart';

void main() {
  register(
    id: kGuyaId,
    info: guyaInfo,
    creator: Guya.new,
  );
}

const kGuyaId = 'Guya2';
const kGuyaDomain = 'https://guya.cubari.moe';
const kGuyaApiBase = 'https://guya.cubari.moe/api';

SourceInfo guyaInfo = SourceInfo(
  version: '2.0.0-alpha.2',
  name: 'Guya (Dart)',
  icon: 'icon.png',
  author: 'getBoolean',
  authorWebsite: 'https://github.com/getBoolean',
  description: 'Extension that pulls manga from Guya.moe.',
  contentRating: ContentRating.everyone,
  websiteBaseURL: kGuyaDomain,
  language: LanguageCode.english.code,
  sourceTags: [
    SourceTag(
      text: 'Notifications',
      type: TagType.green,
    ),
  ],
);

class Guya extends Source {
  @override
  RequestManager get requestManager => RequestManager(
        requestsPerSecond: 5,
        requestTimeout: 10000,
        interceptor: RequestInterceptor(
          interceptRequest: (request) async {
            request.headers = {
              ...(request.headers ?? {}),
              ...{'referer': '$kGuyaDomain/'}
            };

            return request;
          },
          interceptResponse: (response) async => response,
        ),
      );

  @override
  Future<MangaInfo> getMangaDetails(String mangaId) async {
    return MangaInfo(
      id: 'test-manga',
      titles: ['Test Manga'],
      image: 'https://i.imgur.com/GYUxEX8.png',
      status: MangaStatus.ongoing,
      author: 'Test Author',
      artist: 'Test Artist',
      desc: 'Description here',
    );
  }

  @override
  Future<List<Chapter>> getChapters(String mangaId) async {
    return [
      Chapter(
        id: 'test-chapter',
        mangaId: mangaId,
        chapNum: 1,
        langCode: LanguageCode.english.code,
        name: 'Chapter Test',
        volume: 1,
        group: 'Manga Group',
        time: Date(DateTime.now().toIso8601String()),
      )
    ];
  }

  @override
  Future<ChapterDetails> getChapterDetails(String mangaId, String chapterId) async {
    return ChapterDetails(
      id: chapterId,
      mangaId: mangaId,
      pages: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/768px-Dart-logo.png',
      ],
      longStrip: false,
    );
  }

  @override
  Future<void> filterUpdatedMangas(
    void Function(MangaUpdates updates) mangaUpdatesFoundCallback,
    Date time,
    List<String> ids,
  ) async {
    mangaUpdatesFoundCallback(
      MangaUpdates(ids: ['test-manga']),
    );
  }

  @override
  Future<PagedResults> getSearchResults(SearchRequest query, Object? metadata) async {
    return PagedResults(
      results: [
        MangaTile(
          id: 'test-manga',
          image: 'https://i.imgur.com/GYUxEX8.png',
          title: IconText(text: 'Test Manga'),
        ),
      ],
      metadata: metadata,
    );
  }
}

T? asType<T>(Object? value) => value is T ? value : null;

extension ListUtils on List {
  List<V> removeNull<V>() => whereType<V>().toList();
}
