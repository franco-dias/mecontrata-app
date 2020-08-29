import React from 'react';

import Done from './images/Done';
import NoDocuments from './images/NoDocuments';
import NoImages from './images/NoImages';
import NoMessages from './images/NoMessages';
import NoSearchResult from './images/NoSearchResult';
import EmptyInbox from './images/EmptyInbox';

const icons = {
  Done,
  NoDocuments,
  NoImages,
  NoMessages,
  NoSearchResult,
  EmptyInbox,
};

const Image = ({ name }) => {
  const Icon = icons[name];
  return <Icon />;
};

export default Image;
