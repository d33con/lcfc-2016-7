import React from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

const GoalscorerListProps = {
  scorers: React.PropTypes.array.isRequired,
  textAlign: React.PropTypes.string.isRequired
};

function GoalscorerList ({scorers, textAlign}) {
  return (
    <List className={"md-cell--6 md-text-" + textAlign}>
      {scorers.map(scorer => <ListItem key={scorer.time} primaryText={`${scorer.name} ${scorer.time}`} />)}
    </List>
  )
}

GoalscorerList.propTypes = GoalscorerListProps;

export default GoalscorerList;
