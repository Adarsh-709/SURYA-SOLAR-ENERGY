import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Gallery.css';

import { createClient } from 'contentful';

const client = createClient({
  space: 'ntbwne4e1f5x',
  accessToken: 'hMofFGhJ2X9oJhO0PaQ13lUt-teqwV0d2MidwFt8BCI', 
});

const categories = ['All', 'Installations', 'Infographics', 'Videos'];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [modalItem, setModalItem] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch data from Contentful
    const fetchGallery = async () => {
      try {
        const response = await client.getEntries({ content_type: 'galleryItem' });
        
        const formattedData = response.items.map((item) => {
          const { title, description, category, media } = item.fields;
          
          let fileUrl = '';
          let fileType = 'image';
          
          if (media && media.fields && media.fields.file) {
             fileUrl = 'https:' + media.fields.file.url;
             if (media.fields.file.contentType && media.fields.file.contentType.includes('video')) {
               fileType = 'video';
             }
          }
          
          return {
            id: item.sys.id,
            title: title || 'Untitled',
            desc: description || '',
            category: category || 'Other',
            src: fileUrl,
            type: fileType
          };
        });
        
        setGalleryData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching from Contentful:", error);
        setLoading(false);
      }
    };

    // If we have an access token placeholder, skip fetching for now
    if (client.accessToken !== 'ACCESS_TOKEN_PLACEHOLDER') {
      fetchGallery();
    } else {
      setLoading(false);
    }
  }, []);

  const filteredData = activeTab === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  return (
    <>
      <Navbar />
      
      <div className="gallery-page">
        <div className="container">
          <div className="gallery-header animate-fade-up">
            <h1>Our <span className="text-accent">Gallery</span></h1>
            <p>Explore our installations, informative diagrams, and videos.</p>
          </div>

          <div className="gallery-filters animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="empty-gallery-state animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="empty-icon">⏳</div>
              <h2>Loading Gallery...</h2>
              <p>Connecting to secure server.</p>
            </div>
          ) : filteredData.length > 0 ? (
            <div className="gallery-grid animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {filteredData.map(item => (
                <div key={item.id} className="gallery-card" onClick={() => setModalItem(item)}>
                  {item.type === 'video' ? (
                    <div className="video-thumbnail">
                      <video src={item.src} className="gallery-media" muted loop onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => e.target.pause()}></video>
                      <div className="play-overlay">▶</div>
                    </div>
                  ) : (
                    <img src={item.src} alt={item.title} className="gallery-media" />
                  )}
                  <div className="gallery-info-static">
                    <h3>{item.title}</h3>
                    <p className="item-category">{item.category}</p>
                    {item.desc && (
                      <p className="item-desc">
                        {item.desc.length > 80 ? item.desc.substring(0, 80) + '...' : item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-gallery-state animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="empty-icon">✨</div>
              <h2>Coming Soon!</h2>
              <p>We are currently gathering the best {activeTab.toLowerCase()} to showcase here. Check back later!</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalItem && (
        <div className="gallery-modal" onClick={() => setModalItem(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setModalItem(null)}>×</button>
            
            <div className="modal-media-container">
              {modalItem.type === 'image' ? (
                <img src={modalItem.src} alt={modalItem.title} />
              ) : (
                <video src={modalItem.src} controls autoPlay></video>
              )}
            </div>
            
            <div className="modal-info">
              <h3>{modalItem.title}</h3>
              <p>{modalItem.desc}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
