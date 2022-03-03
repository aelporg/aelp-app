import * as React from 'react'
import {
  Renderer,
  TLPageState,
  TLPage,
} from '@tldraw/core'

export default function WhiteBoard() {
  const [pageState, setPageState] = React.useState<TLPageState>({
    id: '1',
    camera: { point: [0, 0], zoom: 1 },
    selectedIds: [],
  })

  const [page, setPage] = React.useState<TLPage>({
    id: '1',
    shapes: {},
    bindings: {},
    name: 'page',
  })

  const theme = React.useMemo(
    () => ({
      accent: 'rgb(255, 0, 0)',
      brushFill: 'rgba(0,0,0,.05)',
      brushStroke: 'rgba(0,0,0,.25)',
      selectStroke: 'rgb(66, 133, 244)',
      selectFill: 'rgba(65, 132, 244, 0.05)',
      background: 'rgb(248, 249, 250)',
      foreground: 'rgb(51, 51, 51)',
    }),
    []
  )

  return (
    <div className="tldraw">
      <Renderer
        shapeUtils={{}} // Required
        page={page} // Required
        pageState={pageState} // Required
        // onHoverShape={onHoverShape}
        // onUnhoverShape={onUnhoverShape}
        // onPointShape={onPointShape}
        // onPointCanvas={onPointCanvas}
        // onPointerMove={onPointerMove}
        // onDragShape={onDragShape}
        // meta={meta}
        theme={theme}
        id={undefined}
        containerRef={undefined}
        hideBounds={false}
        hideIndicators={false}
        hideHandles={false}
        hideCloneHandles={false}
        hideBindingHandles={false}
        hideRotateHandles={false}
        userId={undefined}
        users={undefined}
        snapLines={undefined}
        onBoundsChange={undefined}
      />
    </div>
  )
}
