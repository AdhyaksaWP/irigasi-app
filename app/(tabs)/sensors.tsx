import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';

const Sensor: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: 'https://agriwatch.id/irigasi/login.html' }} 
        style={styles.webview}
        startInLoadingState={true}
        javaScriptEnabled={true}
      />
    </SafeAreaView>
  );
};

interface Style {
  container: ViewStyle;
  webview: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Sensor;
