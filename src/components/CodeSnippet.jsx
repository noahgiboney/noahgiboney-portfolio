import { CopyBlock, dracula } from 'react-code-blocks';
import style from 'src/styles/codeSnippet.module.css'

export default function CodeSnippet(props) {
  return (
    <div className={style.codeContainer}>
      <CopyBlock 
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      wrapLines
      theme={dracula}
    />
    </div>
  );
}