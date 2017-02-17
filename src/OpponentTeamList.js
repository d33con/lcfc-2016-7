import React, { PropTypes } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';

const OpponentTeamListProps = {
  players: PropTypes.array,
  textAlign: PropTypes.string,
  avatarColor: PropTypes.string
};

function OpponentTeamList ({players, textAlign, avatarColor}) {
  return (
    <List className={"md-cell--6 md-text-" + textAlign}>
      {players.map(player => 
        <ListItem 
          key={player.number} 
          primaryText={player.name} 
          secondaryText={player.replaced && <span><FontIcon>swap_horiz</FontIcon>{player.replaced}</span>} 
          leftAvatar={<Avatar suffix={avatarColor} icon={player.number} />} />
      )}
    </List>
  )
}

OpponentTeamListProps.propTypes = OpponentTeamListProps;

export default OpponentTeamList;
