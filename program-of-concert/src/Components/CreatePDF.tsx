import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

interface SegmentProps {
  content: React.ReactNode;
}

const Segment = ({ content }: SegmentProps) => {
  return (
    <View style={styles.section}>
      <Text>{content}</Text>
    </View>
  );
};

interface Props {
  segmentContent: React.ReactNode;
}

const MyDocument = ({ segmentContent }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Segment content={segmentContent} />
    </Page>
  </Document>
);

export default MyDocument;
