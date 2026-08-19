/**
 * VettNet ID Platform - Executive Client Architecture Dataset
 * Enterprise-grade presentation format designed for clients, partners & executive stakeholders.
 * Core Vision: "Verify Once. Use Everywhere."
 */

export const VETTNET_DATA = {
  metadata: {
    projectName: "VettNet ID Platform",
    systemTitle: "VettNet ID — Master Architecture & Enterprise Trust Blueprint",
    version: "v2.5 Enterprise Production Architecture",
    coreVision: "Verify Once. Use Everywhere.",
    brandStandard: "The official platform name is always written as: VettNet (two 't' characters).",
    executiveSummary: "VettNet is a national-scale digital verification and reusable identity infrastructure designed to create, maintain, and securely reuse verified trust information for individuals and corporate entities across 10 major commercial and institutional sectors."
  },

  // 8 High-Level Executive Domains spanning all 45 architectural specifications
  domains: [
    { id: "dom-core", title: "1. Core Vision & Platform Philosophy", count: 4, color: "#38bdf8" },
    { id: "dom-identity", title: "2. Identity, Modular Profiles & Relationships", count: 7, color: "#818cf8" },
    { id: "dom-verification", title: "3. Verification Engine & Authoritative Gateways", count: 8, color: "#c084fc" },
    { id: "dom-consent", title: "4. Consent, Privacy & Purpose Access Control", count: 6, color: "#34d399" },
    { id: "dom-risk", title: "5. Risk, Trust & Continuous Reverification", count: 4, color: "#fbbf24" },
    { id: "dom-enterprise", title: "6. B2B Corporate Portal & Multi-Tenancy", count: 5, color: "#f472b6" },
    { id: "dom-rbac", title: "7. Granular RBAC & Internal Operations", count: 5, color: "#fb7185" },
    { id: "dom-security", title: "8. Security, Compliance & Immutable Audit Trails", count: 6, color: "#22d3ee" }
  ],

  // 45 Comprehensive System Specifications (Presented with clean client terminology)
  sections: [
    {
      id: "sec-1",
      number: "01",
      title: "Executive Architecture Charter",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "Establishes VettNet as an enterprise-grade digital verification and reusable trust infrastructure, replacing disposable one-off screening with a persistent, encrypted trust layer.",
      businessValue: "Eliminates repetitive verification costs and friction across employment, supplier onboarding, tenders, financial services, and corporate onboarding.",
      functionalBreakdown: [
        {
          point: "Infrastructure Classification",
          detail: "Positioned as a persistent digital trust utility for individuals and organizations rather than a siloed screening app."
        },
        {
          point: "The Reusable Trust Layer",
          detail: "Once verified, an entity's credentials can be instantly and securely reused across multiple organizations without repeating primary verification."
        },
        {
          point: "10 Supported Institutional Use Cases",
          detail: "Spans Employment, Corporate Onboarding, Supplier Vetting, Tenders, Education, Rentals, Financial Services, Professional Bodies, Government, and Custom Enterprise pipelines."
        },
        {
          point: "Core Foundational Doctrine",
          detail: "'Verify Once. Use Everywhere.' Data is authenticated at authoritative source and securely shared under strict consent gates."
        }
      ],
      rulesAndStandards: [
        "Multi-tenant, multi-environment trust layer architecture",
        "Persistent, non-disposable credential utility",
        "Mandatory 4-pillar security gate: Consent, Authorization, Permissions, Reverification"
      ],
      dataContract: {
        platformClassification: "Reusable Digital Trust Infrastructure",
        supportedEntities: ["Natural Person (Individual)", "Legal Entity (Organization)"],
        securityPillars: ["Consent Management", "Authorization Matrix", "Granular RBAC", "Continuous Reverification"],
        targetSectors: 10
      },
      clientScenario: "A software engineer verifies their university degree once on VettNet. When applying to three separate multinational corporations, each employer verifies that degree in seconds via cryptographic consent tokens without contacting the university."
    },
    {
      id: "sec-2",
      number: "02",
      title: "Brand & System Naming Standard",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "Strict system branding compliance mandating the double 't' casing (VettNet) across all user interfaces, databases, APIs, reports, and codebases.",
      businessValue: "Maintains absolute brand consistency, avoids legal ambiguity, and enforces high-trust institutional credibility.",
      functionalBreakdown: [
        {
          point: "Official Platform Name",
          detail: "Always written as 'VettNet' (containing two 't' characters)."
        },
        {
          point: "Prohibited Variations",
          detail: "Explicitly prohibits single 't' or all-caps variants (e.g., Vetnet, VetNet, VETNET)."
        },
        {
          point: "11 Mandatory System Touchpoints",
          detail: "Enforced across UI/UX, Mobile apps, Admin panel, Database schemas, Flowcharts, Reports, Notifications, Email templates, API specs, and Architecture docs."
        }
      ],
      rulesAndStandards: [
        "Exact string regex match: /^VettNet$/",
        "Zero-tolerance prohibition for single 't' variants across code, logs, schemas, and UI"
      ],
      dataContract: {
        canonicalName: "VettNet",
        caseSensitive: true,
        prohibitedList: ["Vetnet", "VetNet", "VETNET"],
        enforcedSurfaces: 11
      },
      clientScenario: "All database tables, API endpoints (`api.vettnet.io/v1`), UI labels, and PDF audit certificates are branded consistently with the official VettNet double 't' standard."
    },
    {
      id: "sec-3",
      number: "03",
      title: "Core Platform Philosophy & Trust Rails",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "Transforms verification from repetitive manual overhead into single-point authoritative validation with controlled multi-party reuse.",
      businessValue: "Reduces candidate and supplier onboarding turnaround from weeks to seconds while reducing administrative overhead by up to 90%.",
      functionalBreakdown: [
        {
          point: "Verify Once. Use Everywhere",
          detail: "Verified credentials become persistent digital assets that remain active and valid across the entire trust ecosystem."
        },
        {
          point: "Dual Verification Basis",
          detail: "Integrates Tier-1 Authoritative Direct APIs (Government/Statutory databases) with Tier-2 Cryptographically Verified Evidence Documents."
        }
      ],
      rulesAndStandards: [
        "Zero redundant verification: Verified assets can be shared without re-running primary checks unless expired",
        "Evidence-backed trust: Unverified self-declarations are never marked as trusted"
      ],
      dataContract: {
        objective: "Verify Once. Use Everywhere.",
        verificationBasis: ["Evidence Documents", "Authoritative Direct APIs"],
        reusePolicy: "Consent-scoped secure sharing"
      },
      clientScenario: "A corporate supplier uploads their B-BBEE and Tax Clearance once; every prospective enterprise client queries the verified asset with instant zero-day turnaround."
    },
    {
      id: "sec-4",
      number: "04",
      title: "VettNet ID / VN Number — The Central Trust Anchor",
      domain: "2. Identity, Modular Profiles & Relationships",
      domainId: "dom-identity",
      summary: "The unique master reference number (VN Number) that sits at the center of the ecosystem, connecting 11 core data, governance, and audit pillars.",
      businessValue: "Provides a single, secure, privacy-preserving master reference for all candidate and organizational relational graphs.",
      functionalBreakdown: [
        {
          point: "Universal Master Identifier",
          detail: "Every natural person and legal entity receives an immutable VN Number (e.g. `VN-84920193`)."
        },
        {
          point: "Central Relational Hub",
          detail: "Connects Identity, Academic records, Professional history, Employment, Family, Org relations, Documents, Verifications, Consents, Risk scores, and Audit trails."
        },
        {
          point: "Verified Trust Profile",
          detail: "Purpose is not simple data storage, but establishing an immutable, reusable trust graph."
        }
      ],
      rulesAndStandards: [
        "Unique Master Key: Every entity receives an immutable VN Number",
        "Relational Hub: All 11 platform subsystems link back to the VN Number",
        "Polymorphic schema supporting both Natural Persons and Legal Entities"
      ],
      dataContract: {
        vnNumberFormat: "VN-[A-Z0-9]{8,12}",
        entityTypes: ["INDIVIDUAL", "ORGANIZATION"],
        connectedPillars: 11
      },
      clientScenario: "A candidate shares only their VN Number with a prospective employer. The employer requests verified work history through VettNet without needing to handle raw unverified paperwork."
    },
    {
      id: "sec-5",
      number: "05",
      title: "Individual Profile Architecture (Natural Persons)",
      domain: "2. Identity, Modular Profiles & Relationships",
      domainId: "dom-identity",
      summary: "Modular data structure for human identity encompassing 6 verifiable sub-domains from demographics and academics to employment and legal records.",
      businessValue: "Creates a complete 360-degree verifiable resume where every assertion is backed by official evidence and cryptographic proof.",
      functionalBreakdown: [
        {
          point: "Personal Demographics",
          detail: "Full names, previous/maiden names, date of birth, verified contact info, residential addresses, and national ID."
        },
        {
          point: "Academic Credentials",
          detail: "Hierarchical educational records: primary/secondary schools, universities, degree qualifications, certificates, and achievements."
        },
        {
          point: "Professional & Employment History",
          detail: "Historical employment timeline, designations, dates, employer attestations, professional council memberships, and industry licenses."
        },
        {
          point: "Family, Property & Legal Information",
          detail: "Encrypted relational nodes for next-of-kin, residential address histories, property deed records, and legally permissible background verifications."
        }
      ],
      rulesAndStandards: [
        "Modular data boundaries: Each sub-section is stored as an independently queryable and encryptable module",
        "Strict statutory compliance: Legal/case records captured only within permissible legislative frameworks"
      ],
      dataContract: {
        entityCategory: "NATURAL_PERSON",
        subModules: [
          "personal_info", "academic_info", "professional_info",
          "family_info", "address_property_info", "legal_info"
        ]
      },
      clientScenario: "An executive applicant's profile includes verified Matric results, BSc in Computer Science, 5 years as Lead Architect at TechCorp (attested by HR), and clean legal verification status."
    },
    {
      id: "sec-6",
      number: "06",
      title: "Organization Profile Architecture (Legal Entities)",
      domain: "2. Identity, Modular Profiles & Relationships",
      domainId: "dom-identity",
      summary: "Identity and compliance architecture for corporate entities (Companies, Suppliers, Contractors, Trusts, NPCs) managing CIPC, tax, director, and UBO structures.",
      businessValue: "Streamlines vendor due diligence, prevents fronting and shell company fraud, and automates corporate compliance reporting.",
      functionalBreakdown: [
        {
          point: "Multi-Entity Corporate Typology",
          detail: "Supports Pty Ltd companies, Close Corporations, NPCs, Trusts, Joint Ventures, and Suppliers."
        },
        {
          point: "Core Corporate Attributes",
          detail: "Organization name, CIPC registration number, SARS Tax PIN/Clearance, registered directors, UBO shareholders, compliance certificates, and supplier data."
        }
      ],
      rulesAndStandards: [
        "Mandatory corporate vetting before platform activation",
        "UBO & Director graph mapping for anti-fraud and tender compliance",
        "Dynamic tax & compliance status linking"
      ],
      dataContract: {
        entityCategory: "LEGAL_ENTITY",
        organizationTypes: ["Company", "Supplier", "Contractor", "Trust", "NPC", "Other"],
        profileAttributes: [
          "org_name", "registration_num", "tax_clearance", "directors_list",
          "shareholders_ubo", "supplier_data", "compliance_status", "verification_records"
        ]
      },
      clientScenario: "Acme Logistics Pty Ltd holds VN-ORG-9901, with linked CIPC registry 2018/123456/07, active SARS Tax PIN, 3 verified directors, and 5 verified fleet certifications."
    },
    {
      id: "sec-7",
      number: "07",
      title: "Enterprise Relationship Graph Layer",
      domain: "2. Identity, Modular Profiles & Relationships",
      domainId: "dom-identity",
      summary: "A dedicated graph database connecting individuals and organizations across 9 relationship typologies for instant conflict-of-interest and tender due diligence.",
      businessValue: "Exposes hidden conflicts of interest, tender collusion, and fraudulent director networks before high-value contracts are awarded.",
      functionalBreakdown: [
        {
          point: "Bi-Directional Graph Relationships",
          detail: "Maps Employee->Employer, Director->Company, Shareholder->Company, Beneficial Owner->Company, Contractor->Org, Rep->Org, and Professional->Body."
        },
        {
          point: "High-Stakes Due Diligence Utility",
          detail: "Critical for municipal and private tenders, corporate M&A, supplier vetting, and executive onboarding."
        }
      ],
      rulesAndStandards: [
        "Bi-directional graph relationships with verification badges on each edge",
        "Relationship validity tracking: Active, Resigned, Terminated, Expired",
        "Real-time conflict of interest graph traversal"
      ],
      dataContract: {
        graphNodeType: "EDGE_RELATIONSHIP",
        relationTypes: [
          "EMPLOYEE_TO_EMPLOYER", "DIRECTOR_TO_COMPANY", "SHAREHOLDER_TO_COMPANY",
          "BENEFICIAL_OWNER_TO_COMPANY", "CONTRACTOR_TO_ORG", "REPRESENTATIVE_TO_ORG",
          "PROFESSIONAL_TO_BODY"
        ]
      },
      clientScenario: "In a public municipal tender, the relationship graph instantly reveals that a bidding company's director is also an active employee in the municipal procurement team."
    },
    {
      id: "sec-8",
      number: "08",
      title: "Consent & 5-Point Purpose Access Control",
      domain: "4. Consent, Privacy & Purpose Access Control",
      domainId: "dom-consent",
      summary: "Zero-Trust security gate preventing blanket profile access. Enforces 5 mandatory pre-access checks before decrypting any candidate attribute.",
      businessValue: "Ensures 100% compliance with POPIA & GDPR, preventing unauthorized data access and corporate liability.",
      functionalBreakdown: [
        {
          point: "Principle of Least Privilege",
          detail: "Organizations never receive full un-scoped access to a candidate's profile."
        },
        {
          point: "5 Mandatory Pre-Access Checks",
          detail: "1. Who is requesting? 2. Why is it required? 3. Is consent valid? 4. What categories are permitted? 5. How long is the permission active?"
        },
        {
          point: "Dynamic Attribute Masking",
          detail: "If Purpose = Employment -> Expose ONLY Education & Work History. Restrict Family, Legal, Financial, and Address History."
        }
      ],
      rulesAndStandards: [
        "Zero un-scoped data access",
        "5-Point Pre-Access Interrogation Check required before DB decrypt",
        "Automatic attribute masking for non-consented categories"
      ],
      dataContract: {
        consentGateType: "5_POINT_VALIDATION",
        requiredFields: ["requesterId", "purposeCode", "consentToken", "allowedCategories", "validityTTL"]
      },
      clientScenario: "Company ABC requests VN123456 for 'Employment Verification'. VettNet exposes Degrees and Past Jobs, but completely masks Family, Property Deeds, and Health records."
    },
    {
      id: "sec-9",
      number: "09",
      title: "End-to-End Consent Workflow",
      domain: "4. Consent, Privacy & Purpose Access Control",
      domainId: "dom-consent",
      summary: "8-step sequential pipeline from initial access request to cryptographic purpose binding, audit logging, and automated TTL expiration.",
      businessValue: "Gives candidates complete sovereignty over their data while providing organizations with clear, auditable legal proof of consent.",
      functionalBreakdown: [
        {
          point: "Request Initiation",
          detail: "Organization selects candidate VN Number and specifies legitimate business purpose."
        },
        {
          point: "Candidate Digital Consent",
          detail: "Candidate receives push notification / SMS OTP and digitally authorizes requested category scope."
        },
        {
          point: "Time-To-Live (TTL) & Auto-Expiration",
          detail: "Access remains active strictly for authorized duration (e.g. 7 days) and automatically closes upon expiry."
        }
      ],
      rulesAndStandards: [
        "Atomic state progression: No bypass of intermediate approval steps",
        "Mandatory synchronous audit record creation upon access grant",
        "Automatic TTL expiry enforcement and instant user revocation trigger"
      ],
      dataContract: {
        workflowSteps: [
          "REQUEST_ACCESS", "SELECT_PURPOSE", "CHECK_CONSENT",
          "DETERMINE_PERMISSION", "IDENTIFY_CATEGORIES", "GRANT_ACCESS",
          "LOG_AUDIT_EVENT", "EXPIRE_OR_REVOKE"
        ]
      },
      clientScenario: "Recruiter clicks 'Request Verification' -> Candidate receives push notification -> Approves with 7-day TTL -> Recruiter views data -> On day 8, access automatically terminates."
    },
    {
      id: "sec-10",
      number: "10",
      title: "15 Specialized Micro-Modular Data Stores",
      domain: "2. Identity, Modular Profiles & Relationships",
      domainId: "dom-identity",
      summary: "Normalized modular architecture dividing profiles into 15 independent components, each with discrete encryption keys and ACLs.",
      businessValue: "Prevents monolithic data leaks and allows fine-grained data sharing tailored precisely to each transaction.",
      functionalBreakdown: [
        {
          point: "15 Discrete Modules",
          detail: "Personal Info, Identity, Academic History, Extracurricular, Professional History, Employment History, Family, Address, Property, Legal, Documents, Verification Records, Consent Records, Risk/Compliance, and Audit History."
        },
        {
          point: "Independent Access Control Lists (ACLs)",
          detail: "Allows granting access to Module #3 (Academic) while locking Module #10 (Legal)."
        }
      ],
      rulesAndStandards: [
        "15 Discrete modular boundaries with independent encryption keys",
        "Granular per-module permission policies",
        "Zero monolithic payload dumps"
      ],
      dataContract: {
        totalModules: 15,
        moduleList: [
          "M01_Personal_Info", "M02_Identity_Info", "M03_Academic_History",
          "M04_Sports_Extracurricular", "M05_Professional_History", "M06_Employment_History",
          "M07_Family_Relationships", "M08_Address_History", "M09_Property_Info",
          "M10_Legal_Case_Info", "M11_Documents", "M12_Verification_Records",
          "M13_Consent_Records", "M14_Risk_Compliance", "M15_Audit_History"
        ]
      },
      clientScenario: "When an academic institution requests verification of previous schooling, only Modules M01 and M03 are unsealed; M07 (Family) and M09 (Property) remain encrypted."
    },
    {
      id: "sec-11",
      number: "11",
      title: "Evidence Management & 9-Field Provenance",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Mandatory 9-field provenance tracking schema linking uploaded documents and API assertions directly to profile claims.",
      businessValue: "Guarantees that no credential is ever accepted without verifiable proof, establishing an indisputable chain of custody.",
      functionalBreakdown: [
        {
          point: "Zero Blind Trust",
          detail: "Self-reported claims cannot achieve 'Verified' state without evidentiary attachment."
        },
        {
          point: "9-Field Provenance Metadata",
          detail: "Tracks Type, Source, Submission Date, Status, Verification Date, Verifier ID, Expiry Date, Supporting Reference, and Related Record ID."
        },
        {
          point: "Cryptographic Document Hashing",
          detail: "Every uploaded evidence document is hashed (SHA-256) to ensure tamper-proof integrity."
        }
      ],
      rulesAndStandards: [
        "Strict evidence linkage: No claim can be marked 'Verified' without attached proof",
        "Mandatory 9-field evidence provenance schema",
        "Cryptographic hashing of all evidentiary documents"
      ],
      dataContract: {
        evidenceFields: [
          "evidenceType", "source", "submissionDate", "verificationStatus",
          "verificationDate", "verifier", "expiryDate", "supportingReference", "relatedProfileRecord"
        ]
      },
      clientScenario: "A scanned Nursing Council certificate is hashed (SHA-256: `e3b0c442...`), tagged with Source: 'SANC Portal', verified by 'Officer Jane', and linked to Professional Record #882."
    },
    {
      id: "sec-12",
      number: "12",
      title: "Authoritative Verification Gateways",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Direct digital connectivity with South African statutory databases (DHA, SARS, CIPC, SAQA, CIDB) via plug-and-play micro-connectors.",
      businessValue: "Enables instant, real-time validation directly against authoritative government and institutional registries.",
      functionalBreakdown: [
        {
          point: "Statutory Connectors",
          detail: "Department of Home Affairs (DHA), South African Revenue Service (SARS), CIPC Company Registry, SAQA Academic DB, CIDB Contractor Registry."
        },
        {
          point: "Extensible Adapter Architecture",
          detail: "New data sources and international verification providers can be added without rebuilding core platform logic."
        }
      ],
      rulesAndStandards: [
        "Statutory compliance: Direct connectivity subject to legal authorization and MOUs",
        "Extensible Adapter Pattern: Zero core platform changes required to onboard new verification sources"
      ],
      dataContract: {
        supportedSources: ["DHA", "SARS", "CIPC", "SAQA", "CIDB", "Educational Institutions", "Professional Bodies", "Employers"]
      },
      clientScenario: "When verifying an electrician's qualifications, the gateway queries both SAQA (for the N3 Diploma) and Department of Labour (for the Wireman's License)."
    },
    {
      id: "sec-13",
      number: "13",
      title: "Standardized 7-Tuple Verification Record",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Standardizes every verification determination into an unambiguous, auditable 7-tuple answering What, Source, Method, Timestamp, Verifier, Evidence, and Reverification Due Date.",
      businessValue: "Provides clients and external auditors with a rock-solid, tamper-proof record of exactly how and when each data point was verified.",
      functionalBreakdown: [
        {
          point: "7 Standardized Questions",
          detail: "1. What was verified? 2. Against which source? 3. How was it verified? 4. When was it verified? 5. Who performed it? 6. What evidence supports it? 7. When should it be reverified?"
        },
        {
          point: "Multi-Method Tracking",
          detail: "Distinguishes between Direct API calls, Authorized Manual Officer inspections, and Digital Document verifications."
        }
      ],
      rulesAndStandards: [
        "7-Tuple Verification Schema mandatory on all verified nodes",
        "Reverification scheduling built-in at time of verification creation",
        "Immutable versioning of past verification attempts"
      ],
      dataContract: {
        verificationTuple: [
          "whatWasVerified", "againstWhichSource", "howWasItVerified",
          "whenWasItVerified", "whoPerformedIt", "supportingEvidence", "reverificationDueDate"
        ]
      },
      clientScenario: "Verification Record VR-2026-9012: What: BEng Mechanical Engineering | Source: University of Pretoria | Method: API Integration | When: 14 Aug 2026 | Who: System Engine v2.4 | Reverify: 14 Aug 2027."
    },
    {
      id: "sec-14",
      number: "14",
      title: "7-Stage Core Verification Engine",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Core orchestration engine that intakes claims, bundles evidence, identifies sources, executes validation algorithms, and triggers risk evaluations.",
      businessValue: "Automates the heavy lifting of background vetting, reducing manual turnaround time by up to 95%.",
      functionalBreakdown: [
        {
          point: "7-Stage Pipeline",
          detail: "1. Info Submitted -> 2. Evidence Collected -> 3. Source Identified -> 4. Verification Performed -> 5. Result Recorded -> 6. Trust/Risk Assessment -> 7. Status Determined."
        },
        {
          point: "Automated Dispatching",
          detail: "Routes payloads automatically to high-speed API gateways or specialized manual officer review queues."
        }
      ],
      rulesAndStandards: [
        "Automated routing to appropriate API gateway or manual officer work queue",
        "Mandatory post-verification handoff to Trust/Risk Engine prior to final status assignment"
      ],
      dataContract: {
        pipelineStages: [
          "INFO_SUBMITTED", "EVIDENCE_COLLECTED", "SOURCE_IDENTIFIED",
          "VERIFICATION_PERFORMED", "RESULT_RECORDED", "TRUST_RISK_ASSESSMENT",
          "STATUS_DETERMINED"
        ]
      },
      clientScenario: "User submits Matric certificate -> Engine retrieves Umalusi transcript via API -> Matches candidate ID & marks -> Passes through Risk Engine -> Emits 'Verified' status."
    },
    {
      id: "sec-15",
      number: "15",
      title: "9-State Verification Finite State Machine",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Finite State Machine with 9 defined statuses and append-only versioning that preserves complete historical state transitions.",
      businessValue: "Eliminates state ambiguity and provides historical transparency into how credentials evolved over time.",
      functionalBreakdown: [
        {
          point: "9 Discrete Lifecycle States",
          detail: "Pending, Under Review, Verified, Partially Verified, Verification Failed, Rejected, Expired, Reverification Required, and Suspended."
        },
        {
          point: "Append-Only History",
          detail: "Past states are never overwritten; new state transitions are appended to an immutable chronological ledger."
        }
      ],
      rulesAndStandards: [
        "Finite State Machine with 9 defined statuses",
        "Append-only history: No in-place overwrites of past verification logs",
        "State changes trigger automated notifications and audit log events"
      ],
      dataContract: {
        statuses: [
          "PENDING", "UNDER_REVIEW", "VERIFIED", "PARTIALLY_VERIFIED",
          "VERIFICATION_FAILED", "REJECTED", "EXPIRED", "REVERIFICATION_REQUIRED", "SUSPENDED"
        ]
      },
      clientScenario: "A Professional Driver Permit transitions: Pending -> Under Review -> Verified. Two years later, the monitoring engine transitions it to Expired -> Reverification Required."
    },
    {
      id: "sec-16",
      number: "16",
      title: "Trust, Risk & Compliance Engine",
      domain: "5. Risk, Trust & Continuous Reverification",
      domainId: "dom-risk",
      summary: "Real-time analytics engine scanning profiles for 9 distinct risk vectors including document expirations, data conflicts, and duplicate identities.",
      businessValue: "Acts as an automated fraud shield, identifying anomalies and compliance breaches before they create business harm.",
      functionalBreakdown: [
        {
          point: "9 Risk Detection Vectors",
          detail: "Expired docs, expired qualifications, conflicting data, duplicate records, verification failures, inconsistent declarations, unusual relationships, compliance issues, and custom risks."
        },
        {
          point: "Cross-Profile Intelligence",
          detail: "Detects fraudulent patterns across profiles, such as multiple people claiming the same degree certificate."
        }
      ],
      rulesAndStandards: [
        "Continuous background evaluation across all active profiles",
        "Automated risk scoring and red-flag tagging",
        "Cross-profile anomaly detection"
      ],
      dataContract: {
        riskDetectionVectors: [
          "EXPIRED_DOCS", "EXPIRED_QUALIFICATIONS", "CONFLICTING_DATA",
          "DUPLICATE_RECORDS", "VERIFICATION_FAILURES", "INCONSISTENT_DECLARATIONS",
          "UNUSUAL_RELATIONSHIPS", "COMPLIANCE_ISSUES", "CUSTOM_DEFINED_RISKS"
        ]
      },
      clientScenario: "The Risk Engine detects that an applicant declared employment at ABC Corp from 2020-2023, while SARS tax submissions show full-time employment at XYZ Ltd during the same window."
    },
    {
      id: "sec-17",
      number: "17",
      title: "6 Standardized Visual Risk & Trust Indicators",
      domain: "5. Risk, Trust & Continuous Reverification",
      domainId: "dom-risk",
      summary: "Standardized visual UI indicators providing instant clarity regarding data trustworthiness and active verification status.",
      businessValue: "Enables business users to make instant, confident decisions without deciphering raw technical reports.",
      functionalBreakdown: [
        {
          point: "6 Standardized Indicators",
          detail: "Verified (Emerald), Pending (Cyan), Expired (Amber), Conflict (Rose), Failed (Red), and Reverification Required (Purple)."
        },
        {
          point: "Conflict Badge Trigger",
          detail: "Automatically flags discrepancies when user claims contradict authoritative source responses."
        }
      ],
      rulesAndStandards: [
        "Universal UI badge indicators with consistent color coding and tooltips",
        "Conflict badge triggers immediate operational escalation"
      ],
      dataContract: {
        badges: ["VERIFIED (Emerald)", "PENDING (Cyan)", "EXPIRED (Amber)", "CONFLICT (Rose)", "FAILED (Red)", "REVERIFICATION_REQUIRED (Purple)"]
      },
      clientScenario: "A recruiter reviewing an engineering candidate sees green 'Verified' badges on the BSc Degree and ECSA Registration, but a red 'Conflict' badge on the South African Driver's License."
    },
    {
      id: "sec-18",
      number: "18",
      title: "Continuous Monitoring & Automated Reverification",
      domain: "5. Risk, Trust & Continuous Reverification",
      domainId: "dom-risk",
      summary: "Continuous surveillance across 8 time-sensitive credential classes, ensuring that verified information remains valid throughout its lifecycle.",
      businessValue: "Protects organizations from employing staff whose licenses, visas, or compliance certificates have lapsed after hire.",
      functionalBreakdown: [
        {
          point: "8 Time-Sensitive Target Classes",
          detail: "Professional licenses, work visas, residency permits, professional certifications, CIPC annual returns, SARS tax pins, and employment statuses."
        },
        {
          point: "Automated Re-polling & Alerts",
          detail: "Scheduled background jobs re-query external APIs and notify individuals and corporate clients prior to expiration."
        }
      ],
      rulesAndStandards: [
        "Time-To-Live (TTL) timestamps bound to all time-sensitive verification records",
        "Automated scheduled cron jobs for re-checking external APIs",
        "Proactive alerts dispatched to individuals and corporate consumers prior to expiration"
      ],
      dataContract: {
        monitoredDomains: ["LICENSES", "VISAS", "PERMITS", "CERTIFICATIONS", "CIPC_REGISTRATION", "TAX_STATUS", "EMPLOYMENT", "CUSTOM_EXPIRING"]
      },
      clientScenario: "A doctor's HPCSA annual practice license expires on 31 December. On 1 December, VettNet notifies the doctor; on 2 January, the system checks HPCSA API and updates the status."
    },
    {
      id: "sec-19",
      number: "19",
      title: "Decoupling: Identity Authentication vs Status Verification",
      domain: "2. Identity, Modular Profiles & Relationships",
      domainId: "dom-identity",
      summary: "Architectural distinction separating Level-1 existence proof (who a person is) from Level-2 dynamic status proofs (visas, tax clearance, licenses).",
      businessValue: "Prevents false-positive assumptions: A verified human identity does not confer automatic clearance of dynamic regulatory permissions.",
      functionalBreakdown: [
        {
          point: "Level-1: Identity Verification",
          detail: "Biometric and demographic match confirming that a person is who they claim to be."
        },
        {
          point: "Level-2: Status Verification",
          detail: "Independent validation of dynamic regulatory standing: citizenship, visa validity, tax compliance, or professional bar admission."
        }
      ],
      rulesAndStandards: [
        "Two-Tiered Verification Model: Level-1 Identity Existence vs Level-2 Dynamic Status",
        "Status badges cannot inherit directly from base identity verification"
      ],
      dataContract: {
        tier1Identity: "Biometric & Demographic Existence Match",
        tier2Status: "Time-Sensitive Regulatory Permissions & Clearances"
      },
      clientScenario: "A foreign national has a verified passport and biometrics (Identity Verified = Passed), but their Critical Skills Work Visa expired last month (Status Verification = Expired)."
    },
    {
      id: "sec-20",
      number: "20",
      title: "Secure Government & External API Gateway",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Dedicated DMZ API gateway enforcing consent validation before routing queries to external statutory databases.",
      businessValue: "Provides a hardened, secure interface that isolates external systems and guarantees compliance with sovereign data laws.",
      functionalBreakdown: [
        {
          point: "Strict Gateway Routing",
          detail: "VettNet Core -> Consent & Purpose -> API Gateway -> External Sources -> Verification Engine -> Risk Engine -> Verified Profile."
        },
        {
          point: "Security & Transport Controls",
          detail: "Enforces mutual TLS (mTLS), request tokenization, rate limiting, and response serialization."
        }
      ],
      rulesAndStandards: [
        "Zero un-gated external calls: All outgoing gateway queries require valid Consent Token",
        "API Gateway acts as security boundary and protocol translator"
      ],
      dataContract: {
        flowSequence: ["VETTNET_CORE", "CONSENT_PURPOSE", "API_GATEWAY", "EXTERNAL_GOV_SOURCES", "VERIFICATION_ENGINE", "TRUST_RISK_ENGINE", "VERIFIED_PROFILE"]
      },
      clientScenario: "Before querying the DHA database for an identity lookup, the API Gateway checks that Consent Token `CT-9821` is valid and unrevoked."
    },
    {
      id: "sec-21",
      number: "21",
      title: "Department of Home Affairs (DHA) Integration",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Integration specifications for DHA covering 10 verification areas including SA IDs, citizenship, passports, and visas.",
      businessValue: "Provides direct statutory validation of citizen identities and foreign national legal immigration statuses.",
      functionalBreakdown: [
        {
          point: "10 DHA Verification Domains",
          detail: "SA ID numbers, citizenship records, PR certificates, passport validity, foreign national identity, study/work visas, asylum permits, and biometric matching."
        },
        {
          point: "Statutory Agreements",
          detail: "Standardized adapter schema ready for Home Affairs National Population Register (NPR) interfaces under data sovereignty frameworks."
        }
      ],
      rulesAndStandards: [
        "Conditional availability based on statutory MOUs and legal agreements",
        "Standardized adapter schema for Home Affairs NPR queries"
      ],
      dataContract: {
        dhaTargetDomains: [
          "SA_ID_INFO", "CITIZENSHIP", "PERMANENT_RESIDENCY", "PASSPORT_INFO",
          "FOREIGN_NATIONAL_ID", "VISA_INFO", "PERMIT_INFO", "RESIDENCY_STATUS",
          "IMMIGRATION_STATUS", "IDENTITY_MATCHING"
        ]
      },
      clientScenario: "An applicant enters their 13-digit SA ID Number. The DHA connector checks NPR records and confirms full name, deceased status (No), citizenship (SA Citizen by Birth), and marital status."
    },
    {
      id: "sec-22",
      number: "22",
      title: "SARS Tax Compliance & Tax PIN Integration",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Tax verification specifications for SARS covering Tax PINs, VAT, and corporate compliance without assuming automatic data access.",
      businessValue: "Automates vendor and executive tax compliance screening with real-time validation of SARS Tax Clearance Status.",
      functionalBreakdown: [
        {
          point: "6 Tax Verification Scopes",
          detail: "Tax registration numbers, Tax PIN verification, real-time Good Standing compliance status, VAT vendor validation, and entity-taxpayer alignment."
        },
        {
          point: "Defensive Architecture",
          detail: "Gracefully handles real-time API queries with seamless fallback to manual TCS PIN verification."
        }
      ],
      rulesAndStandards: [
        "Zero-assumption architecture: System handles Available, Planned, Manual, and Unavailable states gracefully",
        "Supports real-time Tax PIN validation algorithms"
      ],
      dataContract: {
        sarsScopes: ["TAX_REGISTRATION", "TAX_REFERENCE_VALIDATION", "TAX_COMPLIANCE_STATUS", "VAT_REGISTRATION", "TAXPAYER_MATCHING", "COMPLIANCE_INDICATORS"]
      },
      clientScenario: "A contractor submits a SARS TCS PIN and Tax Number. VettNet queries the SARS verification service to confirm 'Good Standing' status and expiration date."
    },
    {
      id: "sec-23",
      number: "23",
      title: "Integration Status Management",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Truth-in-advertising status flags (Available, Planned, Manual / Authorized, Not Available) preventing false operational claims.",
      businessValue: "Provides full transparency into whether a check is conducted via automated API or authorized manual verification.",
      functionalBreakdown: [
        {
          point: "4 Defined Integration States",
          detail: "1. Available (direct live API), 2. Planned (roadmap/MOU pending), 3. Manual / Authorized (officer cross-checks authoritative portal), 4. Not Available (no legal or technical channel)."
        }
      ],
      rulesAndStandards: [
        "System displays exact operational status of each gateway connector",
        "Seamless routing to manual verification queues when integration is in 'Manual' state"
      ],
      dataContract: {
        statusTypes: ["AVAILABLE", "PLANNED", "MANUAL_AUTHORIZED", "NOT_AVAILABLE"]
      },
      clientScenario: "If CIPC API is 'Available', verification is instant (2 seconds). If CIDB is 'Manual / Authorized', the request is routed to a Verification Officer to cross-check the CIDB public register."
    },
    {
      id: "sec-24",
      number: "24",
      title: "API-Ready Extensible Architecture",
      domain: "3. Verification Engine & Authoritative Gateways",
      domainId: "dom-verification",
      summary: "Open plug-in architecture using micro-gateways, standardized webhook protocols, and OpenAPI 3.0 contracts across 8 institutional sectors.",
      businessValue: "Future-proofs your investment, allowing new data sources, credit bureaus, or international registries to plug in effortlessly.",
      functionalBreakdown: [
        {
          point: "8 Target Sectors",
          detail: "Government departments, Municipalities, State-Owned Enterprises, Financial institutions, Educational bodies, Professional councils, Employers, and Data providers."
        },
        {
          point: "Zero Core Rebuilds",
          detail: "New integrations are registered via API Gateway plugin configuration without altering core business logic."
        }
      ],
      rulesAndStandards: [
        "Zero core rebuilds: New data sources are registered as plugins via API Gateway configuration",
        "Standardized Ingress/Egress data mapping abstractions"
      ],
      dataContract: {
        extensibilityModel: "OpenAPI 3.0 Micro-Connector Adapters",
        targetSectors: 8
      },
      clientScenario: "Connecting a newly authorized Credit Bureau API requires only authoring an adapter plugin adhering to the `IVerificationProvider` interface; no core code changes."
    },
    {
      id: "sec-25",
      number: "25",
      title: "Enterprise Data Migration & ETL Ingest",
      domain: "8. Security, Compliance & Immutable Audit Trails",
      domainId: "dom-security",
      summary: "Enterprise ETL pipeline supporting bulk, legacy, and ongoing batch imports while strictly preserving historical provenance.",
      businessValue: "Enables frictionless onboarding of existing HR databases, supplier registries, and legacy candidate records.",
      functionalBreakdown: [
        {
          point: "10 Migration Capabilities",
          detail: "Bulk batch migration, legacy data translation, schema reconciliation, fuzzy duplicate detection, provenance source tagging, and granular error tracing."
        },
        {
          point: "Provenance Preservation",
          detail: "Migrated data retains immutable metadata tags identifying batch ID, source vendor, timestamp, and verification provenance."
        }
      ],
      rulesAndStandards: [
        "Data Provenance Preservation: Migrated data must explicitly record original source system and import timestamp",
        "Automated deduplication and reconciliation before inserting into Master Trust Index"
      ],
      dataContract: {
        capabilities: ["BULK_MIGRATION", "LEGACY_DATA_IMPORT", "DATA_RECONCILIATION", "DUPLICATE_DETECTION", "SOURCE_MAPPING", "DATA_VALIDATION", "MIGRATION_LOGS", "ERROR_HANDLING", "SOURCE_PERMISSIONS"]
      },
      clientScenario: "A mining corporation migrating 10,000 employee medical fitness records imports via CSV; VettNet auto-deduplicates, tags source as 'MiningCorp Legacy HR', and links to active VN numbers."
    },
    {
      id: "sec-26",
      number: "26",
      title: "Government Zero-Knowledge Reference Principle",
      domain: "8. Security, Compliance & Immutable Audit Trails",
      domainId: "dom-security",
      summary: "Fundamental Zero-Knowledge security principle: VettNet stores cryptographic verification assertions, timestamps, and reference tokens rather than cloning government databases.",
      businessValue: "Drastically minimizes data liability, eliminates honeypots of unauthorized citizen data, and ensures maximum privacy compliance.",
      functionalBreakdown: [
        {
          point: "4-Step Reference Protocol",
          detail: "Verification Request -> Authoritative Source -> Verification Response -> VettNet Verification Record (retains result, reference, and evidence hash without duplicating raw databases)."
        }
      ],
      rulesAndStandards: [
        "Zero Government Database Cloning: Only store verification assertion tokens and audit proofs",
        "POPIA / GDPR data minimization compliance by design"
      ],
      dataContract: {
        storageApproach: "ASSERTION_AND_REFERENCE_ONLY",
        persistedFields: ["VerificationResult", "ExternalSourceReferenceID", "Timestamp", "EvidenceProofHash"]
      },
      clientScenario: "Instead of downloading South Africa's 60-million citizen population database, VettNet queries DHA and stores: `{ valid: true, ref: 'DHA-2026-X992', timestamp: '2026-08-19' }`."
    },
    {
      id: "sec-27",
      number: "27",
      title: "Role-Based Access Control (RBAC) Governance",
      domain: "7. Granular RBAC & Internal Operations",
      domainId: "dom-rbac",
      summary: "Granular multi-tier RBAC architecture enforcing strict operational duties, governance oversight, and administrative separation.",
      businessValue: "Guarantees that staff only have access to what is strictly necessary for their specific job function.",
      functionalBreakdown: [
        {
          point: "Zero Universal Admin Accounts",
          detail: "Eliminates shared superuser accounts. Implements role segregation and principle of least privilege."
        },
        {
          point: "Dynamic Permission Binding",
          detail: "Permissions are bound to individual verified staff accounts with full session governance."
        }
      ],
      rulesAndStandards: [
        "Zero universal admin accounts; strict role segregation",
        "Granular permission assignment bound to individual staff profiles"
      ],
      dataContract: {
        rbacModel: "Granular Role-Based Access Control",
        rootRole: "Super Admin"
      },
      clientScenario: "A customer support contractor is provisioned with 'Application Viewer' role; they can look up ticket status but cannot view raw ID numbers or approve verifications."
    },
    {
      id: "sec-28",
      number: "28",
      title: "5 Internal Operational Staff Roles",
      domain: "7. Granular RBAC & Internal Operations",
      domainId: "dom-rbac",
      summary: "5 defined operational roles with explicit Can/Cannot capability boundaries ensuring separation of duties.",
      businessValue: "Provides clear operational hierarchies and prevents single points of compromise or rogue employee behavior.",
      functionalBreakdown: [
        {
          point: "Application Viewer",
          detail: "Can View/Search; Cannot Verify, Approve, Reject, Edit, or Delete."
        },
        {
          point: "Verification Officer",
          detail: "Can View, Review docs, Verify, Reject verification, and Add remarks."
        },
        {
          point: "Application Manager",
          detail: "Can View, Assign applications, Track progress, and Manage workflow queues."
        },
        {
          point: "Senior Verification Officer",
          detail: "Can Verify, Approve, Reject, Handle escalated discrepancies, and Execute authorized overrides."
        },
        {
          point: "Super Admin",
          detail: "Manages staff, roles, integrations, global audit inspection, and system configs."
        }
      ],
      rulesAndStandards: [
        "Strict operational hierarchy: Viewer -> Officer -> Manager -> Senior Officer -> Super Admin",
        "Separation of Duties: Verification officers cannot approve their own high-risk overrides"
      ],
      dataContract: {
        roles: ["APPLICATION_VIEWER", "VERIFICATION_OFFICER", "APPLICATION_MANAGER", "SENIOR_VERIFICATION_OFFICER", "SUPER_ADMIN"]
      },
      clientScenario: "A Verification Officer reviews a University transcript and flags a discrepancy; the case is automatically routed to the Senior Verification Officer for escalation review."
    },
    {
      id: "sec-29",
      number: "29",
      title: "13 Atomic Permission Primitives",
      domain: "7. Granular RBAC & Internal Operations",
      domainId: "dom-rbac",
      summary: "13 fine-grained capability flags that can be composed into arbitrary custom roles matching enterprise organizational charts.",
      businessValue: "Provides maximum organizational flexibility without requiring expensive software customizations.",
      functionalBreakdown: [
        {
          point: "13 Atomic Actions",
          detail: "View, Search, Create, Edit, Verify, Approve, Reject, Override, Export, Share, Delete/Deactivate, Administrative Access, and Audit Access."
        }
      ],
      rulesAndStandards: [
        "13 Atomic permission primitives",
        "Custom role composition engine supporting role inheritance"
      ],
      dataContract: {
        primitives: [
          "PERM_VIEW", "PERM_SEARCH", "PERM_CREATE", "PERM_EDIT",
          "PERM_VERIFY", "PERM_APPROVE", "PERM_REJECT", "PERM_OVERRIDE",
          "PERM_EXPORT", "PERM_SHARE", "PERM_DELETE_DEACTIVATE",
          "PERM_ADMIN_ACCESS", "PERM_AUDIT_ACCESS"
        ]
      },
      clientScenario: "Super Admin creates a custom 'External Financial Auditor' role possessing only `PERM_VIEW`, `PERM_SEARCH`, `PERM_EXPORT`, and `PERM_AUDIT_ACCESS`."
    },
    {
      id: "sec-30",
      number: "30",
      title: "Senior Override 6-Point Compliance Safeguard",
      domain: "7. Granular RBAC & Internal Operations",
      domainId: "dom-rbac",
      summary: "Highly restricted administrative mechanism allowing senior staff to reverse automated failures, governed by 6 mandatory safeguards.",
      businessValue: "Provides operational flexibility for genuine edge cases while ensuring 100% accountability and anti-corruption protection.",
      functionalBreakdown: [
        {
          point: "6 Mandatory Safeguards",
          detail: "1. Explicit business reason recorded, 2. Senior Officer User ID, 3. Cryptographic timestamp, 4. Old state preserved, 5. New state asserted, 6. Compulsory evidentiary attachment."
        },
        {
          point: "Permanent Audit Lock",
          detail: "Override events are written to immutable audit storage and flagged for executive compliance review."
        }
      ],
      rulesAndStandards: [
        "Restricted exclusively to authorized Senior Verification Officers and Super Admins",
        "Mandatory 6-point compliance metadata payload on execution",
        "Immutable, un-deletable audit trail entry created instantly"
      ],
      dataContract: {
        overrideRequirements: ["ReasonText", "ActorUserID", "Timestamp", "PreviousStatus", "NewStatus", "SupportingEvidenceAttachment"]
      },
      clientScenario: "An automated check failed due to a typo in a university database. Senior Officer overrides to 'Verified', attaching a formal signed affidavit from the University Registrar."
    },
    {
      id: "sec-31",
      number: "31",
      title: "6W+P Immutable Audit Trail Framework",
      domain: "8. Security, Compliance & Immutable Audit Trails",
      domainId: "dom-security",
      summary: "Append-only, cryptographically verifiable ledger logging every mutation, search query, consent grant, and administrative change across 7 dimensions.",
      businessValue: "Delivers complete forensic transparency, simplifying ISO/SOC2 audits and proving compliance to regulatory authorities.",
      functionalBreakdown: [
        {
          point: "7-Pillar (6W+P) Schema",
          detail: "WHO (Actor ID/Role), WHAT (Event), WHICH RECORD (Target Entity/VN), WHEN (UTC Timestamp), PERMISSION (Auth Token), PURPOSE (Legal Basis), WHAT CHANGED (JSON Diff delta)."
        }
      ],
      rulesAndStandards: [
        "6W+P standard format across 100% of platform operations",
        "Tamper-resistant storage (e.g. hash chaining / append-only DB)",
        "Zero audit record deletion under any circumstance"
      ],
      dataContract: {
        schema6WP: ["WHO", "WHAT", "WHICH_RECORD", "WHEN", "PERMISSION", "PURPOSE", "WHAT_CHANGED"]
      },
      clientScenario: "Audit Log Entry #883921:\nWHO: Recruiter_Sarah (TalentCorp) | WHAT: Search & Decrypt | WHICH RECORD: VN-100293 | WHEN: 2026-08-19 09:12:00Z | PERM: PERM_SEARCH | PURPOSE: Pre-employment screening | WHAT CHANGED: AccessCount +1"
    },
    {
      id: "sec-32",
      number: "32",
      title: "Temporal Historical Record Preservation",
      domain: "8. Security, Compliance & Immutable Audit Trails",
      domainId: "dom-security",
      summary: "Temporal database design preserving complete historical snapshots of corporate and individual profiles whenever attributes change.",
      businessValue: "Eliminates historical revisionism and provides clear proof of what was verified at any past point in time.",
      functionalBreakdown: [
        {
          point: "7-Point Historical Preservation Tuple",
          detail: "Maintains Previous value, New value, Date of change, Requester, Approver, Supporting Evidence, and New Verification Status."
        }
      ],
      rulesAndStandards: [
        "Temporal versioning: Data modifications create new immutable version nodes rather than in-place overwrites",
        "7-Point Historical Preservation Tuple retained for every field modification"
      ],
      dataContract: {
        preservedFields: ["PreviousValue", "NewValue", "DateOfChange", "RequestedBy", "ApprovedBy", "Evidence", "VerificationStatus"]
      },
      clientScenario: "A company changes its registered name from 'ABC Logistics Pty Ltd' to 'Apex Global Logistics Pty Ltd'. Both names and CIPC amendment certificate remain queryable across historical timelines."
    },
    {
      id: "sec-33",
      number: "33",
      title: "B2B Enterprise Corporate Portal",
      domain: "6. B2B Corporate Portal & Multi-Tenancy",
      domainId: "dom-enterprise",
      summary: "Dedicated enterprise workspace serving HR, recruitment, hospitals, real estate, tenders, and supply chains with mandatory pre-access vetting.",
      businessValue: "Provides enterprise clients with a secure, branded command center to manage candidate vetting and compliance at scale.",
      functionalBreakdown: [
        {
          point: "8 Target Enterprise Sectors",
          detail: "HR & Recruitment, Healthcare/Hospitals, Real Estate Leasing, General Corporates, Supply Chain, Tender Boards, and Authorized Institutions."
        },
        {
          point: "Mandatory Corporate Vetting",
          detail: "Guarantees no fraudulent or shell companies gain access to candidate trust profiles."
        }
      ],
      rulesAndStandards: [
        "Zero self-service instant access: All corporate entities undergo rigorous VettNet back-office verification",
        "Sector-tailored compliance packages"
      ],
      dataContract: {
        portalType: "B2B_CORPORATE_PORTAL",
        targetSectorsCount: 8,
        preAccessVettingRequired: true
      },
      clientScenario: "A hospital group registers for the Corporate Portal to verify foreign nursing degrees, HPCSA licenses, and criminal record clearance prior to nurse deployment."
    },
    {
      id: "sec-34",
      number: "34",
      title: "Corporate Onboarding & Verification Lifecycle",
      domain: "6. B2B Corporate Portal & Multi-Tenancy",
      domainId: "dom-enterprise",
      summary: "8-step enterprise onboarding lifecycle: Intake, Company Info, Documents, Officer Review, Multi-Source Verification, Adjudication, Subscription, and Authorized Access.",
      businessValue: "Ensures institutional trust: only fully verified, legitimate corporate organizations can participate in the ecosystem.",
      functionalBreakdown: [
        {
          point: "8-Step Onboarding Pipeline",
          detail: "Registration -> Company Info -> Document Upload (CIPC, Tax PIN, Director IDs) -> Officer Review -> Multi-Source Verification -> Adjudication -> Subscription Tier -> Authorized Portal Access."
        }
      ],
      rulesAndStandards: [
        "Sequential gate progression: Access granted only after verification pass and active subscription status",
        "Supports 'Correction Required' branch allowing applicants to rectify deficient documents"
      ],
      dataContract: {
        stages: ["ORG_REGISTRATION", "COMPANY_INFO", "SUPPORTING_DOCS", "VETTNET_REVIEW", "VERIFICATION", "DECISION_BRANCH", "SUBSCRIPTION_ACTIVATION", "AUTHORIZED_ACCESS"]
      },
      clientScenario: "An engineering consultancy uploads their CIPC registration and director IDs. VettNet verifies directors via DHA and company standing via CIPC before approving their corporate subscription."
    },
    {
      id: "sec-35",
      number: "35",
      title: "Tiered SaaS Corporate Subscription Engine",
      domain: "6. B2B Corporate Portal & Multi-Tenancy",
      domainId: "dom-enterprise",
      summary: "Tiered commercial subscription engine governing seat counts, monthly candidate search quotas, verification limits, and module access.",
      businessValue: "Provides transparent, scalable pricing models matching the exact volume requirements of small businesses to Fortune 500 enterprises.",
      functionalBreakdown: [
        {
          point: "11 Subscription Parameters",
          detail: "Plan Tier, Duration, Seat Count, Monthly Search Quota, Verification Cap, Accessible Module Matrix, Start Date, Expiry Date, Renewal Hooks, Tier Transitions, and Account Standing."
        }
      ],
      rulesAndStandards: [
        "Real-time quota enforcement: System locks searches when subscription verification caps are reached",
        "Module-level commercial gating (e.g. basic plan gets Identity, premium gets Legal/Property)"
      ],
      dataContract: {
        parameters: ["Plan", "Duration", "NumberOfUsers", "NumberOfSearches", "VerificationLimits", "ModuleAccess", "StartDate", "ExpiryDate", "Renewal", "UpgradeDowngrade", "AccountStatus"]
      },
      clientScenario: "Enterprise Plan: 20 User Seats, 500 Candidate Searches/month, Unlimited Academic & Identity Verifications, Access to all 15 Modules."
    },
    {
      id: "sec-36",
      number: "36",
      title: "Multi-Tenant Corporate User Management",
      domain: "6. B2B Corporate Portal & Multi-Tenancy",
      domainId: "dom-enterprise",
      summary: "Internal corporate user hierarchy allowing Organization Admins to provision sub-accounts: HR Managers, Recruitment Officers, and Verification Consumers.",
      businessValue: "Empowers enterprise administrators to manage their own team permissions with complete multi-tenant security isolation.",
      functionalBreakdown: [
        {
          point: "Corporate Hierarchy",
          detail: "Organization Admin -> HR Manager -> Recruitment Officer -> Verification User."
        },
        {
          point: "Tenant Isolation",
          detail: "Strict boundary isolation ensures complete separation between different tenant organizations."
        }
      ],
      rulesAndStandards: [
        "Corporate Org Admin acts as tenant root administrator",
        "Strict isolation between different tenant organizations (Multi-Tenancy)"
      ],
      dataContract: {
        tenantHierarchy: ["Organization Admin", "HR Manager", "Recruitment Officer", "Verification User"]
      },
      clientScenario: "The Org Admin provisions 5 HR Managers with full candidate search access and 10 Recruitment Officers with candidate-request creation permissions."
    },
    {
      id: "sec-37",
      number: "37",
      title: "The 6-Gate Synchronous Search Interceptor",
      domain: "4. Consent, Privacy & Purpose Access Control",
      domainId: "dom-consent",
      summary: "The flagship security mechanism: 6 synchronous pre-display gates that must ALL evaluate to PASS before a single candidate attribute is returned.",
      businessValue: "Eliminates unauthorized surveillance and guarantees that candidate data is never exposed without active consent and legitimate purpose.",
      functionalBreakdown: [
        {
          point: "Gate 1: Organization Standing",
          detail: "Is the searching organization verified and in active standing?"
        },
        {
          point: "Gate 2: Subscription & Quota",
          detail: "Is the corporate subscription active with remaining search balance?"
        },
        {
          point: "Gate 3: User Permissions",
          detail: "Does the logged-in staff member possess `PERM_SEARCH` permission?"
        },
        {
          point: "Gate 4: Declared Purpose",
          detail: "Is a valid statutory business purpose declared for this transaction?"
        },
        {
          point: "Gate 5: Active Consent Token",
          detail: "Has the candidate granted unexpired digital consent for this search?"
        },
        {
          point: "Gate 6: Category Scoping",
          detail: "Is the returned payload filtered strictly to the approved attribute categories?"
        }
      ],
      rulesAndStandards: [
        "6-Gate Pre-Display Interceptor executed synchronously before querying profile store",
        "Zero-leak dynamic payload masking"
      ],
      dataContract: {
        sixGates: ["Org Status Active", "Subscription Valid & Quota > 0", "User Has PERM_SEARCH", "Valid Purpose Specified", "Active Consent Token", "Scope Category Filtered"]
      },
      clientScenario: "A recruiter searches `VN-908122`. Gate 1: Org Active (Pass), Gate 2: 120 searches remaining (Pass), Gate 3: User permitted (Pass), Gate 4: 'Hiring' (Pass), Gate 5: Candidate consented (Pass), Gate 6: Mask restricted fields -> Render profile."
    },
    {
      id: "sec-38",
      number: "38",
      title: "Role-Adaptive Command Dashboards",
      domain: "6. B2B Corporate Portal & Multi-Tenancy",
      domainId: "dom-enterprise",
      summary: "3 tailored dashboard experiences: Super Admin (14 system KPIs), Verification Officer (6 operational work queues), and Corporate Tenant (6 usage metrics).",
      businessValue: "Gives every user type an intuitive, distraction-free command center tailored specifically to their daily responsibilities.",
      functionalBreakdown: [
        {
          point: "Super Admin Dashboard",
          detail: "Total IDs, profiles, pending queues, approvals/rejections, reverification spikes, tenant health, staff velocity, and global audit feeds."
        },
        {
          point: "Verification Officer Dashboard",
          detail: "Assigned applications, pending verifications, completed checks, rejections, correction cases, and reverifications."
        },
        {
          point: "Corporate Dashboard",
          detail: "Subscription quota, candidate search history, active verification requests, user seat usage, and audit logs."
        }
      ],
      rulesAndStandards: [
        "Role-adaptive UX layout",
        "Real-time metric calculation with zero cross-tenant leakage"
      ],
      dataContract: {
        dashboards: ["Super Admin (14 Metrics)", "Verification Officer (6 Queues)", "Corporate (6 Metrics)"]
      },
      clientScenario: "A Verification Officer opens their dashboard and sees 12 Pending Verifications, 3 Correction Requests, and 2 Reverification Cases assigned directly to their queue."
    },
    {
      id: "sec-39",
      number: "39",
      title: "Defense-in-Depth Security & Privacy Matrix",
      domain: "8. Security, Compliance & Immutable Audit Trails",
      domainId: "dom-security",
      summary: "13 mandatory security controls covering TLS 1.3 in-transit encryption, AES-256-GCM at-rest encryption, zero-leak document vaults, and automated locking.",
      businessValue: "Bank-grade cybersecurity protecting all candidate and corporate trust assets against data breaches and unauthorized access.",
      functionalBreakdown: [
        {
          point: "13 Core Security Controls",
          detail: "MFA authentication, RBAC, granular permission checking, cryptographic consent, mTLS API transport, AES-256 encryption, zero-leak document vaults, immutable audit logs, session TTLs, anomaly monitoring, disaster recovery, automated account locking, and field-level access restrictions."
        }
      ],
      rulesAndStandards: [
        "End-to-end encryption in transit (TLS 1.3) and at rest (AES-256)",
        "Zero unauthenticated or unencrypted data flows",
        "Automated intrusion and anomaly monitoring"
      ],
      dataContract: {
        controlsCount: 13,
        encryptionStandards: { transit: "TLS 1.3 / mTLS", rest: "AES-256-GCM" }
      },
      clientScenario: "All documents stored in encrypted vaults use customer-managed keys (CMK) with AES-256; pre-signed access URLs expire automatically after 60 seconds."
    },
    {
      id: "sec-40",
      number: "40",
      title: "3-Dimensional Data Protection Governance",
      domain: "4. Consent, Privacy & Purpose Access Control",
      domainId: "dom-consent",
      summary: "The Golden Rule of VettNet Data Governance: 'Access only what is required, for the authorized purpose, for the authorized period' across 9 legal pillars.",
      businessValue: "Provides full legal compliance under South Africa's POPIA and international privacy regulations including GDPR.",
      functionalBreakdown: [
        {
          point: "3-Dimensional Access Scoping",
          detail: "Minimal Data Scope (What) + Specific Legitimate Purpose (Why) + Finite Time-To-Live Duration (How Long)."
        },
        {
          point: "Candidate Sovereignty",
          detail: "Instant self-service consent revocation and dispute handling mechanisms."
        }
      ],
      rulesAndStandards: [
        "3-Dimensional Access Governance: Minimal Data + Specific Purpose + Finite Duration",
        "Mandatory self-service consent revocation and dispute handling mechanisms"
      ],
      dataContract: {
        goldenRule: "Access only what is required, for the authorized purpose, for the authorized period.",
        ninePillars: ["Who", "Why", "What", "Duration", "Consent Mechanism", "Revocation", "Corrections", "Disputes", "Retention"]
      },
      clientScenario: "A candidate clicks 'Revoke Consent' on their mobile app for Company X. Instantly, all active viewing tokens for Company X are invalidated across the cluster."
    },
    {
      id: "sec-41",
      number: "41",
      title: "Asynchronous Event-Driven Notifications",
      domain: "6. B2B Corporate Portal & Multi-Tenancy",
      domainId: "dom-enterprise",
      summary: "Multi-channel asynchronous event dispatch across 13 core lifecycle triggers (Registration, Verification, Reverification, Security alerts).",
      businessValue: "Keeps candidates, recruiters, verification officers, and corporate clients synchronized in real-time.",
      functionalBreakdown: [
        {
          point: "13 Core Triggers",
          detail: "Registration, verification requests, officer assignments, correction required, approvals, rejections, consent events, subscription expiries, reverification alerts, and security warnings."
        },
        {
          point: "Omnichannel Delivery",
          detail: "Supports In-App alerts, SMS OTP, Email summaries, Mobile Push, and Enterprise Webhooks."
        }
      ],
      rulesAndStandards: [
        "Asynchronous event-driven notification queue",
        "Multi-channel support (Email, SMS, Push, In-App, Enterprise Webhook)"
      ],
      dataContract: {
        triggers: 13,
        channels: ["Email", "SMS", "In-App Notification", "Enterprise Webhook", "Mobile Push"]
      },
      clientScenario: "When an officer flags 'Correction Required' on an address proof document, the user receives an instant WhatsApp/SMS notification with a secure upload link."
    },
    {
      id: "sec-42",
      number: "42",
      title: "Three Master Operating Workflows",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "The three foundational end-to-end journeys: Individual Candidate Journey (11 steps), Organization Journey (10 steps), and Internal Operations Journey (9 steps).",
      businessValue: "Harmonizes interactions between candidates, corporate consumers, and operational teams into a seamless trust loop.",
      functionalBreakdown: [
        {
          point: "Individual Flow (11 Steps)",
          detail: "Register -> Level-1 Auth -> VN Number -> Populate Profile -> Upload Evidence -> Verification -> Risk Engine -> Verified Profile -> Grant Consent -> Monitoring -> Reverification."
        },
        {
          point: "Corporate Flow (10 Steps)",
          detail: "Register Org -> Submit Docs -> VettNet Review -> Approval -> Subscription -> Provision Users -> Purpose & Consent -> Search VN Number -> Scoped Data -> 6W+P Audit Log."
        },
        {
          point: "Internal Operations (9 Steps)",
          detail: "Super Admin -> Create Staff -> Define Roles -> Assign Perms -> Login -> Work Queue -> Inspect Application -> Adjudicate -> Audit Ledger."
        }
      ],
      rulesAndStandards: [
        "Three interconnected standard operating procedures",
        "Every path terminates in immutable audit ledger commitment",
        "Continuous feedback loop between Individual and Organization workflows via Consent"
      ],
      dataContract: {
        individualSteps: 11,
        organizationSteps: 10,
        internalStaffSteps: 9
      },
      clientScenario: "An individual registers, gets verified once, and allows an employer organization to search their record; internal staff verify any edge cases, and all actions log to the audit ledger."
    },
    {
      id: "sec-43",
      number: "43",
      title: "Master High-Level Architecture (14 Global Pipeline Tiers)",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "The grand architectural synthesis connecting entities, Level-1 auth, consent gates, profile stores, external gateways, engines, verified profiles, and audit ledgers.",
      businessValue: "Provides a complete macro-level system map demonstrating how all technologies, security controls, and databases interconnect seamlessly.",
      functionalBreakdown: [
        {
          point: "Tier 1-4: Intake & Trust Anchoring",
          detail: "Entity Onboarding -> VN Number Allocation -> Level-1 Identity Authentication -> Consent & Purpose Policy Engine."
        },
        {
          point: "Tier 5-7: Evidence & Gateways",
          detail: "15 Modular Profile Stores -> Evidence Provenance Registry -> External API Gateway routing to DHA, SARS, CIPC, SAQA, CIDB."
        },
        {
          point: "Tier 8-10: Processing & Intelligence",
          detail: "Multi-Source Verification Engine -> Trust, Risk & Compliance Engine -> Cryptographically Sealed Verified Digital Profile."
        },
        {
          point: "Tier 11-14: Consumption & Lifecycle",
          detail: "Consent-Scoped Authorized Use -> Continuous Anomaly Monitoring -> Automated Scheduled Reverification -> Tamper-Proof Immutable Audit Trail."
        }
      ],
      rulesAndStandards: [
        "14-Tier Unified Master Architecture",
        "Universal integration point for all sub-systems, external APIs, and user roles"
      ],
      dataContract: {
        tiersCount: 14,
        tiersList: [
          "1. Entity Intake", "2. VettNet ID / VN Number", "3. Identity Authentication",
          "4. Consent & Purpose Layer", "5. Profile Modules (15 Modules)", "6. Evidence Management",
          "7. Government & External API Gateway", "8. Verification Engine", "9. Trust / Risk / Compliance",
          "10. Verified Digital Profile", "11. Authorized Use", "12. Continuous Monitoring",
          "13. Reverification", "14. Immutable Audit Log"
        ]
      },
      clientScenario: "The complete pipeline runs from initial natural person / organization intake all the way through continuous monitoring, periodic reverification loops, and immutable audit logs."
    },
    {
      id: "sec-44",
      number: "44",
      title: "Complete 30 Key Functional Modules Blueprint",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "Exhaustive modular catalogue dividing the entire platform into 30 dedicated functional micro-systems with discrete data contracts.",
      businessValue: "Demonstrates modular maintainability, independent scalability, and strict security isolation across all functional areas.",
      functionalBreakdown: [
        {
          point: "Core Identity (M01 - M05)",
          detail: "Individual Reg, Org Reg, VN Number Management, Identity Auth, Personal Profile."
        },
        {
          point: "Verifiable Data Domains (M06 - M13)",
          detail: "Academic History, Extracurricular, Professional History, Employment History, Family Graph, Address History, Property Registry, Legal Information."
        },
        {
          point: "Verification & Intelligence (M14 - M20)",
          detail: "Document Vault, Evidence Management, Verification Engine, Consent Management, Risk Engine, Continuous Monitoring, Reverification."
        },
        {
          point: "Enterprise & Governance (M21 - M24)",
          detail: "Corporate Portal, Subscription Management, Staff Management, Granular RBAC."
        },
        {
          point: "Infrastructure & Security (M25 - M30)",
          detail: "Government API Gateway, Data Migration Engine, Audit Trail, Reporting & BI, Notifications Engine, Security Management."
        }
      ],
      rulesAndStandards: [
        "Complete 30-Module Micro-Architecture",
        "Every module possesses discrete APIs, data contracts, and RBAC permission bindings"
      ],
      dataContract: {
        modulesTotal: 30,
        functionalGroups: 5
      },
      clientScenario: "A change to Module #9 (Employment History) automatically communicates with Module #15 (Evidence Management), Module #16 (Verification Engine), and Module #27 (Audit Trail)."
    },
    {
      id: "sec-45",
      number: "45",
      title: "The Sovereign Trust Mesh & Final Vision",
      domain: "1. Core Vision & Platform Philosophy",
      domainId: "dom-core",
      summary: "The ultimate long-term vision: transforming verified identity into a reusable, sovereign digital trust asset across a 5-node bi-directional trust mesh.",
      businessValue: "Empowers citizens with sovereign ownership of their verified credentials while accelerating national and corporate digital transformation.",
      functionalBreakdown: [
        {
          point: "5-Node Connected Trust Mesh",
          detail: "Connects Individuals ↕️ VettNet ID ↕️ Organizations ↕️ Verification Sources ↕️ Government & Authorized Institutions."
        },
        {
          point: "Assetization of Digital Trust",
          detail: "Verified identity transformed into a cryptographically secured digital asset that unlocks contracts, employment, and credit in seconds."
        }
      ],
      rulesAndStandards: [
        "Verify Once. Use Everywhere.",
        "5-Way Connected Trust Mesh",
        "Assetization of Verified Digital Trust"
      ],
      dataContract: {
        visionStatement: "Verify Once. Use Everywhere.",
        fiveMeshNodes: ["Individuals", "VettNet ID", "Organizations", "Verification Sources", "Government & Authorized Institutions"]
      },
      clientScenario: "In full deployment, South African citizens and corporations hold verified digital trust passports that unlock employment, contracts, property leases, and bank credit in seconds without repetitive friction."
    }
  ],

  // 30 Key Functional Modules with Executive Descriptions
  keyModules: [
    { id: 1, name: "Individual Registration", category: "Identity & Onboarding", sec: "42, 44", desc: "Digital intake, demographic capture, contact verification, and initial profile creation for natural persons." },
    { id: 2, name: "Organization Registration", category: "Enterprise & Onboarding", sec: "34, 44", desc: "Corporate onboarding, company details, CIPC document uploads, and entity vetting before platform access." },
    { id: 3, name: "VettNet ID Management", category: "Core Identity", sec: "4, 44", desc: "Universal master index number generation (VN Number) and identity lifecycle management across all modules." },
    { id: 4, name: "Identity Authentication", category: "Core Identity", sec: "19, 44", desc: "Level-1 existence verification confirming that an individual or entity is authentic via biometrics/DHA matching." },
    { id: 5, name: "Personal Profile", category: "Verifiable Profile", sec: "5, 44", desc: "Demographic data store: full names, aliases, maiden names, DOB, verified contact info, and national identifiers." },
    { id: 6, name: "Academic History", category: "Verifiable Profile", sec: "5, 44", desc: "Educational milestones, schools, universities, degrees, certificates, and SAQA accreditation records." },
    { id: 7, name: "Sports & Extracurricular Records", category: "Verifiable Profile", sec: "5, 44", desc: "Verified athletic achievements, club memberships, honors, and extracurricular credentials." },
    { id: 8, name: "Professional History", category: "Verifiable Profile", sec: "5, 44", desc: "Professional qualifications, council board admissions, certifications, and industry license tracking." },
    { id: 9, name: "Employment History", category: "Verifiable Profile", sec: "5, 44", desc: "Employment timeline, designations, tenure dates, reference letters, and verified employer attestations." },
    { id: 10, name: "Family & Relationship Management", category: "Graph & Relationships", sec: "5, 7, 44", desc: "Encrypted graph mapping of next-of-kin, spouses, directorships, shareholding, and corporate affiliations." },
    { id: 11, name: "Address History", category: "Verifiable Profile", sec: "5, 44", desc: "Geocoded residential and commercial address history with utility bill / FICA evidence linkage." },
    { id: 12, name: "Property Information", category: "Verifiable Profile", sec: "5, 44", desc: "Deeds registry records, property title verifications, and authorized asset declarations." },
    { id: 13, name: "Legal Information", category: "Verifiable Profile", sec: "5, 44", desc: "Legally permissible court/case verification checks, case statuses, and official supporting documents." },
    { id: 14, name: "Document Management", category: "Evidence & Storage", sec: "10, 44", desc: "Secure encrypted document repository with virus scanning, OCR text extraction, and digital watermarking." },
    { id: 15, name: "Evidence Management", category: "Evidence & Storage", sec: "11, 44", desc: "Mandatory 9-field provenance tracking linking uploaded evidence to specific profile assertions." },
    { id: 16, name: "Verification Engine", category: "Verification & Intelligence", sec: "14, 44", desc: "Core processing pipeline evaluating data claims against authoritative source APIs and manual workflows." },
    { id: 17, name: "Consent & Purpose Management", category: "Access Control & Governance", sec: "8, 9, 44", desc: "5-point access gate enforcing Purpose selection, active consent verification, and category scoping." },
    { id: 18, name: "Trust/Risk/Compliance Engine", category: "Verification & Intelligence", sec: "16, 44", desc: "Continuous anomaly detection identifying expired credentials, data conflicts, and duplicate identities." },
    { id: 19, name: "Continuous Monitoring", category: "Lifecycle & Governance", sec: "18, 44", desc: "Background surveillance of time-sensitive credentials, visas, tax statuses, and corporate standing." },
    { id: 20, name: "Reverification", category: "Lifecycle & Governance", sec: "18, 44", desc: "Automated renewal scheduling, re-polling of external APIs, and re-verification task queues." },
    { id: 21, name: "Corporate Portal", category: "Enterprise & UI", sec: "33, 44", desc: "Enterprise tenant command center for searches, bulk candidate verification, and team permissions." },
    { id: 22, name: "Subscription Management", category: "Enterprise & Commercial", sec: "35, 44", desc: "Tiered SaaS management governing user seats, search quotas, verification limits, and billing cycles." },
    { id: 23, name: "Staff Management", category: "Platform Governance", sec: "27, 28, 44", desc: "Internal employee administration, officer onboarding, department assignments, and supervisor oversight." },
    { id: 24, name: "Role & Permission Management", category: "Platform Governance", sec: "28, 29, 44", desc: "13-primitive atomic RBAC engine allowing Super Admins to compose dynamic custom security roles." },
    { id: 25, name: "Government/API Integration", category: "Gateways & Connectors", sec: "20, 24, 44", desc: "Standardized micro-gateway connecting to DHA, SARS, CIPC, SAQA, CIDB, banks, and academic bodies." },
    { id: 26, name: "Data Migration", category: "Infrastructure & Data", sec: "25, 44", desc: "Enterprise ETL ingest tool for legacy data migration, bulk import, reconciliation, and source provenance tagging." },
    { id: 27, name: "Audit Trail", category: "Security & Compliance", sec: "31, 44", desc: "Immutable 6W+P tamper-resistant audit ledger logging every read, write, consent, and override event." },
    { id: 28, name: "Reports", category: "Reporting & BI", sec: "38, 44", desc: "Executive analytics, compliance reports, verification velocity tracking, and tenant usage statistics." },
    { id: 29, name: "Notifications", category: "Communication", sec: "41, 44", desc: "Event-driven multi-channel notification engine (Email, SMS, In-App, Webhooks) across 13 triggers." },
    { id: 30, name: "Security & Privacy Management", category: "Security & Compliance", sec: "39, 40, 44", desc: "Platform-wide encryption (TLS 1.3, AES-256), session security, POPIA compliance, and account locking." }
  ],

  flowcharts: {
    masterArchitecture: {
      id: "masterArchitecture",
      title: "Master High-Level Architecture Flowchart",
      subtitle: "14 Unified Global Pipeline Tiers connecting the entire VettNet Trust Ecosystem",
      nodes: [
        { id: "m1", stepNum: "01", stage: "Stage 01", title: "Individual / Organization", subtitle: "Entity Onboarding & Digital Intake", secId: "sec-43", type: "start", x: 640, y: 40, icon: "Users" },
        { id: "m2", stepNum: "02", stage: "Stage 02", title: "VettNet ID / VN Number", subtitle: "Unique Master Index Reference Key", secId: "sec-4", type: "process", x: 640, y: 210, icon: "Fingerprint" },
        { id: "m3", stepNum: "03", stage: "Stage 03", title: "Identity Authentication", subtitle: "Level-1 Existence Verification", secId: "sec-19", type: "process", x: 640, y: 380, icon: "ShieldCheck" },
        { id: "m4", stepNum: "04", stage: "Stage 04", title: "Consent & Purpose Layer", subtitle: "5-Point Gate & Attribute Scoping", secId: "sec-8", type: "gate", x: 640, y: 550, icon: "Lock" },
        { id: "m5", stepNum: "05", stage: "Stage 05", title: "Profile Modules (15)", subtitle: "Modular Data Structures & Stores", secId: "sec-10", type: "subflow", x: 640, y: 720, icon: "Layers" },
        { id: "m6", stepNum: "06", stage: "Stage 06", title: "Evidence Management", subtitle: "9-Field Provenance & Document Hashing", secId: "sec-11", type: "process", x: 640, y: 890, icon: "FileText" },
        { id: "m7", stepNum: "07", stage: "Stage 07", title: "Gov & External API Gateway", subtitle: "Secure DMZ Connector Layer", secId: "sec-20", type: "gateway", x: 640, y: 1060, icon: "Cpu" },

        { id: "m7_dha", stepNum: "07a", stage: "Statutory API", title: "DHA Connector", subtitle: "National Population Register (IDs, Passports, Visas)", secId: "sec-21", type: "connector", x: 40, y: 1260, icon: "Landmark" },
        { id: "m7_sars", stepNum: "07b", stage: "Statutory API", title: "SARS Connector", subtitle: "Tax PIN & Corporate Compliance Status", secId: "sec-22", type: "connector", x: 440, y: 1260, icon: "DollarSign" },
        { id: "m7_cipc", stepNum: "07c", stage: "Statutory API", title: "CIPC Connector", subtitle: "Company Registry, Directors & UBO Graph", secId: "sec-12", type: "connector", x: 840, y: 1260, icon: "Briefcase" },
        { id: "m7_other", stepNum: "07d", stage: "Statutory API", title: "SAQA / CIDB / Others", subtitle: "National Academic DB & Council Accreditations", secId: "sec-12", type: "connector", x: 1240, y: 1260, icon: "Award" },

        { id: "m8", stepNum: "08", stage: "Stage 08", title: "Verification Engine", subtitle: "7-Stage Processing & Status Determination", secId: "sec-14", type: "process", x: 640, y: 1480, icon: "CheckCircle2" },
        { id: "m9", stepNum: "09", stage: "Stage 09", title: "Trust & Risk Engine", subtitle: "Anomaly, Conflict & Expiry Analysis", secId: "sec-16", type: "engine", x: 640, y: 1650, icon: "AlertTriangle" },
        { id: "m10", stepNum: "10", stage: "Stage 10", title: "Verified Digital Profile", subtitle: "Cryptographically Sealed Reusable Asset", secId: "sec-45", type: "verified", x: 640, y: 1820, icon: "BadgeCheck" },
        { id: "m11", stepNum: "11", stage: "Stage 11", title: "Authorized Use & Sharing", subtitle: "Consent-Scoped Secure Data Reuse", secId: "sec-37", type: "process", x: 640, y: 1990, icon: "Share2" },
        { id: "m12", stepNum: "12", stage: "Stage 12", title: "Continuous Monitoring", subtitle: "Background Time-Sensitive Watch", secId: "sec-18", type: "monitoring", x: 640, y: 2160, icon: "Activity" },
        { id: "m13", stepNum: "13", stage: "Stage 13", title: "Automated Reverification", subtitle: "Scheduled Renewal & API Re-polling", secId: "sec-18", type: "reverification", x: 640, y: 2330, icon: "RefreshCw" },
        { id: "m14", stepNum: "14", stage: "Stage 14", title: "Immutable Audit Log", subtitle: "6W+P Tamper-Resistant Ledger", secId: "sec-31", type: "audit", x: 640, y: 2500, icon: "Archive" }
      ],
      connections: [
        { from: "m1", to: "m2", label: "Allocates VN" },
        { from: "m2", to: "m3", label: "Authenticates" },
        { from: "m3", to: "m4", label: "Level-1 Clear" },
        { from: "m4", to: "m5", label: "Scoped Gate" },
        { from: "m5", to: "m6", label: "Attach Proof" },
        { from: "m6", to: "m7", label: "Route Gateway" },
        { from: "m7", to: "m7_dha", label: "DHA Query" },
        { from: "m7", to: "m7_sars", label: "SARS Query" },
        { from: "m7", to: "m7_cipc", label: "CIPC Query" },
        { from: "m7", to: "m7_other", label: "SAQA Query" },
        { from: "m7_dha", to: "m8", label: "DHA Result" },
        { from: "m7_sars", to: "m8", label: "SARS Result" },
        { from: "m7_cipc", to: "m8", label: "CIPC Result" },
        { from: "m7_other", to: "m8", label: "SAQA Result" },
        { from: "m8", to: "m9", label: "7-Tuple Result" },
        { from: "m9", to: "m10", label: "Seals Asset" },
        { from: "m10", to: "m11", label: "Consent Reuse" },
        { from: "m11", to: "m12", label: "Expiry Watch" },
        { from: "m12", to: "m13", label: "Triggers Re-check" },
        { from: "m13", to: "m8", label: "Reverify Loop", curve: "left-loop" },
        { from: "m13", to: "m14", label: "6W+P Audit Ledger" }
      ]
    },

    individualFlow: {
      id: "individualFlow",
      title: "Individual Candidate Lifecycle Journey",
      subtitle: "11-Step Onboarding, Evidence Upload, Verification, and Credential Monitoring",
      nodes: [
        { id: "ind_1", stepNum: "01", stage: "Step 01", title: "1. Individual Registration", subtitle: "Demographic Intake & Account Creation", secId: "sec-42", type: "start", x: 640, y: 40, icon: "UserPlus" },
        { id: "ind_2", stepNum: "02", stage: "Step 02", title: "2. Identity Authentication", subtitle: "Level-1 Biometric / SA ID Match", secId: "sec-19", type: "process", x: 640, y: 210, icon: "ShieldCheck" },
        { id: "ind_3", stepNum: "03", stage: "Step 03", title: "3. Universal VN ID Generated", subtitle: "Unique VN Number Assigned (VN-XXXXXX)", secId: "sec-4", type: "verified", x: 640, y: 380, icon: "Hash" },
        { id: "ind_4", stepNum: "04", stage: "Step 04", title: "4. Add Profile Information", subtitle: "Academic, Professional, Family, Address", secId: "sec-5", type: "process", x: 640, y: 550, icon: "Edit3" },
        { id: "ind_5", stepNum: "05", stage: "Step 05", title: "5. Upload Evidence", subtitle: "Degrees, Reference Letters, ID Docs", secId: "sec-11", type: "process", x: 640, y: 720, icon: "UploadCloud" },
        { id: "ind_6", stepNum: "06", stage: "Step 06", title: "6. Verification Pipeline", subtitle: "API Checks & Officer Verification", secId: "sec-14", type: "gateway", x: 640, y: 890, icon: "CheckCircle2" },
        { id: "ind_7", stepNum: "07", stage: "Step 07", title: "7. Trust & Risk Assessment", subtitle: "Conflict, Expiry & Duplicate Detection", secId: "sec-16", type: "engine", x: 640, y: 1060, icon: "AlertTriangle" },
        { id: "ind_8", stepNum: "08", stage: "Step 08", title: "8. Verified Digital Profile", subtitle: "Profile becomes Reusable Trust Asset", secId: "sec-45", type: "verified", x: 640, y: 1230, icon: "BadgeCheck" },
        { id: "ind_9", stepNum: "09", stage: "Step 09", title: "9. Consent-Based Sharing", subtitle: "Share Scoped Access with Employers/Orgs", secId: "sec-8", type: "process", x: 640, y: 1400, icon: "Share2" },
        { id: "ind_10", stepNum: "10", stage: "Step 10", title: "10. Continuous Monitoring", subtitle: "Track Expiries (Licenses, Visas, Permits)", secId: "sec-18", type: "monitoring", x: 640, y: 1570, icon: "Activity" },
        { id: "ind_11", stepNum: "11", stage: "Step 11", title: "11. Reverification", subtitle: "Scheduled or Triggered Re-Checks", secId: "sec-18", type: "reverification", x: 640, y: 1740, icon: "RefreshCw" }
      ],
      connections: [
        { from: "ind_1", to: "ind_2", label: "Credentials" },
        { from: "ind_2", to: "ind_3", label: "Auth Passed" },
        { from: "ind_3", to: "ind_4", label: "Unlock Profile" },
        { from: "ind_4", to: "ind_5", label: "Uploads Proof" },
        { from: "ind_5", to: "ind_6", label: "Queue Checks" },
        { from: "ind_6", to: "ind_7", label: "Risk Evaluation" },
        { from: "ind_7", to: "ind_8", label: "Seals Asset" },
        { from: "ind_8", to: "ind_9", label: "Grants Consent" },
        { from: "ind_9", to: "ind_10", label: "Active Watch" },
        { from: "ind_10", to: "ind_11", label: "Expiry Event" },
        { from: "ind_11", to: "ind_6", label: "Re-check Loop", curve: "left-loop" }
      ]
    },

    corporateFlow: {
      id: "corporateFlow",
      title: "Organization Onboarding & 6-Gate Search Flowchart",
      subtitle: "Corporate Vetting, SaaS Subscription Activation, and 6-Gate Candidate Lookup",
      nodes: [
        { id: "corp_1", stepNum: "01", stage: "Step 01", title: "1. Register Organization", subtitle: "Company Name, CIPC Reg, Tax Number", secId: "sec-34", type: "start", x: 640, y: 40, icon: "Building" },
        { id: "corp_2", stepNum: "02", stage: "Step 02", title: "2. Submit Documents", subtitle: "Cert of Incorporation, Tax PIN, Director IDs", secId: "sec-34", type: "process", x: 640, y: 210, icon: "FileText" },
        { id: "corp_3", stepNum: "03", stage: "Step 03", title: "3. VettNet Review & Audit", subtitle: "Officer Review & CIPC/SARS Gateway Checks", secId: "sec-34", type: "process", x: 640, y: 380, icon: "Search" },
        { id: "corp_4", stepNum: "04", stage: "Step 04", title: "4. Approval Decision Gate", subtitle: "Approve / Reject / Correction Required", secId: "sec-34", type: "gate", x: 640, y: 550, icon: "GitBranch" },
        { id: "corp_5", stepNum: "05", stage: "Step 05", title: "5. Subscription Activation", subtitle: "Plan Tier, Seats, Search & Verification Quotas", secId: "sec-35", type: "process", x: 640, y: 720, icon: "CreditCard" },
        { id: "corp_6", stepNum: "06", stage: "Step 06", title: "6. Provision Team Users", subtitle: "Org Admin -> HR Manager -> Recruitment Officer", secId: "sec-36", type: "process", x: 640, y: 890, icon: "Users" },
        { id: "corp_7", stepNum: "07", stage: "Step 07", title: "7. Purpose & Request Consent", subtitle: "e.g. Purpose: Employment Verification", secId: "sec-8", type: "gate", x: 640, y: 1060, icon: "Target" },
        { id: "corp_8", stepNum: "08", stage: "Step 08", title: "8. 6-Gate VettNet ID Search", subtitle: "Validate Org, Sub, Perms, Purpose, Consent, Scope", secId: "sec-37", type: "gateway", x: 640, y: 1230, icon: "Filter" },
        { id: "corp_9", stepNum: "09", stage: "Step 09", title: "9. Access Scoped Verified Data", subtitle: "Education, Employment, Licenses (Restricted Masked)", secId: "sec-8", type: "verified", x: 640, y: 1400, icon: "Eye" },
        { id: "corp_10", stepNum: "10", stage: "Step 10", title: "10. Immutable Audit Entry", subtitle: "Logged with 6W+P Schema for Traceability", secId: "sec-31", type: "audit", x: 640, y: 1570, icon: "Archive" }
      ],
      connections: [
        { from: "corp_1", to: "corp_2", label: "Enter Info" },
        { from: "corp_2", to: "corp_3", label: "Upload Docs" },
        { from: "corp_3", to: "corp_4", label: "Review" },
        { from: "corp_4", to: "corp_5", label: "Approved" },
        { from: "corp_5", to: "corp_6", label: "Activate SaaS" },
        { from: "corp_6", to: "corp_7", label: "Initiate Search" },
        { from: "corp_7", to: "corp_8", label: "Consent Token" },
        { from: "corp_8", to: "corp_9", label: "6 Gates Passed" },
        { from: "corp_9", to: "corp_10", label: "Audit Ledger" }
      ]
    },

    consentGatewayFlow: {
      id: "consentGatewayFlow",
      title: "Consent & Purpose Access Control Gateway Flowchart",
      subtitle: "5-Stage Pre-Access Interrogation and Scoped Data Masking Engine",
      nodes: [
        { id: "cg_1", stepNum: "01", stage: "Step 01", title: "1. Org Requests Access", subtitle: "Target VettNet ID: VN123456", secId: "sec-8", type: "start", x: 640, y: 40, icon: "Search" },
        { id: "cg_2", stepNum: "02", stage: "Step 02", title: "2. Purpose Selection Gate", subtitle: "Q1 & Q2: Who is requesting? Why is it required?", secId: "sec-8", type: "gate", x: 640, y: 210, icon: "HelpCircle" },
        { id: "cg_3", stepNum: "03", stage: "Step 03", title: "3. Authority & Consent Check", subtitle: "Q3: Does requester have valid consent token?", secId: "sec-8", type: "gate", x: 640, y: 380, icon: "Key" },
        { id: "cg_4", stepNum: "04", stage: "Step 04", title: "4. Permission & Scoping", subtitle: "Q4: What categories are authorized?", secId: "sec-8", type: "process", x: 640, y: 550, icon: "Sliders" },
        { id: "cg_5", stepNum: "05", stage: "Step 05", title: "5. TTL Verification Gate", subtitle: "Q5: How long is permission valid?", secId: "sec-8", type: "gate", x: 640, y: 720, icon: "Clock" },

        { id: "cg_allowed", stepNum: "06a", stage: "Permitted Scope", title: "Approved Categories Exposed", subtitle: "Education, Employment, Certifications (Decrypted)", secId: "sec-8", type: "verified", x: 200, y: 920, icon: "CheckCircle2" },
        { id: "cg_restricted", stepNum: "06b", stage: "Masked Scope", title: "Sensitive Categories Sealed", subtitle: "Family, Legal, Financial, Address (Redacted)", secId: "sec-8", type: "engine", x: 1080, y: 920, icon: "Lock" },

        { id: "cg_6", stepNum: "06", stage: "Step 06", title: "6. Access Granted & Delivered", subtitle: "Payload delivered to requester client", secId: "sec-9", type: "process", x: 640, y: 1140, icon: "Unlock" },
        { id: "cg_7", stepNum: "07", stage: "Step 07", title: "7. Audit Log Committed", subtitle: "WHO, WHAT, RECORD, WHEN, PERM, PURPOSE", secId: "sec-31", type: "audit", x: 640, y: 1310, icon: "Archive" },
        { id: "cg_8", stepNum: "08", stage: "Step 08", title: "8. Permission Expires / Revoked", subtitle: "Access terminates upon TTL or User Revoke", secId: "sec-40", type: "reverification", x: 640, y: 1480, icon: "XCircle" }
      ],
      connections: [
        { from: "cg_1", to: "cg_2", label: "Specifies VN" },
        { from: "cg_2", to: "cg_3", label: "Purpose Bound" },
        { from: "cg_3", to: "cg_4", label: "Token Valid" },
        { from: "cg_4", to: "cg_5", label: "Categories Set" },
        { from: "cg_5", to: "cg_allowed", label: "Permitted" },
        { from: "cg_5", to: "cg_restricted", label: "Excluded" },
        { from: "cg_allowed", to: "cg_6", label: "Unmasked" },
        { from: "cg_restricted", to: "cg_6", label: "Redacted" },
        { from: "cg_6", to: "cg_7", label: "Audit Event" },
        { from: "cg_7", to: "cg_8", label: "TTL Active" }
      ]
    },

    verificationEngineFlow: {
      id: "verificationEngineFlow",
      title: "Verification Engine & Authoritative Sources Flowchart",
      subtitle: "Multi-Source Evidence Processing, 7-Tuple Record Generation, and 9-Status State Machine",
      nodes: [
        { id: "ve_1", stepNum: "01", stage: "Step 01", title: "1. Information & Claim Submitted", subtitle: "e.g. BEng Degree, Tax PIN, SA ID Number", secId: "sec-14", type: "start", x: 640, y: 40, icon: "Inbox" },
        { id: "ve_2", stepNum: "02", stage: "Step 02", title: "2. Evidence Collected & Hashed", subtitle: "9 Metadata Fields attached + SHA-256 Hash", secId: "sec-11", type: "process", x: 640, y: 210, icon: "FileText" },
        { id: "ve_3", stepNum: "03", stage: "Step 03", title: "3. Source Identified & Routed", subtitle: "Selects DHA, SARS, CIPC, SAQA, CIDB or Manual Queue", secId: "sec-12", type: "gateway", x: 640, y: 380, icon: "Shuffle" },

        { id: "ve_api", stepNum: "03a", stage: "Tier 1 API", title: "Tier 1: Direct API Connector", subtitle: "Automated real-time statutory gateway handshake", secId: "sec-20", type: "connector", x: 200, y: 580, icon: "Zap" },
        { id: "ve_manual", stepNum: "03b", stage: "Tier 2 Manual", title: "Tier 2: Authorized Review", subtitle: "Verification Officer inspects official register", secId: "sec-23", type: "process", x: 1080, y: 580, icon: "UserCheck" },

        { id: "ve_4", stepNum: "04", stage: "Step 04", title: "4. Verification Executed", subtitle: "Checks What, Source, Method, Time, Verifier, Evidence", secId: "sec-13", type: "process", x: 640, y: 800, icon: "Cpu" },
        { id: "ve_5", stepNum: "05", stage: "Step 05", title: "5. 7-Tuple Record Created", subtitle: "What, Source, Method, When, Who, Evidence, Reverification Date", secId: "sec-13", type: "verified", x: 640, y: 970, icon: "FileCheck" },
        { id: "ve_6", stepNum: "06", stage: "Step 06", title: "6. Risk Assessment Handoff", subtitle: "Checks conflicts, duplicates, expiries, anomalies", secId: "sec-16", type: "engine", x: 640, y: 1140, icon: "ShieldAlert" },
        { id: "ve_7", stepNum: "07", stage: "Step 07", title: "7. Status Determination", subtitle: "Verified | Failed | Pending | Reverification Required", secId: "sec-15", type: "gate", x: 640, y: 1310, icon: "Tag" },
        { id: "ve_8", stepNum: "08", stage: "Step 08", title: "8. Append to Historical Ledger", subtitle: "Immutable append-only record; no overwrite of history", secId: "sec-32", type: "audit", x: 640, y: 1480, icon: "Database" }
      ],
      connections: [
        { from: "ve_1", to: "ve_2", label: "Upload Proof" },
        { from: "ve_2", to: "ve_3", label: "Route Match" },
        { from: "ve_3", to: "ve_api", label: "Direct API" },
        { from: "ve_3", to: "ve_manual", label: "Manual Fallback" },
        { from: "ve_api", to: "ve_4", label: "API Payload" },
        { from: "ve_manual", to: "ve_4", label: "Officer Sign-off" },
        { from: "ve_4", to: "ve_5", label: "Generates Tuple" },
        { from: "ve_5", to: "ve_6", label: "Risk Evaluation" },
        { from: "ve_6", to: "ve_7", label: "Determines Status" },
        { from: "ve_7", to: "ve_8", label: "Appends Ledger" }
      ]
    },

    rbacInternalFlow: {
      id: "rbacInternalFlow",
      title: "RBAC & Staff Operations Workflow Flowchart",
      subtitle: "Super Admin Configuration, Custom Role Building, and 6-Point Override Auditing",
      nodes: [
        { id: "rb_1", stepNum: "01", stage: "Step 01", title: "1. Super Admin Account", subtitle: "Root platform governance and master configuration", secId: "sec-27", type: "start", x: 640, y: 40, icon: "Shield" },
        { id: "rb_2", stepNum: "02", stage: "Step 02", title: "2. Create Internal Staff", subtitle: "Provision individual operator accounts (no shared logins)", secId: "sec-28", type: "process", x: 640, y: 210, icon: "UserPlus" },
        { id: "rb_3", stepNum: "03", stage: "Step 03", title: "3. Compose Role from 13 Perms", subtitle: "View, Search, Create, Edit, Verify, Approve, Override...", secId: "sec-29", type: "process", x: 640, y: 380, icon: "Sliders" },
        { id: "rb_4", stepNum: "04", stage: "Step 04", title: "4. Assign Staff Role", subtitle: "Viewer | Officer | Manager | Senior Officer | Custom", secId: "sec-28", type: "gate", x: 640, y: 550, icon: "Award" },
        { id: "rb_5", stepNum: "05", stage: "Step 05", title: "5. Staff Authenticates & Logs In", subtitle: "MFA & Session Governance", secId: "sec-42", type: "process", x: 640, y: 720, icon: "LogIn" },
        { id: "rb_6", stepNum: "06", stage: "Step 06", title: "6. Access Assigned Work Queue", subtitle: "Application Manager dispatches batches to Officers", secId: "sec-38", type: "process", x: 640, y: 890, icon: "List" },
        { id: "rb_7", stepNum: "07", stage: "Step 07", title: "7. Process & Adjudicate", subtitle: "Verify | Reject | Request Correction", secId: "sec-42", type: "gateway", x: 640, y: 1060, icon: "CheckSquare" },

        { id: "rb_override", stepNum: "07a", stage: "Senior Escalation", title: "Senior Override Branch", subtitle: "Requires Reason, User ID, Timestamp, Evidence Attachment", secId: "sec-30", type: "engine", x: 1080, y: 1060, icon: "AlertOctagon" },
        { id: "rb_8", stepNum: "08", stage: "Step 08", title: "8. Tamper-Proof Audit Commit", subtitle: "Logged with 6W+P schema (Actor, Action, Record, Time)", secId: "sec-31", type: "audit", x: 640, y: 1260, icon: "Archive" }
      ],
      connections: [
        { from: "rb_1", to: "rb_2", label: "Provisions User" },
        { from: "rb_2", to: "rb_3", label: "Defines Perms" },
        { from: "rb_3", to: "rb_4", label: "Binds Role" },
        { from: "rb_4", to: "rb_5", label: "Issues Credentials" },
        { from: "rb_5", to: "rb_6", label: "Filters Queue" },
        { from: "rb_6", to: "rb_7", label: "Adjudicates" },
        { from: "rb_7", to: "rb_8", label: "Standard Pass" },
        { from: "rb_7", to: "rb_override", label: "Discrepancy" },
        { from: "rb_override", to: "rb_8", label: "6-Point Override Audit" }
      ]
    }
  }
};
