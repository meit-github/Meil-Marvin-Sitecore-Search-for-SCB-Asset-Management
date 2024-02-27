import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

import { Row } from '../../components/Common';
import { ArticleCard, ArticleCardContent } from './styled';

export const HomeHighlightedComponent = () => {
  const {
    widgetRef,
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', 'Insights'));
    },
  });
  const articlesToShow = articles.slice(0, 3);
  return (
    <Row ref={widgetRef}>
      {articlesToShow.map((a, index) => (
        <ArticleCard key={`${a.id}-${index}`}>
          <ArticleCardContent>
            <img src={a.image_url} width="100%" />
            {/* <ArticleCardImage>{getContentIcon(a.type)}</ArticleCardImage> */}
            <h3><a href={a.url}>{a.name.substring(0,60)}...</a></h3>
            <br/>
            <span>{a.description}</span>
          </ArticleCardContent>
        </ArticleCard>
      ))}
    </Row>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
