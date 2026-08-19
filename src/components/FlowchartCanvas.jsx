import React, { useState, useRef, useEffect } from 'react';
import {
  ZoomIn, ZoomOut, RotateCcw,
  Users, Fingerprint, ShieldCheck, Lock, Layers, FileText, Cpu, Landmark,
  DollarSign, Briefcase, Award, CheckCircle2, AlertTriangle, BadgeCheck,
  Share2, Activity, RefreshCw, Archive, UserPlus, Hash, Edit3, UploadCloud,
  Building, Search, GitBranch, CreditCard, Target, Filter, Eye, HelpCircle,
  Key, Sliders, Clock, Unlock, XCircle, Inbox, Shuffle, Zap, UserCheck,
  FileCheck, ShieldAlert, Tag, Database, Shield, LogIn, List, CheckSquare, AlertOctagon,
  MousePointer, ChevronLeft, ChevronRight, Sparkles, LayoutGrid, Network
} from 'lucide-react';

const ICON_MAP = {
  Users, Fingerprint, ShieldCheck, Lock, Layers, FileText, Cpu, Landmark,
  DollarSign, Briefcase, Award, CheckCircle2, AlertTriangle, BadgeCheck,
  Share2, Activity, RefreshCw, Archive, UserPlus, Hash, Edit3, UploadCloud,
  Building, Search, GitBranch, CreditCard, Target, Filter, Eye, HelpCircle,
  Key, Sliders, Clock, Unlock, XCircle, Inbox, Shuffle, Zap, UserCheck,
  FileCheck, ShieldAlert, Tag, Database, Shield, LogIn, List, CheckSquare, AlertOctagon
};

const CARD_WIDTH = 360;
const CARD_HEIGHT = 96;

