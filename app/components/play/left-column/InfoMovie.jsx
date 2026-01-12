import React, { useState } from 'react'
import HeaderInfo from './HeaderInfo';
import Tabs from './Tabs';
import TabInfo from './TabInfo';
import TabEpisodes from './TabEpisodes';
import TabComments from './TabComments';
export default function InfoMovie({ movie, currentServer, comments,currentEpisode, setCurrentEpisode }) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const getCleanContent = (htmlContent) => {
    return htmlContent ? htmlContent.replace(/<[^>]*>/g, '') : '';
  };

  return (
    <div className="lg:col-span-2">
      {/* Title and Stats */}
      <HeaderInfo movie={movie} />

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} movie={movie} currentServer={currentServer} comments={comments} />

      {/* Tab Content */}
      {activeTab === 'info' && (
        <TabInfo movie={movie} getCleanContent={getCleanContent} />
      )}

      {activeTab === 'episodes' && (
        <TabEpisodes movie={movie} currentServer={currentServer} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode} />
      )}

      {activeTab === 'comments' && (
        <TabComments comments={comments} showCommentForm={showCommentForm} setShowCommentForm={setShowCommentForm} />
      )}
    </div>
  )
}
