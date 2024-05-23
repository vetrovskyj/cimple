export const route = {
    claimsOverview: () => '/',
    claimsDetection: () => '/claims-detection',
    evidenceRetrieval: (id = ':id') => `/evidence-retrieval/${id}`,
  };