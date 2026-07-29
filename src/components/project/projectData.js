import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import {
  FiShield,
  FiActivity,
  FiRefreshCw,
  FiBarChart2,
  FiLock,
  FiShoppingCart,
  FiClipboard,
  FiClock,
} from "react-icons/fi";
import { TbApi } from "react-icons/tb";

//Asset Management System Images
import amLogin from "../../images/asset-management-images/login1.webp";
import amDashboard from "../../images/asset-management-images/dashboard2.webp";
import amAssetDetails from "../../images/asset-management-images/assetDetails3.webp";
import amAllocation from "../../images/asset-management-images/allocation4.webp";
import amGatePassAllocation from "../../images/asset-management-images/gatePassAllocation5.webp";
import amReports from "../../images/asset-management-images/reports6.webp";
import amUser from "../../images/asset-management-images/user7.webp";
import amVendorOrder from "../../images/asset-management-images/VendorOrder8.webp";
import amDepartments from "../../images/asset-management-images/DepartmentsOrder9.webp";
import amSubDepartments from "../../images/asset-management-images/SubDepartmentsOrderNumberNine.webp";
import amTypes from "../../images/asset-management-images/Categories10.webp";
import amCategories from "../../images/asset-management-images/CategoriesOrderNumberTen1.webp";
import amAddCategory from "../../images/asset-management-images/Screenshot 2026-07-19 214608.webp";
import amFlowDiagram from "../../images/asset-management-images/asset_management_flow.png";
import amErDiagram from "../../images/asset-management-images/Asset_Management_ER_Diagram.png";
import amSchemaDiagram from "../../images/asset-management-images/Asset_Management_Schema_Diagram.png";

//Travel Desk Management System
import tdLogin from "../../images/travel-desk-images/Login_Page.webp";
import tdEmployeeDashboard from "../../images/travel-desk-images/Employee_Dashboard.webp";
import tdTravelRequestForm from "../../images/travel-desk-images/Travel_Request_Form.webp";
import tdManagerHrPending from "../../images/travel-desk-images/Manager_HR_Pending_Requests.webp";
import tdVendorDashboard from "../../images/travel-desk-images/Vendor_Dashboard.webp";
import tdUserManagement from "../../images/travel-desk-images/User_Management.webp";
import tdETicketUpload from "../../images/travel-desk-images/E_Ticket_Upload.webp";
import tdFlowDiagram from "../../images/travel-desk-images/Travel_Desk_Management_system_Flow_Diagram.png";
import tdErDiagram from "../../images/travel-desk-images/Travel_Desk_ER_Diagram.png";
import tdSchemaDiagram from "../../images/travel-desk-images/Travel_Desk_Schema-Diagram.png";

//Q Eats Food Delivery Platform
import qeLandingPage from "../../images/QEatsReadmeImage/landingPage.png";
import qeHomeMenu from "../../images/QEatsReadmeImage/homeMenu.png";
import qeFoodList from "../../images/QEatsReadmeImage/foodlist.png";
import qeCart from "../../images/QEatsReadmeImage/Cart.png";
import qeCheckout from "../../images/QEatsReadmeImage/checkout.png";
import qeLandingFeatures from "../../images/QEatsReadmeImage/landingpageProjectFeature.png";
import qeAdminPanel from "../../images/QEatsReadmeImage/QEatsAdminPanel.png";
import qeFlowDiagram from "../../images/QEatsReadmeImage/Flow_Diagram.webp";
import qeErDiagram from "../../images/QEatsReadmeImage/ER_Diagram.webp";
import qeSchemaDiagram from "../../images/QEatsReadmeImage/SchemaDiagram.webp";

export const TECH_ICONS = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#3C873A" },
  "Express.js": { icon: SiExpress, color: "#A0A0A0" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "REST API": { icon: TbApi, color: "#818CF8" },
};

