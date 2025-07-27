// Core data model interfaces for the Request Decomposition System

export interface RequestNode {
  id: string;
  text: string;
  type: 'root' | 'intermediate' | 'atomic';
  parentId?: string;
  children: string[];
  reasoning: string;
  domainTerms: string[];
  createdAt: Date;
  metadata: {
    complexity: number;
    confidence: number;
    decompositionAttempts: number;
  };
}

export interface RequestGraph {
  id: string;
  rootNodeId: string;
  nodes: Map<string, RequestNode>;
  originalRequest: string;
  status: 'processing' | 'complete' | 'error';
  createdAt: Date;
  completedAt?: Date;
}

export interface DomainTerm {
  id: string;
  term: string;
  definition: string;
  domain: string;
  context: string[];
  usageCount: number;
  lastUsed: Date;
}

export interface ConceptRelationship {
  id: string;
  fromTerm: string;
  toTerm: string;
  relationshipType: 'requires' | 'depends_on' | 'enables' | 'conflicts_with';
  strength: number;
  examples: string[];
}