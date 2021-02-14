import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    
    return(
        <ChatEngine
            height="100vh"
            projectID="5730db67-486b-4094-bc52-53cda2bbbf6a"
            userName="manish"
            userSecret="123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />} 
        />
    );
}

export default App;