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
    ],
    features: [
      { icon: FiShield, label: "Role Based Access" },
      { icon: FiActivity, label: "Real-time Tracking" },
      { icon: FiRefreshCw, label: "Lifecycle Management" },
      { icon: FiBarChart2, label: "Advanced Reporting" },
    ],
    bullets: [
      "First-Time Setup (Automatic) — on first startup, the app auto-creates the 4 roles (Admin, Manager, Technician, User) and one Admin account. If an Admin already exists on restart, nothing is recreated and no data is deleted. The Admin email and password are configurable via environment variables.",
      "Login & Security — log in using email and password, with passwords stored securely in hashed form. Users stay logged in via a secure httpOnly-cookie auth token, can reset a password via an OTP sent to email, and can securely log out to clear the session.",
      "Role — create and manage user roles, assign permissions to each role, and assign a role to each user so only permitted roles can perform specific actions (role-based access).",
      "User Account — create and manage user accounts with name, email, password, employee code, phone number, and job title. Assign a Role and an optional Reporting Manager, plus Department, Sub-Department, Location, and Sub-Location.",
      "Department — a team in the company, like IT or Finance, with a name and short code. Independent — can be created first among the master data.",
      'Sub-Department — a smaller team inside a Department (e.g., "Network Support" inside "IT"). Every Sub-Department belongs to one Department.',
      "Location — a physical place (office or branch) with a name, address, and city.",
      "Sub-Location — a smaller part inside a Location (e.g., one floor or room). Every Sub-Location belongs to one Location.",
      "Vendor Management — a vendor is the company that supplied an asset (e.g., the laptop supplier). Stores vendor contact details, GST number, and contract expiry date.",
      "Asset Category — groups similar assets at the top level (e.g., Computers, Furniture, Printers).",
      'Sub-Category — groups assets within a Category (e.g., "Laptops" under "Computers").',
      'Asset Type — defines a specific asset (e.g., "Dell Laptop"). Optionally linked to a Sub-Category.',
      'Support Group — a small team of users (e.g., an "IT Helpdesk" group). Has one manager, a list of members, and a maximum ticket limit (default 10).',
      "Asset Registry — manage assets like laptops, desktops, tablets, and other devices, each with a unique Asset Tag and Serial Number. Stores technical (OS, processor, RAM), network (IP address, hostname), and purchase (cost, warranty, AMC) details. A unique QR code is generated for each asset — printable, downloadable, and scannable. Add assets one by one or import in bulk via Excel; export the full list to Excel.",
      "Asset Allocation — allocate an asset to a user with an expected return date; each allocation links one asset to one user, and the same asset cannot be allocated to two users at once (enforced by the database). An Admin, Manager, or Technician can process a return and record the asset's condition. View full allocation history and track overdue allocations — only an Admin can permanently delete an allocation.",
      "Gate Pass Management — raise a gate pass request for a specific asset (with a unique Gate Pass ID). Status flow: Pending → Approved → Issued → Returned (or Rejected). Only an Admin or Manager can approve, reject, issue, or mark as returned; a Technician can only raise a request, an End User cannot, and only an Admin can permanently delete a gate pass.",
      "End User Self-Service View — shows only the logged-in user's own asset information: assigned assets, returned assets, gate passes, and alerts. Read-only for End Users.",
      "Reports and Dashboard — dashboard shows total assets, allocated, available, total value, and overdue allocations. Reports cover allocation history, asset returns, and gate pass records — filterable and exportable — plus an audit trail of key actions (currently for allocation and gate-pass actions only).",
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
    title: "Q Eats — Food Delivery Platform",
    desc: "A production-grade food ordering system built end-to-end — from a polished React storefront to a Node.js/MongoDB backend with full order management.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    features: [
      { icon: FiShoppingCart, label: "Real-time Cart" },
      { icon: FiLock, label: "JWT Authentication" },
      { icon: FiShield, label: "Role-Based Access" },
      { icon: FiActivity, label: "Order Tracking" },
    ],
    bullets: [
      "Real-time cart with session persistence & quantity controls",
      "JWT authentication, protected routes & role-based access",
      "Complete checkout flow with live order status tracking",
    ],
    images: [],
    demo: "https://fooddeliveryapp-frontend-zn5z.onrender.com",
    code: "https://github.com/Bittu121/FoodDeliveryApp/tree/main/client",
  },
];

export const DIAGRAM_TABS = [
  { key: "flow", label: "Flow Diagram" },
  { key: "er", label: "ER Diagram" },
  { key: "schema", label: "Schema" },
];
