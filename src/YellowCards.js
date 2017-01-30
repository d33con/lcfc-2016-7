import React, { PropTypes } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';

import squad from './data/squad';

const getLeicesterPlayerName = (squad, number) => squad.find(x => x.number === number).name;

const YellowCards = props => {
  let { players, textAlign } = props;
  return (
    <div>
    <List className={"md-cell--6 md-text-" + textAlign}>
      {players.map(number => 
          <ListItem key={number} primaryText={getLeicesterPlayerName(squad, number)} rightAvatar={<Avatar suffix={"yellow"} icon={number} />} />)}
    </List>
    <Divider />
    </div>
  )
}


YellowCards.propTypes = {
  players: PropTypes.array,
  textAlign: PropTypes.string
};

export default YellowCards;
