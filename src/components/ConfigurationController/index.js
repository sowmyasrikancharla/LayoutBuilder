// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <ul>
            <li className="list">
              <input
                type="checkbox"
                id="content"
                className="checkbox"
                name="choose"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </li>
            <li className="list">
              <input
                type="checkbox"
                id="LeftNavbar"
                className="checkbox"
                name="choose"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="LeftNavbar" className="label">
                Left Navbar
              </label>
            </li>
            <li className="list">
              <input
                type="checkbox"
                id="RightNavbar"
                className="checkbox"
                name="choose"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="RightNavbar" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
