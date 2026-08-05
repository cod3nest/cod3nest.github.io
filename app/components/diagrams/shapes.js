// Six shapes cover every mechanism in the blog. A diagram picks one and supplies
// data; nothing here is authored per post.
//
//   Flow      ordered steps, left to right, arrows between   (a process)
//   Cycle     the same but closed, with a return path        (a loop)
//   Stack     layered boxes, bottom-up                       (an architecture)
//   Split     two or three columns compared side by side     (a choice)
//   Timeline  a horizontal axis with markers above and below (a sequence in time)
//   Curve     a plotted line with annotated points           (a trajectory)

import { Canvas, Figure, WrappedText, Arrow, track, wrapLines, FONT } from './primitives'

// ---------------------------------------------------------------- Flow

export function Flow({ title, desc, caption, steps, trackName = 'technical' }) {
  const t = track(trackName)
  const boxW = 190
  const gap = 54
  const boxH = 108
  const width = steps.length * boxW + (steps.length - 1) * gap + 40
  const height = boxH + 76

  return (
    <Figure caption={caption}>
      <Canvas width={width} height={height} title={title} desc={desc}>
        <Arrow id={`flow-${trackName}`} colour={t.stroke} />
        {steps.map((step, i) => {
          const x = 20 + i * (boxW + gap)
          const y = 44
          return (
            <g key={step.label}>
              <rect x={x} y={y} width={boxW} height={boxH} rx="10" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
              <circle cx={x + 22} cy={y + 22} r="13" fill={t.accentFill} />
              <text x={x + 22} y={y + 22} fontSize="12" fontWeight="700" fill={t.accentText} textAnchor="middle" dominantBaseline="middle">
                {i + 1}
              </text>
              <WrappedText x={x + boxW / 2} y={y + 52} width={boxW - 24} text={step.label} fill={t.text} size={14} weight={600} />
              {step.detail && (
                <WrappedText x={x + boxW / 2} y={y + 86} width={boxW - 24} text={step.detail} fill={t.muted} size={11.5} />
              )}
              {i < steps.length - 1 && (
                <line
                  x1={x + boxW + 10}
                  y1={y + boxH / 2}
                  x2={x + boxW + gap - 10}
                  y2={y + boxH / 2}
                  stroke={t.stroke}
                  strokeWidth="2"
                  markerEnd={`url(#flow-${trackName})`}
                />
              )}
            </g>
          )
        })}
      </Canvas>
    </Figure>
  )
}

// ---------------------------------------------------------------- Cycle

export function Cycle({ title, desc, caption, steps, returnLabel, trackName = 'technical' }) {
  const t = track(trackName)
  const boxW = 176
  const gap = 46
  const boxH = 96
  const width = steps.length * boxW + (steps.length - 1) * gap + 40
  const height = boxH + 132

  const firstX = 20 + boxW / 2
  const lastX = 20 + (steps.length - 1) * (boxW + gap) + boxW / 2
  const loopY = 44 + boxH + 46

  return (
    <Figure caption={caption}>
      <Canvas width={width} height={height} title={title} desc={desc}>
        <Arrow id={`cycle-${trackName}`} colour={t.stroke} />
        {steps.map((step, i) => {
          const x = 20 + i * (boxW + gap)
          const y = 44
          return (
            <g key={step.label}>
              <rect x={x} y={y} width={boxW} height={boxH} rx="10" fill={t.fill} stroke={t.stroke} strokeWidth="2" />
              <WrappedText x={x + boxW / 2} y={y + 36} width={boxW - 20} text={step.label} fill={t.text} size={14} weight={600} />
              {step.detail && (
                <WrappedText x={x + boxW / 2} y={y + 70} width={boxW - 20} text={step.detail} fill={t.muted} size={11.5} />
              )}
              {i < steps.length - 1 && (
                <line x1={x + boxW + 8} y1={y + boxH / 2} x2={x + boxW + gap - 10} y2={y + boxH / 2} stroke={t.stroke} strokeWidth="2" markerEnd={`url(#cycle-${trackName})`} />
              )}
            </g>
          )
        })}
        {/* return path */}
        <path
          d={`M ${lastX} ${44 + boxH} L ${lastX} ${loopY} L ${firstX} ${loopY} L ${firstX} ${44 + boxH + 10}`}
          fill="none"
          stroke={t.stroke}
          strokeWidth="2"
          strokeDasharray="6 5"
          markerEnd={`url(#cycle-${trackName})`}
        />
        {returnLabel && (
          <WrappedText x={(firstX + lastX) / 2} y={loopY + 20} width={width - 120} text={returnLabel} fill={t.muted} size={12} />
        )}
      </Canvas>
    </Figure>
  )
}

