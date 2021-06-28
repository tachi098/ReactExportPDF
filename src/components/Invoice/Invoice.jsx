import { Document, Page, Text, Font, View, Image } from '@react-pdf/renderer'
import { styles } from "./Style"

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});



const Invoice = (props) => (

  <Document >
    <Page size="A4" style={styles.page} wrap>
      <Image style={styles.logo} src={process.env.PUBLIC_URL + '/p1.jpg'} />
      <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Hoá đơn</Text>
      </View>

      <View style={styles.invoiceNoContainer}>
        <Text style={styles.label}>Mã hoá đơn: </Text>
        <Text style={styles.invoiceDate}>{props.invoice.invoice_no}</Text>
      </View>

      <View style={styles.invoiceDateContainer}>
        <Text style={styles.label}>Ngày xuất: </Text>
        <Text >{props.invoice.trans_date}</Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Thông tin giao hàng:</Text>
        <Text>Người nhận: {props.invoice.company}</Text>
        <Text>Địa chỉ: {props.invoice.address}</Text>
        <Text>Số điện thoại: {props.invoice.phone}</Text>
        <Text>Email: {props.invoice.email}</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.container}>
          <Text style={styles.description}>Tên sản phẩm</Text>
          <Text style={styles.qty}>Số lượng</Text>
          <Text style={styles.rate}>Giá</Text>
          <Text style={styles.amount}>Tổng</Text>
        </View>
      </View>

      {
        props.invoice.items.map(item =>
          <View style={styles.row} key={item.sno.toString()}>
            <Text style={styles.idescription}>{item.desc}</Text>
            <Text style={styles.iqty}>{item.qty}</Text>
            <Text style={styles.irate}>{item.rate}</Text>
            <Text style={styles.iamount}>{(item.qty * item.rate).toFixed(2)}</Text>
          </View>
        )
      }

      {
        Array(11 - props.invoice.items.length).fill(0).map((x, i) =>
          <View style={styles.row} key={i}>
            <Text style={styles.bdescription}> </Text>
            <Text style={styles.bqty}> </Text>
            <Text style={styles.brate}> </Text>
            <Text style={styles.bamount}> </Text>
          </View>
        )
      }

      <View style={styles.frow}>
        <Text style={styles.fdescription}>TOTAL</Text>
        <Text style={styles.ftotal}>{Number.parseFloat(props.invoice.items.map(item => item.qty * item.rate)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toFixed(2)}</Text>
      </View>

      <View style={styles.titleContainerThanks}>
        <Text style={styles.reportTitleThanks}>Cám ơn các bạn đã mua hàng</Text>
      </View>

    </Page>
  </Document>
)

export default Invoice;