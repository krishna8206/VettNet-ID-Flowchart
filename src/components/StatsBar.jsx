import React from 'react';
import { Layers, Database, Shield, CheckCircle, RefreshCw, KeyRound, Sparkles } from 'lucide-react';

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-group">
        <div className="stat-item">
          <Sparkles size={14} color="#38bdf8" />
          <span>Architecture Scope:</span>
          <span className="stat-value">End-to-End Enterprise Trust Rails</span>
        </div>

        <div className="stat-item">
          <Database size={14} color="#34d399" />
          <span>Functional Modules:</span>
          <span className="stat-value">30 Micro-Systems</span>
        </div>

        <div className="stat-item">
          <Layers size={14} color="#818cf8" />
          <span>Core Flowcharts:</span>
          <span className="stat-value">6 Interactive Pipelines</span>
        </div>
      </div>

      <div className="stats-group">
        <div className="stat-pill stat-pill-cyan">
          14 Master Architecture Stages
        </div>

        <div className="stat-pill stat-pill-emerald">
          6-Gate Zero-Trust Consent Interceptor
        </div>

        <div className="stat-pill stat-pill-purple">
          9-State Verification Finite Machine
        </div>

        <div className="stat-pill stat-pill-cyan">
          6W+P Immutable Audit Ledger
        </div>
      </div>
    </div>
  );
}