// ---------------------------------------------------------------- Stack

export function Stack({ title, desc, caption, layers, footnote, trackName = 'technical' }) {
  const t = track(trackName)
  const width = 640
  const layerH = 84
  const gap = 14
  const height = layers.length * (layerH + gap) + (footnote ? 44 : 16) + 16

  return (
    <Figure caption={caption}>
      <Canvas width={width} height={height} title={title} desc={desc}>
        {layers.map((layer, i) => {
          const y = 8 + i * (layerH + gap)
          const isTop = i === 0
          return (
            <g key={layer.label}>
              <rect
                x="8"
                y={y}
                width={width - 16}
                height={layerH}
                rx="10"
                fill={isTop ? t.accentFill : t.fill}
                stroke={t.stroke}
                strokeWidth="2"
              />
              <WrappedText
                x={width / 2}
                y={y + (layer.detail ? 30 : layerH / 2)}
                width={width - 60}
                text={layer.label}
                fill={isTop ? t.accentText : t.text}
                size={15}
                weight={700}
              />
              {layer.detail && (
                <WrappedText
                  x={width / 2}
                  y={y + 58}
                  width={width - 60}
                  text={layer.detail}
                  fill={isTop ? '#e8d5a8' : t.muted}
                  size={12}
                />
              )}
            </g>
          )
        })}
        {footnote && (
          <WrappedText x={width / 2} y={height - 20} width={width - 40} text={footnote} fill={t.muted} size={12} />
        )}
      </Canvas>
    </Figure>
  )
}

// ---------------------------------------------------------------- Split

// The un-emphasised columns in a comparison. Slate rather than either track's
// colour, so the one column that does carry the track colour is the signal.
const NEUTRAL = {
  fill: '#f8fafc',
  stroke: '#546e7a',
  text: '#1c2833',
  accentFill: '#546e7a',
  accentText: '#ffffff',
  muted: '#546e7a',
}

export function Split({ title, desc, caption, columns, trackName = 'technical' }) {
  const t = track(trackName)
  const colW = 210
  const gap = 22
  const itemSize = 12
  const lineStep = itemSize * 1.35
  const itemGap = 13
  const width = columns.length * colW + (columns.length - 1) * gap + 24
  const textW = colW - 46

  // Each item is laid out at the height it actually occupies. A fixed row step
  // overlapped the row below the moment one item wrapped to two lines, which it
  // did on most columns.
  const laidOut = columns.map((column) => {
    let cursor = 84
    const items = column.items.map((item) => {
      const lines = wrapLines(item, textW, itemSize)
      const centre = cursor + ((lines.length - 1) * lineStep) / 2
      cursor += lines.length * lineStep + itemGap
      return { item, centre }
    })
    return { ...column, items, bottom: cursor }
  })

  const height = Math.max(...laidOut.map((c) => c.bottom)) + 12

  return (
    <Figure caption={caption}>
      <Canvas width={width} height={height} title={title} desc={desc}>
        {laidOut.map((column, i) => {
          const x = 12 + i * (colW + gap)
          // Colour marks the recommended column, nothing else. Setting it per
          // column as a visual differentiator put gold — the financial track's
          // colour — on "AWS CDK" in a technical post, which says something
          // untrue. The emphasised column takes the post's track colour; the
          // rest are neutral (BRANDING §3: gold is an accent, not decoration).
          const columnTrack = column.emphasis ? t : NEUTRAL
          return (
            <g key={column.label}>
              <rect x={x} y="8" width={colW} height={height - 20} rx="10" fill="#ffffff" stroke={columnTrack.stroke} strokeWidth="2" />
              <rect x={x} y="8" width={colW} height="52" rx="10" fill={columnTrack.accentFill} />
              <rect x={x} y="46" width={colW} height="14" fill={columnTrack.accentFill} />
              <WrappedText x={x + colW / 2} y="34" width={colW - 20} text={column.label} fill={columnTrack.accentText} size={14} weight={700} />
              {column.items.map(({ item, centre }) => (
                <g key={item}>
                  <circle cx={x + 20} cy={centre} r="3" fill={columnTrack.stroke} />
                  <WrappedText
                    x={x + 32}
                    y={centre}
                    width={textW}
                    text={item}
                    fill={columnTrack.text}
                    size={itemSize}
                    anchor="start"
                  />
                </g>
              ))}
            </g>
          )
        })}
      </Canvas>
    </Figure>
  )
}

