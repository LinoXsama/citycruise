import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import AuthStack from './navigation/AuthStack';
import Layout from './_layout';

const App = () => {
  const [showAuthStack, setShowAuthStack] = useState(false);

  const handleToggleAuthStack = () => {
    setShowAuthStack(!showAuthStack);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showAuthStack ? <AuthStack /> : <Layout />}
      {!showAuthStack && <Button title="SE CONNECTER" onPress={handleToggleAuthStack} />}
      {showAuthStack && <Button title="RETOUR" onPress={() => setShowAuthStack(false)} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

