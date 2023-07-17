import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const renderContentfulRichText = (content: any) => {
  const Bold = ({ children }: { children: string }) => (
    <span className="bold">{children}</span>
  );

  const Text = ({ children }: { children: string }) => children;

  const UL = ({ children }: { children: string }) => <ul>{children}</ul>;
  const ListItem = ({ children }: { children: string }) => <li>{children}</li>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <UL>{children}</UL>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <ListItem>{children}</ListItem>
      )
    }
  };

  return documentToReactComponents(content, options);
};
