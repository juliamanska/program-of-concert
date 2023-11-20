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
    margin: "30px 10px",
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  section: {
    marginVertical: 30,
  },
  type: {
    fontSize: 30,
    fontFamily: "Poppins",
    alignItems: "center",
  },
  date: {
    fontFamily: "Arimo",
    fontStyle: "italic",
    alignItems: "center",
  },
  teacher: {
    fontFamily: "Arimo",
    alignItems: "center",
  },
  accompanist: {
    fontFamily: "Arimo",
    alignItems: "center",
  },
  program: {
    fontFamily: "Arimo",
    fontStyle: "italic",
    margin: 100,
  },
  location: {
    fontFamily: "Arimo",
    alignItems: "center",
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
      <View style={styles.teacher}>
        <Segment content={`${dynamicContent.teacher} - nauczyciel`} />
      </View>
      <View style={styles.accompanist}>
        <Segment content={`${dynamicContent.accompanist} - przy fortepianie`} />
      </View>
      <View style={styles.program}>
        <Segment content={`Program \n ${dynamicContent.program}`} />
      </View>
      <View style={styles.date}>
        <Segment content={`${dynamicContent.date}`} />
      </View>
      <View style={styles.location}>
        <Segment content={`Miejsce ${dynamicContent.location}`} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
