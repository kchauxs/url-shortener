export interface SeedUrl {
  id: number;
  urlCode: string;
  longUrl: string;
  shortUrl?: string;
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
    },
    {
      id: 2,
      urlCode: 'et1GnxDbo2',
      longUrl: 'https://medium.com/',
    },
    {
      id: 3,
      urlCode: 'v69ri70a3d',
      longUrl: 'https://app.quicktype.io/',
    },
    {
      id: 4,
      urlCode: '7_0uoToFxe',
      longUrl: 'https://randomnerdtutorials.com/',
    },
    {
      id: 5,
      urlCode: 'ntyHf8-g-F',
      longUrl: 'https://excalidraw.com/',
    },
    {
      id: 6,
      urlCode: 'vQMe9aOPJg',
      longUrl: 'https://www.virustotal.com/',
    },
    {
      id: 7,
      urlCode: 'qiGi0hNVOr',
      longUrl: 'https://www.hackster.io/',
    },
  ],
};
