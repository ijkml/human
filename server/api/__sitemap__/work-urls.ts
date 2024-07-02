import { serverQueryContent } from '#content/server';

export default defineSitemapEventHandler(async (event) => {
  const contentList = await serverQueryContent(event).find();

  return contentList
    .filter(c => c._dir === 'work')
    .map((c) => {
      return asSitemapUrl({
        loc: c._path,
      });
    });
});
