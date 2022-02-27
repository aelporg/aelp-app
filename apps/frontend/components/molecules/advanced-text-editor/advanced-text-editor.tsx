import classNames from 'classnames'
import dynamic from 'next/dynamic'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import type { MDEditorProps } from '@uiw/react-md-editor'
// import rehypeSanitize from 'rehype-sanitize'
// import rehypeKatex from 'rehype-katex'
// import rehypeMermaid from 'rehype-mermaid'
import './advanced-text-editor.module.scss'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[75px] justify-center items-center">
        Loading your editor
      </div>
    ),
  }
) as React.ComponentType<MDEditorProps>

export interface TextEditorProps {
  expanded?: boolean
  value: string
  onChange: (newValue: string) => void
  onFocus?: MDEditorProps['onFocus']
  onBlur?: MDEditorProps['onBlur']
  placeholder?: string
}

export default function AdvancedTextEditor({
  onFocus,
  expanded,
  placeholder,
  value,
  onChange,
}: TextEditorProps) {
  return (
    <div
      className={classNames(
        'flex-1',
        !expanded && 'ml-4',
        expanded && 'border-2 rounded-md'
      )}
    >
      {!expanded && (
        <textarea
          className="pt-1.5 h-8 w-full resize-none placeholder:font-medium"
          onFocus={e => onFocus(e as any)}
          placeholder={placeholder}
          readOnly={true}
        />
      )}
      {expanded && (
        <div className={'min-h-[75px]'}>
          <MDEditor
            value={value}
            onChange={onChange}
            autoFocus={true}
            hideToolbar={!expanded}
            height={250}
            onFocus={onFocus}
            previewOptions={{
              // rehypePlugins: [[rehypeSanitize], [rehypeKatex], [rehypeMermaid]],
              style: {
                fontFamily: 'sans-serif',
                
              },
            }}
            style={{
              fontFamily: 'sans-serif',
              boxShadow: 'none',
            }}
            placeholder="Write something..."
            visiableDragbar={false}
          />
        </div>
      )}
    </div>
  )
}
