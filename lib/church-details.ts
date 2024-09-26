export type Church = 'adam' | 'tk' | 'sembawang' | 'serangoon';

type Details = {
  name: string;
  nameChurch: string;
  nearestMrt: string;
  timings: { day: string; time: string }[];
  map_src: string;
  twitch: string;
  shortform: Church;
  address: string;
};

type ChurchDetails = {
  adam: Details;
  tk: Details;
  serangoon: Details;
  sembawang: Details;
};

export const details: { en: ChurchDetails; zh: ChurchDetails } = {
  en: {
    adam: {
      name: 'True Jesus Church (Adam Road)',
      nameChurch: 'Adam Road Church',
      shortform: 'adam',
      nearestMrt: 'Botanic Gardens',
      address: '17D Adam Road, Singapore 289890',
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
      name: 'True Jesus Church (Telok Kurau)',
      nameChurch: 'Telok Kurau Church',
      shortform: 'tk',
      nearestMrt: 'Eunos',
      address: '32 Lorong H, Telok Kurau, Singapore 426020',
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
      name: 'True Jesus Church (Sembawang)',
      shortform: 'sembawang',
      nameChurch: 'Sembawang Church',
      nearestMrt: 'Admiralty',
      address: '11 Woodlands Close, Unit #04-19, Singapore 737853',
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
      name: 'True Jesus Church (Serangoon)',
      nameChurch: 'Serangoon Church',
      shortform: 'serangoon',
      nearestMrt: 'Hougang',
      address: '55 Serangoon North Ave 4, Unit #08-05, Singapore 555859',
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
      name: '真耶稣教会（亚当路）',
      nameChurch: '亚当路教会',
      shortform: 'adam',
      nearestMrt: 'Botanic Gardens',
      address: '17D Adam Road, Singapore 289890',
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
      name: '真耶稣教会（直落古楼）',
      nameChurch: '直落古楼教会',
      shortform: 'tk',
      nearestMrt: 'Eunos',
      address: '32 Lorong H, Telok Kurau, Singapore 426020',
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
      name: '真耶稣教会（三巴旺）',
      nameChurch: '三巴旺教会',
      shortform: 'sembawang',
      nearestMrt: 'Admiralty',
      address:'11 Woodlands Close, Unit #04-19, Singapore 737853',
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
      name: '真耶稣教会（实龙岗）',
      nameChurch: '实龙岗教会',
      shortform: 'serangoon',
      nearestMrt: 'Hougang',
      address:
        '55 Serangoon North Ave 4, Unit #08-05, Singapore 555859',
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
