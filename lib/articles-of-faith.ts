export const aof = ["jesus-christ", "bible", "one-true-church", "baptism", "holy-spirit", "footwashing", "holy-communion", "sabbath", "salvation", "second-coming"] as const;

export type Aof = typeof aof[number];
  
type AofDetails = {
  name: string;
  details: string;
};
  
export const aofDetails: {en: {
  "jesus-christ": AofDetails;
  "bible": AofDetails;
  "one-true-church": AofDetails;
  "baptism": AofDetails;
  "holy-spirit": AofDetails;
  "footwashing": AofDetails;
  "holy-communion": AofDetails;
  "sabbath": AofDetails;
  "salvation": AofDetails;
  "second-coming": AofDetails;
}, zh: {
  "jesus-christ": AofDetails;
  "bible": AofDetails;
  "one-true-church": AofDetails;
  "baptism": AofDetails;
  "holy-spirit": AofDetails;
  "footwashing": AofDetails;
  "holy-communion": AofDetails;
  "sabbath": AofDetails;
  "salvation": AofDetails;
  "second-coming": AofDetails;
}} = {
  en: {
      "jesus-christ": {
          name: "Jesus Christ",
          details: "Jesus Christ, the Word who became flesh, died on the cross for the redemption of sinners, resurrected on the third day, and ascended to heaven. He is the only Saviour of mankind, the Creator of the heavens and earth, and the only true God."
      },
      bible: {
          name: "Holy Bible",
          details: "The Holy Bible, consisting of the Old and New Testaments, is inspired by God, the only scriptural truth, and the standard for Christian living."
      },
      "one-true-church": {
          name: "One True Church",
          details: "The True Jesus Church established by our Lord Jesus Christ, through the Holy Spirit during the time of the ‘latter rain’, is the restored True Church of the apostolic time."
      },
      baptism: {
          name: "Water Baptism",
          details: "Water Baptism is the sacrament for the remission of sins for regeneration. The baptism must take place in natural living water, such as the river, sea, or spring. The Baptist, who already has had received baptism of water and the Holy Spirit, conducts the baptism in the name of the Lord Jesus Christ. And the person receiving the baptism must be completely immersed in water with head bowed and face downward."
      },
      "holy-spirit": {
          name: "Holy Spirit",
          details: "Receiving the Holy Spirit, evidenced by speaking in tongues, is the guarantee of our inheritance of the Kingdom of Heaven."
      },
      footwashing: {
          name: "Footwashing",
          details: "The sacrament of Footwashing enables one to have a part with the Lord Jesus. It also serves as a constant reminder that one should have love, holiness, humility, forgiveness, and service. Every person who has received water baptism must have his/her feet washed in the name of Jesus Christ. Mutual foot washing may be practiced whenever it is appropriate."
      },
      "holy-communion": {
          name: "Holy Communion",
          details: "The Holy Communion is the sacrament to commemorate the death of the Lord Jesus Christ. It enables us to partake of the flesh and blood of our Lord and to be in communion with Him so that we can have eternal life and be raised on the Last Day. This sacrament shall be held as often as possible. Only one unleavened bread and grape juice shall be used."
      },
      sabbath: {
          name: "Sabbath Day",
          details: "The Sabbath Day, the seventh day of the week (Saturday), is a Holy Day, blessed and sanctified by God. It is to be observed under the Lord’s grace for the commemoration of God’s creation and salvation and with the hope of eternal rest in the life to come."
      },
      salvation: {
          name: "Salvation",
          details: "Salvation is given by the grace of God through faith. Believers must rely on the Holy Spirit to pursue holiness, to honor God, and to love humanity."
      },
      "second-coming": {
          name: "Second Coming",
          details: "The Lord’s Second Coming will take place on the Last Day when He descends from heaven to judge the world: the righteous will receive eternal life, while the wicked will be eternally condemned."
      }
  },
  zh: {
      "jesus-christ": {
          name: "耶稣基督",
          details: "信耶稣基督系道成肉身，为拯救罪人代死在十字架上，第三天复活，升天；衪是人类唯一之救主，天地之主宰，独一之真神。"
      },
      bible: {
          name: "圣经",
          details: "信新旧约圣经系神所默示，为证明真道唯一之根据，及信徒生活之准则。"
      },
      "one-true-church": {
          name: "独一真教会",
          details: "信本教会系耶稣基督借晚雨圣灵所设立，为复兴使徒时代教会之真教会。"
      },
      baptism: {
          name: "洗礼",
          details: "信水浸是赦罪重生之典礼，必须由已受水灵二浸者，奉主耶稣圣名，在活水中给受浸者予以低下头之全身浸礼。"
      },
      "holy-spirit": {
          name: "圣灵",
          details: "信受圣灵是得天国基业之凭据，并以说灵言为受圣灵之明证。"
      },
      footwashing: {
          name: "洗脚礼",
          details: "信洗脚礼是与主有分，及教训相爱、圣洁、谦卑、服事、饶恕之典礼。对每一个受浸者，要奉主耶稣圣名给予洗脚一次；至于用水彼此洗脚，必要时亦可行之。"
      },
      "holy-communion": {
          name: "圣餐礼",
          details: "信圣餐为纪念主死，同领主肉、主血，与主联合，能得永生，在末日复活之典礼。要时常举行，但必须用一个无酵饼及葡萄汁举办之。"
      },
      sabbath: {
          name: "安息日",
          details: "信安息日【星期六】为神赐福之日。但要在恩典下纪念其创造及救赎之恩，并盼望来世永远安息而遵守之。"
      },
      salvation: {
          name: "救恩",
          details: "信得救是本乎恩，也因着信；但必须依靠圣灵追求圣洁，实践经训，敬神爱人。"
      },
      "second-coming": {
          name: "审判",
          details: "信主耶稣必于世界末日从天降临，审判万民。义人得永生，罪人受永刑。"
      }
  }
}