import React, { useState, useEffect } from 'react';
import { Globe, Tv, Radio, MapPin, Users, Share2, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function SelectPlatforms() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedChannels = location.state?.selectedChannels || [];
  
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect if no channels were selected
  useEffect(() => {
    if (selectedChannels.length === 0) {
      navigate('/');
    }
  }, [selectedChannels, navigate]);

  const allPlatforms = {
    websites: [
      { id: 'igihe', name: 'Igihe', icon: Globe },
      { id: 'newtimes', name: 'The New Times', icon: Globe },
      { id: 'rwandajobs', name: 'Rwanda Jobs', icon: Globe },
      { id: 'ktpress', name: 'KT Press', icon: Globe },
      { id: 'kigalitoday', name: 'Kigali Today', icon: Globe },
      { id: 'inyarwanda', name: 'Inyarwanda', icon: Globe },
      { id: 'rushyashya', name: 'Rushyashya', icon: Globe },
      { id: 'umuseke', name: 'Umuseke', icon: Globe },
      { id: 'taarifa', name: 'Taarifa News', icon: Globe },
      { id: 'blogs', name: 'Bloga', icon: Globe },
    ],
    tv: [
      { id: 'rtv', name: 'RTV', icon: Tv },
      { id: 'kc2', name: 'KC2', icon: Tv },
      { id: 'tv10', name: 'TV10', icon: Tv },
      { id: 'tv1', name: 'TV1', icon: Tv }
    ],
    radio: [
      { id: 'radio-rwanda', name: 'Radio Rwanda', icon: Radio },
      { id: 'kiss-fm', name: 'Kiss FM', icon: Radio },
      { id: 'royal-fm', name: 'Royal FM', icon: Radio },
      { id: 'contact-fm', name: 'Contact FM', icon: Radio },
      { id: 'flash-fm', name: 'Flash FM', icon: Radio },
      { id: 'isango-star', name: 'Isango Star Radio', icon: Radio }
    ],
    billboards: [
      { id: 'akagera-media', name: 'Akagera Media', icon: MapPin },
      { id: 'alliance-media', name: 'Alliance Media', icon: MapPin }
    ],
    influencers: [
      { id: 'inf1', name: 'Bruce Melodie', icon: Users, platforms: ['instagram', 'twitter'] },
      { id: 'inf2', name: 'Knowless', icon: Users, platforms: ['instagram', 'youtube'] },
      { id: 'inf3', name: 'Uncle Austin', icon: Users, platforms: ['twitter', 'youtube'] },
      { id: 'inf4', name: 'Miss Rwanda', icon: Users, platforms: ['instagram'] },
      { id: 'inf5', name: 'Charly na Nina', icon: Users, platforms: ['instagram', 'youtube', 'twitter'] },
      { id: 'inf6', name: 'Arthur Nkusi', icon: Users, platforms: ['twitter', 'instagram'] }
    ],
  };

  // Filter platforms based on selected channels
  const platforms = Object.keys(allPlatforms).reduce((acc, category) => {
    if (selectedChannels.includes(category)) {
      acc[category] = allPlatforms[category];
    }
    return acc;
  }, {});

  // Generate tabs based on selected channels
  const tabs = [
    { id: 'all', label: 'All' },
    ...selectedChannels.map(channel => ({
      id: channel,
      label: channel.charAt(0).toUpperCase() + channel.slice(1)
    }))
  ];

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'twitter': return Twitter;
      case 'instagram': return Instagram;
      case 'linkedin': return Linkedin;
      case 'youtube': return Youtube;
      default: return Share2;
    }
  };

  const togglePlatform = (platformId, platformName, category) => {
    const platformData = {
      platformId,
      platformName,
      category
    };

    setSelectedPlatforms(prev => {
      const exists = prev.find(p => p.platformId === platformId);
      if (exists) {
        return prev.filter(p => p.platformId !== platformId);
      } else {
        return [...prev, platformData];
      }
    });
  };

  const isPlatformSelected = (platformId) => {
    return selectedPlatforms.some(p => p.platformId === platformId);
  };

  const getFilteredPlatforms = () => {
    let filtered;
    if (activeTab === 'all') {
      filtered = Object.entries(platforms).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    } else {
      filtered = platforms[activeTab]?.map(item => ({ ...item, category: activeTab })) || [];
    }

    if (searchQuery) {
      filtered = filtered.filter(platform =>
        platform.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleContinue = () => {
    if (selectedPlatforms.length === 0) {
      alert('Please select at least one platform');
      return;
    }

    navigate('/user-info', {
      state: {
        selectedChannels,
        selectedPlatforms
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-black leading-tight">
            Which platforms would you like to advertise on?
          </h1>
          <p className="text-lg text-gray-600">
            Select the platforms where you want your ads to appear. You can choose multiple channels.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-xl bg-white text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Platforms Grid by Category */}
        {activeTab === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {Object.entries(platforms).map(([category, items]) => {
              const filteredItems = searchQuery
                ? items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                : items;

              if (filteredItems.length === 0) return null;

              return (
                <div key={category} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                    <h2 className="text-base font-semibold text-black capitalize">
                      {category}
                    </h2>
                  </div>
                  <div className="p-5 max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-3 gap-3">
                      {filteredItems.map(platform => {
                        const Icon = platform.icon;
                        const isInfluencer = category === 'influencers';
                        const isSelected = isPlatformSelected(platform.id);
                        
                        return (
                          <button
                            key={platform.id}
                            onClick={() => togglePlatform(platform.id, platform.name, category)}
                            className={`flex flex-col items-center gap-3 p-4 border rounded-lg transition-all duration-200 relative hover:shadow-md ${
                              isSelected
                                ? 'border-black bg-gray-50 shadow-sm'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <div className={`p-3 rounded-full transition-colors ${
                              isSelected
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              <Icon size={18} />
                            </div>
                            <span className="text-xs font-medium text-gray-900 text-center leading-tight">
                              {platform.name}
                            </span>
                            {isInfluencer && platform.platforms && (
                              <div className="absolute bottom-2 right-2 flex items-center gap-1">
                                <span className="text-[9px] text-gray-500">on</span>
                                <div className="flex -space-x-1">
                                  {platform.platforms.map((socialPlatform, idx) => {
                                    const SocialIcon = getSocialIcon(socialPlatform);
                                    return (
                                      <div
                                        key={socialPlatform}
                                        className="bg-white border border-gray-300 rounded-full p-1"
                                        style={{ zIndex: platform.platforms.length - idx }}
                                      >
                                        <SocialIcon size={10} className="text-gray-700" />
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 mb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getFilteredPlatforms().map(platform => {
                const Icon = platform.icon;
                const isInfluencer = platform.category === 'influencers';
                const isSelected = isPlatformSelected(platform.id);
                
                return (
                  <button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id, platform.name, platform.category)}
                    className={`flex flex-col items-center gap-3 p-5 border rounded-lg transition-all duration-200 relative hover:shadow-md ${
                      isSelected
                        ? 'border-black bg-gray-50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className={`p-3 rounded-full transition-colors ${
                      isSelected
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center leading-tight">
                      {platform.name}
                    </span>
                    {isInfluencer && platform.platforms && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-1">
                        <span className="text-[9px] text-gray-500">on</span>
                        <div className="flex -space-x-1">
                          {platform.platforms.map((socialPlatform, idx) => {
                            const SocialIcon = getSocialIcon(socialPlatform);
                            return (
                              <div
                                key={socialPlatform}
                                className="bg-white border border-gray-300 rounded-full p-1"
                                style={{ zIndex: platform.platforms.length - idx }}
                              >
                                <SocialIcon size={10} className="text-gray-700" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Fixed Bottom Bar */}
        {selectedPlatforms.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-semibold text-black text-lg">
                    {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? 's' : ''} selected
                  </span>
                  <span className="text-gray-500 ml-2">
                    Ready to continue
                  </span>
                </div>
                <button
                  onClick={handleContinue}
                  className="bg-black text-white px-10 py-4 font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectPlatforms;