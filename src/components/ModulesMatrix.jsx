import React, { useState } from 'react';
import { Database, Search, GitGraph, BookOpen, Layers, ArrowRight } from 'lucide-react';

export default function ModulesMatrix({ 
  modules, 
  onSelectModule, 
  onJumpToFlowchart 
}) {
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = ['ALL', ...new Set(modules.map(m => m.category))];

  const filteredModules = modules.filter(m => {
    return filterCategory === 'ALL' || m.category === filterCategory;
  });

  return (
    <div className="modules-matrix-view">
      {/* Header Banner */}
      <div className="doc-header-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="stat-pill stat-pill-purple">Pages 33–34 • Section 44</span>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.4rem' }}>
              30 Key Functional Modules Blueprint
            </h1>
            <p style={{ color: '#475569', fontSize: '0.85rem', marginTop: '0.2rem' }}>
              Micro-modular functional systems comprising the complete VettNet ID Infrastructure
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span className="stat-pill stat-pill-cyan">{filteredModules.length} of 30 Shown</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`pipeline-btn ${filterCategory === cat ? 'active' : ''}`}
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 30 Modules Grid */}
      <div className="modules-grid">
        {filteredModules.map((mod) => (
          <div 
            key={mod.id}
            className="module-card"
            onClick={() => onSelectModule(mod)}
          >
            <div className="module-card-header">
              <span className="module-id-badge">M{mod.id < 10 ? `0${mod.id}` : mod.id}</span>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace' }}>
                Page {mod.page}
              </span>
            </div>

            <h3 className="module-name">{mod.name}</h3>
            <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
              {mod.category}
            </span>
            <p className="module-desc">{mod.desc}</p>

            <div className="module-footer">
              <span>Ref: Sec {mod.sec}</span>
              <span style={{ color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 600 }}>
                View details <ArrowRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
