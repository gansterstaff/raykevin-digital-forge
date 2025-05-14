
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  isHoverable?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, isHoverable = false }) => {
  const baseClasses = "glass-card p-6";
  
  if (isHoverable) {
    return (
      <motion.div 
        className={cn(baseClasses, className)}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 10px 30px rgba(163, 26, 83, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={cn(baseClasses, className)}>
      {children}
    </div>
  );
};

export default GlassCard;
