
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const passwordStrengthCheck = (password: string): { 
  score: number; 
  feedback: { message: string; color: string; icon: React.ReactNode } 
} => {
  let score = 0;
  
  // Length check
  if (password.length > 7) score += 1;
  if (password.length > 10) score += 1;
  
  // Complexity checks
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  
  let message = '';
  let color = '';
  let icon = <XCircle className="text-red-500" />;
  
  if (score === 0) {
    message = 'Muy débil';
    color = 'bg-red-500';
  } else if (score <= 2) {
    message = 'Débil';
    color = 'bg-red-500';
  } else if (score <= 3) {
    message = 'Moderada';
    color = 'bg-yellow-500';
    icon = <CheckCircle className="text-yellow-500" />;
  } else {
    message = 'Fuerte';
    color = 'bg-green-500';
    icon = <CheckCircle className="text-green-500" />;
  }
  
  return { score, feedback: { message, color, icon } };
};

const AuthForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  
  const passwordStrength = passwordStrengthCheck(password);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual login logic here
    // For demo purposes:
    if (email === 'admin@raykevin.com' && password === 'Admin123!') {
      toast({
        title: "Inicio de sesión exitoso",
        description: "Redirigiendo al panel de administración...",
      });
      setTimeout(() => {
        navigate('/admin/blog');
      }, 1500);
    } else {
      toast({
        variant: "destructive",
        title: "Error de inicio de sesión",
        description: "Credenciales incorrectas. Inténtalo de nuevo.",
      });
    }
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error de registro",
        description: "Las contraseñas no coinciden",
      });
      return;
    }
    
    if (passwordStrength.score < 3) {
      toast({
        variant: "destructive",
        title: "Contraseña débil",
        description: "Por favor usa una contraseña más segura",
      });
      return;
    }
    
    // Implement actual registration logic here
    toast({
      title: "Registro exitoso",
      description: "Por favor verifica tu email para confirmar tu cuenta",
    });
    
    // Redirect to login tab after successful registration
    setActiveTab('login');
  };
  
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual password reset logic here
    setResetEmailSent(true);
    toast({
      title: "Email enviado",
      description: "Revisa tu bandeja de entrada para restablecer tu contraseña",
    });
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card w-full max-w-md mx-auto p-8"
    >
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-0 mr-3" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} />
        </Button>
        <h2 className="text-2xl font-light text-white">Panel de Administración</h2>
      </div>
      
      {!showResetForm ? (
        <Tabs 
          defaultValue={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input 
                  id="login-email" 
                  type="email" 
                  placeholder="tu@email.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-raykevin-darker/50"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="login-password">Contraseña</Label>
                </div>
                <div className="relative">
                  <Input 
                    id="login-password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-raykevin-darker/50 pr-10"
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm text-raykevin-purple hover:text-raykevin-purple-light" 
                  type="button"
                  onClick={() => setShowResetForm(true)}
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
              
              <Button 
                type="submit"
                className="w-full neuro-button bg-raykevin-slate text-white hover:text-raykevin-purple"
              >
                Iniciar Sesión
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input 
                  id="register-email" 
                  type="email" 
                  placeholder="tu@email.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-raykevin-darker/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-password">Contraseña</Label>
                <div className="relative">
                  <Input 
                    id="register-password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-raykevin-darker/50 pr-10"
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
                
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Fortaleza de contraseña:</span>
                    <span className="flex items-center gap-1 text-xs">
                      {passwordStrength.feedback.icon}
                      <span>{passwordStrength.feedback.message}</span>
                    </span>
                  </div>
                  <div className="h-1 w-full bg-gray-700 rounded">
                    <div 
                      className={`h-1 rounded ${passwordStrength.feedback.color}`} 
                      style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                    ></div>
                  </div>
                  
                  <ul className="mt-2 space-y-1">
                    <li className={`text-xs ${password.length >= 8 ? 'text-green-500' : 'text-gray-400'}`}>
                      • Mínimo 8 caracteres
                    </li>
                    <li className={`text-xs ${/[A-Z]/.test(password) ? 'text-green-500' : 'text-gray-400'}`}>
                      • Al menos una mayúscula
                    </li>
                    <li className={`text-xs ${/[0-9]/.test(password) ? 'text-green-500' : 'text-gray-400'}`}>
                      • Al menos un número
                    </li>
                    <li className={`text-xs ${/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : 'text-gray-400'}`}>
                      • Al menos un símbolo
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                <div className="relative">
                  <Input 
                    id="confirm-password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-raykevin-darker/50 pr-10"
                  />
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Las contraseñas no coinciden</p>
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full neuro-button bg-raykevin-slate text-white hover:text-raykevin-purple"
              >
                Crear Cuenta
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      ) : !resetEmailSent ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-medium text-white mb-4">Restablecer Contraseña</h3>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <p className="text-sm text-white/70 mb-4">
              Ingresa tu dirección de email y te enviaremos un enlace para restablecer tu contraseña.
            </p>
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email</Label>
              <Input 
                id="reset-email" 
                type="email" 
                placeholder="tu@email.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-raykevin-darker/50"
              />
            </div>
            
            <div className="flex gap-3">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setShowResetForm(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="flex-1 neuro-button bg-raykevin-slate text-white hover:text-raykevin-purple"
              >
                Enviar Email
              </Button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-6"
        >
          <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-lg font-medium text-white mb-2">Email Enviado</h3>
          <p className="text-sm text-white/70 mb-4">
            Hemos enviado un enlace de restablecimiento a tu dirección de email. 
            Por favor revisa tu bandeja de entrada.
          </p>
          <Button 
            variant="link" 
            className="text-raykevin-purple hover:text-raykevin-purple-light" 
            onClick={() => {
              setShowResetForm(false);
              setResetEmailSent(false);
            }}
          >
            Volver a Inicio de Sesión
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AuthForm;
