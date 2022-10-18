import * as React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { Box, Text, Heading, Anchor } from 'react-native-dracula-ui';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.container} color="blackSecondary" pt="sm" p="sm">
        <Box borderColor="purple" rounded="xxl" p="md">
          <Heading size="md">Godrix</Heading>
          <Heading size="2xs" color="purple">
            Software Developer
          </Heading>
          <Text>
            Box is the most primitive component of
            <Anchor href="https://ui.draculatheme.com/anchor">
              Dracula UI.
            </Anchor>{' '}
            Using Box allows for consumers of the components library to compose
            more complex patterns, components, and UIs. Box includes built-in
            Color and Spacing properties that make building complex components
            convenient and consistent.
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
