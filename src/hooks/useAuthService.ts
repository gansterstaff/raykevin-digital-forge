
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/components/ui/use-toast";

export const useAuthService = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true, data };
    } catch (error: any) {
      console.error('Error de inicio de sesión:', error.message);
      toast({
        variant: "destructive",
        title: "Error de inicio de sesión",
        description: error.message,
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };
  
  const register = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // Configuración para confirmar por email
      // Esto enviará un email de verificación a la dirección proporcionada
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + '/admin/login',
        }
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true, data };
    } catch (error: any) {
      console.error('Error de registro:', error.message);
      toast({
        variant: "destructive",
        title: "Error de registro",
        description: error.message,
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };
  
  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/admin/login',
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true };
    } catch (error: any) {
      console.error('Error al restablecer contraseña:', error.message);
      toast({
        variant: "destructive",
        title: "Error al restablecer contraseña",
        description: error.message,
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };
  
  const logout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      return { success: true };
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error.message);
      toast({
        variant: "destructive",
        title: "Error al cerrar sesión",
        description: error.message,
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };
  
  return { login, register, resetPassword, logout, loading };
};
