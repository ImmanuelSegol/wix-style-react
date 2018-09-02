import React from 'react';
import TableActionCell from 'wix-style-react/TableActionCell';
import {Star, Download, Duplicate, Print} from 'wix-style-react/new-icons';

import styles from '../TableActionCell.story.scss';

const Example = () => (
  <tr className={styles.previewWrapper}>
    <TableActionCell
      dataHook="story-primary-hidden-secondary"
      primaryAction={{
        text: 'Edit',
        theme: 'fullblue',
        onClick: () => window.alert('Primary action was triggered!')
      }}
      secondaryActions={[
        {text: 'Star', icon: <Star/>, onClick: () => window.alert('Star action was triggered.')},
        {text: 'Download', icon: <Download/>, onClick: () => window.alert('Download action was triggered.')},
        {text: 'Duplicate', icon: <Duplicate/>, onClick: () => window.alert('Duplicate action was triggered.')},
        {text: 'Print', icon: <Print/>, onClick: () => window.alert('Print action was triggered.')}
      ]}
      numOfVisibleSecondaryActions={0}
      />
  </tr>
);

export default Example;
