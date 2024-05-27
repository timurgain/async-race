import { renderHookWithProviders } from '@/app/test-utils/renderHookWithProviders';
import { useStopEngineList } from '../hooks/useStopEngineList';

describe('useStopEngineList', () => {
  it('should return { stopEngineList, isLoading }', () => {
    const { result } = renderHookWithProviders(() => useStopEngineList({carIDs: [1, 2]}))

    expect(result.current).toHaveProperty('stopEngineList')
    expect(result.current).toHaveProperty('isLoading')
  })
})
