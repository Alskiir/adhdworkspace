import { leftMenuData } from '../leftMenu/leftMenuData'; // adjust the path as needed

export const topMenuData = {
  [leftMenuData[0].name]: [
    { name: 'Home Button 1', path: '/' },
    { name: 'Home Button 2', path: '/HomeButton2' }
  ],
  [leftMenuData[1].name]: [
    { name: 'Block Button 1', path: '/BlockButton1' },
    { name: 'Block Button 2', path: '/BlockButton2' }
  ],
  [leftMenuData[2].name]: [
    { name: 'Tasks Button 1', path: '/TasksButton1' },
    { name: 'Tasks Button 2', path: '/TasksButton2' }
  ],
  [leftMenuData[3].name]: [
    { name: 'Stats Button 1', path: '/StatsButton1' },
    { name: 'Stats Button 2', path: '/StatsButton2' }
  ],
  [leftMenuData[4].name]: [
    { name: 'Settings Button 1', path: '/SettingsButton1' },
    { name: 'Settings Button 2', path: '/SettingsButton2' }
  ]
  // add more mappings as needed
};
