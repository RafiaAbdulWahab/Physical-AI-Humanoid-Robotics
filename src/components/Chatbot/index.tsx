import React, { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    // Show user message
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      // Backend Connection
      // IMPORTANT: Hum 'text' bhej rahe hain kyunke backend mein humne 'text' set kiya hai
      const response = await fetch('http://127.0.0.1:8000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userMsg }),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      // Show Bot Answer
      setMessages(prev => [...prev, { role: 'bot', text: data.answer || "No answer received." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "⚠️ Error: Backend not connected. Is the Python server running?" }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, fontFamily: 'Arial, sans-serif' }}>
      
      {/* Chat Window */}
      {isOpen && (
        <div style={{ 
          width: '350px', 
          height: '500px', 
          backgroundColor: 'white', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)', 
          borderRadius: '12px', 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden',
          marginBottom: '15px',
          border: '1px solid #ddd'
        }}>
          {/* Header */}
          <div style={{ background: '#25c2a0', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{fontWeight: 'bold'}}>AI Tutor 🤖</span>
            <button onClick={() => setIsOpen(false)} style={{background: 'none', border: 'none', color: 'white', fontSize: '16px', cursor: 'pointer'}}>✖</button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', background: '#f8f9fa' }}>
            {messages.length === 0 && (
              <p style={{textAlign: 'center', color: '#aaa', marginTop: '20px'}}>Hi! Ask me anything about the book.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} style={{ textAlign: m.role === 'user' ? 'right' : 'left', margin: '10px 0' }}>
                <span style={{ 
                  background: m.role === 'user' ? '#007bff' : '#e9ecef', 
                  color: m.role === 'user' ? 'white' : 'black',
                  padding: '10px 14px', 
                  borderRadius: '18px',
                  display: 'inline-block',
                  maxWidth: '85%',
                  wordWrap: 'break-word'
                }}>
                  {m.text}
                </span>
              </div>
            ))}
            {loading && <p style={{color: '#888', fontStyle: 'italic', fontSize: '12px'}}>Thinking...</p>}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ display: 'flex', borderTop: '1px solid #eee', padding: '10px' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a question..."
              style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '20px', outline: 'none', marginRight: '10px' }}
            />
            <button onClick={sendMessage} style={{ background: '#25c2a0', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#25c2a0', 
            color: 'white', 
            border: 'none', 
            fontSize: '30px', 
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          💬
        </button>
      )}
    </div>
  );
}