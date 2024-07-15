import { PageNavigation } from '../ui/PageNavigation';
import { renderUIWithMemoryRouter } from '../../../app/test-utils/renderUIWithMemoryRouter';
import { screen } from '@testing-library/dom';

describe('PageNavigation', () => {
  it('should have two links', () => {
    const expectedNumberOfLinks = 2;
    renderUIWithMemoryRouter(<PageNavigation />);
    expect(screen.getAllByRole('link')).toHaveLength(expectedNumberOfLinks);
  });
});
