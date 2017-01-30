import React, { PropTypes } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';

import squad from './data/squad';

const getLeicesterPlayerName = (squad, number) => squad.find(x => x.number === number).name;

const LeicesterTeamList = props =>
  <List className={"md-cell--6 md-text-" + props.textAlign}>
    {props.players.map(number => <ListItem key={number} primaryText={getLeicesterPlayerName(squad, number)} rightAvatar={<Avatar suffix={props.avatarColor} icon={number} />} />)}
    <Divider />
  </List>


LeicesterTeamList.propTypes = {
  players: PropTypes.array,
  textAlign: PropTypes.string,
  avatarColor: PropTypes.string
};

export default LeicesterTeamList;
