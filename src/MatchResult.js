import React from 'react';

const MatchResultProps = {
    result: React.PropTypes.string.isRequired
};

function MatchResult({result}) { 
    return (
        <h3>
            <span className={
                (result === 'L') ? "loss" : 
                (result === 'D') ? "draw" : "win"
                }>
                {result}
            </span>
        </h3>
    )
}


MatchResult.propTypes = MatchResultProps;

export default MatchResult;
