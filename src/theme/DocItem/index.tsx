import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';
// Ye line sabse zaroori hai (Chatbot ko import karna)
import Chatbot from '@site/src/components/Chatbot'; 

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocItem {...props} />
      {/* Ye line Chatbot ko screen par lagati hai */}
      <Chatbot />
    </>
  );
}