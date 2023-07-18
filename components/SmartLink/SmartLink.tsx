import Link from 'next/link';
import gsap, { TimelineMax, Power1 } from 'gsap';
import { useRouter } from 'next/router';

interface SmartLinkProps {
  children: JSX.Element | string;
  href: string;
  direction?: 'left' | 'right';
  className?: string;
}

const SmartLink = ({
  children,
  href,
  direction,
  className
}: SmartLinkProps) => {
  const router = useRouter();

  const horizontalAnimation = (length: number) => {
    router.events.on('routeChangeComplete', () => {
      const directionTo = direction === 'left' ? '-100%' : '100%';
      const directionFrom = direction === 'left' ? '100%' : '-100%';
      const overlayElement = document.getElementById('overlay');
      const overlayTimeline = gsap.timeline();

      overlayTimeline.set(overlayElement, {
        x: directionFrom
      });
      overlayTimeline.to(overlayElement, {
        duration: length / 2,
        x: '0%',
        ease: Power1.easeInOut,
        onComplete: () => window.scrollTo(0, 0)
      });
      overlayTimeline.to(overlayElement, {
        duration: length / 2,
        x: directionTo,
        ease: Power1.easeIn
      });
    });
  };
  return (
    <Link
      href={href}
      onClick={() => {
        if (direction) horizontalAnimation(1);
      }}
      className={className}
      scroll={direction ? false : true}
    >
      {children}
    </Link>
  );
};

export default SmartLink;
