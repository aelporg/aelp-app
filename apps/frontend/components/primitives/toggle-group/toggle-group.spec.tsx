import { render } from '@testing-library/react';

import ToggleGroup from './toggle-group';

describe('ToggleGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleGroup />);
    expect(baseElement).toBeTruthy();
  });
});
