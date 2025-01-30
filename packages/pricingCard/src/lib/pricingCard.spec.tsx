import { render } from '@testing-library/react';

import PricingCard from './pricingCard';

describe('PricingCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingCard />);
    expect(baseElement).toBeTruthy();
  });
});
