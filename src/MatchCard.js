import React from 'react';
import fixtures from './data/fixtures';

import {Card, CardTitle, CardText, CardActions} from 'react-md/lib/Cards';
import Divider from 'react-md/lib/Dividers';

import MatchResult from './MatchResult';
import GoalscorerList from './GoalscorerList';
import LeicesterTeamList from './LeicesterTeamList';
import OpponentTeamList from './OpponentTeamList';
import StatsChart from './StatsChart';

const MatchCard = () => (
    <div>
        {fixtures.map(fixture => <Card key={fixture.code}>
            <CardTitle title={fixture.date} subtitle={`${fixture.competition} - ${fixture.venue}`} className="md-text-left"/>
            <CardText>
                <div className="md-text-center">
                    <h1>{fixture.opponent}</h1>
                    <h3><MatchResult result={fixture.result} /></h3>
                    <h1>{fixture.finalScore}</h1>
                    <Divider inset/>
                </div>
            </CardText>
            <CardActions expander />
            <CardText expandable>
              <div className="md-grid md-text-center">
                    <h6 className="md-cell--12">Goalscorers</h6>
                    <GoalscorerList scorers={fixture.lscorers} textAlign={"right"} />
                    <GoalscorerList scorers={fixture.oscorers} textAlign={"left"} />
              </div>
              <div className="md-text-center">
                    <h6>Attendance: {fixture.attendance}</h6>
                    <h6>Referee: {fixture.referee}</h6>
                    <Divider inset/>
              </div>
              <div className="md-grid md-text-center">
                    <h6 className="md-cell--12">Teams</h6>
                    <LeicesterTeamList players={fixture.lteam} textAlign={"right"} avatarColor={fixture.leicesterColourString} />
                    <OpponentTeamList players={fixture.oteam} textAlign={"left"} avatarColor={fixture.opponentColourString} />
                    <h6 className="md-cell--12">Substitutes</h6>
                    <LeicesterTeamList players={fixture.lsubs} textAlign={"right"} avatarColor={fixture.leicesterColourString} />
                    <OpponentTeamList players={fixture.osubs} textAlign={"left"} avatarColor={fixture.opponentColourString} />
                    <h6 className="md-cell--12">Discipline</h6>
                    <LeicesterTeamList players={fixture.lyellowcards} textAlign={"right"} avatarColor={"yellow"} />
                    <OpponentTeamList players={fixture.oyellowcards} textAlign={"left"} avatarColor={"yellow"} />
                    <h6 className="md-cell--12">Stats</h6>
                    <StatsChart stats={fixture.stats} possession={fixture.possession} colours={[fixture.leicesterColour, fixture.opponentColour]} opponent={fixture.opponent} />
              </div>
            </CardText>
        </Card>)}
    </div>
);

export default MatchCard;
