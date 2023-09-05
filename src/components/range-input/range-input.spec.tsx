import { render } from '@testing-library/react';

import RangeInput from './range-input';

describe('RangeInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RangeInput />);
    expect(baseElement).toBeTruthy();
  });
});
