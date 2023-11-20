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
    marginVertical: 70,
    justifyContent: "space-between",
  },
  type: {
    fontSize: 30,
    fontFamily: "Poppins",
    alignItems: "center",
  },
  section: {
    fontFamily: "Arimo",
    alignItems: "center",
    marginTop: 50,
    gap: 8,
  },
  program: {
    fontFamily: "Arimo",
    fontStyle: "italic",
    marginLeft: 100,
    marginTop: 70,
    gap: 5,
  },
  time: {
    fontFamily: "Arimo",
    fontStyle: "italic",
    alignItems: "center",
    marginBottom: 110,
  },
});

interface SegmentProps {
  content: string;
  style?: any;
}

const Segment = ({ content }: SegmentProps) => {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

interface Props {
  dynamicContent: {
    type: string;
    name: string;
    class: string;
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
      <View>
        <View style={styles.type}>
          <Segment content={`Przesłuchanie ${dynamicContent.type}`} />
        </View>
        <View style={styles.section}>
          <Segment content={` ${dynamicContent.name}`} />
          <Segment content={`kl.  ${dynamicContent.class}`} />
          <Segment content={`${dynamicContent.teacher} - nauczyciel`} />
          <Segment
            content={`${dynamicContent.accompanist} - przy fortepianie`}
          />
        </View>
        <View style={styles.program}>
          <Segment content={`Program \n ${dynamicContent.program}`} />
        </View>
      </View>
      <View style={styles.time}>
        <Segment content={` ${dynamicContent.location}`} />
        <Segment content={`${dynamicContent.date}`} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
