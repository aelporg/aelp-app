export default function ScreenCenter(props: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">{props.children}</div>
  )
}
