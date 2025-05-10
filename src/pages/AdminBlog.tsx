
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Upload, Pencil, Trash, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import GlassCard from '@/components/GlassCard';

// Mock data for example
const mockPosts = [
  {
    id: 1,
    title: "Integrando UX y Desarrollo: La clave para productos digitales exitosos",
    excerpt: "Descubre cómo la colaboración estrecha entre diseñadores UX y desarrolladores desde las etapas iniciales puede transformar radicalmente los resultados de un proyecto digital.",
    date: "10 May, 2025",
    readTime: "5 min",
    category: "Diseño UX",
    slug: "integrando-ux-desarrollo",
    content: "Contenido completo del artículo...",
    isPublished: true,
    hasDownloadable: true,
    downloadableFile: "ux-dev-integration-guide.pdf"
  },
  {
    id: 2,
    title: "Optimización de rendimiento web: Técnicas avanzadas para 2025",
    excerpt: "Un análisis de las últimas técnicas y herramientas para mejorar la velocidad de carga y rendimiento de aplicaciones web modernas.",
    date: "5 May, 2025",
    readTime: "8 min",
    category: "Desarrollo",
    slug: "optimizacion-rendimiento-web-2025",
    content: "Contenido completo del artículo...",
    isPublished: true,
    hasDownloadable: false,
    downloadableFile: null
  },
  {
    id: 3,
    title: "El rol del contenido en la experiencia de usuario digital",
    excerpt: "Cómo una estrategia de contenido bien planificada puede transformar la experiencia de usuario y mejorar significativamente las conversiones.",
    date: "28 Abr, 2025",
    readTime: "6 min",
    category: "Contenido",
    slug: "rol-contenido-experiencia-usuario",
    content: "Contenido completo del artículo...",
    isPublished: false,
    hasDownloadable: true,
    downloadableFile: "content-ux-checklist.pdf"
  }
];

