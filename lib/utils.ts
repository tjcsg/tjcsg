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

// This function converts the bible book slug into the Contentful tag (e.g. 1-samuel to book1Samuel)
export function bookSlugToContentfulTag(string: String) {
  let arr = string.split('-');

  arr[arr.length - 1] =
    arr[arr.length - 1].charAt(0).toUpperCase() + arr[arr.length - 1].slice(1);

  return `book${arr.join('')}`;
}

// This function converts the contentful tags into the readable text (e.g. category-cdbd to Cdbd, book-ezekiel to Ezekiel)
export function tagNameToText(string: String) {
  let arr = string.split('-');
  arr.shift();
  return arr[0] === 'cdbd' ? arr.join(' ').toUpperCase() : arr.join(' ');
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage < 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage == 3) {
    return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
  }

  if (currentPage === totalPages - 2) {
    return [
      1,
      '...',
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage > totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
