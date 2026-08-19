import React from 'react';
import { 
  ShieldCheck, GitGraph, BookOpen, 
  Grid3X3, Download
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onExport
}) {
  return (
    <header className="navbar-single">
      {/* Brand Title */}
      <div className="brand-group">
        <div className="logo-icon-box">
          <ShieldCheck size={20} strokeWidth={2.5} />
        </div>
        <div className="brand-titles">
          <span className="brand-title">VettNet ID</span>
          <span className="brand-tagline">“Verify Once. Use Everywhere.”</span>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <nav className="nav-tabs-single">
        <button 
          className={`tab-btn ${activeTab === 'flowchart' ? 'active' : ''}`}
          onClick={() => setActiveTab('flowchart')}
        >
          <GitGraph size={14} />
          Flowcharts
        </button>

        <button 
          className={`tab-btn ${activeTab === 'doc-reader' ? 'active' : ''}`}
          onClick={() => setActiveTab('doc-reader')}
        >
          <BookOpen size={14} />
          Architecture Guide
        </button>

        <button 
          className={`tab-btn ${activeTab === 'modules-matrix' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules-matrix')}
        >
          <Grid3X3 size={14} />
          30 Key Modules
        </button>
      </nav>

      {/* Action Controls */}
      <div className="nav-right-group">
        <button 
          className="nav-btn nav-btn-primary"
          onClick={onExport}
          title="Export Architecture Blueprint"
          style={{ padding: '0.35rem 0.85rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
        >
          <Download size={13} />
          Export Blueprint
        </button>
      </div>
    </header>
  );
}