export default function FlowchartCanvas({
  flowcharts,
  activePipeline,
  setActivePipeline,
  selectedNodeId,
  onSelectNode
}) {
  const currentFlow = flowcharts[activePipeline] || flowcharts.masterArchitecture;
  const viewportRef = useRef(null);

  // View Mode: 'canvas' | 'board'
  const [viewMode, setViewMode] = useState('canvas');

  // Pan & Zoom State
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 100, y: 30 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Guided Walkthrough / Tour State
  const [currentTourIndex, setCurrentTourIndex] = useState(0);

  // Center horizontally at the start
  const centerInitialView = () => {
    if (!viewportRef.current) return;
    const vpW = viewportRef.current.clientWidth;
    const targetX = vpW / 2 - (640 + CARD_WIDTH / 2) * 0.85;
    setZoom(0.85);
    setPan({ x: targetX, y: 30 });
  };

  // Center on pipeline switch
  useEffect(() => {
    if (viewMode === 'canvas') {
      const timer = setTimeout(centerInitialView, 100);
      return () => clearTimeout(timer);
    }
  }, [activePipeline, viewMode]);

  // Center on specific node
  const centerOnNode = (node) => {
    if (viewportRef.current && node && viewMode === 'canvas') {
      const vpW = viewportRef.current.clientWidth;
      const vpH = viewportRef.current.clientHeight;
      const targetX = vpW / 2 - (node.x + CARD_WIDTH / 2) * zoom;
      const targetY = vpH / 2 - (node.y + CARD_HEIGHT / 2) * zoom;
      setPan({ x: targetX, y: targetY });
    }
  };

  // Handle tour index sync
  useEffect(() => {
    if (selectedNodeId) {
      const idx = currentFlow.nodes.findIndex(n => n.id === selectedNodeId);
      if (idx !== -1) setCurrentTourIndex(idx);
    }
  }, [selectedNodeId, currentFlow]);

  // Guided Tour handlers
  const handleTourNext = () => {
    const nextIdx = (currentTourIndex + 1) % currentFlow.nodes.length;
    setCurrentTourIndex(nextIdx);
    const nextNode = currentFlow.nodes[nextIdx];
    onSelectNode(nextNode);
    centerOnNode(nextNode);
  };

  const handleTourPrev = () => {
    const prevIdx = currentTourIndex === 0 ? currentFlow.nodes.length - 1 : currentTourIndex - 1;
    setCurrentTourIndex(prevIdx);
    const prevNode = currentFlow.nodes[prevIdx];
    onSelectNode(prevNode);
    centerOnNode(prevNode);
  };

  // Canvas Mouse handlers
  const handleMouseDown = (e) => {
    if (e.target.closest('.flow-node-card') || e.target.closest('.single-toolbar')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    setZoom((prev) => Math.min(Math.max(prev * zoomFactor, 0.4), 2.0));
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.15, 2.0));
  const handleZoomOut = () => setZoom(prev => Math.max(prev * 0.85, 0.4));

  // Render SVG Bezier Connections for Light Theme
  const renderConnections = () => {
    const nodeMap = new Map(currentFlow.nodes.map(n => [n.id, n]));

    return currentFlow.connections.map((conn, idx) => {
      const fromNode = nodeMap.get(conn.from);
      const toNode = nodeMap.get(conn.to);
      if (!fromNode || !toNode) return null;

      const fromX = fromNode.x + CARD_WIDTH / 2;
      const fromY = fromNode.y + CARD_HEIGHT;
      const toX = toNode.x + CARD_WIDTH / 2;
      const toY = toNode.y;

      let pathD = '';
      let midX = (fromX + toX) / 2;
      let midY = (fromY + toY) / 2;

      if (conn.curve === 'left-loop') {
        const startX = fromNode.x;
        const startY = fromNode.y + CARD_HEIGHT / 2;
        const endX = toNode.x;
        const endY = toNode.y + CARD_HEIGHT / 2;
        const loopX = Math.min(fromNode.x, toNode.x) - 280;
        const cornerR = 24;

        pathD = `M ${startX} ${startY}
                 L ${loopX + cornerR} ${startY}
                 Q ${loopX} ${startY} ${loopX} ${startY - cornerR}
                 L ${loopX} ${endY + cornerR}
                 Q ${loopX} ${endY} ${loopX + cornerR} ${endY}
                 L ${endX} ${endY}`;
        midX = loopX;
        midY = (startY + endY) / 2;
      } else {
        const deltaY = Math.abs(toY - fromY);
        const controlOffset = Math.max(deltaY * 0.5, 45);
        pathD = `M ${fromX} ${fromY} C ${fromX} ${fromY + controlOffset}, ${toX} ${toY - controlOffset}, ${toX} ${toY}`;
      }

      const isConnActive = selectedNodeId === conn.from || selectedNodeId === conn.to;
      const labelText = conn.label || '';
      const textWidth = Math.max(labelText.length * 7.5 + 24, 75);

      return (
        <g key={`conn-${idx}`}>
          <path
            d={pathD}
            className="flow-path-base"
          />
          <path
            d={pathD}
            className="flow-path-active"
            style={{ opacity: isConnActive ? 1 : 0.7 }}
          />
          {labelText && (
            <g transform={`translate(${midX}, ${midY})`}>
              <rect
                x={-textWidth / 2}
                y="-12"
                width={textWidth}
                height="24"
                rx="6"
                fill="#ffffff"
                stroke={isConnActive ? "#0284c7" : "#cbd5e1"}
                strokeWidth={isConnActive ? "1.8" : "1.2"}
                style={{ filter: 'drop-shadow(0 2px 4px rgba(15, 23, 42, 0.08))' }}
              />
              <text
                x="0"
                y="0"
                dominantBaseline="central"
                textAnchor="middle"
                fill={isConnActive ? "#0284c7" : "#334155"}
                fontSize="11"
                fontWeight="700"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              >
                {labelText}
              </text>
            </g>
          )}
        </g>
      );
    });
  };

  return (
    <div className="flowchart-wrapper">
      {/* Unified Single Toolbar Row */}
      <div className="single-toolbar">
        {/* Pipeline Selector */}
        <div className="pipeline-selector-inline">
          <button
            className={`pipeline-btn ${activePipeline === 'masterArchitecture' ? 'active' : ''}`}
            onClick={() => setActivePipeline('masterArchitecture')}
          >
            🏛️ 1. Master Flow
          </button>

          <button
            className={`pipeline-btn ${activePipeline === 'individualFlow' ? 'active' : ''}`}
            onClick={() => setActivePipeline('individualFlow')}
          >
            👤 2. Individual
          </button>

          <button
            className={`pipeline-btn ${activePipeline === 'corporateFlow' ? 'active' : ''}`}
            onClick={() => setActivePipeline('corporateFlow')}
          >
            🏢 3. Corporate
          </button>

          <button
            className={`pipeline-btn ${activePipeline === 'consentGatewayFlow' ? 'active' : ''}`}
            onClick={() => setActivePipeline('consentGatewayFlow')}
          >
            🔒 4. Consent
          </button>

          <button
            className={`pipeline-btn ${activePipeline === 'verificationEngineFlow' ? 'active' : ''}`}
            onClick={() => setActivePipeline('verificationEngineFlow')}
          >
            ⚡ 5. Verification
          </button>

          <button
            className={`pipeline-btn ${activePipeline === 'rbacInternalFlow' ? 'active' : ''}`}
            onClick={() => setActivePipeline('rbacInternalFlow')}
          >
            🛡️ 6. RBAC
          </button>
        </div>

        {/* Tour & View Controls */}
        <div className="toolbar-right-controls">
          {/* Step Walkthrough */}
          <div className="tour-inline-group">
            <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 700 }}>
              Stage {currentTourIndex + 1}/{currentFlow.nodes.length}
            </span>
            <button className="ctrl-btn-slim" onClick={handleTourPrev} title="Previous Stage">
              <ChevronLeft size={14} />
            </button>
            <button className="ctrl-btn-slim" onClick={handleTourNext} title="Next Stage">
              <ChevronRight size={14} />
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="view-mode-toggle">
            <button
              className={`toggle-option ${viewMode === 'canvas' ? 'active' : ''}`}
              onClick={() => setViewMode('canvas')}
              title="Canvas Pan & Zoom"
            >
              <Network size={13} /> Canvas
            </button>
            <button
              className={`toggle-option ${viewMode === 'board' ? 'active' : ''}`}
              onClick={() => setViewMode('board')}
              title="Structured Executive Board View"
            >
              <LayoutGrid size={13} /> Board
            </button>
          </div>

          {viewMode === 'canvas' && (
            <div className="zoom-controls-slim">
              <button className="ctrl-btn-slim" onClick={handleZoomIn} title="Zoom In">
                <ZoomIn size={14} />
              </button>
              <button className="ctrl-btn-slim" onClick={handleZoomOut} title="Zoom Out">
                <ZoomOut size={14} />
              </button>
              <button className="ctrl-btn-slim" onClick={centerInitialView} title="Reset Center">
                <RotateCcw size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: Canvas Mode */}
      {viewMode === 'canvas' && (
        <div
          className={`canvas-viewport ${isDragging ? 'dragging' : ''}`}
          ref={viewportRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
        >
          <div
            className="canvas-transform-layer"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
            }}
          >
            {/* SVG Connector Lines */}
            <svg className="flow-connections-svg" width="3500" height="3500">
              <defs>
                <linearGradient id="cyanBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
              {renderConnections()}
            </svg>

            {/* Interactive Flow Nodes */}
            {currentFlow.nodes.map((node, idx) => {
              const IconComponent = ICON_MAP[node.icon] || FileText;
              const isSelected = selectedNodeId === node.id || currentTourIndex === idx;

              return (
                <div
                  key={node.id}
                  id={`node-${node.id}`}
                  className={`flow-node-card node-${node.type} ${isSelected ? 'selected' : ''}`}
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    width: `${CARD_WIDTH}px`,
                    minHeight: `${CARD_HEIGHT}px`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectNode(node);
                  }}
                >
                  <div className="flow-node-icon">
                    <IconComponent size={20} strokeWidth={2.4} />
                  </div>

                  <div className="flow-node-content">
                    <div className="flow-node-header">
                      <span className="flow-node-title">{node.title}</span>
                      <span className="flow-node-page">
                        {node.stage || `Stage ${idx + 1}`}
                      </span>
                    </div>
                    <span className="flow-node-subtitle">{node.subtitle}</span>

                    <div className="flow-node-footer">
                      <span className="flow-click-hint">
                        Click to inspect details
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: Executive Board View */}
      {viewMode === 'board' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                  {currentFlow.title} — Executive Board
                </h2>
                <p style={{ color: '#475569', fontSize: '0.82rem', marginTop: '0.2rem' }}>
                  {currentFlow.subtitle} • Click any stage to inspect operational rules & requirements.
                </p>
              </div>
              <span className="stat-pill stat-pill-cyan">
                {currentFlow.nodes.length} Connected Stages
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.1rem' }}>
              {currentFlow.nodes.map((node, idx) => {
                const IconComponent = ICON_MAP[node.icon] || FileText;
                const isSelected = selectedNodeId === node.id || currentTourIndex === idx;

                return (
                  <div
                    key={node.id}
                    className={`flow-node-card node-${node.type} ${isSelected ? 'selected' : ''}`}
                    style={{ position: 'relative', width: '100%', cursor: 'pointer' }}
                    onClick={() => onSelectNode(node)}
                  >
                    <div className="flow-node-icon">
                      <IconComponent size={22} strokeWidth={2.4} />
                    </div>

                    <div className="flow-node-content">
                      <div className="flow-node-header">
                        <span className="flow-node-title">{node.title}</span>
                        <span className="flow-node-page">
                          {node.stage || `Stage ${idx + 1}`}
                        </span>
                      </div>
                      <span className="flow-node-subtitle" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                        {node.subtitle}
                      </span>

                      <div className="flow-node-footer" style={{ marginTop: '0.6rem' }}>
                        <span className="flow-click-hint">
                          <Sparkles size={12} /> Inspect operational rules
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
