export interface TopMenuData {
  // key is the name of the button
  [key: string]: { name: string; path: string }[];
}

export const topMenuData: TopMenuData = {
  'Button 1': [
    { name: 'Top Button 1', path: '/button1' },
    { name: 'Top Button 2', path: '/button2' }
  ],
  'Button 2': [
    { name: 'Top Button 3', path: '/button3' },
    { name: 'Top Button 4', path: '/button4' }
  ]
  // add more mappings as needed
};
