import { COLORS } from '@/constants/colors'

export interface MapPin {
  x: number  // percentage 0-100
  y: number
  color: string
  label?: string
}

export interface MapPolygon {
  points: string  // SVG points string
  stroke: string
  fill: string
  label?: string
}

interface MapViewMockProps {
  pins?: MapPin[]
  polygons?: MapPolygon[]
  children?: React.ReactNode
  dark?: boolean
  className?: string
}

const defaultPins: MapPin[] = [
  { x: 25, y: 30, color: COLORS.map.pinNew, label: 'Novo' },
  { x: 45, y: 55, color: COLORS.map.pinUnit },
  { x: 65, y: 40, color: COLORS.map.pinUnit },
  { x: 35, y: 70, color: COLORS.attendance.signed },
  { x: 75, y: 65, color: COLORS.map.pinSelected },
  { x: 55, y: 25, color: COLORS.map.pinUnit },
  { x: 20, y: 60, color: COLORS.attendance.signed },
]

const defaultPolygons: MapPolygon[] = [
  {
    points: '15,20 85,20 85,80 15,80',
    stroke: COLORS.quadra.stroke,
    fill: COLORS.quadra.fill,
    label: 'Quadra',
  },
  {
    points: '20,25 45,25 45,50 20,50',
    stroke: COLORS.croqui.lotStroke,
    fill: COLORS.croqui.lotFill,
  },
  {
    points: '50,25 80,25 80,50 50,50',
    stroke: COLORS.croqui.lotStroke,
    fill: COLORS.croqui.lotFill,
  },
  {
    points: '25,55 40,55 40,75 25,75',
    stroke: COLORS.croqui.buildingStroke,
    fill: COLORS.croqui.buildingFill,
  },
]

export function MapViewMock({
  pins = defaultPins,
  polygons = defaultPolygons,
  children,
  dark = false,
  className = '',
}: MapViewMockProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: dark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          : '#e8e4d8',
      }}
    >
      {/* Grid lines (simulates map tiles) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}
              strokeWidth="0.5"
            />
          </pattern>
          {/* Roads */}
          <pattern id="roads" width="120" height="120" patternUnits="userSpaceOnUse">
            <line x1="60" y1="0" x2="60" y2="120" stroke={dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} strokeWidth="3" />
            <line x1="0" y1="60" x2="120" y2="60" stroke={dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#roads)" />

        {/* Polygons */}
        {polygons.map((poly, i) => (
          <polygon
            key={i}
            points={poly.points.split(' ').map(p => {
              const [x, y] = p.split(',')
              return `${(parseFloat(x) / 100) * 100}%,${(parseFloat(y) / 100) * 100}%`
            }).join(' ')}
            fill={poly.fill}
            stroke={poly.stroke}
            strokeWidth="1.5"
            strokeDasharray={poly.stroke === COLORS.quadra.stroke ? '4,2' : 'none'}
          />
        ))}
      </svg>

      {/* Pins */}
      {pins.map((pin, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center"
          style={{
            left: `${pin.x}%`,
            top: `${pin.y}%`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <svg width="24" height="32" viewBox="0 0 24 32">
            <path
              d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z"
              fill={pin.color}
            />
            <circle cx="12" cy="11" r="4" fill="white" fillOpacity="0.9" />
          </svg>
          {pin.label && (
            <span
              className="text-[9px] font-semibold px-1 rounded mt-0.5"
              style={{
                backgroundColor: pin.color,
                color: 'white',
              }}
            >
              {pin.label}
            </span>
          )}
        </div>
      ))}

      {/* Custom overlay children */}
      {children}
    </div>
  )
}
