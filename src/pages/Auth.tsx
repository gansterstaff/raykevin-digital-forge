
import { motion } from 'framer-motion';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-light text-white mb-2">
          RayKevin <span className="text-raykevin-purple">Admin</span>
        </h1>
        <p className="text-white/70">
          Accede al panel de administración
        </p>
      </motion.div>
      
      <AuthForm />
    </div>
  );
};

export default Auth;
