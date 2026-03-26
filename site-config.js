/**
 * cCc League One Site Configuration
 */

const SITE_CONFIG = {
  // Clan Identity
  clanName: 'cCc League One',
  clanAbbr: 'ccc',

  // Progress ranking weights (must sum to 100)
  rankingWeights: {
    chestPoints: 35,
    growth: 30,
    events: 25,
    troopUpgrades: 10
  },
  
  // Branding
  primaryColor: '#6c5ce7',
  secondaryColor: '#f0f2f5',
  favicon: 'favicon.png',
  
  // Authentication
  googleClientId: '47674606892-0m90hd0cd01kijo69ssuqtn1j3igp32i.apps.googleusercontent.com',
  
  // Members hidden from progress stats when not logged in (e.g. leaders with special privileges)
  // Names must match exactly as they appear in the Members sheet (case-insensitive match applied at runtime)
  maskedMembers: [
    'LION S 5',
    'MerdO LH', 
    'Otto S4',
    '01ASENA sk5',
    'cCc CP City',
    // 'AnotherSpecialMember'
  ],

  // Navigation Pages
  pages: [
    { name: 'Dashboard', file: 'dashboard.html', icon: 'chests.png' },
    { name: 'Events', file: 'events.html', icon: 'events.png' },
    { name: 'Members', file: 'members.html', icon: 'members.png' },
    { name: 'Troops', file: 'troops.html', icon: 'troops.png' },
    { name: 'Progress', file: 'progress.html', icon: 'progress.png' },
    { name: 'Calendar', file: 'calendar.html', icon: 'calendar.png' }
  ]
};
