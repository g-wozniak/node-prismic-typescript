export enum Languages {
  gb = 'en-GB',
  us = 'en-US'
}

export const getLanguageFromPrismic = (prismicLangAbbrev: string) => {
  return (Languages.hasOwnProperty(prismicLangAbbrev))
    ? Languages[prismicLangAbbrev]
    : Languages.gb // default if not set or if abbreviation is incorrect
}
