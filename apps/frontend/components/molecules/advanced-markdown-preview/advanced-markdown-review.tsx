import dynamic from 'next/dynamic'
import type { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeKatex from 'rehype-katex'

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
      rehypePlugins={[
        [
          rehypeSanitize,
          {
            ...defaultSchema,
            attributes: {
              ...defaultSchema.attributes,
              span: [
                ...(defaultSchema.attributes.span || []),
                // List of all allowed tokens:
                ['className'],
              ],
              div: [...(defaultSchema.attributes.div || []), ['class']],
              code: [['className']],
            },
          },
        ],
        [rehypeKatex],
      ]}
      className="mrkdown"
      {...props}
    />
  )
}
