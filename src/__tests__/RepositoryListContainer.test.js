import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';
import { prettifyNumber } from '../components/NumberAndTitle';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      repositories.edges.forEach(edge => {
        const  { node } = edge;
        const fullName = getByTestId(`${node.id}-fullName`);
        expect(fullName).toHaveTextContent(node.fullName);

        const description = getByTestId(`${node.id}-description`);
        expect(description).toHaveTextContent(node.description);

        const language = getByTestId(`${node.id}-language`);
        expect(language).toHaveTextContent(node.language);

        const rating = getByTestId(`${node.id}-Ratings`);
        expect(rating).toHaveTextContent('Ratings');
        const ratingsCount = getByTestId(`${node.id}-Ratings-number`);
        expect(ratingsCount).toHaveTextContent(prettifyNumber(node.ratingAverage));

        const reviews = getByTestId(`${node.id}-Reviews`);
        expect(reviews).toHaveTextContent('Reviews');
        const reviewsCount = getByTestId(`${node.id}-Reviews-number`);
        expect(reviewsCount).toHaveTextContent(prettifyNumber(node.reviewCount));

        const stars = getByTestId(`${node.id}-Stars`);
        expect(stars).toHaveTextContent('Stars');
        const starsCount = getByTestId(`${node.id}-Stars-number`);
        expect(starsCount).toHaveTextContent(prettifyNumber(node.stargazersCount));

        const forks = getByTestId(`${node.id}-Forks`);
        expect(forks).toHaveTextContent('Forks');
        const forksCount = getByTestId(`${node.id}-Forks-number`);
        expect(forksCount).toHaveTextContent(prettifyNumber(node.forksCount));
      });
    });
  });
});
