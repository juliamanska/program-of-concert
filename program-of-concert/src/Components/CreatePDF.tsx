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
  content: string;
}

const Segment = ({ content }: SegmentProps) => {
  return (
    <View style={styles.section}>
      <Text>{content}</Text>
    </View>
  );
};

interface Props {
  dynamicContent: {
    type: string;
    date: string;
    teacher: string;
    accompanist: string;
    program: string;
    location: string;
  };
}

const MyDocument = ({ dynamicContent }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Segment content={`Przesłuchanie ${dynamicContent.type}`} />
      <Segment content={`Data ${dynamicContent.date}`} />
      <Segment content={`Nauczyciel prowadzący ${dynamicContent.teacher}`} />
      <Segment content={`Akompaniator ${dynamicContent.accompanist}`} />
      <Segment content={`Program ${dynamicContent.program}`} />
      <Segment content={`Miejsce ${dynamicContent.location}`} />
    </Page>
  </Document>
);

export default MyDocument;
