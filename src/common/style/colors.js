const colors = {
  primary: {
    main: 'rgba(62, 9, 246)',
    opaque: 'rgb(219,214,234)',
    opaqueScale: (opacity) => `rgba(62, 9, 246, ${opacity});`,
  },
  secondary: {
    main: 'rgb(9, 246, 180)',
    opaque: (opacity) => `rgba(9, 246, 180, ${opacity})`,
  },
  terciary:
  {
    main: 'rgb(193, 246, 9)',
    opaque: (opacity) => `rgba(193, 246, 9, ${opacity})`,
  },
  quarter: {
    main: 'rgb(246, 9, 76)',
    opaque: (opacity) => `rgba(246, 9, 76, ${opacity})`,
  },
};

export default colors;
