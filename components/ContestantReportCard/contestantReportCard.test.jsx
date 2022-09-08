import { expect, test } from '@jest/globals';
import { render, screen, within } from '@testing-library/react';
import ContestantReportCard from './ContestantReportCard';

const dummyTransfer = {
  in: {
    name: 'Haaland',
    photo_url: 'https:resources.premierleague.com/premierleague/photos/players/110x140/p223094.png',
    points: 5,
  },
  out: {
    name: 'Kane',
    photo_url: 'https:resources.premierleague.com/premierleague/photos/players/110x140/p78830.png',
    points: 8,
  },
};

test('ContestantReportCard Matches snapshot', () => {
  const component = render(<ContestantReportCard
    contestantName="John"
    contestantTitle="MVP"
    transfers={[
      dummyTransfer,
    ]}
    transferCost={0}
  />);

  expect(component.container).toMatchSnapshot();
});

test('should render 1 contestantTransfer component per transfer in params', () => {
  render(<ContestantReportCard
    contestantName="John"
    contestantTitle="MVP"
    transfers={[
      dummyTransfer,
      dummyTransfer,
      dummyTransfer,
    ]}
    transferCost={0}
  />);

  const transferList = screen.getByRole('list');
  const { getAllByRole } = within(transferList);
  const transfers = getAllByRole('listitem');

  expect(transfers.length).toBe(3);
});
