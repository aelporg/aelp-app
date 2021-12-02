import { render } from '@testing-library/react';

import UserProfileHeaderIcon from './user-profile-header-icon';

describe('UserProfileHeaderIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserProfileHeaderIcon />);
    expect(baseElement).toBeTruthy();
  });
});
