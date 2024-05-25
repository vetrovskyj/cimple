import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { AllClaimsPage } from './components/pages/AllClaimsPage';
import { ArticleClaimsPage } from './components/pages/ArticleClaimsPage';
import { EvidenceRetrievalPage } from './components/pages/EvidenceRetrievalPage';
import { SummarizationPage } from './components/pages/SummarizationPage';

import { route } from './routesDefinition';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path={route.claimsOverview()} element={<AllClaimsPage />} />
      <Route path={route.claimsDetection()} element={<ArticleClaimsPage />} />
      <Route path={route.evidenceRetrieval()} element={<EvidenceRetrievalPage />} />
      <Route path={route.summarization()} element={<SummarizationPage />} />
    </RouterRoutes>
  );
}
