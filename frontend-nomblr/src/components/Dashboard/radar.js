import React from 'react';
import FollowButton from './followButton';
//have an a tag that links to a random user that our user does not follow

const Radar = ({ posts }) => {
  return (
    <div className="radarArea">
      <h2 id="h2"> radar</h2>
      <FollowButton />
      <div>
        <img
          id="radarImg"
          src="https://images.unsplash.com/photo-1514163061636-02db31852e84?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Radar;
