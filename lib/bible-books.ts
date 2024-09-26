export const books = [
  'genesis',
  'exodus',
  'leviticus',
  'numbers',
  'deuteronomy',
  'joshua',
  'judges',
  'ruth',
  '1-samuel',
  '2-samuel',
  '1-kings',
  '2-kings',
  '1-chronicles',
  '2-chronicles',
  'ezra',
  'nehemiah',
  'esther',
  'job',
  'psalms',
  'proverbs',
  'ecclesiastes',
  'song-of-solomon',
  'isaiah',
  'jeremiah',
  'lamentations',
  'ezekiel',
  'daniel',
  'hosea',
  'joel',
  'amos',
  'obadiah',
  'joel',
  'micah',
  'nahum',
  'habakkuk',
  'zephaniah',
  'haggai',
  'zechariah',
  'malachi',
  'matthew',
  'mark',
  'luke',
  'john',
  'acts',
  'romans',
  '1-corinthians',
  '2-corinthians',
  'galatians',
  'ephesians',
  'philippians',
  'colossians',
  '1-thessalonians',
  '2-thessalonians',
  '1-timothy',
  '2-timothy',
  'titus',
  'philemon',
  'hebrews',
  'james',
  '1-peter',
  '2-peter',
  '1-john',
  '2-john',
  '3-john',
  'jude',
  'revelation',
] as const;

export type Book = (typeof books)[number];

type BookDetails = {
  en: string;
  zh: string;
  category: string;
};

type BibleBooks = {
  [K in Book]: BookDetails;
};

export const bibleBooks: BibleBooks = {
  genesis: {
    en: 'Genesis',
    zh: '创世纪',
    category: 'Pentateuch',
  },
  exodus: {
    en: 'Exodus',
    zh: '出埃及记',
    category: 'Pentateuch',
  },
  leviticus: {
    en: 'Leviticus',
    zh: '',
    category: 'Pentateuch',
  },
  numbers: {
    en: 'Numbers',
    zh: '',
    category: 'Pentateuch',
  },
  deuteronomy: {
    en: 'Deuteronomy',
    zh: '',
    category: 'Pentateuch',
  },
  joshua: {
    en: '',
    zh: '',
    category: '',
  },
  judges: {
    en: '',
    zh: '',
    category: '',
  },
  ruth: {
    en: '',
    zh: '',
    category: '',
  },
  '1-samuel': {
    en: '',
    zh: '',
    category: '',
  },
  '2-samuel': {
    en: '',
    zh: '',
    category: '',
  },
  '1-kings': {
    en: '',
    zh: '',
    category: '',
  },
  '2-kings': {
    en: '',
    zh: '',
    category: '',
  },
  '1-chronicles': {
    en: '',
    zh: '',
    category: '',
  },
  '2-chronicles': {
    en: '',
    zh: '',
    category: '',
  },
  ezra: {
    en: '',
    zh: '',
    category: '',
  },
  nehemiah: {
    en: '',
    zh: '',
    category: '',
  },
  esther: {
    en: '',
    zh: '',
    category: '',
  },
  job: {
    en: '',
    zh: '',
    category: '',
  },
  psalms: {
    en: '',
    zh: '',
    category: '',
  },
  proverbs: {
    en: '',
    zh: '',
    category: '',
  },
  ecclesiastes: {
    en: '',
    zh: '',
    category: '',
  },
  'song-of-solomon': {
    en: '',
    zh: '',
    category: '',
  },
  isaiah: {
    en: '',
    zh: '',
    category: '',
  },
  jeremiah: {
    en: '',
    zh: '',
    category: '',
  },
  lamentations: {
    en: 'Lamentations',
    zh: '耶利米哀歌',
    category: '',
  },
  ezekiel: {
    en: 'Ezekiel',
    zh: '以西结书',
    category: '',
  },
  daniel: {
    en: 'Daniel',
    zh: '但以理书',
    category: '',
  },
  hosea: {
    en: '',
    zh: '',
    category: '',
  },
  joel: {
    en: '',
    zh: '',
    category: '',
  },
  amos: {
    en: '',
    zh: '',
    category: '',
  },
  obadiah: {
    en: '',
    zh: '',
    category: '',
  },
  micah: {
    en: '',
    zh: '',
    category: '',
  },
  nahum: {
    en: '',
    zh: '',
    category: '',
  },
  habakkuk: {
    en: '',
    zh: '',
    category: '',
  },
  zephaniah: {
    en: '',
    zh: '',
    category: '',
  },
  haggai: {
    en: '',
    zh: '',
    category: '',
  },
  zechariah: {
    en: '',
    zh: '',
    category: '',
  },
  malachi: {
    en: '',
    zh: '',
    category: '',
  },
  matthew: {
    en: 'Matthew',
    zh: '马太福音',
    category: 'Gospels',
  },
  mark: {
    en: 'Mark',
    zh: '',
    category: '',
  },
  luke: {
    en: 'Luke',
    zh: '',
    category: '',
  },
  john: {
    en: 'John',
    zh: '',
    category: '',
  },
  acts: {
    en: 'Acts',
    zh: '',
    category: '',
  },
  romans: {
    en: 'Romans',
    zh: '',
    category: '',
  },
  '1-corinthians': {
    en: '1 Corinthians',
    zh: '',
    category: '',
  },
  '2-corinthians': {
    en: '2 Corinthians',
    zh: '',
    category: '',
  },
  galatians: {
    en: 'Galatians',
    zh: '',
    category: '',
  },
  ephesians: {
    en: '',
    zh: '',
    category: '',
  },
  philippians: {
    en: '',
    zh: '',
    category: '',
  },
  colossians: {
    en: '',
    zh: '',
    category: '',
  },
  '1-thessalonians': {
    en: '',
    zh: '',
    category: '',
  },
  '2-thessalonians': {
    en: '',
    zh: '',
    category: '',
  },
  '1-timothy': {
    en: '',
    zh: '',
    category: '',
  },
  '2-timothy': {
    en: '',
    zh: '',
    category: '',
  },
  titus: {
    en: '',
    zh: '',
    category: '',
  },
  philemon: {
    en: '',
    zh: '',
    category: '',
  },
  hebrews: {
    en: '',
    zh: '',
    category: '',
  },
  james: {
    en: '',
    zh: '',
    category: '',
  },
  '1-peter': {
    en: '',
    zh: '',
    category: '',
  },
  '2-peter': {
    en: '',
    zh: '',
    category: '',
  },
  '1-john': {
    en: '',
    zh: '',
    category: '',
  },
  '2-john': {
    en: '',
    zh: '',
    category: '',
  },
  '3-john': {
    en: '',
    zh: '',
    category: '',
  },
  jude: {
    en: '',
    zh: '',
    category: '',
  },
  revelation: {
    en: '',
    zh: '',
    category: '',
  },
};
