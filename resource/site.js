(function() {
    var app = {};

    var skills = [{
        name: 'HTML5',
        img: 'resource/icon-html.jpg',
        intro: '语义性，熟练手写符合w3c标准的HTML页面。'
    }, {
        name: 'CSS3',
        img: 'resource/icon-css.jpg',
        intro: '熟练使用CSS对网页进行（自适应）布局，了解不同浏览器的兼容性。<br /> 这里有一个彩虹样式。'
    }, {
        name: 'Javascript',
        img: 'resource/icon-js.jpg',
        intro: '你知道这个东西不简单，现在追求能够用优雅的代码实现功能。'
    }, {
        name: 'jQuery',
        img: 'resource/icon-jquery.jpg',
        intro: 'JS的一个类库，基本上可以熟练使用。'
    },  {
        name: 'BootStrap',
        img: 'resource/icon-bootstrap.jpg',
        intro: '可以很方便的实现各种UI，很强大的一个前端框架，自适应布局，各种组件等。'
    }, {
        name: 'Phtoshop',
        img: 'resource/icon-ps.jpg',
        intro: '熟练使用Photoshop，曾经做过几个网站的UI设计。'
    }, {
        name: 'Dreamweaver',
        img: 'resource/icon_dw.jpg',
        intro: '熟练使用Dreamweaver，进行网页布局和制作。'
    }, {
        name: 'fireworks',
        img: 'resource/icon_fw.jpg',
        intro: '熟练使用fireworks,对页面进行切图制作和设计'
    }, {
        name: 'Adobe Flash',
        img: 'resource/icon_fl.jpg',
        intro: '能够使用Flash,做出简单的动画特效'
    }, {
        name: 'Adobe Illustrator',
        img: 'resource/icon_ai.jpg',
        intro: '了解并会使用Adobe Illustrator，做出矢量图。'
    
	}];
	 
	

    app.skill = new Vue({
        el: '#jSkill',
        data: {
            mName: '职业技能',
            skills: skills,
        }
    });

var exps = [{
      company: '极光工作室',
      from: '2015-6',
      to: '',
      projects: [{
        name: '外包',
        intro: '搭建了极光管理后台，使用bootstrap搭建，使用了部分vue',
        tags: ['jQuery','Vue.js']
      },{
        name: '其它各种项目略过',
        intro: '......',
        tags: ['HTML5+CSS3','Phtoshop','UI','Flash']
      }],
    },{
      company: '盛景网联科技股份有限公司',
      from: '2014-3',
      to: '2015-4',
      projects: [{
        name: '盛景企业大学',
        intro: '中小企业服务平台 <a href="http://www.shengjing360.com/" target="_blank" class="link">个人版体验</a>',
        tags: ['Html+css','Phtoshop','jQuery',]
      }],
    },{
      company: '苏宁云商集团（北京）股份有限公司',
      from: '2013-8',
      to: '2014-3',
      projects: [{
        name: '红孩子母婴',
        intro: '包括p图，美化页面，根据要求写出静台态页面。  <a href="http://redbaby.suning.com/" target="_blank" class="link">红孩子</a>',
        tags: ['Html+css','Phtoshop']
		  }]
    }];
    app.exp = new Vue({
        el: '#jExp',
        data: {
            mName: '项目经验',
            exps: exps,
        }
    });
})();
