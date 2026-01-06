/**
 * 기능 플래그 관리
 *
 * config에서 기능 활성화/비활성화를 결정합니다.
 */

import { config } from './config'

/**
 * 인증 관련 플래그
 */
export const auth = {
  isEnabled: () => config.features.auth.enabled,

  isProviderEnabled: (provider: 'email' | 'google' | 'kakao') => {
    if (!config.features.auth.enabled) return false
    return config.features.auth.providers[provider] ?? false
  },

  getEnabledProviders: () => {
    if (!config.features.auth.enabled) return []
    return Object.entries(config.features.auth.providers)
      .filter(([, enabled]) => enabled)
      .map(([provider]) => provider)
  },
}

/**
 * 결제 관련 플래그
 */
export const payment = {
  isEnabled: () => config.features.payment.enabled,

  getProvider: () => config.features.payment.provider,
}

/**
 * 관리자 대시보드 플래그
 */
export const admin = {
  isEnabled: () => config.features.admin.enabled,
}

/**
 * AI 기능 플래그
 */
export const ai = {
  isEnabled: () => config.features.ai.enabled,

  getProviders: () => config.features.ai.providers,
}

/**
 * 모든 플래그 내보내기
 */
export const featureFlags = {
  auth,
  payment,
  admin,
  ai,
}

export default featureFlags
