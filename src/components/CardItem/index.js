import './index.css'

const CardItem = props => {
  const { employeeDetails } = props
  const {
    name,
    userName,
    email,
    cityStreet,
    city,
    zipcode,
    phoneNum,
    websiteUrl,
    companyName,
  } = employeeDetails

  return (
    <li className="card-item">
      <h2 className="user-name">{name}</h2>
      <p className="user-username">@{userName}</p>
      <p className="user-email">{email}</p>
      <p className="user-address">{cityStreet}, {city}, {zipcode}</p>
      <p className="user-phone">📞 {phoneNum}</p>
      <p className="user-website">🌐 {websiteUrl}</p>
      <p className="user-company">🏢 {companyName}</p>
    </li>
  )
}

export default CardItem
