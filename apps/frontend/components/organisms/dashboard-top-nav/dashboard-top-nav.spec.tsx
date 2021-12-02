import { render } from '@testing-library/react';

import DashboardTopNav from './dashboard-top-nav';

describe('DashboardTopNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardTopNav heading="test" />);
    expect(baseElement).toBeTruthy();
  });
});
