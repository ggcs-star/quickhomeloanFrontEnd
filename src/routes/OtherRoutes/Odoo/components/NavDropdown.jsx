import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
      >
        {title}
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-screen max-w-7xl bg-white shadow-lg rounded-lg z-50">
          <div className="p-4">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export const AppsDropdown = () => (
  <NavDropdown title="Apps">
    <div className="grid grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Finance</h3>
        <ul className="space-y-2">
          <li><Link to="/app/accounting" className="text-gray-600 hover:text-blue-600">Accounting</Link></li>
          <li><Link to="/app/invoicing" className="text-gray-600 hover:text-blue-600">Invoicing</Link></li>
          <li><Link to="/app/expenses" className="text-gray-600 hover:text-blue-600">Expenses</Link></li>
          <li><Link to="/app/spreadsheet" className="text-gray-600 hover:text-blue-600">Spreadsheet (BI)</Link></li>
          <li><Link to="/app/documents" className="text-gray-600 hover:text-blue-600">Documents</Link></li>
          <li><Link to="/app/sign" className="text-gray-600 hover:text-blue-600">Sign</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Sales</h3>
        <ul className="space-y-2">
          <li><Link to="/app/crm" className="text-gray-600 hover:text-blue-600">CRM</Link></li>
          <li><Link to="/app/sales" className="text-gray-600 hover:text-blue-600">Sales</Link></li>
          <li><Link to="/app/point-of-sale-shop" className="text-gray-600 hover:text-blue-600">POS Shop</Link></li>
          <li><Link to="/app/point-of-sale-restaurant" className="text-gray-600 hover:text-blue-600">POS Restaurant</Link></li>
          <li><Link to="/app/subscriptions" className="text-gray-600 hover:text-blue-600">Subscriptions</Link></li>
          <li><Link to="/app/rental" className="text-gray-600 hover:text-blue-600">Rental</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Websites</h3>
        <ul className="space-y-2">
          <li><Link to="/app/website" className="text-gray-600 hover:text-blue-600">Website Builder</Link></li>
          <li><Link to="/app/ecommerce" className="text-gray-600 hover:text-blue-600">eCommerce</Link></li>
          <li><Link to="/app/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
          <li><Link to="/app/forum" className="text-gray-600 hover:text-blue-600">Forum</Link></li>
          <li><Link to="/app/live-chat" className="text-gray-600 hover:text-blue-600">Live Chat</Link></li>
          <li><Link to="/app/elearning" className="text-gray-600 hover:text-blue-600">eLearning</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Supply Chain</h3>
        <ul className="space-y-2">
          <li><Link to="/app/inventory" className="text-gray-600 hover:text-blue-600">Inventory</Link></li>
          <li><Link to="/app/manufacturing" className="text-gray-600 hover:text-blue-600">Manufacturing</Link></li>
          <li><Link to="/app/plm" className="text-gray-600 hover:text-blue-600">PLM</Link></li>
          <li><Link to="/app/purchase" className="text-gray-600 hover:text-blue-600">Purchase</Link></li>
          <li><Link to="/app/maintenance" className="text-gray-600 hover:text-blue-600">Maintenance</Link></li>
          <li><Link to="/app/quality" className="text-gray-600 hover:text-blue-600">Quality</Link></li>
        </ul>
      </div>
    </div>
  </NavDropdown>
)

export const IndustriesDropdown = () => (
  <NavDropdown title="Industries">
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Services</h3>
        <ul className="space-y-2">
          <li><Link to="/industries/audit-certification" className="text-gray-600 hover:text-blue-600">Audit & Certification</Link></li>
          <li><Link to="/industries/bike-leasing" className="text-gray-600 hover:text-blue-600">Bike Leasing</Link></li>
          <li><Link to="/industries/billboard-rental" className="text-gray-600 hover:text-blue-600">Billboard Rental</Link></li>
          <li><Link to="/industries/environmental-agency" className="text-gray-600 hover:text-blue-600">Environmental Agency</Link></li>
          <li><Link to="/industries/hair-salon" className="text-gray-600 hover:text-blue-600">Hair Salon</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Retail</h3>
        <ul className="space-y-2">
          <li><Link to="/industries/agriculture-store" className="text-gray-600 hover:text-blue-600">Agriculture Store</Link></li>
          <li><Link to="/industries/arts-and-crafts" className="text-gray-600 hover:text-blue-600">Arts & Crafts</Link></li>
          <li><Link to="/industries/bakery" className="text-gray-600 hover:text-blue-600">Bakery</Link></li>
          <li><Link to="/industries/book-store" className="text-gray-600 hover:text-blue-600">Book Store</Link></li>
          <li><Link to="/industries/clothing-store" className="text-gray-600 hover:text-blue-600">Clothing Store</Link></li>
        </ul>
      </div>
    </div>
  </NavDropdown>
)

export const CommunityDropdown = () => (
  <NavDropdown title="Community">
    <div className="grid grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Learn</h3>
        <ul className="space-y-2">
          <li><Link to="/slides/all/tag/odoo-tutorials-9" className="text-gray-600 hover:text-blue-600">Tutorials</Link></li>
          <li><Link to="/page/docs" className="text-gray-600 hover:text-blue-600">Documentation</Link></li>
          <li><Link to="/slides/all?slide_category=certification" className="text-gray-600 hover:text-blue-600">Certifications</Link></li>
          <li><Link to="/training-events" className="text-gray-600 hover:text-blue-600">Training</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Get the Software</h3>
        <ul className="space-y-2">
          <li><Link to="/page/download" className="text-gray-600 hover:text-blue-600">Download</Link></li>
          <li><Link to="/page/editions" className="text-gray-600 hover:text-blue-600">Compare Editions</Link></li>
          <li><Link to="/page/release-notes" className="text-gray-600 hover:text-blue-600">Releases</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Collaborate</h3>
        <ul className="space-y-2">
          <li><a href="https://github.com/odoo" className="text-gray-600 hover:text-blue-600">Github</a></li>
          <li><Link to="/forum/help-1" className="text-gray-600 hover:text-blue-600">Forum</Link></li>
          <li><Link to="/events" className="text-gray-600 hover:text-blue-600">Events</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Get Services</h3>
        <ul className="space-y-2">
          <li><Link to="/partners" className="text-gray-600 hover:text-blue-600">Find a Partner</Link></li>
          <li><Link to="/accounting-firms" className="text-gray-600 hover:text-blue-600">Find an Accountant</Link></li>
          <li><Link to="/help" className="text-gray-600 hover:text-blue-600">Support</Link></li>
        </ul>
      </div>
    </div>
  </NavDropdown>
)

export default NavDropdown 