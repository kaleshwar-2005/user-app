import { useState, useEffect } from 'react'
import { ThreeDots, MagnifyingGlass } from 'react-loader-spinner'
import CardItem from '../CardItem'
import './index.css'

const Home = () => {
  const [userList, setUserList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoader] = useState(true)
  const [searchLoading, setSearchLoader] = useState(false)

  const onChangeSearch = event => {
    const value = event.target.value
    setSearchInput(value)
    setSearchLoader(true)

    setTimeout(() => {
      setSearchLoader(false)
    }, 500)
  }

  useEffect(() => {
    const getUsersList = async () => {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch(url)
      const data = await response.json()
      const formattedData = data.map(each => ({
        id: each.id,
        name: each.name,
        userName: each.username,
        email: each.email,
        cityStreet: each.address.street,
        city: each.address.city,
        zipcode: each.address.zipcode,
        phoneNum: each.phone,
        websiteUrl: each.website,
        companyName: each.company.name,
      }))
      setUserList(formattedData)
      setLoader(false)
    }
    getUsersList()
  }, [])

  const updatedList = userList.filter(each =>
    each.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="main-container">
      <header className="header">
        <h1>User List</h1>
      </header>
      <input
        value={searchInput}
        onChange={onChangeSearch}
        className="search-bar"
        type="search"
        placeholder="Enter the Name"
      />

      {loading ? (
        <div className="loader-container">
          <ThreeDots
            visible={true}
            height="60"
            width="60"
            color="#000000"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : searchLoading ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="50"
            width="50"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#000000"
          />
        </div>
      ) : updatedList.length > 0 ? (
        <ul className="user-list">
          {updatedList.map(each => (
            <CardItem key={each.id} employeeDetails={each} />
          ))}
        </ul>
      ) : (
        <p className="no-results">No results found for "{searchInput}"</p>
      )}
    </div>
  )
}

export default Home
