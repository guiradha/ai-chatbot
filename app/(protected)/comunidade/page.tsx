'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Send, MessagesSquare, PlusCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Comment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  createdAt: Date;
}

interface Post {
  id: string;
  userId: string;
  userName: string;
  userImage?: string;
  title: string;
  content: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
}

// Mock data for initial posts
const mockPosts: Post[] = [
  {
    id: '1',
    userId: 'maria.silva@example.com',
    userName: 'Maria Silva',
    title: 'Dicas importantes sobre uso de EPIs',
    content: 'Pessoal, queria compartilhar algumas dicas que aprendi sobre o uso correto de EPIs no ambiente de trabalho:\n\n1. Sempre verificar a validade dos equipamentos\n2. Fazer inspeção visual antes de cada uso\n3. Armazenar em local adequado e limpo\n\nAlguém tem mais dicas para compartilhar?',
    likes: ['joao.santos@example.com', 'carlos.oliveira@example.com', 'ana.costa@example.com'],
    comments: [
      {
        id: 'c1',
        postId: '1',
        userId: 'joao.santos@example.com',
        userName: 'João Santos',
        content: 'Ótimas dicas, Maria! Eu também sempre faço um checklist antes de iniciar o trabalho.',
        createdAt: new Date(Date.now() - 3600000)
      },
      {
        id: 'c2',
        postId: '1',
        userId: 'ana.costa@example.com',
        userName: 'Ana Costa',
        content: 'Muito importante mesmo! A higienização dos EPIs também é fundamental.',
        createdAt: new Date(Date.now() - 1800000)
      }
    ],
    createdAt: new Date(Date.now() - 86400000)
  },
  {
    id: '2',
    userId: 'carlos.oliveira@example.com',
    userName: 'Carlos Oliveira',
    title: 'Nova certificação NR-35 disponível',
    content: 'Boa tarde, equipe!\n\nPara quem está interessado, a empresa está oferecendo o curso de NR-35 (Trabalho em Altura) gratuitamente. As inscrições estão abertas até sexta-feira.\n\nÉ uma ótima oportunidade para se qualificar!',
    likes: ['maria.silva@example.com', 'pedro.lima@example.com'],
    comments: [
      {
        id: 'c3',
        postId: '2',
        userId: 'pedro.lima@example.com',
        userName: 'Pedro Lima',
        content: 'Obrigado pela informação, Carlos! Já me inscrevi.',
        createdAt: new Date(Date.now() - 7200000)
      }
    ],
    createdAt: new Date(Date.now() - 172800000)
  },
  {
    id: '3',
    userId: 'ana.costa@example.com',
    userName: 'Ana Costa',
    title: 'Experiência com primeiros socorros',
    content: 'Hoje tive que aplicar os conhecimentos do curso de primeiros socorros que fiz aqui na plataforma.\n\nUm colega teve um pequeno acidente e consegui ajudá-lo seguindo os procedimentos corretos enquanto aguardávamos o SAMU.\n\nFico feliz em ter esse conhecimento e recomendo que todos façam o curso!',
    likes: ['maria.silva@example.com', 'carlos.oliveira@example.com', 'joao.santos@example.com', 'pedro.lima@example.com', 'lucas.almeida@example.com'],
    comments: [
      {
        id: 'c4',
        postId: '3',
        userId: 'maria.silva@example.com',
        userName: 'Maria Silva',
        content: 'Parabéns pela atitude, Ana! Conhecimento salva vidas.',
        createdAt: new Date(Date.now() - 14400000)
      },
      {
        id: 'c5',
        postId: '3',
        userId: 'lucas.almeida@example.com',
        userName: 'Lucas Almeida',
        content: 'Inspirador! Vou me inscrever no curso também.',
        createdAt: new Date(Date.now() - 10800000)
      }
    ],
    createdAt: new Date(Date.now() - 259200000)
  },
  {
    id: '4',
    userId: 'pedro.lima@example.com',
    userName: 'Pedro Lima',
    title: 'Dúvida sobre procedimentos de emergência',
    content: 'Pessoal, alguém pode me ajudar?\n\nQual é o procedimento correto em caso de princípio de incêndio elétrico? Sei que não pode usar água, mas quais são as alternativas?\n\nAgradeço qualquer orientação!',
    likes: ['ana.costa@example.com'],
    comments: [
      {
        id: 'c6',
        postId: '4',
        userId: 'carlos.oliveira@example.com',
        userName: 'Carlos Oliveira',
        content: 'Pedro, o ideal é usar extintor de CO2 ou pó químico seco. Primeiro, sempre desligar a energia se possível e seguro.',
        createdAt: new Date(Date.now() - 3600000)
      },
      {
        id: 'c7',
        postId: '4',
        userId: 'maria.silva@example.com',
        userName: 'Maria Silva',
        content: 'Importante também acionar imediatamente o corpo de bombeiros e evacuar a área!',
        createdAt: new Date(Date.now() - 1800000)
      }
    ],
    createdAt: new Date(Date.now() - 345600000)
  },
  {
    id: '5',
    userId: 'lucas.almeida@example.com',
    userName: 'Lucas Almeida',
    title: 'Parabéns à equipe de segurança',
    content: 'Quero parabenizar nossa equipe de segurança pelo excelente trabalho!\n\nEste mês completamos 180 dias sem acidentes. Isso mostra que quando todos colaboram e seguem os procedimentos, conseguimos manter um ambiente seguro.\n\nVamos continuar assim! 💪',
    likes: ['maria.silva@example.com', 'carlos.oliveira@example.com', 'ana.costa@example.com', 'pedro.lima@example.com', 'joao.santos@example.com', 'rafael.souza@example.com'],
    comments: [
      {
        id: 'c8',
        postId: '5',
        userId: 'joao.santos@example.com',
        userName: 'João Santos',
        content: 'Parabéns a todos! Segurança é responsabilidade de cada um.',
        createdAt: new Date(Date.now() - 21600000)
      },
      {
        id: 'c9',
        postId: '5',
        userId: 'rafael.souza@example.com',
        userName: 'Rafael Souza',
        content: 'Excelente notícia! Vamos manter o foco na prevenção.',
        createdAt: new Date(Date.now() - 18000000)
      },
      {
        id: 'c10',
        postId: '5',
        userId: 'ana.costa@example.com',
        userName: 'Ana Costa',
        content: 'Orgulho de fazer parte dessa equipe!',
        createdAt: new Date(Date.now() - 14400000)
      }
    ],
    createdAt: new Date(Date.now() - 432000000)
  }
];

