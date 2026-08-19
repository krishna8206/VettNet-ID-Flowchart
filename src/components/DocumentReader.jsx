import React, { useState } from 'react';
import { 
  BookOpen, Layers, GitGraph, FileText, 
  ChevronRight, Sparkles, ShieldAlert, TrendingUp, Lightbulb 
} from 'lucide-react';

export default function DocumentReader({ 
  sections, 
  domains = [],
  onSelectFlowchartNode, 
  targetSectionId 
}) {
  const [selectedDomain, setSelectedDomain] = useState('ALL');

  // Filter sections by domain
  const filteredSections = sections.filter(sec => {
    const secDomain = sec.domain || sec.category;
    return selectedDomain === 'ALL' || secDomain === selectedDomain;
  });

  return (
    <div className="doc-reader-view">
      {/* Header Document Charter Banner */}
      <div className="doc-header-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="stat-pill stat-pill-cyan">System Architecture & Functional Blueprint</span>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.3rem', color: '#0f172a' }}>
              VettNet ID — Architecture Specification
            </h1>
            <p style={{ color: '#475569', fontSize: '0.84rem', marginTop: '0.2rem' }}>
              Complete functional specification across 8 enterprise architectural domains • Vision: “Verify Once. Use Everywhere.”
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="stat-pill stat-pill-purple">8 Core Domains</span>
            <span className="stat-pill stat-pill-emerald">45 Specifications</span>
            <span className="stat-pill stat-pill-cyan">30 Key Modules</span>
          </div>
        </div>

        {/* Filter Controls by Domain */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          <button
            className={`pipeline-btn ${selectedDomain === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedDomain('ALL')}
          >
            All 8 Domains
          </button>
          {domains.map(dom => (
            <button
              key={dom.id}
              className={`pipeline-btn ${selectedDomain === dom.title ? 'active' : ''}`}
              onClick={() => setSelectedDomain(dom.title)}
            >
              {dom.title}
            </button>
          ))}
        </div>
      </div>

      {/* List of 45 Architecture Specifications */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredSections.map((sec) => (
          <article key={sec.id} id={sec.id} className="doc-page-section-card">
            {/* Card Header */}
            <div className="doc-page-header">
              <div className="doc-page-title-group">
                <span className="doc-page-number-badge">Spec {sec.number}</span>
                <div>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                    {sec.title}
                  </h2>
                  <span style={{ fontSize: '0.76rem', color: '#64748b' }}>
                    Domain: <strong style={{ color: '#0284c7' }}>{sec.domain || sec.category}</strong>
                  </span>
                </div>
              </div>

              <button 
                className="nav-btn nav-btn-primary"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                onClick={() => onSelectFlowchartNode(sec.id)}
              >
                <GitGraph size={13} />
                View in Flowchart
              </button>
            </div>

            {/* Requirement Summary & Business Value */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ fontSize: '0.88rem', color: '#1e293b', lineHeight: '1.55', fontWeight: 500 }}>
                {sec.summary}
              </p>
              {sec.businessValue && (
                <div style={{ fontSize: '0.82rem', color: '#0369a1', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontWeight: 600 }}>
                  <TrendingUp size={15} style={{ flexShrink: 0, marginTop: '0.1rem', color: '#0284c7' }} />
                  <span><strong style={{ color: '#0c4a6e' }}>Business Impact:</strong> {sec.businessValue}</span>
                </div>
              )}
            </div>

            {/* Functional Operational Breakdown */}
            <div>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#7c3aed', letterSpacing: '0.05em', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                <Sparkles size={14} /> Operational Breakdown
              </h4>
              <div className="line-breakdown-list">
                {sec.functionalBreakdown ? (
                  sec.functionalBreakdown.map((item, idx) => (
                    <div key={idx} className="line-breakdown-item">
                      <div className="line-quote">{item.point}</div>
                      <div className="line-explanation">{item.detail}</div>
                    </div>
                  ))
                ) : sec.lineByLineExplanation ? (
                  sec.lineByLineExplanation.map((item, idx) => (
                    <div key={idx} className="line-breakdown-item">
                      <div className="line-quote">"{item.line}"</div>
                      <div className="line-explanation">{item.explanation}</div>
                    </div>
                  ))
                ) : null}
              </div>
            </div>

            {/* Governance & Compliance Rules */}
            {(sec.rulesAndStandards || sec.keyRules) && (sec.rulesAndStandards || sec.keyRules).length > 0 && (
              <div className="drawer-card" style={{ marginTop: '0.25rem' }}>
                <div className="drawer-card-title" style={{ color: '#d97706' }}>
                  <ShieldAlert size={14} /> Governance & Security Rules
                </div>
                <ul className="rules-list">
                  {(sec.rulesAndStandards || sec.keyRules).map((rule, idx) => (
                    <li key={idx} className="rules-item" style={{ fontSize: '0.8rem', color: '#334155' }}>
                      <span className="rules-item-bullet">◆</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Real-World Client Scenario */}
            {(sec.clientScenario || sec.example) && (
              <div className="example-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857', fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.78rem' }}>
                  <Lightbulb size={14} /> Client Implementation Scenario
                </div>
                {sec.clientScenario || sec.example}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
