import React, { PropTypes } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';
import FontIcon from 'react-md/lib/FontIcons';

const OpponentTeamList = props =>
  <List className={"md-cell--6 md-text-" + props.textAlign}>
    {props.players.map(player => <ListItem key={player.number} primaryText={player.name} secondaryText={player.replaced ? <span><FontIcon>swap_horiz</FontIcon>{player.replaced}</span> : null} leftAvatar={<Avatar suffix={props.avatarColor} icon={player.number} />} />)}
    <Divider />
  </List>


OpponentTeamList.propTypes = {
  players: PropTypes.array,
  textAlign: PropTypes.string,
  avatarColor: PropTypes.string
};

export default OpponentTeamList;
