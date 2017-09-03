module.exports = [
  { _type: 'section', label: 'Display' },
  { _type: 'subsection', label: 'Window Options' },
  {
    _type: 'entry',
    name: 'defaultTopmost',
    valueType: 'bool',
    label: 'Always on Top as Default',
    description: 'If checked, TweetDeck Player window will be set to be always on top on startup.',
  },
  { _type: 'subsection', label: 'Display Font' },
  {
    _type: 'entry',
    name: 'customFonts',
    valueType: 'text',
    description: 'Leave it blank if you want to use the default font.',
  },
  { _type: 'subsection', label: 'Font size' },
  {
    _type: 'entry',
    name: 'customFontSize',
    valueType: 'text',
    description: 'It support CSS units (e.g. 12px, 14pt). Default is 12px.',
  },
  { _type: 'subsection', label: 'Custom Column Width' },
  {
    _type: 'entry',
    name: 'applyCustomizeSlider',
    valueType: 'bool',
    label: 'Enabled',
  },
  {
    _type: 'entry',
    name: 'customizeColumnSize',
    valueType: 'number',
    min: 250,
    max: 600,
    step: 1,
  },
  { _type: 'subsection', label: 'Miscellaneous' },
  {
    _type: 'entry',
    name: 'useSquareProfileImage',
    valueType: 'bool',
    label: 'Square Profile Image',
  },

  { _type: 'section', label: 'Timeline' },
  { _type: 'subsection', label: 'Word Filter' },
  {
    _type: 'entry',
    name: 'enableWordFilter',
    valueType: 'bool',
    label: 'Enable Word Filter',
  },
  {
    _type: 'entry',
    name: 'hideFilteredTweet',
    valueType: 'bool',
    label: 'Completely Hide Filtered Tweets',
  },
  {
    _type: 'entry',
    name: 'stripWhitespace',
    valueType: 'bool',
    label: 'Strip Whitespaces Before Filtering',
  },
  {
    _type: 'entry',
    name: 'filterUserName',
    valueType: 'bool',
    label: "Apply Filter to User's Name",
  },
  {
    _type: 'entry',
    name: 'filterWords',
    valueType: 'longtext',
    description: 'Enter one word per line. Words wrapped with slashes will be parsed as RegExp. (e.g. /spam/)<br>* <b>Requires reload to apply.</b>',
  },
  { _type: 'subsection', label: 'Tweaks' },
  {
    _type: 'entry',
    name: 'enableUnlinkis',
    valueType: 'bool',
    label: 'Enable Unlink.is',
    description: 'If turned on, ln.is(or linkis.com) URL will be converted to original URL.<br>* <b>Requires reload to apply.</b>',
  },
  {
    _type: 'entry',
    name: 'useStarForFavorite',
    valueType: 'bool',
    label: 'Show Stars on Favorited Tweets (instead of hearts)',
  },
  {
    _type: 'entry',
    name: 'openURLInInternalBrowser',
    valueType: 'bool',
    label: 'Open External URL with Internal Browser',
    description: "If turned on, External links will be opened with TweetDeck Player's browser window.<br>The default web browser will be used otherwise.",
  },
  {
    _type: 'entry',
    name: 'enableFastRetweet',
    valueType: 'bool',
    label: 'Enable Fast Retweet',
    description: 'Hold down the Shift key to open the retweet/quote dialog.',
  },
  {
    _type: 'entry',
    name: 'enterKeyTweet',
    valueType: 'bool',
    label: 'Press Enter Key to Tweet',
    description: 'Press Shift+Enter to insert a line break.',
  },
  {
    _type: 'entry',
    name: 'showColorLabels',
    valueType: 'bool',
    label: 'Show Color Labels',
  },
  { _type: 'subsection', label: 'Context Menu' },
  {
    _type: 'entry',
    name: 'enableOpenLinkinPopup',
    valueType: 'bool',
    label: 'Open Links in Popup',
  },
  {
    _type: 'entry',
    name: 'enableOpenImageinPopup',
    valueType: 'bool',
    label: 'Open Images in Popup',
  },
  { _type: 'subsection', label: 'GIF Autoplay' },
  {
    _type: 'entry',
    name: 'gifAutoplay',
    valueType: 'enum',
    description: '* <b>Requires reload to apply.</b>',
    options: [
      { value: 'default', label: 'Autoplay (Default)' },
      { value: 'mouseenter', label: 'Hover to Play' },
      { value: 'click', label: 'Click to Play' },
    ],
  },
  { _type: 'section', label: 'Notification' },
  { _type: 'subsection', label: 'Alarm Sound' },
  {
    _type: 'entry',
    name: 'applyNotiAlarmSound',
    valueType: 'bool',
    label: 'Enabled',
  },
  {
    _type: 'entry',
    name: 'notiAlarmSoundSource',
    valueType: 'alarmfile',
    label: 'Browse File',
  },
  { _type: 'section', label: 'Performance' },
  { _type: 'subsection', label: 'Animation' },
  {
    _type: 'entry',
    name: 'minimizeScrollAnimForTweetSel',
    valueType: 'bool',
    label: 'Minimize Scroll Animation for Tweet Selection',
  },

  { _type: 'section', label: 'Experimental' },
  { _type: 'subsection', label: 'Auto Save' },
  {
    _type: 'entry',
    name: 'enableAutoSaveFav',
    valueType: 'bool',
    label: 'Save Favorited Image Automatically',
  },
  {
    _type: 'entry',
    name: 'autoSaveFavUrlName',
    valueType: 'bool',
    label: 'Rename Saved Image File as URL',
  },
  { _type: 'subsection', label: 'Path to Save' },
  {
    _type: 'entry',
    name: 'autoSavePath',
    valueType: 'text',
    description: "Default path is 'Favorited Images' under TweetDeck Player's directory.",
  },
  { _type: 'subsection', label: 'Image Viewer' },
  {
    _type: 'entry',
    name: 'altImageViewer',
    valueType: 'bool',
    label: 'Use Alternative Image Viewer',
  },
  {
    _type: 'entry',
    name: 'tivClickForNextImage',
    valueType: 'bool',
    label: 'Click the Image to Cycle Through Images',
    description: 'You can still move forward or backword through images using the buttons on top of the screen.',
  },
  { _type: 'subsection', label: 'Feature' },
  {
    _type: 'entry',
    name: 'useCounterClear',
    valueType: 'bool',
    label: 'Clear notification counter periodically',
    description: '<b>Requires reload to apply.</b>',
  },
  {
    _type: 'entry',
    name: 'enableUserNotes',
    valueType: 'bool',
    label: 'Enable User note',
  },
  { _type: 'subsection', label: 'Privacy' },
  {
    _type: 'entry',
    name: 'blockGoogleAnalytics',
    valueType: 'bool',
    label: 'Block Google Analytics',
    description: 'You should restart the app to apply this setting.',
  },
  { _type: 'subsection', label: 'Auto Reload (Hours)' },
  {
      _type: 'entry',
      name: 'applyAutoReload',
      valueType: 'bool',
      label: 'Enabled',
  },
  {
    _type: 'entry',
    name: 'autoReloadCycle',
    valueType: 'number',
    min: 1,
    max: 168,
    step: 1,
  },
];
