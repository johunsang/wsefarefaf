/**
 * 관리자 설정
 *
 * 환경 변수 기반 설정 (클라이언트/서버 모두 사용 가능)
 */

export interface AdminConfig {
  enabled: boolean
  features: {
    analytics: boolean
    userManagement: boolean
    contentManagement: boolean
    settings: boolean
  }
}

/**
 * 관리자 설정 로드 (환경 변수 기반)
 *
 * 환경 변수:
 * - NEXT_PUBLIC_ADMIN_ENABLED: "true" | "false"
 */
export function getAdminConfig(): AdminConfig {
  const enabled = process.env.NEXT_PUBLIC_ADMIN_ENABLED === 'true'

  return {
    enabled,
    features: {
      analytics: true,
      userManagement: true,
      contentManagement: false,
      settings: true,
    },
  }
}

/**
 * 관리자 기능 활성화 여부
 */
export function isAdminEnabled(): boolean {
  return getAdminConfig().enabled
}

/**
 * 관리자 메뉴 항목
 */
export interface AdminMenuItem {
  id: string
  label: string
  icon: string
  href: string
  enabled: boolean
}

export function getAdminMenuItems(): AdminMenuItem[] {
  const config = getAdminConfig()

  return [
    {
      id: 'dashboard',
      label: '대시보드',
      icon: '📊',
      href: '/admin',
      enabled: config.enabled,
    },
    {
      id: 'users',
      label: '사용자 관리',
      icon: '👥',
      href: '/admin/users',
      enabled: config.features.userManagement,
    },
    {
      id: 'analytics',
      label: '통계',
      icon: '📈',
      href: '/admin/analytics',
      enabled: config.features.analytics,
    },
    {
      id: 'content',
      label: '콘텐츠',
      icon: '📝',
      href: '/admin/content',
      enabled: config.features.contentManagement,
    },
    {
      id: 'settings',
      label: '설정',
      icon: '⚙️',
      href: '/admin/settings',
      enabled: config.features.settings,
    },
  ].filter((item) => item.enabled)
}