const AdminBlog = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState(mockPosts);
  const [dialogType, setDialogType] = useState<'new' | 'edit'>('new');
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    hasDownloadable: false,
    downloadableFile: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, downloadableFile: e.target.files![0] }));
    }
  };

  const openEditDialog = (post: any) => {
    setDialogType('edit');
    setCurrentPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      hasDownloadable: post.hasDownloadable,
      downloadableFile: null,
    });
  };

  const openNewDialog = () => {
    setDialogType('new');
    setCurrentPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      hasDownloadable: false,
      downloadableFile: null,
    });
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dialogType === 'new') {
      const newPost = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
        readTime: `${Math.ceil(formData.content.length / 1000)} min`,
        slug: formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, ''),
        isPublished: false,
        downloadableFile: formData.downloadableFile ? formData.downloadableFile.name : null
      };
      
      setPosts(prev => [newPost, ...prev]);
      
      toast({
        title: "Artículo creado",
        description: "El artículo ha sido guardado como borrador",
      });
    } else if (currentPost) {
      setPosts(prev => prev.map(post => 
        post.id === currentPost.id 
          ? { 
            ...post, 
            ...formData,
            downloadableFile: formData.downloadableFile ? formData.downloadableFile.name : post.downloadableFile
          } 
          : post
      ));
      
      toast({
        title: "Artículo actualizado",
        description: "Los cambios han sido guardados",
      });
    }
  };

  const handleDeletePost = () => {
    if (currentPost) {
      setPosts(prev => prev.filter(post => post.id !== currentPost.id));
      setIsDeleteDialogOpen(false);
      
      toast({
        title: "Artículo eliminado",
        description: "El artículo ha sido eliminado permanentemente",
      });
    }
  };
  
  const togglePublishStatus = (id: number) => {
    setPosts(prev => prev.map(post => 
      post.id === id 
        ? { ...post, isPublished: !post.isPublished } 
        : post
    ));
    
    const post = posts.find(p => p.id === id);
    
    toast({
      title: post?.isPublished ? "Artículo despublicado" : "Artículo publicado",
      description: post?.isPublished 
        ? "El artículo ya no es visible para el público" 
        : "El artículo ahora es visible para el público",
    });
  };

  return (
    <div className="min-h-screen">
      <header className="blur-nav fixed top-0 w-full py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={18} className="text-white" />
              <span className="text-white">Volver al sitio</span>
            </Link>
          </div>
          <h1 className="text-xl font-medium text-white">Panel de Administración</h1>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-white">Gestión de Blog</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    onClick={openNewDialog}
                    className="neuro-button bg-raykevin-slate text-white hover:text-raykevin-purple"
                  >
                    <Plus size={16} className="mr-1" />
                    Nuevo Artículo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl glass-card border-white/10">
                  <form onSubmit={handleSavePost}>
                    <DialogHeader>
                      <DialogTitle className="text-white">
                        {dialogType === 'new' ? 'Crear Nuevo Artículo' : 'Editar Artículo'}
                      </DialogTitle>
                      <DialogDescription>
                        Complete los campos para {dialogType === 'new' ? 'crear un nuevo' : 'actualizar el'} artículo del blog.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título</Label>
                        <Input 
                          id="title" 
                          name="title" 
                          value={formData.title}
                          onChange={handleInputChange}
                          className="bg-raykevin-darker/50" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="category">Categoría</Label>
                        <Input 
                          id="category" 
                          name="category" 
                          value={formData.category}
                          onChange={handleInputChange}
                          className="bg-raykevin-darker/50" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="excerpt">Extracto</Label>
                        <Textarea 
                          id="excerpt" 
                          name="excerpt" 
                          value={formData.excerpt}
                          onChange={handleInputChange}
                          className="bg-raykevin-darker/50 resize-none" 
                          rows={2}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="content">Contenido</Label>
                        <Textarea 
                          id="content" 
                          name="content" 
                          value={formData.content}
                          onChange={handleInputChange}
                          className="bg-raykevin-darker/50 resize-none" 
                          rows={8}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id="hasDownloadable" 
                            name="hasDownloadable"
                            checked={formData.hasDownloadable}
                            onChange={handleCheckboxChange}
                            className="rounded bg-raykevin-darker/50 border-white/20" 
                          />
                          <Label htmlFor="hasDownloadable">Incluir archivo descargable</Label>
                        </div>
                        
                        {formData.hasDownloadable && (
                          <div className="mt-2">
                            <Label htmlFor="downloadableFile">Archivo</Label>
                            <div className="mt-1 flex">
                              <Input 
                                id="downloadableFile" 
                                name="downloadableFile" 
                                type="file" 
                                onChange={handleFileChange}
                                className="bg-raykevin-darker/50" 
                              />
                            </div>
                            {currentPost?.downloadableFile && !formData.downloadableFile && (
                              <p className="text-xs text-white/70 mt-1">
                                Archivo actual: {currentPost.downloadableFile}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <DialogFooter className="mt-6">
                      <Button 
                        type="submit"
                        className="neuro-button bg-raykevin-slate text-white hover:text-raykevin-purple"
                      >
                        Guardar
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid gap-4">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-block w-2 h-2 rounded-full ${post.isPublished ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                        <span className="text-xs text-white/70">{post.isPublished ? 'Publicado' : 'Borrador'}</span>
                        <span className="text-xs text-white/40">•</span>
                        <span className="text-xs text-white/70">{post.date}</span>
                        <span className="text-xs text-white/40">•</span>
                        <span className="text-xs text-white/70">{post.category}</span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-1">{post.title}</h3>
                      <p className="text-sm text-white/70 line-clamp-1 mb-2">{post.excerpt}</p>
                      
                      {post.hasDownloadable && (
                        <div className="flex items-center gap-1 text-xs text-raykevin-purple mb-2">
                          <Download size={14} />
                          <span>Incluye archivo descargable</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 md:gap-1">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 md:flex-none text-xs"
                        onClick={() => togglePublishStatus(post.id)}
                      >
                        <Eye size={14} className="mr-1" />
                        {post.isPublished ? 'Despublicar' : 'Publicar'}
                      </Button>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 md:flex-none text-xs"
                            onClick={() => openEditDialog(post)}
                          >
                            <Pencil size={14} className="mr-1" />
                            Editar
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-xl glass-card border-white/10">
                          <form onSubmit={handleSavePost}>
                            <DialogHeader>
                              <DialogTitle className="text-white">
                                Editar Artículo
                              </DialogTitle>
                              <DialogDescription>
                                Actualice los campos para modificar el artículo del blog.
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="grid gap-4 mt-4">
                              <div className="space-y-2">
                                <Label htmlFor="title">Título</Label>
                                <Input 
                                  id="title" 
                                  name="title" 
                                  value={formData.title}
                                  onChange={handleInputChange}
                                  className="bg-raykevin-darker/50" 
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="category">Categoría</Label>
                                <Input 
                                  id="category" 
                                  name="category" 
                                  value={formData.category}
                                  onChange={handleInputChange}
                                  className="bg-raykevin-darker/50" 
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="excerpt">Extracto</Label>
                                <Textarea 
                                  id="excerpt" 
                                  name="excerpt" 
                                  value={formData.excerpt}
                                  onChange={handleInputChange}
                                  className="bg-raykevin-darker/50 resize-none" 
                                  rows={2}
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="content">Contenido</Label>
                                <Textarea 
                                  id="content" 
                                  name="content" 
                                  value={formData.content}
                                  onChange={handleInputChange}
                                  className="bg-raykevin-darker/50 resize-none" 
                                  rows={8}
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="checkbox" 
                                    id="hasDownloadable" 
                                    name="hasDownloadable"
                                    checked={formData.hasDownloadable}
                                    onChange={handleCheckboxChange}
                                    className="rounded bg-raykevin-darker/50 border-white/20" 
                                  />
                                  <Label htmlFor="hasDownloadable">Incluir archivo descargable</Label>
                                </div>
                                
                                {formData.hasDownloadable && (
                                  <div className="mt-2">
                                    <Label htmlFor="downloadableFile">Archivo</Label>
                                    <div className="mt-1 flex">
                                      <Input 
                                        id="downloadableFile" 
                                        name="downloadableFile" 
                                        type="file" 
                                        onChange={handleFileChange}
                                        className="bg-raykevin-darker/50" 
                                      />
                                    </div>
                                    {currentPost?.downloadableFile && !formData.downloadableFile && (
                                      <p className="text-xs text-white/70 mt-1">
                                        Archivo actual: {currentPost.downloadableFile}
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <DialogFooter className="mt-6">
                              <Button 
                                type="submit"
                                className="neuro-button bg-raykevin-slate text-white hover:text-raykevin-purple"
                              >
                                Guardar
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 md:flex-none text-xs"
                        onClick={() => {
                          setCurrentPost(post);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        <Trash size={14} className="mr-1" />
                        Eliminar
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
              
              {posts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/50">No hay artículos disponibles.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-lg glass-card border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Confirmar eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar este artículo? Esta acción no se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              variant="destructive"
              onClick={handleDeletePost}
            >
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlog;
