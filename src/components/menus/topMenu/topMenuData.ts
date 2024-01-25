export interface TopMenuData {
  // key is the name of the button
  [key: string]: { name: string }[];
}

export const topMenuData: TopMenuData = {
  'Button 1': [{ name: 'Top Button 1' }, { name: 'Top Button 2' }],
  'Button 2': [{ name: 'Top Button 3' }, { name: 'Top Button 4' }],
  // add more mappings as needed
};