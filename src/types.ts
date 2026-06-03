/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
}

export interface Review {
  id: string;
  user: string;
  content: string;
  tag: string;
  date: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption: string;
}
