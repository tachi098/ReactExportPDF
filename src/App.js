import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Invoice } from "./components/Invoice"
import { data } from "./common/data"

const App = () => {

  return (
    <PDFDownloadLink document={<Invoice invoice={data} />} fileName="testInvoice">
      Download here
    </PDFDownloadLink>
  );
}

export default App;
