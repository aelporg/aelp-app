import { render } from '@testing-library/react';

import TopNav from './top-nav';

describe('TopNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNav heading="test" />);
    expect(baseElement).toBeTruthy();
  });
});
