import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', text: "Hi! I'm Alex's AI Assistant. Ask me anything about his skills or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await sendMessageToGemini(userMsg.text);
    
    const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', text: response };
    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary to-purple-600 rounded-full shadow-lg shadow-primary/30 text-white flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-[#1a0b2e] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#261445] border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Sparkles size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-slate-400">Powered by Gemini 2.5 Flash</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f0518]/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#261445] border border-white/5' : 'bg-primary'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-slate-300" /> : <Bot size={14} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#261445] text-white border border-white/5 rounded-tr-none' 
                      : 'bg-primary/10 text-pink-100 border border-primary/20 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce delay-75" />
                      <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#261445] border-t border-white/5">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my experience..."
                  className="flex-1 bg-[#0f0518] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;