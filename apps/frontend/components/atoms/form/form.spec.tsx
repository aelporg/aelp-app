import { render } from '@testing-library/react';

import HForm from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HForm />);
    expect(baseElement).toBeTruthy();
  });
});
