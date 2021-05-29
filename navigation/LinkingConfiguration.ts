import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          'Bidding': {
            screens: {
              BiddingScreen: 'bidding',
            },
          },
          'My Account': {
            screens: {
              MyAccountScreen: 'myaccount',
              MatchHighlight: 'myaccount/matchhighlight',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