export default function ComunidadePage() {
  const { data: session } = useSession();
  const user = session?.user;
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [commentInputs, setCommentInputs] = useState<{[key: string]: string}>({});
  const [showComments, setShowComments] = useState<{[key: string]: boolean}>({});
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  useEffect(() => {
    const savedPosts = localStorage.getItem('comunidade-posts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts).map((post: any) => ({
        ...post,
        createdAt: new Date(post.createdAt),
        comments: post.comments.map((comment: any) => ({
          ...comment,
          createdAt: new Date(comment.createdAt)
        }))
      }));
      setPosts(parsedPosts);
    } else {
      // Initialize with mock data if no saved posts
      setPosts(mockPosts);
      localStorage.setItem('comunidade-posts', JSON.stringify(mockPosts));
    }
  }, []);

  const savePosts = (updatedPosts: Post[]) => {
    localStorage.setItem('comunidade-posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim() || !user) return;

    const newPost: Post = {
      id: Date.now().toString(),
      userId: user.email || 'user',
      userName: user.email?.split('@')[0] || 'Usuário',
      userImage: user.image || undefined,
      title: newPostTitle,
      content: newPostContent,
      likes: [],
      comments: [],
      createdAt: new Date()
    };

    const updatedPosts = [newPost, ...posts];
    savePosts(updatedPosts);
    setNewPostTitle('');
    setNewPostContent('');
    setIsCreatingPost(false);
  };

  const handleLike = (postId: string) => {
    if (!user) return;

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const userEmail = user.email || '';
        const isLiked = post.likes.includes(userEmail);
        if (isLiked) {
          return { ...post, likes: post.likes.filter(id => id !== userEmail) };
        } else {
          return { ...post, likes: [...post.likes, userEmail] };
        }
      }
      return post;
    });

    savePosts(updatedPosts);
  };

  const handleComment = (postId: string) => {
    if (!commentInputs[postId]?.trim() || !user) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      userId: user.email || 'user',
      userName: user.email?.split('@')[0] || 'Usuário',
      userImage: user.image || undefined,
      content: commentInputs[postId],
      createdAt: new Date()
    };

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });

    savePosts(updatedPosts);
    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  const toggleComments = (postId: string) => {
    setShowComments({ ...showComments, [postId]: !showComments[postId] });
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Comunidade</h1>
          <p className="text-muted-foreground">
            Conecte-se e compartilhe experiências com outros profissionais
          </p>
        </div>
        <Button onClick={() => setIsCreatingPost(!isCreatingPost)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nova Publicação
        </Button>
      </div>

      {/* Create Post Card */}
      {isCreatingPost && (
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Publicação</CardTitle>
            <CardDescription>
              Compartilhe suas ideias, dúvidas ou experiências com a comunidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Título da sua publicação..."
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              className="text-base"
            />
            <Textarea
              placeholder="O que você gostaria de compartilhar?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={6}
              className="text-base resize-none"
            />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button 
              onClick={handleCreatePost}
              disabled={!newPostTitle.trim() || !newPostContent.trim()}
            >
              Publicar
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setIsCreatingPost(false);
                setNewPostTitle('');
                setNewPostContent('');
              }}
            >
              Cancelar
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Posts Feed */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Publicações Recentes</h2>
        
        {posts.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MessagesSquare className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-muted-foreground mb-2">
                Nenhuma publicação ainda
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Seja o primeiro a compartilhar algo com a comunidade!
              </p>
              {!isCreatingPost && (
                <Button onClick={() => setIsCreatingPost(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Criar Primeira Publicação
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          posts.map(post => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.userImage} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        {post.userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-base">{post.userName}</h3>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(post.createdAt, { 
                          addSuffix: true, 
                          locale: ptBR 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground whitespace-pre-wrap">{post.content}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <div className="flex items-center justify-between w-full pt-3 border-t">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        user && post.likes.includes(user.email || '') 
                          ? 'text-red-600' 
                          : 'text-muted-foreground hover:text-red-600'
                      }`}
                    >
                      <Heart 
                        className="h-5 w-5" 
                        fill={user && post.likes.includes(user.email || '') ? 'currentColor' : 'none'}
                      />
                      <span className="text-sm font-medium">{post.likes.length}</span>
                    </button>
                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.comments.length}</span>
                    </button>
                  </div>
                </div>

                {showComments[post.id] && (
                  <div className="w-full space-y-3 pt-3 border-t">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={comment.userImage} />
                          <AvatarFallback className="bg-muted text-xs">
                            {comment.userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-sm font-medium mb-1">{comment.userName}</p>
                            <p className="text-sm">{comment.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 ml-3">
                            {formatDistanceToNow(comment.createdAt, { 
                              addSuffix: true, 
                              locale: ptBR 
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex gap-2 mt-3">
                      <Input
                        placeholder="Escreva um comentário..."
                        value={commentInputs[post.id] || ''}
                        onChange={(e) => setCommentInputs({
                          ...commentInputs,
                          [post.id]: e.target.value
                        })}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleComment(post.id);
                          }
                        }}
                        className="text-sm"
                      />
                      <Button
                        size="icon"
                        onClick={() => handleComment(post.id)}
                        disabled={!commentInputs[post.id]?.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}