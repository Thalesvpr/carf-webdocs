export const COLORS = {
  primary: '#1E3A5F',
  primaryLight: '#2A5A8F',
  primaryDark: '#142840',

  attendance: {
    pending: '#F44336',
    absent: '#FFCA28',
    declined: '#FF9800',
    present: '#66BB6A',
    signed: '#2E7D32',
  },

  map: {
    pinNew: '#F44336',
    pinUnit: '#1E3A5F',
    pinSelected: '#FF9800',
  },

  croqui: {
    lotStroke: '#00E5FF',
    lotFill: 'rgba(0, 229, 255, 0.20)',
    buildingStroke: '#FFD600',
    buildingFill: 'rgba(255, 214, 0, 0.20)',
  },

  quadra: {
    stroke: '#7C4DFF',
    fill: 'rgba(124, 77, 255, 0.20)',
  },
} as const;
