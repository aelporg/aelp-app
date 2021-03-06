import dynamic from 'next/dynamic'
import type { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeKatex from 'rehype-katex'
import Loader from '@components/primitives/loader'

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[200px] justify-center items-center">
        <Loader />
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
