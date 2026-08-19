import React from 'react';
import { 
  X, FileText, CheckCircle2, ShieldAlert, 
  Lightbulb, ArrowRight, BookOpen, Sparkles, TrendingUp
} from 'lucide-react';

export default function NodeDetailDrawer({ 
  node, 
  sectionData, 
  onClose, 
  onJumpToDoc
}) {
  if (!node || !sectionData) return null;

  return (
    <aside className="node-drawer open">
      {/* Drawer Header */}
      <div className="drawer-header">
        <div className="drawer-header-info">
          <div className="drawer-badges">
            <span className="stat-pill stat-pill-cyan">
              {node.stage || `Stage ${sectionData.number}`}
            </span>
            <span className="stat-pill stat-pill-purple">
              {sectionData.domain || sectionData.category}
            </span>
            <span className="stat-pill stat-pill-emerald">
              Verified Pipeline
            </span>
          </div>

          <h2 className="drawer-title">{node.title}</h2>
          <p className="drawer-subtitle">{node.subtitle}</p>
        </div>

        <button className="drawer-close-btn" onClick={onClose} title="Close Panel">
          <X size={18} />
        </button>
      </div>

      {/* Drawer Body with Executive Insights */}
      <div className="drawer-body">
        {/* Executive Overview & Business Purpose */}
        <div className="drawer-card">
          <div className="drawer-card-title">
            <FileText size={16} /> Business Purpose & Value
          </div>
          <p style={{ fontSize: '0.88rem', color: '#1e293b', lineHeight: '1.55', fontWeight: 500 }}>
            {sectionData.summary}
          </p>
          {sectionData.businessValue && (
            <div style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: '#0369a1', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontWeight: 600 }}>
              <TrendingUp size={16} style={{ flexShrink: 0, marginTop: '0.1rem', color: '#0284c7' }} />
              <span><strong style={{ color: '#0c4a6e' }}>Business Impact:</strong> {sectionData.businessValue}</span>
            </div>
          )}
        </div>

        {/* Operational Breakdown */}
        <div className="drawer-card">
          <div className="drawer-card-title" style={{ color: '#7c3aed' }}>
            <Sparkles size={16} /> How It Works — Operational Breakdown
          </div>
          <div className="line-breakdown-list">
            {sectionData.functionalBreakdown ? (
              sectionData.functionalBreakdown.map((item, idx) => (
                <div key={idx} className="line-breakdown-item">
                  <div className="line-quote">{item.point}</div>
                  <div className="line-explanation">{item.detail}</div>
                </div>
              ))
            ) : sectionData.lineByLineExplanation ? (
              sectionData.lineByLineExplanation.map((item, idx) => (
                <div key={idx} className="line-breakdown-item">
                  <div className="line-quote">"{item.line}"</div>
                  <div className="line-explanation">{item.explanation}</div>
                </div>
              ))
            ) : null}
          </div>
        </div>

        {/* Governance & Compliance Rules */}
        {(sectionData.rulesAndStandards || sectionData.keyRules) && (
          <div className="drawer-card">
            <div className="drawer-card-title" style={{ color: '#d97706' }}>
              <ShieldAlert size={16} /> Governance, Security & Compliance Rules
            </div>
            <ul className="rules-list">
              {(sectionData.rulesAndStandards || sectionData.keyRules).map((rule, idx) => (
                <li key={idx} className="rules-item">
                  <span className="rules-item-bullet">◆</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Real-World Business Scenario */}
        {(sectionData.clientScenario || sectionData.example) && (
          <div className="drawer-card">
            <div className="drawer-card-title" style={{ color: '#059669' }}>
              <Lightbulb size={16} /> Real-World Client Scenario
            </div>
            <div className="example-box">
              {sectionData.clientScenario || sectionData.example}
            </div>
          </div>
        )}
      </div>

      {/* Drawer Footer Actions */}
      <div className="drawer-footer">
        <button 
          className="nav-btn nav-btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => onJumpToDoc(sectionData.number, sectionData.id)}
        >
          <BookOpen size={14} />
          View Complete Architecture Guide
        </button>
      </div>
    </aside>
  );
}
