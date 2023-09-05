interface getConvertedCompanyDataProps {
  cvrNumber: string
  address: string
  postNoCity: string
  companyType: string
  companyName: string
}

export const getConvertedCompanyData = ({
  cvrNumber,
  address,
  postNoCity,
  companyType,
  companyName,
}: getConvertedCompanyDataProps) => {
  return [
    { title: 'convertedCompanyName', field: companyName },
    { title: 'convertedCompanyCvr', field: cvrNumber },
    { title: 'convertedCompanyAddress', field: address },
    { title: 'convertedCompanyPostcodeCity', field: postNoCity },
    { title: 'convertedCompanyType', field: companyType },
  ]
}
