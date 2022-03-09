import Image from 'next/image'

export default function NoResultMessage({
  title,
  children,
}: {
  title?: string,
  children?: React.ReactNode
}) {
  return (
    <div className="text-center text-sm p-4  w-96 font-medium text-gray-400">
      <div className="mb-3">
        <Image
          src={'/images/empty-state.webp'}
          alt="No result"
          width={150}
          quality={100}
          height={150}
        />
      </div>
      <h3 className='text-lg font-semibold text-gray-500'>{title}</h3>
      {children}
    </div>
  )
}
