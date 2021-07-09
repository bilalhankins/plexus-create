import { withUrqlClient } from 'next-urql/';
import React from 'react';
// import { Fragment } from 'react';
// import { Flex, Grid, GridItem, Stack, HStack, VStack, Box, Col } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { MainFeed } from '../components/home/MainFeed';
import FollowingFeed from '../components/home/FollowingFeed';
import Landing from '../components/home/Landing';
import { usePostsQuery } from '../generated/graphql';
import { Flex } from '@chakra-ui/layout';

const Home = () => {
  const [session] = useSession();
  return (
    <div>
      {session ?
        <div>
          <MainFeed />
          <FollowingFeed />
        </div>
        :
        <Landing />
      }
    </div>
  )
}
export default withUrqlClient(() => ({
  url: 'http://localhost:8080/graphql',
}))(Home);

