/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        expertise: 'Expertise',
        experience: 'Experience',
        reviews: 'Reviews',
        media: 'Media',
        book: 'Book Consultation'
      },
      hero: {
        status: 'Available for Advisory',
        name: 'Ethan Chen',
        title: 'VC Partner / CHRO / Serial Entrepreneur',
        description: 'Venture & Career Advisor based in Beijing. Leveraging 27 years of professional experience and 8 years of serial entrepreneurship to help founders and professionals transform complex choices into actionable growth.',
        book: 'Book Now',
        learnMore: 'Learn More'
      },
      stats: {
        exp: '27 Years Career',
        projects: '1000+ Students',
        rating: '99.8% Rating',
        investments: 'Startup Founder x3'
      },
      expertise: {
        title: 'Core Expertise',
        subtitle: 'From Tech Roots to Investment Logic',
        bp: {
          title: 'BP Audit (Investor\'s Perspective)',
          desc: 'Deeply examine BP logic, roadshow performance, and financing paths from an investor\'s perspective to improve success rates.'
        },
        ops: {
          title: 'Operations & Org Evolution',
          desc: 'Former VP of Operations. Analyzing business data and management bottlenecks to build efficient organizational systems.'
        },
        career: {
          title: 'Career Strategy for Executives',
          desc: 'In-depth coaching for mid-career bottlenecks, career shifts, and executive promotion strategies.'
        },
        interview: {
          title: 'Student Career Guidance',
          desc: 'Helping graduates define directions, evaluate offers, and build job-seeking narratives for long-term value.'
        },
        learnMore: 'LEARN MORE'
      },
      experience: {
        title: 'Work Experience',
        subtitle: '27 Years of Transformation',
        desc: 'Former product & tech executive at Fortune 500 companies and VP of Operations at listed groups. Serial entrepreneur and Venture Partner.',
        items: [
          {
            period: '2017.01 - Present',
            company: 'Linxi Capital',
            role: 'Partner',
            desc: '• Role: Post-investment talent ecosystem enablement and startup team due diligence. Independent "veto power" on talent dimension in investment decisions.\n• Output: Deep involvement in organizational diagnosis for 30+ Deep Tech projects (AI, semi-conductors, smart manufacturing); assisted portfolio companies in hiring key roles like CEO and CTO.\n• Endorsement: Mentor for Tsinghua Sanchuang Competition; established a pool of 2000+ top expert resources covering hard tech and internet backbone technologies.'
          },
          {
            period: '2015.05 - 2016.11',
            company: 'Siyuan Tech',
            role: 'Assistant to President & VP of Operations',
            desc: '• Role: Scale-up construction of the group\'s operations center from 0 to 1; coordinated across tech, product, operations, and marketing for synergy.\n• Output: Completed recruitment, job design, and assessment system for a 100-person core team in a very short time; ensured on-time delivery of large platform-level products (ToB/ToC).\n• Insight: Established a performance-based recruitment evaluation model, deeply understanding talent needs at different business stages to enhance organizational resilience.'
          },
          {
            period: '2009.12 - 2015.03',
            company: 'Jiepang / Nuandao',
            role: 'Co-founder & COO',
            desc: '• Status: Jiepang was China\'s first LBS mobile social platform (industry pioneer); Nuandao was the most influential vertical design e-commerce platform at the time.\n• Achievement: Personally established offices in Beijing, Shanghai, Taipei, and Guangzhou; managed a complex cross-regional operations team serving millions of users.\n• Performance: Achieved 5 million active users for Jiepang in 2 years; Nuandao\'s repurchase rate reached 99.4%; ensured high retention and productivity of top talent.\n• Depth: Gained a "Founder\'s Perspective" to directly access candidate\'s true business judgment and management execution capability.'
          },
          {
            period: '1994.09 - 2009.12',
            company: 'ASUS / SYSTEX',
            role: 'R&D Deputy Director / Senior Product Manager',
            desc: '• Background: Led R&D and integration of large medical systems (PACS/RIS/HIS); products passed FDA Class II certification; top 3 market share in Taiwan.\n• Recruitment: Responsible for technical team recruitment and capability ladder building; established a rigorous technical talent evaluation system to identify technical depth for key positions.\n• Accumulation: 14 years from frontline engineer to senior R&D manager; built a deep understanding of "Engineering Excellence" culture, enabling dialogue with top engineers globally.'
          }
        ]
      },
      reviews: {
        title: 'Executive Feedback',
        subtitle: 'Real Testimonials from Clients',
        voices: 'Voices of Impact',
        badges: {
          verify: 'Zaih.com Official Verification',
          count: 'Total 172+ Real Reviews'
        },
        actions: {
          loadMore: 'Load More Memories'
        }
      },
      media: {
        title: 'Captured Moments',
        subtitle: 'Moments Worth Seeing',
        gallery: 'Gallery',
        captions: {
          m1: 'Official Portrait',
          m2: 'Startup Salon Sharing',
          m3: '1-on-1 Consulting Session',
          m4: 'Tech Summit Keynote',
          m5: 'Management Workshop',
          m6: 'Strategic Advisory'
        }
      },
      footer: {
        ready: 'Ready for your next leap?',
        book: 'Official Meeting (Zaih)',
        collab: 'Business Collaboration',
        rights: 'ALL RIGHTS RESERVED.',
        zaih: 'Zaih Profile'
      },
      actions: {
        all: 'All Reviews',
        expand: 'Read More',
        collapse: 'Collapse'
      },
      about: {
        title: 'Advisor Bio',
        subtitle: 'Zaih.com Mentor of the Year',
        statement: 'I am Ethan Chen, dedicated to solving your challenges with professional expertise and passion.',
        areas: {
          title: 'Areas of Focus:',
          items: [
            'Resolving career confusion and anxiety, helping you break through bottlenecks.',
            'Auditing startup projects to avoid common pitfalls and guiding through financing paths.',
            'Reviewing internet operation strategies to identify key gaps or improvement areas.',
            'Discovering true talents and strengths for efficient and confident career progress.'
          ]
        },
        highlights: {
          title: 'Professional Highlights:',
          items: [
            '27 years of expertise from tech lead at Fortune 500 to VP of Operations at listed groups. I understand the industry, the people, and the business.',
            '8-year serial entrepreneur (CCTV interviewed). Co-founded gOS, Jiepang, and Nuandao. I have lived through the struggles from 0 to 100.',
            'Startup Mentor for the Ministry of Education and top universities like BIT and XMU.',
            'Angel Investor & Venture Partner focusing on deep tech, consumption, and blockchain.',
            'Career Coach & Former CHRO with 1000+ cases. Using Gallup strengths to provide precise advice.'
          ]
        },
        style: {
          title: 'Consulting Style:',
          content: 'No jargon, no ego. I take every case seriously because it impacts your life choices. If you are serious about growth, I am serious about helping you.'
        }
      }
    }
  },
  'zh-CN': {
    translation: {
      nav: {
        home: '首页',
        expertise: '专业领域',
        experience: '工作经历',
        reviews: '用户评价',
        media: '精彩瞬间',
        book: '约见我'
      },
      hero: {
        status: 'Available for Advisory',
        name: 'Ethan 陈清豪',
        title: 'VC 合伙人 / 首席人力资源官 / 连续创业者',
        description: '以 27 年职场经验、8 年创业经验与投资人视角，协助创业者、运营负责人与职场人才，将复杂选择转化为可落地的判断与行动。',
        book: '立即约见',
        learnMore: '了解更多'
      },
      stats: {
        exp: '27年职场实战',
        projects: '1000+ 辅导学员',
        rating: '99.8% 好评率',
        investments: '3次创业实战'
      },
      expertise: {
        title: 'Core Expertise',
        subtitle: '聚焦痛点，助力跨越式增长',
        bp: {
          title: '投资人帮你看项目',
          desc: '从投资人视角深度检视 BP 逻辑、路演表现与融资路径，提升融资成功率。'
        },
        ops: {
          title: '运营与组织演进分析',
          desc: '曾任上市集团运营中心副总。解析数据与管理瓶颈，构建高效组织运作体系。'
        },
        career: {
          title: '高阶人才职场策略',
          desc: '针对职场中段瓶颈、转行抉择及高管晋升，提供深度策略辅导。'
        },
        interview: {
          title: '大学生就业指导',
          desc: '针对在校生与毕业生，协助厘清方向、评估 Offer 的长期价值，建立求职叙事并降低面试焦虑。'
        },
        learnMore: '了解专题细节'
      },
      experience: {
        title: '工作经历',
        subtitle: '实战见证高度',
        desc: '超过 27 年跨界经验，从技术领袖到决策高层。经历多个项目从 0 到 10 的成长全过程。',
        items: [
          {
            period: '2017.01 – 至今',
            company: '麟玺创投 (Linxi Capital)',
            role: '合伙人',
            desc: '· 职能描述：负责投后项目的人才生态赋能及创业团队尽调，在投资决策阶段独立行使人才维度的“一票否决权”。\n· 核心产出：深度参与 30+ 硬科技项目（AI、半导体、智能制造）的组织诊断，协助被投企业成功猎寻并入职 CEO、CTO 等核心岗位。\n· 行业背书：担任清华三创大赛导师，累计触达并建立了 2000+ 顶级专家资源池，覆盖硬科技、互联网底层技术等多个前沿赛道。'
          },
          {
            period: '2015.05 – 2016.11',
            company: '北京思源科技 (Siyuan Tech)',
            role: '总裁助理兼运营副总',
            desc: '· 职能描述：负责集团运营中心从 0 到 1 的规模化搭建，协调技术、产品、运营、市场等多职能部门实现高效协同。\n· 核心产出：在极短时间内完成 100 人核心团队的招募、定岗及考核体系建设，确保了大型平台级产品（ToB/ToC）的按时交付。\n· 组织洞察：建立了基于业务结果的招聘评估模型，深刻洞察不同业务周期对人才画像需求的差异，提升了团队的整体组织韧性。'
          },
          {
            period: '2009.12 – 2015.03',
            company: '街旁网 / 暖岛网 (Jiepang/Nuandao)',
            role: '联合创始人兼 COO',
            desc: '· 行业地位：街旁网是中国首个 LBS 移动社交平台（行业鼻祖），引领了移动互联网初期的社交浪潮；暖岛网则是当时最具影响力的设计类垂直电商平台。\n· 组织伟业：亲手完成北京、上海、台北、广州四地办公室的组建，管理跨区域、数百万用户规模下的复杂运营战队，涵盖研发、全球买手、仓储物流等全职能。\n· 战绩支撑：在激烈的市场竞争中，实现街旁网 2 年 500 万活跃用户，暖岛网用户复购率达 99.4%；通过建立极具凝聚力的组织文化，确保了初创期顶尖人才的高留存与高产出。\n· 识人深度：这段经历赋予了我“创业者视角”，使我能直接触达其真实的商业判断力与管理落地能力。'
          },
          {
            period: '1994.09 – 2009.12',
            company: '华硕电脑 (ASUS) / 精诚资讯 (SYSTEX)',
            role: '研发副处长 / 高级产品经理',
            desc: '· 硬核背景：主导大型医疗系统（PACS/RIS/HIS）的研发与整合，产品通过 FDA Class II 认证，市场占有率位列台湾地区前三。\n· 技术招募：负责技术团队的招聘与能力梯队建设，建立了一套严谨的技术人才评估体系，精准识别系统架构师、研发副总裁等关键职位的技术深度。\n· 职涯沉淀：14 年从一线工程师到高阶研发管理者的积累，奠定了我对“工程卓越”文化的理解，这也是我能与全球顶级工程师对话的底气。'
          }
        ]
      },
      reviews: {
        title: 'Executive Feedback',
        subtitle: '来自真实的口碑见证',
        voices: 'Voices of Impact',
        badges: {
          verify: '在行 (Zaih.com) 官方认证',
          count: '累计 172+ 真实好评'
        },
        actions: {
          loadMore: '查看更多成长见證'
        }
      },
      media: {
        title: 'Captured Moments',
        subtitle: '精彩瞬间 值得被看见',
        gallery: 'Gallery',
        captions: {
          m1: '官方形象照',
          m2: '创业沙龙分享现场',
          m3: '一对一深度咨询时刻',
          m4: '互联网技术峰会演讲',
          m5: '团队管理工作坊',
          m6: '战略咨询深度讨论'
        }
      },
      footer: {
        ready: '准备好开启你的下一次跃迁了吗？',
        book: '在行正式约见',
        collab: '商务合作详情',
        rights: 'ALL RIGHTS RESERVED.',
        zaih: '在行主页'
      },
      actions: {
        all: '全部评价',
        expand: '展开全部',
        collapse: '收起'
      },
      about: {
        title: '行家自述',
        subtitle: '在行评选年度行家',
        statement: '我是陈清豪，在此专业并热诚地解决你的问题。',
        areas: {
          title: '可在以下几个领域提供帮助：',
          items: [
            '解决在职场发展上的迷惑、焦虑，帮助突破瓶颈；',
            '审视判断创业项目，帮助避开创业时的各种坑，指导融资上需要的事情；',
            '检视你的互联网运营策略与行为，点出重点与可能缺失或补强的地方；',
            '帮助找出真正的天赋与优势，让你在职场上笃定、高效前行。'
          ]
        },
        highlights: {
          title: '我的简介：',
          items: [
            '27年职场经验，曾任世界500强公司的产品与技术高管、曾担任国内上市集团公司的运营中心副总。从工程师到COO，懂职场、懂人也懂江湖。',
            '连续8年创业者，曾被CCTV访问。联合创立gOS、街旁网、暖岛。经历从0到1到100的全过程，我来告诉你怎么解。',
            '创业导师，担任教育部“互联网+”大学生双创大赛评委；多所高校创业导师，辅导并协助打磨创业项目。',
            '天使投资人，现为创投机构合伙人，关注智能制造、消费升级、区块链领域的早期投资。',
            '生涯规划教练，多年担任公司HR最高负责人，熟悉各种心理与管理方法论，招聘与职场发展指导案例超过1000例，依托Gallup“伯乐”才能提供准确建议。'
          ]
        },
        style: {
          title: '辅导风格：',
          content: '沟通不油腻、不摆架子，不用各种理论制造距离感。我自当谨慎看待，你必须是认真的，才对得起我对你的认真。'
        }
      }
    }
  },
  'zh-HK': {
    translation: {
      nav: {
        home: '首頁',
        expertise: '專業領域',
        experience: '工作經驗',
        reviews: '用戶評價',
        media: '精彩瞬間',
        book: '約見我'
      },
      hero: {
        status: 'Available for Advisory',
        name: 'Ethan 陳清豪',
        title: 'VC 合夥人 / 首席人力資源官 / 連續創業者',
        description: '以 27 年職場經驗、8 年創業經驗與投資人視角，協助創業者、營運負責人與職場人才，將複雜選擇轉化為可落地的判斷與行動。',
        book: '立即約見',
        learnMore: '了解更多'
      },
      stats: {
        exp: '27年職場實戰',
        projects: '1000+ 輔導學員',
        rating: '99.8% 好評率',
        investments: '3次創業實戰'
      },
      expertise: {
        title: 'Core Expertise',
        subtitle: '從技術底層到投資邏輯的全面賦能',
        bp: {
          title: '投資人幫你看項目',
          desc: '從投資人視角深度檢視 BP 邏輯、路演表現與融資路徑，提升融資成功率。'
        },
        ops: {
          title: '營運與組織演進分析',
          desc: '曾任上市集團營運中心副總。解析數據與管理瓶頸，構建高效組織運作體系。'
        },
        career: {
          title: '高階人才職涯策略',
          desc: '針對職場中段瓶頸、轉行抉擇及高管晉升，提供深度判斷策略輔導。'
        },
        interview: {
          title: '大學生就業指導',
          desc: '釐清優勢定方向、評估 Offer 長期價值，建立求職敘事並降低面試焦慮。'
        },
        learnMore: '了解專題細節'
      },
      experience: {
        title: '工作經驗',
        subtitle: '實戰見證高度',
        desc: '超過 27 年跨界經驗，從技術領袖到決策高層。經歷多個項目從 0 到 10 的成長全過程。',
        items: [
          {
            period: '2017.01 – 至今',
            company: '麟璽創投 (Linxi Capital)',
            role: '合夥人',
            desc: '· 職能描述：負責投後項目的人才生態賦能及創業團隊盡調，在投資決策階段獨立行使人才維度的「一票否決權」。\n· 核心產出：深度參與 30+ 硬科技項目（AI、半導體、智能製造）的組織診斷，協助被投企業成功獵尋並入職 CEO、CTO 等核心崗位。\n· 行業背書：擔任清華三創大賽導師，累計觸達並建立了 2000+ 頂級專家資源池。'
          },
          {
            period: '2015.05 – 2016.11',
            company: '北京思源科技 (Siyuan Tech)',
            role: '總裁助理兼營運副總',
            desc: '· 職能描述：負責集團營運中心從 0 到 1 的規模化搭建，協調技術、產品、營運、市場等多職能部門實現高效協同。\n· 核心產出：在極短時間內完成 100 人核心團隊的招募、定崗及考核體系建設。\n· 組織洞察：建立了基於業務結果的招聘評估模型，提升了團隊的整體組織韌性。'
          },
          {
            period: '2009.12 – 2015.03',
            company: '街旁網 / 暖島網 (Jiepang/Nuandao)',
            role: '聯合創始人兼 COO',
            desc: '· 行業地位：街旁網是中國首個 LBS 移動社交平台（行業鼻祖），引領了移動互聯網初期的社交浪潮；暖島網則是當時最具影響力的設計類垂直電商平台。\n· 組織偉業：親手完成北京、上海、台北、廣州四地辦公室的組建，管理跨區域、數百萬用戶規模下的複雜營運戰隊。\n· 戰績支撐：在激烈的市場競爭中，實現街旁網 2 年 500 萬活躍用戶，暖島網用戶複購率達 99.4%。'
          },
          {
            period: '1994.09 – 2009.12',
            company: '華碩電腦 (ASUS) / 精誠資訊 (SYSTEX)',
            role: '研發副處長 / 高級產品經理',
            desc: '· 硬核背景：主導大型醫療系統（PACS/RIS/HIS）的研發與整合，產品通過 FDA Class II 認證，市場佔有率位列台灣地區前三。\n· 技術招募：負責技術團隊的招聘與能力梯隊建設，建立了一套嚴謹的技術人才評估體系。\n· 職涯沉澱：14 年從一線工程師到高階研發管理者的積累。'
          }
        ]
      },
      reviews: {
        title: 'Executive Feedback',
        subtitle: '來自真實的口碑見證',
        voices: 'Voices of Impact',
        badges: {
          verify: '在行 (Zaih.com) 官方認證',
          count: '累計 172+ 真實好評'
        },
        actions: {
          loadMore: '查看更多成長見證'
        }
      },
      media: {
        title: 'Captured Moments',
        subtitle: '精彩瞬間 值得被看見',
        gallery: 'Gallery',
        captions: {
          m1: '官方形象照',
          m2: '創業沙龍分享現場',
          m3: '一對一深度諮詢時刻',
          m4: '互聯網技術峰會演講',
          m5: '團隊管理工作坊',
          m6: '戰略諮詢深度討論'
        }
      },
      footer: {
        ready: '準備好開啟你的下一次躍遷了嗎？',
        book: '在行正式約見',
        collab: '商務合作詳情',
        rights: 'ALL RIGHTS RESERVED.',
        zaih: '在行主頁'
      },
      actions: {
        all: '全部評價',
        expand: '展開全部',
        collapse: '收起'
      },
      about: {
        title: '行家自述',
        subtitle: '在行評選年度行家',
        statement: '我是陳清豪，在此專業並熱誠地解決你的問題。',
        areas: {
          title: '可在以下幾個領域提供幫助：',
          items: [
            '解決在職場發展上的迷惑、矯慮，幫助突破瓶頸；',
            '審視判斷創業項目，幫助避開創業時的各種坑，指導融資上需要的事情；',
            '檢視你的互聯網營運策略與行為，點出重點與可能缺失或補強的地方；',
            '幫助找出真正的天賦與優勢，讓你在職場上篤定、高效前行。'
          ]
        },
        highlights: {
          title: '我的簡介：',
          items: [
            '27年職場經驗，曾任世界500強公司的產品與技術高管、曾擔任國內上市集團公司的營運中心副總。從工程師到COO，懂職場、懂人也懂江湖。',
            '連續8年創業者，曾被CCTV訪問。聯合創立gOS、街旁網、暖島. 經歷從0到1到100的全過程，我來告訴你怎麼解。',
            '創業導師，擔任教育部「互聯網+」大賽評委；多所高校創業導師，打磨創業項目。',
            '天使投資人，現為創投機構合夥人，關注智能製造、消費升級、區塊鏈領域的早期投資。',
            '生涯規劃教練，多年擔任公司HR最高負責人，招聘與職場發展指導案例超過1000例，依託Gallup「伯樂」才能提供準確建議。'
          ]
        },
        style: {
          title: '輔導風格：',
          content: '溝通不油膩、不擺架子，不用各種理論製造距離感。我自當謹慎看待，你必須是認真的，才對得起我對你的認真。'
        }
      }
    }
  }
};

// Aliases for traditional chinese
resources['zh-TW'] = resources['zh-HK'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
