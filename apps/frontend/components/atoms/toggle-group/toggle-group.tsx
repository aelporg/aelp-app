import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

/* eslint-disable-next-line */
export interface ToggleGroupProps {}

export function ToggleGroup(props: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root type="single" defaultValue="test2">
      <ToggleGroupPrimitive.Item className="py-2 px-2" value="test">
        test
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item className="py-2 px-2" value="test2">
        testt
      </ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  );
}

export default ToggleGroup;
