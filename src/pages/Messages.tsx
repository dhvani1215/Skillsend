import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Search, User, Clock, CheckCheck } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// Mock conversation data
const mockConversations = [
  {
    id: 'conv1',
    with: {
      id: 'user2',
      name: 'Sofia Rodriguez',
      avatar: '/placeholder.svg',
    },
    lastMessage: 'Looking forward to our Spanish lesson tomorrow!',
    timestamp: '10:30 AM',
    unread: 2,
  },
  {
    id: 'conv2',
    with: {
      id: 'user3',
      name: 'Jordan Lee',
      avatar: '/placeholder.svg',
    },
    lastMessage: "I'll send you the design references later today.",
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    id: 'conv3',
    with: {
      id: 'user4',
      name: 'Michael Chen',
      avatar: '/placeholder.svg',
    },
    lastMessage: 'How was the piano practice?',
    timestamp: 'May 12',
    unread: 0,
  }
];

// Mock messages data for a conversation
const mockMessages = [
  {
    id: 'msg1',
    senderId: 'currentUser',
    text: 'Hi Sofia, I was wondering if you have availability for a Spanish conversation practice session this week?',
    timestamp: 'May 12, 10:30 AM',
    status: 'read',
  },
  {
    id: 'msg2',
    senderId: 'user2',
    text: 'Hello! Yes, I have some time available on Wednesday afternoon or Thursday morning. What works best for you?',
    timestamp: 'May 12, 11:15 AM',
    status: 'read',
  },
  {
    id: 'msg3',
    senderId: 'currentUser',
    text: 'Thursday morning would be perfect! How about 10 AM?',
    timestamp: 'May 12, 11:45 AM',
    status: 'read',
  },
  {
    id: 'msg4',
    senderId: 'user2',
    text: '10 AM works great for me. We can focus on conversational phrases for travel situations, as you mentioned in your profile. Sound good?',
    timestamp: 'May 12, 12:10 PM',
    status: 'read',
  },
  {
    id: 'msg5',
    senderId: 'currentUser',
    text: 'That sounds perfect! I have a trip to Mexico City planned for next month, so that would be really helpful.',
    timestamp: 'Today, 9:30 AM',
    status: 'delivered',
  },
  {
    id: 'msg6',
    senderId: 'user2',
    text: 'Excellent! I know Mexico City well and can help with some local phrases too. Looking forward to our Spanish lesson tomorrow!',
    timestamp: 'Today, 10:30 AM',
    status: 'sent',
  },
];

const Messages = () => {
  const { conversationId } = useParams<{ conversationId: string }>();
  const [activeConversation, setActiveConversation] = useState(conversationId || 'conv1');
  const [conversations, setConversations] = useState(mockConversations);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom of messages when they change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const newMsg = {
      id: `msg${messages.length + 1}`,
      senderId: 'currentUser',
      text: newMessage,
      timestamp: 'Just now',
      status: 'sending',
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Simulate message being sent and delivered
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === newMsg.id ? {...msg, status: 'sent'} : msg
      ));
    }, 1000);
    
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === newMsg.id ? {...msg, status: 'delivered'} : msg
      ));
    }, 2000);
  };
  
  const filteredConversations = conversations.filter(conv => 
    conv.with.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-6 max-w-6xl h-[calc(100vh-250px)] min-h-[500px]">
          <div className="bg-background border rounded-lg h-full overflow-hidden flex">
            {/* Conversations sidebar */}
            <div className="w-full max-w-[280px] border-r">
              <div className="p-3 border-b">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search conversations"
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <ScrollArea className="h-[calc(100%-64px)]">
                {filteredConversations.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <User className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No conversations found</p>
                  </div>
                ) : (
                  filteredConversations.map(conv => (
                    <div 
                      key={conv.id}
                      className={`p-3 flex items-start gap-3 cursor-pointer hover:bg-accent/50 ${
                        activeConversation === conv.id ? 'bg-accent' : ''
                      }`}
                      onClick={() => setActiveConversation(conv.id)}
                    >
                      <Avatar>
                        <AvatarImage src={conv.with.avatar} alt={conv.with.name} />
                        <AvatarFallback>{conv.with.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium truncate">{conv.with.name}</h3>
                          <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      </div>
                      {conv.unread > 0 && (
                        <div className="rounded-full bg-primary w-5 h-5 flex items-center justify-center text-xs text-primary-foreground">
                          {conv.unread}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </ScrollArea>
            </div>
            
            {/* Message content */}
            <div className="flex-1 flex flex-col">
              {/* Chat header */}
              <div className="p-3 border-b flex items-center gap-3">
                <Avatar>
                  <AvatarImage 
                    src={conversations.find(c => c.id === activeConversation)?.with.avatar} 
                    alt={conversations.find(c => c.id === activeConversation)?.with.name} 
                  />
                  <AvatarFallback>
                    {conversations.find(c => c.id === activeConversation)?.with.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">
                    {conversations.find(c => c.id === activeConversation)?.with.name}
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
                    Online
                  </div>
                </div>
              </div>
              
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="flex flex-col gap-3">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.senderId === 'currentUser' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.senderId === 'currentUser' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-accent'
                        }`}
                      >
                        <p>{message.text}</p>
                        <div className={`flex items-center gap-1 mt-1 text-xs ${
                          message.senderId === 'currentUser' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          <span>{message.timestamp}</span>
                          {message.senderId === 'currentUser' && (
                            <>
                              <Separator orientation="vertical" className="h-3" />
                              {message.status === 'sending' && <Clock className="h-3 w-3" />}
                              {message.status === 'sent' && <CheckCheck className="h-3 w-3" />}
                              {message.status === 'delivered' && <CheckCheck className="h-3 w-3" />}
                              {message.status === 'read' && <CheckCheck className="h-3 w-3 text-blue-400" />}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              {/* Message input */}
              <div className="p-3 border-t">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messages;
