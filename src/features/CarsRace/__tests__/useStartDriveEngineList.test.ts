import { renderHookWithProviders } from '@/app/test-utils/renderHookWithProviders';
import { useStartDriveEngineList } from '../hooks/useStartDriveEngineList';

describe('useStartDriveEngineList', () => {
  it('should return { startDriveEngineList, isLoading }', () => {
    const { result } = renderHookWithProviders(() => useStartDriveEngineList({ carIDs: [1, 2] }));

    expect(result.current).toHaveProperty('startDriveEngineList')
    expect(result.current).toHaveProperty('isLoading')
  });
});
