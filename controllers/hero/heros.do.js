module.exports = function(req, res, next) {
  var reqParams = req.body || {};
  var heros = [
    {
      "ename": 187,
      "cname": "东皇太一",
      "title": "噬灭日蚀",
      "hero_type": 2,
      "new_type": 1
    }, {
      "ename": 191,
      "cname": "大乔",
      "title": "沧海之曜",
      "hero_type": 6,
      "new_type": 0
    }, {
      "ename": 192,
      "cname": "黄忠",
      "title": "燃魂重炮",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 190,
      "cname": "诸葛亮",
      "title": "绝代智谋",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 180,
      "cname": "哪吒",
      "title": "桀骜炎枪",
      "pay_type": 10,
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 186,
      "cname": "太乙真人",
      "title": "炼金大师",
      "hero_type": 6,
      "new_type": 0
    }, {
      "ename": 178,
      "cname": "杨戬",
      "title": "根源之目",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 177,
      "cname": "成吉思汗",
      "title": "苍狼末裔",
      "pay_type": 10,
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 163,
      "cname": "橘右京",
      "title": "神梦一刀",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 132,
      "cname": "马可波罗",
      "title": "远游之枪",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 183,
      "cname": "雅典娜",
      "title": "圣域余晖",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 126,
      "cname": "夏侯惇",
      "title": "不羁之风",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 184,
      "cname": "蔡文姬",
      "title": "天籁弦音",
      "hero_type": 6,
      "new_type": 0
    }, {
      "ename": 140,
      "cname": "关羽",
      "title": "一骑当千",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 174,
      "cname": "虞姬",
      "title": "森之风灵",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 142,
      "cname": "安琪拉",
      "title": "暗夜萝莉",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 135,
      "cname": "项羽",
      "title": "霸王",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 169,
      "cname": "后羿",
      "title": "半神之月",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 114,
      "cname": "刘禅",
      "title": "暴走机关",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 152,
      "cname": "王昭君",
      "title": "冰雪之华",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 107,
      "cname": "赵云",
      "title": "苍天翔龙",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 154,
      "cname": "花木兰",
      "title": "传说之刃",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 133,
      "cname": "狄仁杰",
      "title": "断案大师",
      "pay_type": 11,
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 150,
      "cname": "韩信",
      "title": "国士无双",
      "hero_type": 4,
      "new_type": 0
    }, {
      "ename": 108,
      "cname": "墨子",
      "title": "和平守望",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 112,
      "cname": "鲁班七号",
      "title": "机关造物",
      "pay_type": 11,
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 130,
      "cname": "宫本武藏",
      "title": "剑圣",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 168,
      "cname": "牛魔",
      "title": "精英酋长",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 141,
      "cname": "貂蝉",
      "title": "绝世舞姬",
      "pay_type": 10,
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 129,
      "cname": "典韦",
      "title": "狂战士",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 106,
      "cname": "小乔",
      "title": "恋之微风",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 127,
      "cname": "甄姬",
      "title": "洛神降临",
      "pay_type": 10,
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 109,
      "cname": "妲己",
      "title": "魅惑之狐",
      "pay_type": 11,
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 118,
      "cname": "孙膑",
      "title": "逆流之时",
      "pay_type": 10,
      "hero_type": 6,
      "new_type": 0
    }, {
      "ename": 136,
      "cname": "武则天",
      "title": "女帝",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 115,
      "cname": "高渐离",
      "title": "叛逆吟游",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 123,
      "cname": "吕布",
      "title": "无双之魔",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 167,
      "cname": "孙悟空",
      "title": "齐天大圣",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 111,
      "cname": "孙尚香",
      "title": "千金重弩",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 134,
      "cname": "达摩",
      "title": "拳僧",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 144,
      "cname": "程咬金",
      "title": "热烈之斧",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 119,
      "cname": "扁鹊",
      "title": "善恶怪医",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 166,
      "cname": "亚瑟",
      "title": "圣骑之力",
      "pay_type": 11,
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 116,
      "cname": "荆轲",
      "title": "死亡之刃",
      "hero_type": 4,
      "new_type": 0
    }, {
      "ename": 148,
      "cname": "姜子牙",
      "title": "太古魔导",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 124,
      "cname": "周瑜",
      "title": "铁血都督",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 139,
      "cname": "老夫子",
      "title": "万古长明",
      "pay_type": 10,
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 110,
      "cname": "嬴政",
      "title": "王者独尊",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 128,
      "cname": "曹操",
      "title": "鲜血枭雄",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 113,
      "cname": "庄周",
      "title": "逍遥梦幻",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 156,
      "cname": "张良",
      "title": "言灵之书",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 117,
      "cname": "钟无艳",
      "title": "野蛮之锤",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 121,
      "cname": "芈月",
      "title": "永恒之月",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 146,
      "cname": "露娜",
      "title": "月光之女",
      "hero_type": 1,
      "new_type": 0
    }, {
      "ename": 105,
      "cname": "廉颇",
      "title": "正义爆轰",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 120,
      "cname": "白起",
      "title": "最终兵器",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 171,
      "cname": "张飞",
      "title": "禁血狂兽",
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 170,
      "cname": "刘备",
      "title": "仁德义枪",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 153,
      "cname": "兰陵王",
      "title": "暗影刀锋",
      "hero_type": 4,
      "new_type": 0
    }, {
      "ename": 162,
      "cname": "娜可露露",
      "title": "鹰之守护",
      "hero_type": 4,
      "new_type": 0
    }, {
      "ename": 131,
      "cname": "李白",
      "title": "青莲剑仙",
      "hero_type": 4,
      "new_type": 0
    }, {
      "ename": 175,
      "cname": "钟馗",
      "title": "虚灵城判",
      "hero_type": 2,
      "new_type": 0
    }, {
      "ename": 173,
      "cname": "李元芳",
      "title": "王都密探",
      "hero_type": 5,
      "new_type": 0
    }, {
      "ename": 149,
      "cname": "刘邦",
      "title": "双面君主",
      "pay_type": 10,
      "hero_type": 3,
      "new_type": 0
    }, {
      "ename": 157,
      "cname": "不知火舞",
      "title": "明媚烈焰",
      "hero_type": 2,
      "new_type": 0
    }
  ]

  var data = {
    result: 'success', // success  | failure
    messages: ['会话超时，请重新选择商品', 'error2'],
    data: heros
  };

  data = JSON.stringify(data);
  res.contentType('json');
  res.send(data);
};
