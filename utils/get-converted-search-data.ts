interface getConvertedSearchDataProps {
  cvrNumber: string
  companyName: string
  address: string
  status: string
  companyType: string
  postNoCity: string
}

export const getConvertedSearchData = ({
  cvrNumber,
  companyName,
  address,
  status,
  companyType,
  postNoCity,
}: getConvertedSearchDataProps) => {
  return [
    { title: companyName, paragraphOne: address, paragraphTwo: postNoCity },
    {
      title: 'convertedSearchCvr',
      paragraphOne: cvrNumber,
      paragraphTwo: '',
    },
    {
      title: 'convertedSearchStatus',
      paragraphOne: status,
      paragraphTwo: '',
    },
    {
      title: 'convertedSearchCompanyType',
      paragraphOne: companyType,
      paragraphTwo: '',
    },
  ]
}
