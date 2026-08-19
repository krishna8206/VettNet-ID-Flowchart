import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FlowchartCanvas from './components/FlowchartCanvas';
import NodeDetailDrawer from './components/NodeDetailDrawer';
import DocumentReader from './components/DocumentReader';
import ModulesMatrix from './components/ModulesMatrix';
import { VETTNET_DATA } from './data/vettnetData';

export default function App() {
  // Active Navigation View: 'flowchart' | 'doc-reader' | 'modules-matrix'
  const [activeTab, setActiveTab] = useState('flowchart');

  // Active Flowchart Pipeline
  const [activePipeline, setActivePipeline] = useState('masterArchitecture');

  // Selected Node for Deep-Dive Drawer
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [targetSectionId, setTargetSectionId] = useState(null);

  // Handle Node Click on Flowchart
  const handleSelectNode = (node) => {
    setSelectedNode(node);
    const sec = VETTNET_DATA.sections.find(s => s.id === node.secId);
    setSelectedSection(sec || VETTNET_DATA.sections[0]);
  };

  // Close Deep-Dive Drawer
  const handleCloseDrawer = () => {
    setSelectedNode(null);
    setSelectedSection(null);
  };

  // Jump from Drawer to Architecture Guide
  const handleJumpToDoc = (specNumber, secId) => {
    setTargetSectionId(secId);
    setActiveTab('doc-reader');
    handleCloseDrawer();
    setTimeout(() => {
      const element = document.getElementById(secId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Jump from Architecture Guide to Flowchart
  const handleSelectFlowchartNodeFromDoc = (secId) => {
    setActiveTab('flowchart');
    const sec = VETTNET_DATA.sections.find(s => s.id === secId);
    if (sec) {
      setSelectedSection(sec);
      const currentNodes = VETTNET_DATA.flowcharts[activePipeline].nodes;
      const matchingNode = currentNodes.find(n => n.secId === sec.id) || currentNodes[0];
      setSelectedNode(matchingNode);
    }
  };

  // Jump from Module Matrix to Module Details / Section
  const handleSelectModule = (mod) => {
    const sec = VETTNET_DATA.sections.find(s => s.number === String(mod.id).padStart(2, '0')) || VETTNET_DATA.sections[0];
    setSelectedSection(sec);
    setSelectedNode({
      id: `mod-${mod.id}`,
      stage: `Module ${mod.id < 10 ? '0' + mod.id : mod.id}`,
      title: mod.name,
      subtitle: mod.desc,
      secId: sec.id
    });
  };

  // Export Executive Client Architecture Blueprint
  const handleExportSpec = () => {
    const report = `# ${VETTNET_DATA.metadata.systemTitle}
Version: ${VETTNET_DATA.metadata.version}
Core Vision: ${VETTNET_DATA.metadata.coreVision}
Brand Standard: ${VETTNET_DATA.metadata.brandStandard}

Executive Overview:
${VETTNET_DATA.metadata.executiveSummary}

=======================================================
8 CORE ARCHITECTURAL DOMAINS & 45 SPECIFICATIONS
=======================================================
${VETTNET_DATA.domains.map(d => `
## ${d.title}
${VETTNET_DATA.sections.filter(s => s.domainId === d.id || s.domain === d.title).map(s => `
### [Spec ${s.number}] ${s.title}
- Summary: ${s.summary}
- Business Impact: ${s.businessValue || 'Enterprise trust & verification'}
- Governance: ${(s.rulesAndStandards || s.keyRules || []).join('; ')}
`).join('')}`).join('\n')}

=======================================================
30 KEY FUNCTIONAL PLATFORM MODULES
=======================================================
${VETTNET_DATA.keyModules.map(m => `M${m.id < 10 ? '0' + m.id : m.id}: ${m.name} (${m.category}) - ${m.desc}`).join('\n')}
`;

    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VettNet_ID_Executive_Architecture_Blueprint.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container">
      {/* Top Single-Bar Navigation */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onExport={handleExportSpec}
      />

      {/* Main Interactive Workspace Area */}
      <main className="main-content">
        {activeTab === 'flowchart' && (
          <FlowchartCanvas
            flowcharts={VETTNET_DATA.flowcharts}
            activePipeline={activePipeline}
            setActivePipeline={setActivePipeline}
            selectedNodeId={selectedNode?.id}
            onSelectNode={handleSelectNode}
          />
        )}

        {activeTab === 'doc-reader' && (
          <DocumentReader
            sections={VETTNET_DATA.sections}
            domains={VETTNET_DATA.domains}
            onSelectFlowchartNode={handleSelectFlowchartNodeFromDoc}
            targetSectionId={targetSectionId}
          />
        )}

        {activeTab === 'modules-matrix' && (
          <ModulesMatrix
            modules={VETTNET_DATA.keyModules}
            onSelectModule={handleSelectModule}
            onJumpToFlowchart={() => setActiveTab('flowchart')}
          />
        )}

        {/* Slide-out Deep Dive Inspector on Node Click */}
        {selectedNode && selectedSection && (
          <NodeDetailDrawer
            node={selectedNode}
            sectionData={selectedSection}
            onClose={handleCloseDrawer}
            onJumpToDoc={handleJumpToDoc}
          />
        )}
      </main>
    </div>
  );
}
