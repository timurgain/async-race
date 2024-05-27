import { useStartDriveEngine } from '../hooks/useStartDriveEngine';
import { renderHookWithProviders } from '@/app/test-utils/renderHookWithProviders';

describe('useStartDriveEngine hook', () => {
  it('should return { startDriveEngine, isLoading }', () => {
    const { result } = renderHookWithProviders(() => useStartDriveEngine({ carID: 1 }));
    
    expect(result.current).toHaveProperty('startDriveEngine');
    expect(result.current).toHaveProperty('isLoading');
  });
});
