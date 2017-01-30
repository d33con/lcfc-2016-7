import React, { PropTypes } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

const GoalscorerList = props =>
  <List className={"md-cell--6 md-text-" + props.textAlign}>
    {props.scorers.map(scorer => <ListItem key={scorer.time} primaryText={`${scorer.name} ${scorer.time}`} />)}
  </List>


GoalscorerList.propTypes = {
  scorers: PropTypes.array,
  textAlign: PropTypes.string
};

export default GoalscorerList;
