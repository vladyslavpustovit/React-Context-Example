import React from 'react';
import { ColorProvider } from '../context/context';
import Content from './content/content'

function App() {

    return (
        <ColorProvider>
            <div className="App">
                <Content />
            </div>
        </ColorProvider>
    );
}

export default App;
