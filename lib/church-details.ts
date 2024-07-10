type Details = {
  name: string;
  timings: { day: string; time: string }[];
  map_src: string;
  twitch: string;
  shortform: string;
  address: string;
};

type ChurchDetails = {
  adam: Details;
  tk: Details;
  serangoon: Details;
  sembawang: Details;
};

export const details: {en: ChurchDetails, zh: ChurchDetails} = {
  en: {
    adam: {
      name: 'Adam Road Church',
      shortform: 'adam',
      address:
        '17D Adam Road, Singapore 289890. (Nearest MRT – Botanic Gardens, Tan Kah Kee',
      timings: [
        { day: 'Wednesday', time: '7:30pm - 8:45pm' },
        { day: 'Friday', time: '7:30pm - 8:45pm' },
        { day: 'Saturday - AM', time: '10:30am - 11:45am' },
        { day: 'Saturday - PM', time: '2:45pm - 4:00pm' },
      ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7490206008397!2d103.81067387660289!3d1.3265404616469416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a077b6bbffd%3A0x82517d0abdc4717c!2sTrue%20Jesus%20Church%20(TJC)%20Adam%20Road!5e0!3m2!1sen!2ssg!4v1720335095321!5m2!1sen!2ssg',
      twitch: 'tjcadam',
    },
    tk: {
      name: 'Telok Kurau Church',
      shortform: 'tk',
      address:
        '32 Lorong H, Telok Kurau, Singapore 426020. (Nearest MRT – Eunos)',
      timings: [
        { day: 'Tuesday', time: '7:30pm - 8:45pm' },
        { day: 'Friday', time: '7:30pm - 8:45pm' },
        { day: 'Saturday - AM', time: '10:30am - 11:45am' },
        { day: 'Saturday - PM', time: '2:45pm - 4:00pm' },
      ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.421223711994!2d103.90573914254749!3d1.314719622609561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da180f397d933b%3A0x1972f5a60a0e1a0c!2sTrue%20Jesus%20Church%20(TJC)%20Telok%20Kurau!5e0!3m2!1sen!2ssg!4v1720359243354!5m2!1sen!2ssg',
      twitch: 'tjctk',
    },
    sembawang: {
      name: 'Sembawang Church',
      shortform: 'sembawang',
      address:
        'Woodlands 11, Unit #04-19, 11 Woodlands Close, Singapore 737853. (Nearest MRT – Admiralty)',
      timings: [
        { day: 'Wednesday', time: '7:45pm - 9:00pm' },
        { day: 'Friday', time: '7:45pm - 9:00pm' },
        { day: 'Saturday - AM', time: '10:30am - 11:45am' },
        { day: 'Saturday - PM', time: '2:45pm - 4:00pm' },
      ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.56787575159!2d103.80260319999998!3d1.43451350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da139934355fab%3A0xff5fdd9fb28f7aad!2sTrue%20Jesus%20Church%20(TJC)%20Sembawang!5e0!3m2!1sen!2ssg!4v1720358636486!5m2!1sen!2ssg',
      twitch: 'tjcsbw',
    },
    serangoon: {
      name: 'Serangoon Church',
      shortform: 'serangoon',
      address:
        '55 Serangoon North Ave 4, Unit #08-05, Singapore 555859. (Nearest MRT – Hougang))',
      timings: [
        { day: 'Tuesday', time: '7:45pm - 9:00pm' },
        { day: 'Friday', time: '7:45pm - 9:00pm' },
        { day: 'Saturday - AM', time: '10:30am - 11:45am' },
        { day: 'Saturday - PM', time: '1:45pm - 3:00pm' },
      ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.664874826683!2d103.86497403139735!3d1.3769460294203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1725ac4faa7f%3A0xe9a3613c6a5414e3!2sTrue%20Jesus%20Church%20(TJC)%20Serangoon!5e0!3m2!1sen!2ssg!4v1720358678519!5m2!1sen!2ssg',
      twitch: 'tjcs9',
    },
  },
  zh: {
    adam: {
      name: '亚当路教会',
      shortform: 'adam',
      address:
        '17D Adam Road, Singapore 289890.（最靠近的地铁站： 植物园，陈嘉庚）',
      timings: [
        { day: '周三', time: '晚上 7:30 - 晚上 8:45' },
        { day: '周五', time: '晚上 7:30 - 晚上 8:45' },
        { day: '周六 - 上午', time: '上午 10:30 - 中午 12:00' },
        { day: '周六 - 下午', time: '下午 2:45 - 下午 4:00' },
      ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7490206008397!2d103.81067387660289!3d1.3265404616469416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a077b6bbffd%3A0x82517d0abdc4717c!2sTrue%20Jesus%20Church%20(TJC)%20Adam%20Road!5e0!3m2!1sen!2ssg!4v1720335095321!5m2!1sen!2ssg',
      twitch: 'tjcadam',
    },
    tk: {
      name: '直落古楼教会',
      shortform: 'tk',
      address:
        '32 Lorong H, Telok Kurau, Singapore 426020.（最靠近的地铁站：友诺士）',
        timings: [
          { day: '周二', time: '晚上 7:30 - 晚上 8:45' },
          { day: '周五', time: '晚上 7:30 - 晚上 8:45' },
          { day: '周六 - 上午', time: '上午 10:30 - 中午 12:00' },
          { day: '周六 - 下午', time: '下午 2:45 - 下午 4:00' },
        ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.421223711994!2d103.90573914254749!3d1.314719622609561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da180f397d933b%3A0x1972f5a60a0e1a0c!2sTrue%20Jesus%20Church%20(TJC)%20Telok%20Kurau!5e0!3m2!1sen!2ssg!4v1720359243354!5m2!1sen!2ssg',
      twitch: 'tjctk',
    },
    sembawang: {
      name: '三巴旺教会',
      shortform: 'sembawang',
      address:
        'Woodlands 11, Unit #04-19, 11 Woodlands Close, Singapore 737853. (Nearest MRT – Admiralty)',
        timings: [
          { day: '周三', time: '晚上 7:45 - 晚上 9:00' },
          { day: '周五', time: '晚上 7:45 - 晚上 9:00' },
          { day: '周六 - 上午', time: '上午 10:30 - 中午 12:00' },
          { day: '周六 - 下午', time: '下午 2:45 - 下午 4:00' },
        ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.56787575159!2d103.80260319999998!3d1.43451350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da139934355fab%3A0xff5fdd9fb28f7aad!2sTrue%20Jesus%20Church%20(TJC)%20Sembawang!5e0!3m2!1sen!2ssg!4v1720358636486!5m2!1sen!2ssg',
      twitch: 'tjcsbw',
    },
    serangoon: {
      name: '实龙岗教会',
      shortform: 'serangoon',
      address:
        '55 Serangoon North Ave 4, Unit #08-05, Singapore 555859. (Nearest MRT – Hougang))',
        timings: [
          { day: '周二', time: '晚上 7:45 - 晚上 9:00' },
          { day: '周五', time: '晚上 7:45 - 晚上 9:00' },
          { day: '周六 - 上午', time: '上午 10:30 - 中午 12:00' },
          { day: '周六 - 下午', time: '下午 1:45 - 下午 3:00' },
        ],
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.664874826683!2d103.86497403139735!3d1.3769460294203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1725ac4faa7f%3A0xe9a3613c6a5414e3!2sTrue%20Jesus%20Church%20(TJC)%20Serangoon!5e0!3m2!1sen!2ssg!4v1720358678519!5m2!1sen!2ssg',
      twitch: 'tjcs9',
    },
  },
};
