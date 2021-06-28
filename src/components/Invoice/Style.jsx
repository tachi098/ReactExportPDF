const borderColor = '#90e5fc'

export const styles = ({
  page: {
    fontFamily: 'Roboto',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 200,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  reportTitle: {
    color: '#61dafb',
    letterSpacing: 4,
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-end'
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  invoiceDate: {
    fontSize: 12,
  },
  label: {
    width: 60,
    color: 'red'
  },
  headerContainer: {
    marginTop: 36
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique'
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd',
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    flexGrow: 1,
  },
  description: {
    width: '60%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: '15%'
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
  },
  idescription: {
    width: '60%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  iqty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 16,
  },
  irate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  iamount: {
    width: '15%',
    textAlign: 'right',
    paddingRight: 8,
  },
  bdescription: {
    width: '60%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  bqty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  brate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  bamount: {
    width: '15%',
  },
  frow: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontSize: 12,
  },
  fdescription: {
    width: '85%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  ftotal: {
    width: '15%',
    textAlign: 'right',
    paddingRight: 8,
  },
  titleContainerThanks: {
    flexDirection: 'row',
    marginTop: 12
  },
  reportTitleThanks: {
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});