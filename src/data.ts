/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Topic, Experience, Review, MediaItem } from './types';

export const HERO_DATA = {
  name: 'Ethan 陈清豪',
  title: 'VC Partner / Career Advisor / Serial Entrepreneur',
  description: 'Venture partner, former VP of Operations, serial entrepreneur, and career coach. With 27 years of professional experience and 8 years of startup background, helping entrepreneurs and professionals transform complex choices into actionable growth.',
  image: 'https://hermenasus.github.io/assets/zaih-01.jpg',
};

export const STATS_DATA = [
  { label: '从业经验', value: '27年' },
  { label: '辅导学员', value: '1000+' },
  { label: '好评率', value: '99.8%' },
  { label: '创业实战', value: '3次' },
];

export const TOPICS_DATA: Topic[] = [
  {
    id: 'bp',
    title: '投资人帮你看项目',
    description: '从投资人视角深度检视 BP 逻辑、路演表现与融资路径，提升融资成功率。',
    icon: 'TrendingUp',
  },
  {
    id: 'ops',
    title: '与 COO 一起检视运营',
    description: '深入业务一线，解析运营数据与管理瓶颈，构建高效的组织运营体系。',
    icon: 'Layout',
  },
  {
    id: 'career',
    title: '职场规划与瓶颈突破',
    description: '针对职场中段瓶颈、转行抉择及高管晋升提供深度策略辅导。',
    icon: 'Map',
  },
  {
    id: 'interview',
    title: '大学生就业指导',
    description: '第一步就做对。协助在校生与毕业生厘清方向、准备简历面试，平衡家庭期待。',
    icon: 'UserCheck',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    period: '2020 - 至今',
    company: '创投机构 / 瑞德资本',
    role: '投资合伙人',
    description: '主导半导体、硬科技、新消费投资。为被投企业提供核心人才战略与运营咨询。',
  },
  {
    period: '2015 - 2020',
    company: '纳斯达克上市知名互联网集团',
    role: '运营中心总经总 / CHRO',
    description: '负责全球 5000+ 员工的人才梯队建设与组织演进，提升人效比。',
  },
  {
    period: '2005 - 2014',
    company: 'gOS, 街旁网 (Jiepang), 暖岛网 (Nuandao)',
    role: '联合创始人',
    description: '联合创立多个知名社交与电商平台。负责产品研发与运营，经历项目从 0 到 10 的全过程。',
  },
  {
    period: '2000 - 2010',
    company: '世界 500 强 / 互联网巨头',
    role: '技术负责人 / 首席架构师',
    description: '10 年技术积累。主导多个千万级并发系统设计。',
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    user: '王先生',
    tag: '创业者',
    content: 'Ethan 老师的建议非常辛辣且精准。他一眼就看出了我 BP 中的逻辑漏洞，帮我们重新梳理了融资故事。',
    date: '2024-03-15',
  },
  {
    id: '2',
    user: '李女士',
    tag: '职场高管',
    content: '在职业瓶颈期遇到了老师，不仅是简历的修改，更多是职业底层逻辑的重构，受益匪浅。',
    date: '2024-05-10',
  },
  {
    id: '3',
    user: '张同学',
    tag: '求职者',
    content: '面试辅导很有实战性，老师会模拟面试中的压力场景，让我应对自如，最终拿到了大厂 Offer。',
    date: '2024-02-20',
  },
  {
    id: '4',
    user: 'Chen',
    tag: 'COO',
    content: '和 Ethan 老师聊运营非常有共鸣，他实战经验丰富，给出的建议都是拿来就能用的干货。',
    date: '2024-06-01',
  },
];

export const MEDIA_DATA: MediaItem[] = [
  { id: 'm1', type: 'image', url: 'https://hermenasus.github.io/assets/zaih-01.jpg', caption: '官方形象照' },
  { id: 'm2', type: 'image', url: 'https://hermenasus.github.io/assets/zaih-02.jpg', caption: '创业沙龙分享现场' },
  { id: 'm3', type: 'image', url: 'https://hermenasus.github.io/assets/zaih-03.jpg', caption: '一对一深度咨询时刻' },
  { id: 'm4', type: 'image', url: 'https://hermenasus.github.io/assets/zaih-05.jpg', caption: '互联网技术峰会演讲' },
  { id: 'm5', type: 'image', url: 'https://hermenasus.github.io/assets/zaih-07.jpg', caption: '团队管理工作坊' },
  { id: 'm6', type: 'image', url: 'https://hermenasus.github.io/assets/zaih-15.jpg', caption: '战略咨询深度讨论' },
];

