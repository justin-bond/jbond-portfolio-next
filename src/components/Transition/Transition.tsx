import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface TransitionProps {
  children: JSX.Element;
}

const Transition = ({ children }: TransitionProps) => {
  const router = useRouter();
  const path = router?.asPath;

  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.25
      }
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.25
      }
    }
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={path}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
