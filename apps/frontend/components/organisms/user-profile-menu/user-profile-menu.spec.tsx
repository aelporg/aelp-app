import { render } from '@testing-library/react';

import UserProfileMenu from './user-profile-menu';

describe('UserProfileMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserProfileMenu />);
    expect(baseElement).toBeTruthy();
  });
});
