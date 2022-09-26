export interface SeedUrl {
  id: number;
  urlCode: string;
  longUrl: string;
  shortUrl: string;
}

interface SeedData {
  urls: SeedUrl[];
}

export const initialData: SeedData = {
  urls: [
    {
      id: 1,
      urlCode: 'FBsl3MK8tB',
      longUrl: 'https://docs.nestjs.com/',
      shortUrl: 'http://localhost:3033/api/v1/url/FBsl3MK8tB',
    },
    {
      id: 2,
      urlCode: 'et1GnxDbo2',
      longUrl: 'https://medium.com/',
      shortUrl: 'http://localhost:3033/api/v1/url/et1GnxDbo2',
    },
    {
      id: 3,
      urlCode: 'v69ri70a3d',
      longUrl: 'https://app.quicktype.io/',
      shortUrl: 'http://localhost:3033/api/v1/url/v69ri70a3d',
    },
    {
      id: 4,
      urlCode: '7_0uoToFxe',
      longUrl: 'https://randomnerdtutorials.com/',
      shortUrl: 'http://localhost:3033/api/v1/url/7_0uoToFxe',
    },
    {
      id: 5,
      urlCode: 'ntyHf8-g-F',
      longUrl: 'https://excalidraw.com/',
      shortUrl: 'http://localhost:3033/api/v1/url/ntyHf8-g-F',
    },
    {
      id: 6,
      urlCode: 'vQMe9aOPJg',
      longUrl: 'https://www.virustotal.com/',
      shortUrl: 'http://localhost:3033/api/v1/url/vQMe9aOPJg',
    },
    {
      id: 7,
      urlCode: 'qiGi0hNVOr',
      longUrl: 'https://www.hackster.io/',
      shortUrl: 'http://localhost:3033/api/v1/url/qiGi0hNVOr',
    },
  ],
};
