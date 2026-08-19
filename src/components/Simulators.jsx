import React, { useState } from 'react';
import { 
  PlayCircle, ShieldCheck, CheckCircle2, XCircle, 
  Filter, KeyRound, Cpu, Sliders, Archive, RefreshCw, Check, Sparkles 
} from 'lucide-react';

export default function Simulators() {
  // --- Simulator 1: Consent & 6-Gate Search Interceptor ---
  const [simOrgStatus, setSimOrgStatus] = useState('ACTIVE');
  const [simQuota, setSimQuota] = useState(150);
  const [simUserRole, setSimUserRole] = useState('HR_MANAGER');
  const [simPurpose, setSimPurpose] = useState('EMPLOYMENT_VERIFICATION');
  const [simConsentToken, setSimConsentToken] = useState('VALID');
  const [simSearchExecuted, setSimSearchExecuted] = useState(false);

  // Evaluate 6 Gates
  const gate1_Org = simOrgStatus === 'ACTIVE';
  const gate2_Sub = simQuota > 0;
  const gate3_Perm = ['ORGANIZATION_ADMIN', 'HR_MANAGER', 'RECRUITMENT_OFFICER'].includes(simUserRole);
  const gate4_Purpose = simPurpose !== 'NONE';
  const gate5_Consent = simConsentToken === 'VALID';
  const gate6_Scope = gate1_Org && gate2_Sub && gate3_Perm && gate4_Purpose && gate5_Consent;

  // --- Simulator 2: Verification State Machine ---
  const [verCredential, setVerCredential] = useState('BSc Computer Science (UCT)');
  const [verSource, setVerSource] = useState('SAQA_API');
  const [verMethod, setVerMethod] = useState('DIRECT_API');
  const [verStatus, setVerStatus] = useState('VERIFIED');
  const [verHistory, setVerHistory] = useState([
    {
      id: 'VR-1092',
      credential: 'BSc Computer Science (UCT)',
      source: 'SAQA Direct Gateway',
      method: 'API Verification',
      status: 'VERIFIED',
      timestamp: '2026-08-19 11:20:00 UTC',
      verifier: 'Auto-Verification Engine v3.1',
      evidence: 'saqa_cert_hash_9a82f0',
      reverifyDue: '2027-08-19'
    }
  ]);

  const handleAddVerification = () => {
    const newRecord = {
      id: `VR-${Math.floor(1000 + Math.random() * 9000)}`,
      credential: verCredential,
      source: verSource,
      method: verMethod,
      status: verStatus,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
      verifier: verMethod === 'DIRECT_API' ? 'Automated Engine v3.1' : 'Senior Officer Jane Doe (ID: SO-89)',
      evidence: `hash_${Math.random().toString(36).substring(2, 10)}`,
      reverifyDue: '2027-08-19'
    };
    setVerHistory([newRecord, ...verHistory]);
  };

  // --- Simulator 3: RBAC Custom Role Composer (13 Primitives) ---
  const allPermissions = [
    { key: 'PERM_VIEW', label: 'View Records' },
    { key: 'PERM_SEARCH', label: 'Search VettNet ID' },
    { key: 'PERM_CREATE', label: 'Create Records' },
    { key: 'PERM_EDIT', label: 'Edit Unlocked Data' },
    { key: 'PERM_VERIFY', label: 'Execute Verification' },
    { key: 'PERM_APPROVE', label: 'Approve Applications' },
    { key: 'PERM_REJECT', label: 'Reject Applications' },
    { key: 'PERM_OVERRIDE', label: 'Senior Override' },
    { key: 'PERM_EXPORT', label: 'Export Data' },
    { key: 'PERM_SHARE', label: 'Share Verification' },
    { key: 'PERM_DELETE_DEACTIVATE', label: 'Delete / Deactivate' },
    { key: 'PERM_ADMIN_ACCESS', label: 'Admin Configuration' },
    { key: 'PERM_AUDIT_ACCESS', label: 'Inspect Audit Logs' }
  ];

  const [activePerms, setActivePerms] = useState([
    'PERM_VIEW', 'PERM_SEARCH', 'PERM_VERIFY', 'PERM_APPROVE'
  ]);

  const togglePerm = (permKey) => {
    if (activePerms.includes(permKey)) {
      setActivePerms(activePerms.filter(p => p !== permKey));
    } else {
      setActivePerms([...activePerms, permKey]);
    }
  };

  return (
    <div className="simulator-view">
      {/* Header Banner */}
      <div className="doc-header-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="stat-pill stat-pill-emerald">Interactive Testing Lab</span>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.4rem' }}>
              VettNet ID Core Engine Simulators
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.2rem' }}>
              Live execution sandbox for 6-Gate Search Interceptor, Verification Engine, RBAC Composer, and Audit Ledger
            </p>
          </div>
        </div>
      </div>

      <div className="sim-grid">
        {/* SIMULATOR 1: 6-Gate Consent & Search Interceptor */}
        <div className="sim-card">
          <div className="sim-header">
            <div className="sim-title">
              <Filter size={18} color="#06b6d4" />
              1. Consent & 6-Gate Search Interceptor (Sec 8, 37)
            </div>
            <span className="stat-pill stat-pill-cyan">Pages 7–8, 26</span>
          </div>

          <div className="sim-controls">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">Requester Role</label>
                <select 
                  className="form-select"
                  value={simUserRole}
                  onChange={(e) => setSimUserRole(e.target.value)}
                >
                  <option value="HR_MANAGER">HR Manager (Authorized)</option>
                  <option value="RECRUITMENT_OFFICER">Recruitment Officer (Authorized)</option>
                  <option value="UNAUTHORIZED_VIEWER">Unauthorized Viewer</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Declared Purpose</label>
                <select 
                  className="form-select"
                  value={simPurpose}
                  onChange={(e) => setSimPurpose(e.target.value)}
                >
                  <option value="EMPLOYMENT_VERIFICATION">Employment Verification</option>
                  <option value="RENTAL_APPLICATION">Rental Application</option>
                  <option value="TENDER_DUE_DILIGENCE">Tender Due Diligence</option>
                  <option value="NONE">No Purpose Specified (Invalid)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">Candidate Consent Token</label>
                <select 
                  className="form-select"
                  value={simConsentToken}
                  onChange={(e) => setSimConsentToken(e.target.value)}
                >
                  <option value="VALID">Valid Token (Signed by Candidate)</option>
                  <option value="EXPIRED">Expired / Revoked Token</option>
                  <option value="MISSING">No Consent Given</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Subscription Quota</label>
                <select 
                  className="form-select"
                  value={simQuota}
                  onChange={(e) => setSimQuota(Number(e.target.value))}
                >
                  <option value={150}>150 Searches Available</option>
                  <option value={0}>0 Searches (Quota Exceeded)</option>
                </select>
              </div>
            </div>

            <button 
              className="nav-btn nav-btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
              onClick={() => setSimSearchExecuted(true)}
            >
              <PlayCircle size={15} />
              Execute 6-Gate VettNet ID Search
            </button>
          </div>

          {/* 6 Gates Evaluation Status */}
          <div className="sim-output-box">
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8' }}>
              6 Synchronous Pre-Display Gates:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.75rem' }}>
              <div className={`gate-result-badge ${gate1_Org ? 'gate-pass' : 'gate-fail'}`}>
                {gate1_Org ? <CheckCircle2 size={12} /> : <XCircle size={12} />} Gate 1: Org Status Active
              </div>
              <div className={`gate-result-badge ${gate2_Sub ? 'gate-pass' : 'gate-fail'}`}>
                {gate2_Sub ? <CheckCircle2 size={12} /> : <XCircle size={12} />} Gate 2: Subscription Valid
              </div>
              <div className={`gate-result-badge ${gate3_Perm ? 'gate-pass' : 'gate-fail'}`}>
                {gate3_Perm ? <CheckCircle2 size={12} /> : <XCircle size={12} />} Gate 3: User Permitted
              </div>
              <div className={`gate-result-badge ${gate4_Purpose ? 'gate-pass' : 'gate-fail'}`}>
                {gate4_Purpose ? <CheckCircle2 size={12} /> : <XCircle size={12} />} Gate 4: Purpose Declared
              </div>
              <div className={`gate-result-badge ${gate5_Consent ? 'gate-pass' : 'gate-fail'}`}>
                {gate5_Consent ? <CheckCircle2 size={12} /> : <XCircle size={12} />} Gate 5: Consent Token
              </div>
              <div className={`gate-result-badge ${gate6_Scope ? 'gate-pass' : 'gate-fail'}`}>
                {gate6_Scope ? <CheckCircle2 size={12} /> : <XCircle size={12} />} Gate 6: Scoped Payload
              </div>
            </div>

            {/* Simulated Decrypted vs Masked Payload */}
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: gate6_Scope ? '#34d399' : '#fb7185' }}>
                {gate6_Scope 
                  ? `ACCESS GRANTED: Returning Scoped Attributes for Purpose [${simPurpose}]`
                  : `ACCESS BLOCKED: 6-Gate Interceptor Rejected Payload Delivery`}
              </div>

              {gate6_Scope && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.72rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.03)', padding: '0.6rem', borderRadius: '6px' }}>
                  <div>✓ <strong>Academic History (M03):</strong> BSc Computer Science — [UNMASKED & VERIFIED]</div>
                  <div>✓ <strong>Employment History (M06):</strong> Senior Engineer @ TechCorp — [UNMASKED & VERIFIED]</div>
                  <div style={{ color: '#94a3b8' }}>🔒 <strong>Family & Relationships (M07):</strong> [MASKED & REDACTED BY PURPOSE FILTER]</div>
                  <div style={{ color: '#94a3b8' }}>🔒 <strong>Property Deeds (M09):</strong> [MASKED & REDACTED BY PURPOSE FILTER]</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIMULATOR 2: Verification Engine State Machine */}
        <div className="sim-card">
          <div className="sim-header">
            <div className="sim-title">
              <Cpu size={18} color="#8b5cf6" />
              2. Verification Engine & 7-Tuple Generator (Sec 13, 14, 15)
            </div>
            <span className="stat-pill stat-pill-purple">Pages 11–13</span>
          </div>

          <div className="sim-controls">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">Claim / Credential</label>
                <select 
                  className="form-select"
                  value={verCredential}
                  onChange={(e) => setVerCredential(e.target.value)}
                >
                  <option value="BSc Computer Science (UCT)">BSc Computer Science (UCT)</option>
                  <option value="SARS Tax Clearance PIN (Good Standing)">SARS Tax PIN (Good Standing)</option>
                  <option value="CIPC Director Registration">CIPC Director Registration</option>
                  <option value="ECSA Professional Engineering License">ECSA Engineering License</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Authoritative Source</label>
                <select 
                  className="form-select"
                  value={verSource}
                  onChange={(e) => setVerSource(e.target.value)}
                >
                  <option value="SAQA_GATEWAY">SAQA Accreditation DB</option>
                  <option value="SARS_TCS_API">SARS eFiling TCS Gateway</option>
                  <option value="CIPC_REGISTRY">CIPC Company Registry</option>
                  <option value="DHA_NPR_SERVICE">DHA Population Register</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">Verification Method</label>
                <select 
                  className="form-select"
                  value={verMethod}
                  onChange={(e) => setVerMethod(e.target.value)}
                >
                  <option value="DIRECT_API">Direct Real-Time API Handshake</option>
                  <option value="MANUAL_OFFICER">Manual Officer Attestation</option>
                  <option value="OFFICIAL_DOCUMENT">Cryptographic Document Validation</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Determined Status</label>
                <select 
                  className="form-select"
                  value={verStatus}
                  onChange={(e) => setVerStatus(e.target.value)}
                >
                  <option value="VERIFIED">Verified (Pass)</option>
                  <option value="UNDER_REVIEW">Under Review</option>
                  <option value="REVERIFICATION_REQUIRED">Reverification Required</option>
                  <option value="VERIFICATION_FAILED">Verification Failed</option>
                  <option value="CONFLICT">Conflict Detected</option>
                  <option value="EXPIRED">Expired</option>
                </select>
              </div>
            </div>

            <button 
              className="nav-btn nav-btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
              onClick={handleAddVerification}
            >
              <Check size={14} />
              Commit 7-Tuple Record to Ledger
            </button>
          </div>

          {/* Historical Verification Records Ledger */}
          <div className="sim-output-box" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8' }}>
              Append-Only Verification Ledger ({verHistory.length} records):
            </h4>
            {verHistory.map((rec) => (
              <div key={rec.id} style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.03)', padding: '0.6rem', borderRadius: '6px', borderLeft: '3px solid #8b5cf6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>{rec.id} • {rec.credential}</span>
                  <span style={{ color: rec.status === 'VERIFIED' ? '#34d399' : '#fbbf24' }}>{rec.status}</span>
                </div>
                <div style={{ color: '#94a3b8', marginTop: '0.2rem' }}>
                  Source: {rec.source} | Method: {rec.method} | Verifier: {rec.verifier}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.68rem', marginTop: '0.2rem' }}>
                  Committed: {rec.timestamp} • Next Reverify: {rec.reverifyDue}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIMULATOR 3: RBAC Custom Role Composer */}
        <div className="sim-card" style={{ gridColumn: '1 / -1' }}>
          <div className="sim-header">
            <div className="sim-title">
              <Sliders size={18} color="#f59e0b" />
              3. RBAC Custom Role Composer — 13 Atomic Primitives (Sec 27, 28, 29, 30)
            </div>
            <span className="stat-pill stat-pill-cyan">Pages 19–22</span>
          </div>

          <div>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
              Select from the 13 atomic primitives to assemble a custom enterprise role and test operational capabilities:
            </p>

            {/* 13 Permission Toggles */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem' }}>
              {allPermissions.map(p => {
                const isActive = activePerms.includes(p.key);
                return (
                  <button
                    key={p.key}
                    onClick={() => togglePerm(p.key)}
                    style={{
                      padding: '0.45rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      textAlign: 'left',
                      background: isActive ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${isActive ? '#06b6d4' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: isActive ? '#38bdf8' : '#94a3b8'
                    }}
                  >
                    <span style={{ fontSize: '0.8rem' }}>{isActive ? '✓' : '○'}</span>
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Evaluated Operational Capabilities */}
            <div className="sim-output-box" style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8' }}>
                Operational Capability Evaluation for Composed Role:
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', fontSize: '0.78rem' }}>
                <div style={{ color: activePerms.includes('PERM_SEARCH') && activePerms.includes('PERM_VIEW') ? '#34d399' : '#fb7185' }}>
                  {activePerms.includes('PERM_SEARCH') && activePerms.includes('PERM_VIEW') ? '✓' : '✗'} Search & View Verified Profiles
                </div>

                <div style={{ color: activePerms.includes('PERM_VERIFY') && activePerms.includes('PERM_APPROVE') ? '#34d399' : '#fb7185' }}>
                  {activePerms.includes('PERM_VERIFY') && activePerms.includes('PERM_APPROVE') ? '✓' : '✗'} Approve / Clear Applications
                </div>

                <div style={{ color: activePerms.includes('PERM_OVERRIDE') ? '#34d399' : '#fb7185' }}>
                  {activePerms.includes('PERM_OVERRIDE') ? '✓' : '✗'} Execute Senior 6-Point Overrides
                </div>

                <div style={{ color: activePerms.includes('PERM_EXPORT') ? '#34d399' : '#fb7185' }}>
                  {activePerms.includes('PERM_EXPORT') ? '✓' : '✗'} Bulk Export Verified Datasets
                </div>

                <div style={{ color: activePerms.includes('PERM_ADMIN_ACCESS') ? '#34d399' : '#fb7185' }}>
                  {activePerms.includes('PERM_ADMIN_ACCESS') ? '✓' : '✗'} Root System & Staff Administration
                </div>

                <div style={{ color: activePerms.includes('PERM_AUDIT_ACCESS') ? '#34d399' : '#fb7185' }}>
                  {activePerms.includes('PERM_AUDIT_ACCESS') ? '✓' : '✗'} Inspect 6W+P Immutable Audit Ledger
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
