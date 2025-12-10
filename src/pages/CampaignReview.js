// pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, Plus, Trash2, Edit2, Globe, Tv, Radio, MapPin, Users, X } from 'lucide-react';

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [showAddPlatforms, setShowAddPlatforms] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [tempPlatforms, setTempPlatforms] = useState([]);

  const allPlatforms = {
    websites: [
      { id: 'igihe', name: 'Igihe' },
      { id: 'newtimes', name: 'The New Times' },
      { id: 'rwandajobs', name: 'Rwanda Jobs' },
      { id: 'ktpress', name: 'KT Press' },
      { id: 'kigalitoday', name: 'Kigali Today' },
      { id: 'inyarwanda', name: 'Inyarwanda' },
      { id: 'rushyashya', name: 'Rushyashya' },
      { id: 'umuseke', name: 'Umuseke' },
      { id: 'taarifa', name: 'Taarifa News' },
      { id: 'blogs', name: 'Bloga' },
    ],
    tv: [
      { id: 'rtv', name: 'RTV' },
      { id: 'kc2', name: 'KC2' },
      { id: 'tv10', name: 'TV10' },
      { id: 'tv1', name: 'TV1' }
    ],
    radio: [
      { id: 'radio-rwanda', name: 'Radio Rwanda' },
      { id: 'kiss-fm', name: 'Kiss FM' },
      { id: 'royal-fm', name: 'Royal FM' },
      { id: 'contact-fm', name: 'Contact FM' },
      { id: 'flash-fm', name: 'Flash FM' },
      { id: 'isango-star', name: 'Isango Star Radio' }
    ],
    billboards: [
      { id: 'akagera-media', name: 'Akagera Media' },
      { id: 'alliance-media', name: 'Alliance Media' }
    ],
    influencers: [
      { id: 'inf1', name: 'Aime Rwanda 250' },
      { id: 'inf2', name: 'Clapton Kibonke' },
      { id: 'inf3', name: 'Nishimwe Naomi' },
      { id: 'inf4', name: 'Solange Nishimwe' },
      { id: 'inf5', name: 'Ngabo Karegeya' },
      { id: 'inf6', name: 'Zuba Mutesi' },
      { id: 'inf7', name: 'The Long Form' }
    ],
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('https://yepper-backend-ll50.onrender.com/api/campaigns/my-campaigns', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setCampaigns(data.data);
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (campaign) => {
    setEditingCampaign({
      ...campaign,
      fullName: campaign.fullName,
      businessName: campaign.businessName,
      phoneNumber: campaign.phoneNumber,
      notes: campaign.notes || ''
    });
    setSelectedChannels(campaign.selectedChannels);
    setTempPlatforms(campaign.selectedPlatforms);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://yepper-backend-ll50.onrender.com/api/campaigns/${editingCampaign._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          fullName: editingCampaign.fullName,
          businessName: editingCampaign.businessName,
          phoneNumber: editingCampaign.phoneNumber,
          notes: editingCampaign.notes,
          selectedChannels,
          selectedPlatforms: tempPlatforms
        })
      });

      if (response.ok) {
        setEditingCampaign(null);
        setShowAddPlatforms(false);
        fetchCampaigns();
      }
    } catch (error) {
      console.error('Error updating campaign:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this campaign?')) return;

    try {
      const response = await fetch(`https://yepper-backend-ll50.onrender.com/api/campaigns/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        fetchCampaigns();
      }
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  const toggleChannel = (channel) => {
    setSelectedChannels(prev =>
      prev.includes(channel)
        ? prev.filter(c => c !== channel)
        : [...prev, channel]
    );
  };

  const addPlatform = (platformId, platformName, category) => {
    const exists = tempPlatforms.find(p => p.platformId === platformId);
    if (!exists) {
      setTempPlatforms([...tempPlatforms, { platformId, platformName, category }]);
    }
  };

  const removePlatform = (platformId) => {
    setTempPlatforms(tempPlatforms.filter(p => p.platformId !== platformId));
  };

  const getIcon = (category) => {
    switch(category) {
      case 'websites': return Globe;
      case 'tv': return Tv;
      case 'radio': return Radio;
      case 'billboards': return MapPin;
      case 'influencers': return Users;
      default: return Globe;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-black mb-2">Review</h1>
        </div>

        {campaigns.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-6 text-lg">You haven't created any campaigns yet.</p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-black text-white hover:bg-gray-800 text-lg font-semibold"
            >
              Create Your First Campaign
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {campaigns.map((campaign) => (
              <div key={campaign._id} className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                {editingCampaign && editingCampaign._id === campaign._id ? (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={editingCampaign.fullName}
                          onChange={(e) => setEditingCampaign({...editingCampaign, fullName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                        <input
                          type="text"
                          value={editingCampaign.businessName}
                          onChange={(e) => setEditingCampaign({...editingCampaign, businessName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={editingCampaign.phoneNumber}
                          onChange={(e) => setEditingCampaign({...editingCampaign, phoneNumber: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                        <textarea
                          value={editingCampaign.notes}
                          onChange={(e) => setEditingCampaign({...editingCampaign, notes: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Channels</h3>
                      <div className="flex flex-wrap gap-3">
                        {['websites', 'tv', 'radio', 'billboards', 'influencers'].map(channel => {
                          const Icon = getIcon(channel);
                          const isSelected = selectedChannels.includes(channel);
                          return (
                            <button
                              key={channel}
                              onClick={() => toggleChannel(channel)}
                              className={`flex items-center gap-2 px-4 py-2 border transition-all ${
                                isSelected ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-400'
                              }`}
                            >
                              <Icon size={18} />
                              <span className="capitalize text-sm">{channel}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Platforms ({tempPlatforms.length})</h3>
                        <button
                          onClick={() => setShowAddPlatforms(!showAddPlatforms)}
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-black transition-colors"
                        >
                          <Plus size={18} />
                          Add Platforms
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-3 mb-4">
                        {tempPlatforms.map(platform => {
                          const Icon = getIcon(platform.category);
                          return (
                            <div key={platform.platformId} className="flex items-center justify-between p-3 border border-gray-200">
                              <div className="flex items-center gap-2">
                                <Icon size={16} className="text-gray-600" />
                                <span className="text-sm">{platform.platformName}</span>
                              </div>
                              <button
                                onClick={() => removePlatform(platform.platformId)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      {showAddPlatforms && (
                        <div className="border border-gray-300 p-6 bg-gray-50 space-y-4">
                          {selectedChannels.map(channel => {
                            const availablePlatforms = allPlatforms[channel].filter(
                              p => !tempPlatforms.find(tp => tp.platformId === p.id)
                            );
                            if (availablePlatforms.length === 0) return null;

                            return (
                              <div key={channel}>
                                <p className="text-sm font-medium text-gray-700 capitalize mb-2">{channel}</p>
                                <div className="grid grid-cols-5 gap-2">
                                  {availablePlatforms.map(platform => (
                                    <button
                                      key={platform.id}
                                      onClick={() => addPlatform(platform.id, platform.name, channel)}
                                      className="px-3 py-2 border border-gray-200 hover:border-black text-sm text-left bg-white"
                                    >
                                      {platform.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-black text-white hover:bg-gray-800 font-medium"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => {
                          setEditingCampaign(null);
                          setShowAddPlatforms(false);
                        }}
                        className="px-6 py-3 border border-gray-300 hover:bg-gray-50 font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{campaign.businessName}</h2>
                        <p className="text-gray-600">{campaign.fullName} • {campaign.phoneNumber}</p>
                        <p className="text-sm text-gray-500 mt-2">{formatDate(campaign.createdAt)}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(campaign)}
                          className="p-2 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(campaign._id)}
                          className="p-2 border border-red-300 text-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Channels ({campaign.selectedChannels.length})</h3>
                        <div className="flex flex-wrap gap-2">
                          {campaign.selectedChannels.map(channel => {
                            const Icon = getIcon(channel);
                            return (
                              <div key={channel} className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-200">
                                <Icon size={16} />
                                <span className="text-sm capitalize">{channel}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Platforms ({campaign.selectedPlatforms.length})</h3>
                        <div className="flex flex-wrap gap-2">
                          {campaign.selectedPlatforms.slice(0, 6).map(platform => (
                            <div key={platform.platformId} className="px-3 py-2 bg-gray-100 border border-gray-200 text-sm">
                              {platform.platformName}
                            </div>
                          ))}
                          {campaign.selectedPlatforms.length > 6 && (
                            <div className="px-3 py-2 bg-gray-100 border border-gray-200 text-sm text-gray-600">
                              +{campaign.selectedPlatforms.length - 6} more
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {campaign.notes && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">{campaign.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;