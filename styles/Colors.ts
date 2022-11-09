type typeEqualiter = typeof lightTheme

const lightTheme = {
  //main wordpress colors #014083  #00a1d2e5
  primary: '#0073AA',
  mediumBlue: '#00A0D2',
  //auxiliary hues
  accentRed: '#DC3232',
  accentOrange: '#F56E28',
  accentYellow: '#FFB900',
  accentGreen: '#46B450',
  accentPurple: '#826EB4',
  //Grays (silver mode)
  ultraDarkGray: '#191E23',
  darkGray: '#23282D',
  baseGray: '#a2b0be',
  // baseGray: '#32373C',
  ////'#00a1d26f' #00d2ba
  text: '#000',
  placeholderText: '#222B45',
  labelText: '#8f9bb3',
  background: "#fff",
  border: "#e4e9f2",
  inputField: '#f7f9fc',
  tint: '#2f95dc',
  sortIcon: 'lightblue',
  sortOpacity: '#7e7e7e00',
  deleteIcon: '#ff0000',
  divider: '#000000',
  toolbar: '#d7ddea',
  richToolbarSelectedBackground: '#bec5d3',
  icon: '#ffffff',
  header: '#2f95dc',
  submitButton: '#2f95dc',
  inAppIcons: '#2f95dc',
  appColor: '#2f95dc',
  codeEditorSyntax: 'stackoverflowLight',
  paginationButton: '#00a1d23e'
}

const darkTheme: typeEqualiter = {
  //main wordpress colors
  primary: '#0073AA',
  mediumBlue: '#00A0D2',
  //auxiliary hues
  accentRed: '#DC3232',
  accentOrange: '#F56E28',
  accentYellow: '#FFB900',
  accentGreen: '#46B450',
  accentPurple: '#826EB4',
  //grays
  ultraDarkGray: '#82878C',
  darkGray: '#A0A5AA',
  baseGray: '#B4B9BE',
  ////
  text: "#fff",
  placeholderText: '#8f9bb3',
  labelText: '#8f9bb3',
  background: "#222b45",
  border: "#101426",
  inputField: '#1a2138',
  tint: '#2f95dc',
  sortIcon: 'lightblue',
  sortOpacity: '#7e7e7e00',
  deleteIcon: '#ff0000',
  divider: '#ffffff',
  toolbar: '#111928',
  richToolbarSelectedBackground: '#242f43',
  icon: '#ffffff',
  header: '#000000',
  submitButton: '#00A0D2',
  inAppIcons: '#2f95dc',
  appColor: '#2f95dc',
  codeEditorSyntax: 'stackoverflowDark',
  paginationButton: '#00a1d23e'
}

export default {
  light: lightTheme,
  dark: darkTheme
};