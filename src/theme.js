const theme = {
    primaryColor: 'primary',
    fontFamily: 'Source Sans Pro, sans-serif',
    primaryShade: 5,
    colors: {
        primary: [
            '#E8E5F3',
            '#CDC4E8',
            '#B2A2E4',
            '#977BE7',
            '#7950F2',
            '#6B45DD',
            '#603EC7',
            '#5C42A9',
            '#57448F',
            '#52447A',
            '#4C4269',
        ],
        grey: '#272727',
        lightGrey: '#E6E6E6',
        black: '#1A1A1A',
        white: '#fff',
        success: '#32FFCE',
        error: '#FE6854',
    },
    type: {},
    space: (factor) => 8 * factor + 'px',
    transition: 'all 0.25s cubic-bezier(0.53, 0.21, 0, 1)',
};

export default theme;