// ---------------------------------------------------------------- Timeline

export function Timeline({ title, desc, caption, points, axisLabel, trackName = 'financial' }) {
  const t = track(trackName)
  const width = 760
  // Inset so the first and last markers have room for a label centred on them.
  // At the previous 40px inset both end labels were simply cut off by the canvas.
  const left = 86
  const right = width - 86
  const step = (right - left) / (points.length - 1 || 1)
  const labelW = Math.min(step - 10, 150)

  const labelSize = 12.5
  const detailSize = 11
  const labelStep = labelSize * 1.35
  const detailStep = detailSize * 1.35

  // Measure both blocks so the canvas can be sized to whatever the longest
  // label/detail pair actually needs, above and below the axis independently.
  const measured = points.map((point, i) => {
    const above = i % 2 === 0
    const labelLines = wrapLines(point.label, labelW, labelSize).length
    const detailLines = point.detail ? wrapLines(point.detail, labelW, detailSize).length : 0
    return { ...point, above, labelLines, detailLines }
  })

  const extent = (side) =>
    Math.max(
      0,
      ...measured
        .filter((p) => p.above === side)
        .map((p) => 34 + p.labelLines * labelStep + (p.detailLines ? 10 + p.detailLines * detailStep : 0))
    )

  const aboveExtent = extent(true)
  const belowExtent = extent(false)
  const axisY = aboveExtent + 18
  const height = axisY + belowExtent + (axisLabel ? 46 : 18)

  return (
    <Figure caption={caption}>
      <Canvas width={width} height={height} title={title} desc={desc}>
        <Arrow id={`tl-${trackName}`} colour={t.stroke} />
        <line x1={left - 30} y1={axisY} x2={right + 30} y2={axisY} stroke={t.stroke} strokeWidth="2" markerEnd={`url(#tl-${trackName})`} />
        {measured.map((point, i) => {
          const x = left + i * step
          const dir = point.above ? -1 : 1
          const labelCentre = axisY + dir * (34 + ((point.labelLines - 1) * labelStep) / 2)
          const detailCentre =
            labelCentre + dir * (((point.labelLines - 1) * labelStep) / 2 + 10 + ((point.detailLines - 1) * detailStep) / 2 + detailStep / 2)
          return (
            <g key={point.label}>
              <line
                x1={x}
                y1={axisY + dir * 10}
                x2={x}
                y2={labelCentre - dir * (((point.labelLines - 1) * labelStep) / 2 + 12)}
                stroke={t.stroke}
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx={x} cy={axisY} r="6" fill={t.accentFill} />
              <WrappedText x={x} y={labelCentre} width={labelW} text={point.label} fill={t.text} size={labelSize} weight={600} />
              {point.detail && (
                <WrappedText x={x} y={detailCentre} width={labelW} text={point.detail} fill={t.muted} size={detailSize} />
              )}
            </g>
          )
        })}
        {axisLabel && (
          <WrappedText x={width / 2} y={height - 16} width={width - 60} text={axisLabel} fill={t.muted} size={12} />
        )}
      </Canvas>
    </Figure>
  )
}

