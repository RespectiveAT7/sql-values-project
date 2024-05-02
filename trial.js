const ftnameList = [
  'Aarav', 'Aditi', 'Vivaan', 'Ananya', 'Ishaan', 'Kavya', 'Vihaan', 'Diya',
  'Arjun', 'Saanvi', 'Reyansh', 'Meera', 'Siddharth', 'Riya', 'Ayaan', 'Anika',
  'Dhruv', 'Neha', 'Advik', 'Pari', 'Kabir', 'Simran', 'Rohan', 'Aisha',
  'Arnav', 'Priya', 'Atharv', 'Mira', 'Krish', 'Anjali'
];
const ltnameList = [
  'Singh', 'Kumar', 'Sharma', 'Gupta', 'Patel', 'Mehra', 'Jain', 'Kaur',
  'Chopra', 'Reddy', 'Chatterjee', 'Bose', 'Sengupta', 'Das', 'Iyer',
  'Banerjee', 'Pillai', 'Nair', 'Rao', 'Malhotra', 'Bhat', 'Ranganathan',
  'Verma', 'Agarwal', 'Krishnamurthy', 'Srinivasan', 'Mukherjee', 'Raj',
  'Ghosh', 'Luthra'
];
const phnumberList = ['+91-9876543210', '+91-9876543211', '+91-9876543212', '+91-9876543213', '+91-9876543214', '+91-9876543215', '+91-9876543216', '+91-9876543217', '+91-9876543218', '+91-9876543219']
const addressList = ['101 Lotus Rd', '202 Ganges Blvd', '303 Himalaya St', '404 Krishna Ln', '505 Vindhya Ave', '606 Yamuna Dr', '707 Kaveri Ct', '808 Brahmaputra Way', '909 Aravalli Pl', '1010 Western Ghats Tr']
const companyList = [
  'Tata Consultancy Services', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
  'LTIMindtree', 'Oracle Financial Services', 'Mphasis', 'Mindtree', 'Hexaware Technologies',
  'Larsen & Toubro Infotech', 'Cyient', 'Sify Technologies', 'eClerx', 'KPIT Technologies',
  'Zensar Technologies', 'Persistent Systems', 'NIIT Technologies', 'Tata Elxsi', 'Affle',
  'Quick Heal Technologies', 'Mastek', 'Tata Technologies', 'Happiest Minds Technologies',
  'Route Mobile', 'Just Dial', 'Nazara Technologies', 'Matrimony.com', 'Info Edge', 'OnMobile Global'
];
const cityList = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur']


function Random(argList) {
  return argList[Math.floor(Math.random() * argList.length)]
}


function getTupleList(typeList) {
  let tupleList = []
  
  typeList.forEach(types => {
    switch(types) {
      case 'ftname':
        tupleList.push(Random(ftnameList))
        break
      case 'ltname':
        tupleList.push(Random(ltnameList))
        break
      case 'fname':
        tupleList.push(Random(ftnameList) + " " + Random(ltnameList))
        break
      case 'phnumber':
        tupleList.push(Random(phnumberList))
        break
      case 'address':
        tupleList.push(Random(addressList))
        break
      case 'company':
        tupleList.push(Random(companyList))
        break
      case 'city':
        tupleList.push(Random(cityList))
    }
  })
  
  return tupleList
}


function printTuple(tupleList) {
  let tupleString = '('
  
  tupleList.forEach(item => {
    switch(typeof item) {
      case 'number':
        tupleString = tupleString + item
        break
      default:
        tupleString = tupleString + "'" + item + "'"
        break
    }
    if (item != tupleList.at(tupleList.length - 1)) {
      tupleString = tupleString + ","
    }
  })
  
  tupleString = tupleString + ")"
  
  return tupleString
}


function getQuery(times, typeList) {
  let finalOutput = []
  let tupleString
  
  for (let i = 0; i < times; i++) {
    tupleString = printTuple(getTupleList(typeList))
    if (i != times - 1) {
      tupleString = tupleString + ","
    } else {
      tupleString = tupleString + ";"
    }
    console.log(tupleString)
    finalOutput.push(tupleString)
  }
  return finalOutput
}


function finalSubmit() {
  const times = document.getElementById('times').value
  console.log(times)

  const outputBox = document.getElementById('outputbox')
  const finalOutput = getQuery(times, namesIdList)
  console.log(finalOutput.join("\n"))

  outputBox.innerHTML = "INSERT INTO table()\nVALUES\n" + finalOutput.join("\n")
}

