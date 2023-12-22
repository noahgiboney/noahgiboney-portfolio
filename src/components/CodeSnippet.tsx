import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import style from 'src/styles/codeSnippet.module.css';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

interface CodeProps {
  code: string;
  language: string;
}

const CodeSnippet: React.FC<CodeProps> = ({ code, language }) => {
  // This function returns true if the prop is valid to forward to the DOM.
  const shouldForwardProp = (prop: any) => isPropValid(prop) && prop !== 'copied';

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <div className={style.codeContainer}>
        <CopyBlock 
          text={code}
          language={language}
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </StyleSheetManager>
  );
}

export default CodeSnippet;
