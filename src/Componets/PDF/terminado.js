import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "tomato" },
  section: { color: "white", textAlign: "center", margin: 30 }
});

doc = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <p style="text-align: left;">
          <img />
        </p>
        <h2>&nbsp;</h2>
        <h2>&nbsp;</h2>
        <h2>&nbsp;</h2>
        <h2>
          Juzgado de Ejecuci&oacute;n Contra la Violencia Dom&eacute;stica
        </h2>
        <h2>CIudad</h2>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          Pastoral Social Caritas Di&oacute;cesis de San Pedro Sula, notifica
          que el Sr. (a) el esquema de Consejer&iacute;a, al que fue remitido
          por el Juzgado Especial de Violencia Dom&eacute;stica.&nbsp;
        </p>
        <p>
          PSe extiende la presente constancia en la ciudad de San Pedro Sula,
          Departamento de Cort&eacute;s el&nbsp;
        </p>
      </View>
    </Page>
  </Document>
);

//ReactPDF.render(doc);
ReactPDF.render(doc, `${__dirname}/terminado.pdf`);
