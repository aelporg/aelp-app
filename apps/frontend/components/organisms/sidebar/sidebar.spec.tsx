import { render } from '@testing-library/react';

import Sidebar from './sidebar';

describe('Sidebar', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <Sidebar links={[{ href: '/test', icon: () => <div />, name: 'test' }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
