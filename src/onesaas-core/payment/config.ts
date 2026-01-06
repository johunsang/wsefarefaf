/**
 * 결제 설정
 *
 * 환경 변수 기반 설정 (클라이언트/서버 모두 사용 가능)
 */

export type PaymentProvider = 'portone' | 'tosspay'

export interface PaymentConfig {
  enabled: boolean
  provider: PaymentProvider
  currency: string
}

/**
 * 결제 설정 로드 (환경 변수 기반)
 *
 * 환경 변수:
 * - NEXT_PUBLIC_PAYMENT_ENABLED: "true" | "false"
 * - NEXT_PUBLIC_PAYMENT_PROVIDER: "portone" | "tosspay"
 */
export function getPaymentConfig(): PaymentConfig {
  const enabled = process.env.NEXT_PUBLIC_PAYMENT_ENABLED === 'true'
  const provider = (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER as PaymentProvider) || 'portone'

  return {
    enabled,
    provider,
    currency: 'KRW',
  }
}

/**
 * 결제 활성화 여부
 */
export function isPaymentEnabled(): boolean {
  return getPaymentConfig().enabled
}

/**
 * 현재 결제 제공자
 */
export function getPaymentProvider(): PaymentProvider {
  return getPaymentConfig().provider
}

/**
 * 금액 포맷
 */
export function formatPrice(amount: number, currency = 'KRW'): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
