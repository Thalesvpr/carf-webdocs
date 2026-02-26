interface CameraMockProps {
  status?: string
  aligned?: boolean
  className?: string
}

export function CameraMock({
  status = 'Posicione o documento',
  aligned = false,
  className = '',
}: CameraMockProps) {
  const cornerColor = aligned ? '#22C55E' : '#FFFFFF'
  const cornerSize = 24
  const cornerThickness = 3

  return (
    <div className={`relative w-full h-full bg-zinc-900 overflow-hidden ${className}`}>
      {/* Camera "viewfinder" noise */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Dark overlay around cutout */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Document cutout area */}
        <div
          className="relative border border-white/20 rounded-sm"
          style={{
            width: '78%',
            aspectRatio: '1.586', // ID card ratio
          }}
        >
          {/* Corner markers - Top Left */}
          <svg className="absolute -top-0.5 -left-0.5" width={cornerSize} height={cornerSize}>
            <path
              d={`M0,${cornerSize} L0,0 L${cornerSize},0`}
              fill="none"
              stroke={cornerColor}
              strokeWidth={cornerThickness}
              strokeLinecap="round"
            />
          </svg>
          {/* Top Right */}
          <svg className="absolute -top-0.5 -right-0.5" width={cornerSize} height={cornerSize}>
            <path
              d={`M0,0 L${cornerSize},0 L${cornerSize},${cornerSize}`}
              fill="none"
              stroke={cornerColor}
              strokeWidth={cornerThickness}
              strokeLinecap="round"
            />
          </svg>
          {/* Bottom Left */}
          <svg className="absolute -bottom-0.5 -left-0.5" width={cornerSize} height={cornerSize}>
            <path
              d={`M0,0 L0,${cornerSize} L${cornerSize},${cornerSize}`}
              fill="none"
              stroke={cornerColor}
              strokeWidth={cornerThickness}
              strokeLinecap="round"
            />
          </svg>
          {/* Bottom Right */}
          <svg className="absolute -bottom-0.5 -right-0.5" width={cornerSize} height={cornerSize}>
            <path
              d={`M${cornerSize},0 L${cornerSize},${cornerSize} L0,${cornerSize}`}
              fill="none"
              stroke={cornerColor}
              strokeWidth={cornerThickness}
              strokeLinecap="round"
            />
          </svg>

          {/* Simulated document content (faint lines) */}
          <div className="absolute inset-4 flex flex-col justify-center gap-2 opacity-20">
            <div className="h-2 w-1/3 bg-white/40 rounded" />
            <div className="h-1.5 w-2/3 bg-white/30 rounded" />
            <div className="h-1.5 w-1/2 bg-white/30 rounded" />
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-12 bg-white/20 rounded" />
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="h-1.5 w-full bg-white/25 rounded" />
                <div className="h-1.5 w-3/4 bg-white/25 rounded" />
                <div className="h-1.5 w-2/3 bg-white/25 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status text */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <span
          className="px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            backgroundColor: aligned ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.15)',
            color: aligned ? '#22C55E' : '#FFFFFF',
          }}
        >
          {status}
        </span>
      </div>

      {/* Camera button hint */}
      <div className="absolute bottom-6 right-6">
        <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  )
}
