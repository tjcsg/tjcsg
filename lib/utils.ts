export function obtainTextContent(item: any) {
    let text = '';
    item &&
      item?.json?.content?.forEach(
        (content: any) =>
          content.nodeType === 'paragraph' &&
          (text = `${text} ${content.content[0].value}`),
      );
    return text;
  }