import React from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';

import squad from './data/squad';

const getLeicesterPlayerName = (squad, number) => squad.find(x => x.number === number).name;

const LeicesterTeamListProps = {
  players: React.PropTypes.array.isRequired,
  textAlign: React.PropTypes.string.isRequired,
  avatarColor: React.PropTypes.string.isRequired
};

function LeicesterTeamList ({players, textAlign, avatarColor}) {
  return (
    <List className={"md-cell--6 md-text-" + textAlign}>
      {players.map(number => 
          <ListItem 
            key={number} 
            primaryText={getLeicesterPlayerName(squad, number)} 
            rightAvatar={<Avatar suffix={avatarColor} icon={number} />} />
        )}
    </List>
  )
}

LeicesterTeamList.propTypes = LeicesterTeamListProps;

export default LeicesterTeamList;
