import { CopyBlock, dracula } from 'react-code-blocks';
import style from 'src/styles/codeSnippet.module.css'

interface CodeProps {
  code: string
  language: string
}


const CodeSnippet: React.FC<CodeProps> = ({ code, language }) => {
  return (
    <div className={style.codeContainer}>
      <CopyBlock 
      text={code}
      language={language}
      showLineNumbers={true}
      theme={dracula}
    />
    </div>
  );
}

export default CodeSnippet;