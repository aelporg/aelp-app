import './tag.module.scss';

export interface TagProps {
  children?: React.ReactNode;
}

export function Tag(props: TagProps) {
  return (
    <span className="bg-accent bg-opacity-10 px-2 py-1 hover:underline cursor-pointer text-accent-darker rounded-md text-sm">
      {props.children}
    </span>
  );
}

export default Tag;
