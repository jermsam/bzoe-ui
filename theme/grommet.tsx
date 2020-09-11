import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export default deepMerge(grommet, {
  global: {
    animation: {
      duration: '10s',
    },
    colors:{ brand:'#C2185B', 'accent-1': '#1565C0' // '#832D4B' 
  },
    breakpoints: {
      small: {
        value: 1100,
      },
    },
    drop: {
      background: 'accent-1',
      shadowSize: 'medium',
      extend: `
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          overflow: hidden;
        `,
    },
    elevation: {
      dark: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
      light: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
    },
    input: {
      weight: 400,
    },
    /* font: {
      family: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif", // 'Roboto',
      size: '1em', // '14px',
      height: '4rem', // '20px',
      style: 'normal',
    }, */
    font: {
      family: "'Metric','ArcadeClassic', Arial, sans-serif",
      face: `
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
        font-weight: 700;
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
        font-weight: 600;
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
        font-weight: 100;
      }
      @font-face {
        font-family: "ArcadeClassic";
        src: url("../fonts/arcadeclassic.woff") format('woff');
      }
    `,
    },
    button: {
      border: {
        color: 'brand',
      },
    },
    focus: {
      border: {
        color: 'transparent',
      },
    },
    size: {
      sidebar: '550px',
    },
  },
  'textInput.brilliantInput': {
    placeholder: {
      extend: () => `color: #fff`,
    },
  },
  text: {
    medium: {
      size: '14px',
    },
  },
  formField: {
    border: {
      color: '#558b2f',
    },
  },
  tab: {
    active: {
      color: 'accent-1',
    },
    hover: {
      //  color: '#FFD700',
    },
    // color: 'white',
    border: {
      side: 'bottom',
      size: 'small',
      color: {
        dark: 'accent-1',
        light: 'accent-1',
      },
      active: {
        color: {
          dark: 'accent-1',
          light: 'accent-1',
        },
      },
      hover: {
        color: {
          dark: 'accent-1',
          light: 'accent-1',
        },
      },
    },
  },
  border: {
    side: 'bottom',
    size: 'small',
    color: {
      dark: 'accent-1',
      light: 'accent-1',
    },
    active: {
      color: {
        dark: 'accent-1',
        light: 'accent-1',
      },
    },
    hover: {
      color: {
        dark: 'accent-1',
        light: 'accent-1',
      },
    },
  },
});