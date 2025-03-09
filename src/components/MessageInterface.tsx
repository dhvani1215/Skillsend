
import { useState } from 'react';
import { Send, Paperclip, MoreVertical, Info, Phone, Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Message {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  recipient: {
    id: string;
    name: string;
    avatar?: string;
    lastSeen?: string;
  };
  messages: Message[];
}

const MessageInterface = ({ conversation }: { conversation: Conversation }) => {
  const [newMessage, setNewMessage] = useState('');
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    // In a real app, this would send the message to your backend
    console.log("Sending message:", newMessage);
    setNewMessage('');
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-180px)] border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-white/70 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={conversation.recipient.avatar || "/placeholder.svg"} alt={conversation.recipient.name} />
            <AvatarFallback>{conversation.recipient.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="font-medium">{conversation.recipient.name}</h3>
            {conversation.recipient.lastSeen && (
              <p className="text-xs text-muted-foreground">
                {conversation.recipient.lastSeen === 'online' 
                  ? 'Online now' 
                  : `Last seen ${conversation.recipient.lastSeen}`
                }
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Phone className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Video className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Info className="w-5 h-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Block User</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete Conversation</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white/50 to-slate-50/30">
        {conversation.messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-3 rounded-xl ${
                message.isMe 
                  ? 'bg-primary text-primary-foreground rounded-tr-none' 
                  : 'bg-white border shadow-sm rounded-tl-none'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <span className={`text-xs mt-1 block ${message.isMe ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="p-4 border-t bg-white">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-muted-foreground"
          >
            <Paperclip className="w-5 h-5" />
          </Button>
          
          <Input 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 focus-visible:ring-0 focus-visible:ring-offset-0 border-0 bg-secondary"
          />
          
          <Button 
            type="submit" 
            size="icon" 
            className="rounded-full"
            disabled={newMessage.trim() === ''}
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MessageInterface;