// ---------------------------------------------------------------- Curve

export function Curve({ title, desc, caption, series, markers = [], xLabel, yLabel, trackName = 'financial' }) {
  const t = track(trackName)
  const width = 720
  const height = 320
  const padL = 62
  const padR = 24
  const padT = 24
  const padB = 56

  const allPoints = series.flatMap((s) => s.points)
  const maxX = Math.max(...allPoints.map((p) => p[0]))
  const minY = Math.min(0, ...allPoints.map((p) => p[1]))
  const maxY = Math.max(...allPoints.map((p) => p[1]))

  const sx = (x) => padL + (x / maxX) * (width - padL - padR)
  const sy = (y) => height - padB - ((y - minY) / (maxY - minY || 1)) * (height - padT - padB)

  return (
    <Figure caption={caption}>
      <Canvas width={width} height={height} title={title} desc={desc}>
        {/* Zero is the line that carries the meaning on a chart that crosses it —
            payback is "cumulative contribution reaches zero". It used to be a
            faint dash while the plot's bottom edge was drawn as a solid axis, so
            the eye read the wrong line as zero. Zero is solid and labelled; the
            bottom edge is only drawn when it *is* zero. */}
        <line x1={padL} y1={padT} x2={padL} y2={height - padB} stroke={t.stroke} strokeWidth="2" />
        {minY < 0 ? (
          <g>
            <line x1={padL} y1={sy(0)} x2={width - padR} y2={sy(0)} stroke={t.stroke} strokeWidth="2" />
            <text x={padL - 10} y={sy(0)} fontFamily={FONT} fontSize="12" fill={t.muted} textAnchor="end" dominantBaseline="middle">
              0
            </text>
          </g>
        ) : (
          <line x1={padL} y1={height - padB} x2={width - padR} y2={height - padB} stroke={t.stroke} strokeWidth="2" />
        )}

        {series.map((s) => (
          <polyline
            key={s.label}
            points={s.points.map(([x, y]) => `${sx(x)},${sy(y)}`).join(' ')}
            fill="none"
            stroke={s.muted ? NEUTRAL.accentFill : t.accentFill}
            strokeWidth="3"
            strokeDasharray={s.dashed ? '7 5' : undefined}
            strokeLinejoin="round"
          />
        ))}

        {markers.map((m) => {
          // Clamped: a marker at either end of the series pushed its label past
          // the edge of the canvas, where it was simply cut off.
          const cx = sx(m.at[0])
          const labelX = Math.min(Math.max(cx, padL + 62), width - padR - 62)
          return (
            <g key={m.label}>
              <circle cx={cx} cy={sy(m.at[1])} r="6" fill="#ffffff" stroke={t.accentFill} strokeWidth="3" />
              <WrappedText x={labelX} y={sy(m.at[1]) - 26} width={124} text={m.label} fill={t.text} size={12} weight={600} />
            </g>
          )
        })}

        {series.length > 1 &&
          series.map((s, i) => (
            <g key={`legend-${s.label}`}>
              <line
                x1={padL + 8 + i * 210}
                y1={padT - 8}
                x2={padL + 34 + i * 210}
                y2={padT - 8}
                stroke={s.muted ? NEUTRAL.accentFill : t.accentFill}
                strokeWidth="3"
                strokeDasharray={s.dashed ? '7 5' : undefined}
              />
              <WrappedText x={padL + 40 + i * 210} y={padT - 8} width={170} text={s.label} fill={t.muted} size={11.5} anchor="start" />
            </g>
          ))}

        {xLabel && <WrappedText x={(padL + width - padR) / 2} y={height - 16} width={width - 120} text={xLabel} fill={t.muted} size={12} />}
        {yLabel && (
          <g transform={`translate(16 ${(padT + height - padB) / 2}) rotate(-90)`}>
            <WrappedText x={0} y={0} width={height - 80} text={yLabel} fill={t.muted} size={12} />
          </g>
        )}
      </Canvas>
    </Figure>
  )
}
