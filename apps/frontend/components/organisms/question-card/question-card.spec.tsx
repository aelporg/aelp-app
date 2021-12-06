import { render } from '@testing-library/react';

import QuestionCard from './question-card';

describe('QuestionCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionCard />);
    expect(baseElement).toBeTruthy();
  });
});
