import React from 'react';

const MatchResultProps = {
    result: React.PropTypes.string.isRequired
};

function MatchResult({result}) { 
    return (
        <span className={
            (result === 'L') ? "loss" : 
            (result === 'D') ? "draw" : "win"
            }>
            {result}
        </span>
    )
}


MatchResult.propTypes = MatchResultProps;

export default MatchResult;
