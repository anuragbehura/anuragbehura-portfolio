"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";
import { ElementType } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  as?: ElementType;
  by?: AnimationType;
  startOnView?: boolean;
  animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  blurInUp: {
    container: {},
    item: {}
  },
  blurIn: {
    container: {},
    item: {}
  },
  blurInDown: {
    container: {},
    item: {}
  },
  slideUp: {
    container: {},
    item: {}
  },
  slideDown: {
    container: {},
    item: {}
  },
  slideLeft: {
    container: {},
    item: {}
  },
  slideRight: {
    container: {},
    item: {}
  },
  scaleUp: {
    container: {},
    item: {}
  },
  scaleDown: {
    container: {},
    item: {}
  }
};

export function TextAnimate({
  children,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion.create(Component);

  const finalVariants = animation
    ? {
      container: {
        ...defaultItemAnimationVariants[animation].container,
        show: {
          ...defaultItemAnimationVariants[animation].container.show,
          transition: {
            staggerChildren: staggerTimings[by],
          },
        },
        exit: {
          ...defaultItemAnimationVariants[animation].container.exit,
          transition: {
            staggerChildren: staggerTimings[by],
            staggerDirection: -1,
          },
        },
      },
      item: defaultItemAnimationVariants[animation].item,
    }
    : { container: defaultContainerVariants, item: defaultItemVariants };

  let segments: string[] = [];
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/);
      break;
    case "character":
      segments = children.split("");
      break;
    case "line":
      segments = children.split("\n");
      break;
    case "text":
    default:
      segments = [children];
      break;
  }

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName,
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}