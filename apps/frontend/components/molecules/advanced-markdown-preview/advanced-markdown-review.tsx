import dynamic from 'next/dynamic'
import type { MarkdownPreviewProps } from '@uiw/react-markdown-preview'

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[75px] justify-center items-center">
        Loading Preview...
      </div>
    ),
  }
) as React.ComponentType<MarkdownPreviewProps>

export default function AdvancedMarkdownPreview(props: MarkdownPreviewProps) {
  return (
    <MarkdownPreview
      className="mrkdown"
      style={{
        fontFamily: 'sans-serif',
      }}
      {...props}
    />
  )
}
