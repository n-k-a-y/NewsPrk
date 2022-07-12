import Dropdown from 'react-multilevel-dropdown';
import './styles.css'

export default function DD(){
  const doSomething = () => {
    console.log("hi")
  }
  return(
    <>
         <div className="dd">
    

      <Dropdown title="Home" style={{margin: 5}}>
        <Dropdown.Item>Home 1</Dropdown.Item>
        <Dropdown.Item>Home Dark</Dropdown.Item>
        <Dropdown.Item>Home 2</Dropdown.Item>
      </Dropdown>


      <Dropdown title="Pages" style={{margin: 5}}>
      <Dropdown.Item>About</Dropdown.Item>
        <Dropdown.Item>Archive</Dropdown.Item>
        <Dropdown.Item>Contact Us</Dropdown.Item>
      </Dropdown>

      <Dropdown title="Posts" style={{margin: 5}}>
        <Dropdown.Item>
          General Posts
          <Dropdown.Submenu>
            <Dropdown.Item>Post 1</Dropdown.Item>
            <Dropdown.Item>Post 2</Dropdown.Item>
            <Dropdown.Item>Post 3</Dropdown.Item>

          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item>
         Video Posts
          <Dropdown.Submenu>
            <Dropdown.Item>Video Style 1</Dropdown.Item>
            <Dropdown.Item>Video Style 2 </Dropdown.Item>
            <Dropdown.Item>Video Style 3</Dropdown.Item>
              </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item>Audio Posts
          <Dropdown.Submenu>
            <Dropdown.Item>Audio Style 1</Dropdown.Item>
            <Dropdown.Item>Audio Style 2</Dropdown.Item>
            <Dropdown.Item>Audio Style 3</Dropdown.Item>

          </Dropdown.Submenu>
        </Dropdown.Item>

        <Dropdown.Item>
          Sidebars
          <Dropdown.Submenu>
            <Dropdown.Item>Right Sidebar</Dropdown.Item>
            <Dropdown.Item>Left Sidebar</Dropdown.Item>
            <Dropdown.Item>No Sidebar</Dropdown.Item>

          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>


      <Dropdown title="Categories" style={{margin: 5}}>
        <Dropdown.Item>Business</Dropdown.Item>
        <Dropdown.Item>Entertainment</Dropdown.Item>
        <Dropdown.Item>Feature</Dropdown.Item>
        <Dropdown.Item>Sports</Dropdown.Item>
        <Dropdown.Item>Trending</Dropdown.Item>

      </Dropdown>
    </div>
    </>
  )
}