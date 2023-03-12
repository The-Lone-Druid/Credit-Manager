import React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const RootNavigation = (props: Props) => {
  return (
    <SafeAreaView>
      <Card style={{margin: 10}}>
        <Card.Title
          title="Credit Manager App"
          subtitle={'Development in progress...'}
          titleVariant={'titleLarge'}
        />
        <Card.Content>
          <Text>
            Hey there, Credit manager app will be back soon with a lot of
            amazing featuers which will help track the Credits given to the
            parties while their purchases. Also this app will help to find
            parties that are delaying payments, will also show overall credits
            given to all the parties combined.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" onPress={() => {}} icon={'bell'}>
            Notify Me
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

export default RootNavigation;
