import { renderHookWithProviders } from '@/app/test-utils/renderHookWithProviders'
import { useStopEngine } from '../hooks/useStopEngine'

describe('useStopEngine', () => {
  it('should return { stopEngine, isLoading }', () => {
    const { result } = renderHookWithProviders(() => useStopEngine({carID: 1}))

    expect(result.current).toHaveProperty('stopEngine')
    expect(result.current).toHaveProperty('isLoading')
  })
})
