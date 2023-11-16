import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import Roboto from "../assets/Roboto-Regular.ttf";
import ItalicRoboto from "../assets/Roboto-Italic.ttf";
import DancingScript from "../assets/DancingScript-Regular.ttf";

Font.register({
  family: "Arimo",
  fonts: [{ src: Roboto }, { src: ItalicRoboto, fontStyle: "italic" }],
});
Font.register({ family: "Poppins", fonts: [{ src: DancingScript }] });

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  type: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: "Poppins",
  },
  date: {
    fontFamily: "Arimo",
    fontStyle: "italic",
  },
  teacher: {
    fontFamily: "Arimo",
  },
  accompanist: {
    fontFamily: "Arimo",
  },
  program: {
    fontFamily: "Arimo",
    fontStyle: "italic",
  },
  location: {
    fontFamily: "Arimo",
  },
});

interface SegmentProps {
  content: string;
  style?: any;
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
      <View style={styles.type}>
        <Segment content={`Przesłuchanie ${dynamicContent.type}`} />
      </View>
      <View style={styles.date}>
        <Segment content={`Data ${dynamicContent.date}`} />
      </View>
      <View style={styles.teacher}>
        <Segment content={`Nauczyciel prowadzący ${dynamicContent.teacher}`} />
      </View>
      <View style={styles.accompanist}>
        <Segment content={`Akompaniator ${dynamicContent.accompanist}`} />
      </View>
      <View style={styles.program}>
        <Segment content={`Program ${dynamicContent.program}`} />
      </View>
      <View style={styles.location}>
        <Segment content={`Miejsce ${dynamicContent.location}`} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
