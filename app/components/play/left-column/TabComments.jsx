import React from 'react'
import {
  ThumbsUp, MessageSquare, X, 
} from 'lucide-react';
export default function TabComments({ comments, showCommentForm, setShowCommentForm }) {
  return (
    <div className="space-y-6">
          {/* Comment Form */}
          <div className="bg-gray-900 rounded-lg p-6">
            {!showCommentForm ? (
              <button
                onClick={() => setShowCommentForm(true)}
                className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-red-600 hover:text-red-500 transition-colors"
              >
                Nhấn để viết bình luận...
              </button>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Viết bình luận</h3>
                  <button
                    onClick={() => setShowCommentForm(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <textarea
                  placeholder="Chia sẻ cảm nhận của bạn về bộ phim..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 resize-none"
                  rows="4"
                ></textarea>
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setShowCommentForm(false)}
                    className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Hủy
                  </button>
                  <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-semibold">
                    Đăng
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{comment.user}</span>
                      <span className="text-gray-400 text-sm">{comment.time}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{comment.text}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{comment.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">Trả lời</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}
