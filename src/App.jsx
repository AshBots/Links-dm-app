import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('landing');
  const [name, setName] = useState('Your Name');
  const [profession, setProfession] = useState('Your Profession');
  const [bio, setBio] = useState('Add bio here 🌟');

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-400 to-green-400 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-8">🔗 Links & DM 💬</h1>
          <button onClick={() => setView('editor')} className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg">
            Get Started
          </button>
        </div>
      </div>
    );
  }

  if (view === 'preview') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-blue-400 p-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{name}</h1>
          <p className="text-white text-xl mb-2">{profession}</p>
          <p className="text-white mb-8">{bio}</p>
          <button onClick={() => setView('editor')} className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold mr-2">
            Edit
          </button>
          <button onClick={() => setView('landing')} className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold">
            Back
          </button>
        </div>
      </div>
    );
  }

  if (view === 'editor') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-400 to-green-400 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-6">Edit Profile</h1>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block font-bold mb-2">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border-2 border-gray-300 rounded-lg p-3" />
            </div>
            <div>
              <label className="block font-bold mb-2">Profession</label>
              <input value={profession} onChange={(e) => setProfession(e.target.value)} className="w-full border-2 border-gray-300 rounded-lg p-3" />
            </div>
            <div>
              <label className="block font-bold mb-2">Bio</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="w-full border-2 border-gray-300 rounded-lg p-3 h-24" />
            </div>
          </div>

          <button onClick={() => setView('preview')} className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold mr-2">
            Preview
          </button>
          <button onClick={() => setView('landing')} className="bg-gray-400 text-white px-8 py-3 rounded-lg font-bold">
            Back
          </button>
        </div>
      </div>
    );
  }
}
