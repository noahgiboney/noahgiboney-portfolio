import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


interface codeSnippetProps{
  code: string
  language: string
}

const CodeSnippet: React.FC<codeSnippetProps> = ({code, language}) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;