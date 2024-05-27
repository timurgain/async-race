import { renderUIWithProviders } from '@/app/test-utils/renderUIWithProviders';
import { EngineDrive } from '../ui/EngineDrive';
import { screen } from '@testing-library/react';

describe('EngineDrive', () => {
  it('should render EngineDrive iu', () => {
    renderUIWithProviders(<EngineDrive carID={1} />);
    expect(screen.getByRole('button')).toBeTruthy();
  });
});