export const PROJECTS = [
  {
    id: "01",
    badge: "Full-Stack",
    title: "Asset Management System",
    desc: "The complete IT asset lifecycle management platform from QR tagging to allocation, gate passes, and reporting.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Redux Thunk",
    ],
    features: [
      { icon: FiShield, label: "Role Based Access" },
      { icon: FiActivity, label: "Real-time Tracking" },
      { icon: FiRefreshCw, label: "Lifecycle Management" },
      { icon: FiBarChart2, label: "Advanced Reporting" },
    ],
    bullets: [
      "First-Time Setup – Automatically creates the default roles (Admin, Manager, Technician, and User) and an Admin account on first startup. Initialization is skipped if an Admin account already exists.",

      "Login & Security – Email and password authentication with JWT access and refresh tokens, httpOnly cookies, bcrypt password hashing, OTP-based password reset, and secure logout.",

      "Role Management – Create and manage roles, assign permissions, and assign roles to users.",

      "User Management – Create and manage user accounts, assign roles, reporting managers, departments, sub-departments, locations, and sub-locations.",

      "Department Management – Manage departments and sub-departments.",

      "Location Management – Manage locations and sub-locations.",

      "Vendor Management – Manage vendor details, including contact information, GST number, and contract expiry.",

      "Asset Category Management – Manage asset categories, sub-categories, and asset types.",

      "Support Group Management – Create support groups, assign managers and members, and configure a maximum ticket limit (default: 10).",

      "Asset Management – Register and manage assets, maintain technical, network, and purchase details, generate unique QR codes, and import/export assets using Excel.",

      "Asset Allocation – Allocate assets to users, prevent duplicate active allocations, process asset returns, record asset condition, maintain allocation history, and monitor overdue allocations.",

      "Gate Pass Management – Raise, approve, reject, issue, return, and track gate pass requests for asset movement.",

      "End User Portal – View assigned assets, returned assets, gate passes, and asset-related alerts.",

      "Reports & Dashboard – View asset statistics, allocation history, asset returns, gate pass records, export reports, and audit trails for asset allocation and gate pass activities.",
    ],
    images: [
      amLogin,
      amDashboard,
      amAssetDetails,
      amAllocation,
      amGatePassAllocation,
      amReports,
      amUser,
      amVendorOrder,
      amDepartments,
      amSubDepartments,
      amTypes,
      amCategories,
      amAddCategory,
    ],
    demo: "https://...",
    code: "https://github.com/Bittu121/asset-management",
    architecture: {
      flow: amFlowDiagram,
      er: amErDiagram,
      schema: amSchemaDiagram,
    },
  },
  {
    id: "02",
    badge: "Full-Stack",
    title: "Travel Desk Management System",
    desc: "One platform for employees, managers, HR, vendors, finance, and admins. Every travel request submitted, approved, booked, and paid.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Redux.js",
    ],
    features: [
      { icon: FiClipboard, label: "Booking Requests" },
      { icon: FiClock, label: "Approval Workflow" },
      { icon: FiActivity, label: "Live Status Tracking" },
      { icon: FiBarChart2, label: "Expense Reporting" },
    ],
    bullets: [
      'Employee Requests — submit a travel request (with multiple travelers on one trip if needed) and track its live status from a personal "Applied Form" list.',
      "Two-Step Approval — every request goes to the reporting manager first, then to HR. Each step sends an automatic email to the next approver (manager → HR → vendor). A reject at either step ends the request there.",
      "Vendor Booking — once HR approves and assigns a vendor, the vendor sees the request, uploads the ticket and bill, and marks the request as booked once travel is confirmed.",
      "Finance Tracking — finance sees every HR-approved request and updates its payment status.",
      "Admin Overview — a read-only view (in the UI) of every pending and approved request across the company, for full management visibility.",
      "Search, Filter & Export — search and page through long lists of requests, and export pending requests to Excel with one click.",
      "User Management — HR can create, update, and remove accounts for employees, managers, vendors, and finance staff.",
      "Secure Login & Password Reset — JWT session in an httpOnly cookie, bcrypt-hashed passwords, and an email-based forgot/reset-password flow. New accounts can be created either by signing up directly or by HR adding a user from the dashboard.",
    ],
    images: [
      tdLogin,
      tdEmployeeDashboard,
      tdTravelRequestForm,
      tdManagerHrPending,
      tdVendorDashboard,
      tdUserManagement,
      tdETicketUpload,
    ],
    demo: "https://...",
    code: "https://github.com/Bittu121/Travel-Desk",
    architecture: {
      flow: tdFlowDiagram,
      er: tdErDiagram,
      schema: tdSchemaDiagram,
    },
  },
  {
    id: "03",
    badge: "Full-Stack",
    title: "Q Eats — Food Delivery Web Application",
    desc: "A full-stack food delivery Web Application, an admin panel, and a Node.js/Express backend.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    features: [
      { icon: FiShoppingCart, label: "Real-time Cart" },
      { icon: FiLock, label: "JWT Authentication" },
      { icon: FiShield, label: "Role-Based Access" },
      { icon: FiActivity, label: "Order Tracking" },
    ],
    bullets: [
      "Built a Swiggy-like Food Delivery Web Application with a responsive UI, REST API integration, and scalable MERN architecture.",
      "Implemented secure user authentication using JWT and bcrypt.",
      "Developed food browsing with search, category filtering, and shopping cart functionality.",
      "Built order placement, order history, and order status tracking features.",
      "Integrated Stripe payment gateway with payment verification for secure online payments.",
      "Developed an Admin Panel to manage food items, customer orders, and delivery status.",
      "Optimized application performance using lazy loading and Context API for state management.",
      "Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT, Stripe, Context API, Axios, REST APIs, Tailwind CSS.",
    ],
    images: [
      qeLandingPage,
      qeLandingFeatures,
      qeHomeMenu,
      qeFoodList,
      qeCart,
      qeCheckout,
      qeAdminPanel,
    ],
    demo: "https://fooddeliveryapp-frontend-zn5z.onrender.com",
    code: "https://github.com/Bittu121/FoodDeliveryApp/tree/main/client",
    architecture: {
      flow: qeFlowDiagram,
      er: qeErDiagram,
      schema: qeSchemaDiagram,
    },
  },
];

export const DIAGRAM_TABS = [
  { key: "flow", label: "Flow Diagram" },
  { key: "er", label: "ER Diagram" },
  { key: "schema", label: "Schema" },
];
