import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="5730db67-486b-4094-bc52-53cda2bbbf6a"
            userName="chatManager"
            userSecret="123123"
            renderChatFeed = {(chatAppProps) => <chatFeed {...chatAppProps} } />
        />
    );
}

export default App;