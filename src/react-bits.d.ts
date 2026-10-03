declare module '*/components/SplitText.jsx' {
  import type { ComponentType, ReactNode } from 'react'
  const SplitText: ComponentType<{
    text: string
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'div'
    className?: string
    delay?: number
    duration?: number
    ease?: string
    splitType?: 'chars' | 'words' | 'lines'
    from?: Record<string, number>
    to?: Record<string, number>
    threshold?: number
    rootMargin?: string
    textAlign?: 'left' | 'center' | 'right'
    onLetterAnimationComplete?: () => void
    children?: ReactNode
  }>
  export default SplitText
}

declare module '*/components/BlurText.jsx' {
  import type { ComponentType } from 'react'
  const BlurText: ComponentType<{
    text?: string
    delay?: number
    className?: string
    animateBy?: 'words' | 'chars'
    direction?: 'top' | 'bottom'
    threshold?: number
    rootMargin?: string
    animationFrom?: Record<string, number>
    animationTo?: Record<string, number[]>
    easing?: (t: number) => number
    onAnimationComplete?: () => void
    stepDuration?: number
  }>
  export default BlurText
}

declare module '*/components/GradientText.jsx' {
  import type { ComponentType, ReactNode } from 'react'
  const GradientText: ComponentType<{
    children?: ReactNode
    className?: string
    colors?: string[]
    animationSpeed?: number
    showBorder?: boolean
    direction?: 'horizontal' | 'vertical' | 'diagonal'
    pauseOnHover?: boolean
    yoyo?: boolean
  }>
  export default GradientText
}

declare module '*/components/SpotlightCard.jsx' {
  import type { ComponentType, ReactNode } from 'react'
  const SpotlightCard: ComponentType<{
    children?: ReactNode
    className?: string
    spotlightColor?: string
  }>
  export default SpotlightCard
}

declare module '*/components/AnimatedContent.jsx' {
  import type { ComponentType, ReactNode, HTMLAttributes } from 'react'
  const AnimatedContent: ComponentType<
    HTMLAttributes<HTMLDivElement> & {
      children?: ReactNode
      container?: unknown
      distance?: number
      direction?: 'horizontal' | 'vertical'
      reverse?: boolean
      duration?: number
      ease?: string
      initialOpacity?: number
      animateOpacity?: boolean
      scale?: number
      threshold?: number
      delay?: number
      disappearAfter?: number
      disappearDuration?: number
      disappearEase?: string
      onComplete?: () => void
      onDisappearanceComplete?: () => void
      className?: string
    }
  >
  export default AnimatedContent
}

declare module '*/components/FadeContent.jsx' {
  import type { ComponentType, ReactNode, HTMLAttributes, CSSProperties } from 'react'
  const FadeContent: ComponentType<
    HTMLAttributes<HTMLDivElement> & {
      children?: ReactNode
      container?: unknown
      blur?: boolean
      duration?: number
      ease?: string
      delay?: number
      threshold?: number
      initialOpacity?: number
      disappearAfter?: number
      disappearDuration?: number
      disappearEase?: string
      onComplete?: () => void
      onDisappearanceComplete?: () => void
      className?: string
      style?: CSSProperties
    }
  >
  export default FadeContent
}

declare module '*/components/CountUp.jsx' {
  import type { ComponentType } from 'react'
  const CountUp: ComponentType<{
    to: number
    from?: number
    direction?: 'up' | 'down'
    delay?: number
    duration?: number
    className?: string
    startWhen?: boolean
    separator?: string
    onStart?: () => void
    onEnd?: () => void
  }>
  export default CountUp
}

declare module '*/components/LogoLoop.jsx' {
  import type { ComponentType, CSSProperties, ReactNode } from 'react'
  interface LogoItem {
    src?: string
    srcSet?: string
    sizes?: string
    alt?: string
    title?: string
    href?: string
    ariaLabel?: string
    width?: number
    height?: number
    node?: ReactNode
  }
  const LogoLoop: ComponentType<{
    logos?: LogoItem[]
    speed?: number
    direction?: 'left' | 'right' | 'up' | 'down'
    width?: string | number
    logoHeight?: number
    gap?: number
    pauseOnHover?: boolean
    hoverSpeed?: number
    fadeOut?: boolean
    fadeOutColor?: string
    scaleOnHover?: boolean
    renderItem?: (item: LogoItem, key: number | string) => ReactNode
    ariaLabel?: string
    className?: string
    style?: CSSProperties
  }>
  export default LogoLoop
}

declare module '*/components/Aurora.jsx' {
  import type { ComponentType } from 'react'
  const Aurora: ComponentType<{
    colorStops?: string[]
    amplitude?: number
    blend?: number
    lightMode?: boolean
    speed?: number
  }>
  export default Aurora
}
