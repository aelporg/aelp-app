import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import styles from './toggle-group.module.scss';

type PrimitiveRootProps =
  | (ToggleGroupPrimitive.ToggleGroupSingleProps &
      React.RefAttributes<HTMLDivElement>)
  | (ToggleGroupPrimitive.ToggleGroupMultipleProps &
      React.RefAttributes<HTMLDivElement>);

export interface ToggleItem {
  label: string;
  value: string;
}
export type ToggleGroupProps = PrimitiveRootProps & {
  items: ToggleItem[];
};

export function ToggleGroup({ items, ...props }: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root className="flex" {...props}>
      {items.map(({ label, value }, index) => {
        const isLast = index === items.length - 1;
        const isFirst = index === 0;

        return (
          <ToggleGroupPrimitive.Item
            key={value}
            className={classNames(
              'py-2 px-4 border text-md font-normal',
              isLast && 'rounded-r-lg',
              isFirst && 'rounded-l-lg',
              styles['toggle-group-item']
            )}
            value={value}
          >
            {label}
          </ToggleGroupPrimitive.Item>
        );
      })}
    </ToggleGroupPrimitive.Root>
  );
}

export default ToggleGroup;
