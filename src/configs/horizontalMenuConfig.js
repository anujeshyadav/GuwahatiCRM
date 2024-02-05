import React from "react";
import {
  FaRegFileAlt,
  FaStream,
  FaStar,
  FaGopuram,
  FaPodcast,
  FaBell,
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaUserEdit,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
  FaProductHunt,
  FaList,
  FaCode,
  FaCodeBranch,
  FaCircleNotch,
  FaCriticalRole,
  FaPeopleArrows,
  FaFileInvoice,
  FaCartArrowDown,
  FaLuggageCart,
  FaBusinessTime,
  FaTruck,
  FaRunning,
  FaFileInvoiceDollar,
  FaFile,
  FaDollarSign,
  FaBook,
  FaFileSignature,
  FaWarehouse,
  FaTruckLoading,
  FaRegListAlt,
  FaOutdent,
  FaBookDead,
  FaListAlt,
  FaUserAstronaut,
  FaCalculator,
  FaLaptopHouse,
  FaArtstation,
  FaShip,
} from "react-icons/fa";
import { GiDamagedHouse } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { RiPsychotherapyFill } from "react-icons/ri";
import { GiNuclearWaste } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import { SiBookstack } from "react-icons/si";

import { BsFileLock2Fill, BsFillCartXFill, BsMinecart } from "react-icons/bs";

import {
  MdInventory2,
  MdChecklist,
  MdOutlineProductionQuantityLimits,
  MdOutlineTransform,
  MdOutlineStorage,
  MdOutlineSettings,
} from "react-icons/md";
import { RiFileDamageFill } from "react-icons/ri";

import { BsCart4 } from "react-icons/bs";
import { BiSolidBatteryLow } from "react-icons/bi";

import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { SiHyperledger } from "react-icons/si";
import { MdEmojiTransportation } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { GiCash } from "react-icons/gi";

import { AiOutlineTransaction } from "react-icons/ai";
import { IoReceiptOutline } from "react-icons/io5";
import { SiContactlesspayment } from "react-icons/si";
import { BsFillCartCheckFill } from "react-icons/bs";

import { IoMdCloudDone } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import { GiDiceTarget } from "react-icons/gi";
import { BsPersonArmsUp, BsTrophy, BsFileBarGraph } from "react-icons/bs";
import { RiFileLockLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import {
  MdOutlinePendingActions,
  MdIncompleteCircle,
  MdAssignmentReturn,
} from "react-icons/md";

import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { GiWantedReward } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

const horizontalMenuConfig = [
  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "item",
  //   icon: <FaHome size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/dashboard",
  // },
  {
    id: "Users",
    title: "Users",
    type: "collapse",

    icon: <FaUsers size={24} />,
    children: [
      {
        id: "CreateUsers",
        title: "Create User",
        type: "item",
        icon: <FaList size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/accounSearch",
      },

      {
        id: "rolesandpermission",
        title: "Roles and Persmissions",
        type: "item",
        icon: <FaCriticalRole size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/Trupee/account/RoleList",
      },
      {
        id: "CreateCustomer",
        title: "Create Customer",
        type: "item",
        icon: <FaPeopleArrows size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/CustomerSearch",
      },
      {
        id: "CreateTransport",
        title: "Create Transporter",
        type: "item",
        icon: <FaShip size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ajgroup/CreateTransportList",
      },
    ],
  },
  {
    id: "Sales",
    title: "Sales",
    type: "collapse",
    icon: <FaShoppingCart size={24} />,
    children: [
      {
        id: "CreateInvoice",
        title: "Sales Invoice",
        type: "item",
        icon: <FaFileInvoice size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softnumen/InvoiceGenerator",
      },
      {
        id: "OrderList",
        title: "Sales Order",
        type: "item",
        icon: <FaCartArrowDown size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softnumen/order/orderList",
      },
      // {
      //   id: "PlaceOrder",
      //   title: "Place Order",
      //   type: "item",
      //   icon: <FaLuggageCart size={22} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/AjGroup/order/placeOrderList",
      // },
      {
        id: "PendingOrder",
        title: "Pending Order",
        type: "item",
        icon: <FaBusinessTime size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softnumen/order/pendingOrder",
      },
      {
        id: "CompleteOrder",
        title: "Complete Order",
        type: "item",
        icon: <IoMdCloudDone size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/order/confirmedOrder",
      },

      {
        id: "dispatch",
        title: "Dispatch details",
        type: "item",
        icon: <FaTruck size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AjGroup/dispatch/goodDispatchList",
      },

      {
        id: "salesReturn",
        title: "Sales Return",
        type: "item",
        icon: <TbTruckReturn size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/SalesOrderReturnList",
      },
      {
        id: "Creditnote",
        title: "CreditNote",
        type: "item",
        icon: <GrNotes size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AjGroup/note/CreditNoteList",
      },
      {
        id: "Sales manager",
        title: "Sales Manager",
        type: "item",
        icon: <FaCircle size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/CreateSalesManager",
      },
      {
        id: "Sales Team",
        title: "Sales Team",
        type: "item",
        icon: <FaCircle size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/CreateSalesMan",
      },
      {
        id: "target Creation",
        title: "Target Creation",
        type: "item",
        icon: <GiDiceTarget size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/rupioo/HeadtargetingList/0",
      },
      {
        id: "Promotional Activity",
        title: "Promotional Activity",
        type: "item",
        icon: <FaRunning size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AjGroup/PromotionalActivityList",
      },
      {
        id: "Auto Billing Lock",
        title: "Auto Billing Lock",
        type: "item",
        icon: <RiFileLockLine size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/order/OrderSearch",
      },
      {
        id: "achievement",
        title: "Achievement",
        type: "item",
        icon: <BsTrophy size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/jupitech/order/achivement",
      },
    ],
  },
  {
    id: "Purchase",
    title: "Purchase",
    type: "collapse",
    icon: <FaProductHunt size={24} />,
    children: [
      {
        id: "Purchaseorder",
        title: "Purchase Order",
        type: "item",
        icon: <BiPurchaseTag size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AJgroup/order/purchaseOrderList",
      },
      {
        id: "Purchaseorder",
        title: "Purchase Pending",
        type: "item",
        icon: <MdOutlinePendingActions size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AJgroup/purchase/pendingPurchase",
      },
      {
        id: "Purchaseorder",
        title: "Purchase Complete",
        type: "item",
        icon: <MdIncompleteCircle size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AJgroup/purchase/purchaseCompleted",
      },
      {
        id: "PurchaseInvoice",
        title: "Purchase Invoice",
        type: "item",
        icon: <FaFileInvoiceDollar size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AJGroup/product/PurchaseInvoice",
      },
      {
        id: "PurchaseReturnss",
        title: "Purchase Return",
        type: "item",
        icon: <MdAssignmentReturn size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AJgroup/order/PurchaseReturnList",
      },
      {
        id: "DebitNotes",
        title: "Debit Notes",
        type: "item",
        icon: <FaFile size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AjGroup/note/DebitNoteList",
      },
      // {
      //   id: "multivendor",
      //   title: "Multivendor",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/softNumen/warranty/Campaignlist",
      // },
      // {
      //   id: "PurchaseReturnss",
      //   title: "Purchase Return",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/softNumen/warranty/Campaignlist",
      // },
    ],
  },
  {
    id: "transaction",
    title: "Transaction",
    type: "collapse",
    icon: <AiOutlineTransaction size={24} />,
    children: [
      {
        id: "Receipt",
        title: "Receipt",
        type: "item",
        icon: <IoReceiptOutline size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/parts/ReceiptList",
      },
      {
        id: "payment",
        title: "Payment",
        type: "item",
        icon: <FaDollarSign size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/AJgroup/purchase/PaymentListAll",
      },
      {
        id: "cashbook",
        title: "Cashbook",
        type: "item",
        icon: <FaBook size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/parts/Cashbook",
      },
    ],
  },

  // {
  //   id: "Team",
  //   title: "Team",
  //   type: "collapse",
  //   icon: <FaShoppingCart size={15} />,
  //   children: [
  //     {
  //       id: "PartyCreation",
  //       title: "Party Creation",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/SoftNumen/account/PartyCreation",
  //       navLink: "/app/SoftNumen/PartyList",
  //     },
  //     {
  //       id: "Team Creation",
  //       title: "Team Creation",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },

  //     {
  //       id: "Area Assignment",
  //       title: "Area Assignment",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "Party Assignment",
  //       title: "Party Assignment",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "Target creation Partywise",
  //       title: "Target creation Partywise",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "Target creation Product wise",
  //       title: "Target creation Product wise",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },

  //     {
  //       id: "TargetAchieved",
  //       title: "Auto Target Creation",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "Balanncedtarget",
  //       title: "Balanced Target",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "TeamWorkingreport",
  //       title: "Team working Report",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "Orderdispatchreport",
  //       title: "Order Dispatch Detail",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "PartyReport",
  //       title: "Party Report",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "CollectionReport",
  //       title: "Collection Report",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "Paymentduereport",
  //       title: "Payment due Report",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //     {
  //       id: "DeadParty",
  //       title: "Dead Party",
  //       type: "item",
  //       icon: <FaList size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/SoftNumen/ticket/TicketSearch",
  //     },
  //   ],
  // },
  {
    id: "Report",
    title: "Report",
    type: "collapse",
    icon: <FaFileSignature size={24} />,
    children: [
      {
        id: "AllGSTR",
        title: "All GSTR",
        type: "collapse",
        icon: <FaProductHunt size={22} />,
        children: [
          {
            id: "GSTR 1",
            title: "GSTR 1",
            type: "item",
            icon: <GiCash size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/GSTR1",
          },
          {
            id: "GSTR 3B",
            title: "GSTR 3B",
            type: "item",
            icon: <GiCash size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/GSTR3B",
          },
          {
            id: "GSTR 2B",
            title: "GSTR 2B",
            type: "item",
            icon: <GiCash size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/GSTR2B",
          },
          {
            id: "GSTR 9",
            title: "GSTR 9",
            type: "item",
            icon: <GiCash size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/GSTR9",
          },
        ],
      },
      {
        id: "OrdeReportList",
        title: "Order Report List",
        type: "collapse",
        icon: <FaProductHunt size={22} />,
        children: [
          {
            id: "OrderReport",
            title: "Order Report",
            type: "item",
            icon: <BsFillCartCheckFill size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/report/Orderreport",
          },
          {
            id: "Pending Order Report",
            title: "Pending Order Report",
            type: "item",
            icon: <MdOutlinePendingActions size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/PendingOrderReport",
          },
          {
            id: "Salesreport",
            title: "Sales Report and Amount",
            type: "item",
            icon: <FaFileInvoiceDollar size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/Salesreport",
          },
          {
            id: "OverdueReport",
            title: "Overdue Report",
            type: "item",
            icon: <FaBusinessTime size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/OverdueReport",
          },
          {
            id: "Lock In Report",
            title: "Lock In Report",
            type: "item",
            icon: <BsFileLock2Fill size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/LockInReport",
          },
          {
            id: "DispatchReport",
            title: "Dispatch Report",
            type: "item",
            icon: <FaTruckLoading size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/DispatchReport",
          },
          {
            id: "WareHouse Report",
            title: "WareHouse Report",
            type: "item",
            icon: <FaWarehouse size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/SoftNumen/ticket/WareHouseReport",
          },
        ],
      },
      {
        id: "Receipt and payment customise",
        title: "Receipt/Payment Customise",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/Inspections/InspectionsSearch",
      },
      {
        id: "StockReport",
        title: "Stock Report",
        type: "item",
        icon: <BsFileBarGraph size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/Stockreport",
      },

      {
        id: "purchasereportamount",
        title: "Purchase Report and Amount",
        type: "item",
        icon: <HiOutlineDocumentReport size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/purchasereportamount",
      },
      {
        id: "TeamandtargerReport",
        title: "Team and Target Report",
        type: "item",
        icon: <RiTeamLine size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/TeamandtargerReport",
      },

      {
        id: "Partywise ledger",
        title: "Partywise ledger",
        type: "item",
        icon: <SiHyperledger size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/Partywiseledger",
      },
      {
        id: "TransporterReport",
        title: "Transportor Report",
        type: "item",
        icon: <MdEmojiTransportation size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/TransporterReport",
      },
      {
        id: "targerReport",
        title: "Target Report",
        type: "item",
        icon: <GiHumanTarget size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/targerReport",
      },

      // {
      //   id: "HSN Wise sale Report",
      //   title: "HSN Wise sale Report",
      //   type: "item",
      //   icon: <FaFileInvoiceDollar size={22} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/SoftNumen/ticket/HSNWisesaleReport",
      // },
      // {
      //   id: "Product List with HSN and GST",
      //   title: "Product List with HSN and GST",
      //   type: "item",
      //   icon: <FaRegListAlt size={22} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/SoftNumen/ticket/ProductListwithHSNandGST",
      // },
      {
        id: "Out Standing Report",
        title: "Out Standing Report",
        type: "item",
        icon: <FaOutdent size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/OutStandingReport",
      },

      {
        id: "Cashbook Report",
        title: "Cashbook Report",
        type: "item",
        icon: <FaBook size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/CashbookReport",
      },
    ],
  },

  {
    id: "Stock",
    title: "Stock",
    type: "collapse",
    icon: <MdInventory2 size={24} />,
    children: [
      {
        id: "Inward Stock",
        title: "Inward Stock",
        type: "item",
        icon: <FaCartArrowDown size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warehouse/InwardStock",
      },
      {
        id: "Outward Stock",
        title: "Outward Stock",
        type: "item",
        icon: <BsCart4 size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/Ajgroup/warehouse/OutwardStock",
      },
      {
        id: "Closing Stock",
        title: "Closing Stock",
        type: "item",
        icon: <BsFillCartXFill size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ajgroup/stock/ClosingStockList",
      },
      {
        id: "Opening Stock",
        title: "Opening Stock",
        type: "item",
        icon: <BsFillCartXFill size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/openingStock",
      },
      {
        id: "Low Stock",
        title: "Low Stock",
        type: "item",
        icon: <BsMinecart size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/Ajgroup/stock/LowStockList",
        // navLink: "/app/softNumen/warranty/LowStock",
      },
      {
        id: "Damaged Stock",
        title: "Damaged Stock",
        type: "item",
        icon: <GiDamagedHouse size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/DamagedStock",
      },
      {
        id: "OverDue Stock",
        title: "OverDue Stock",
        type: "item",
        icon: <AiOutlineStock size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/Ajgroup/Stock/AllOverdueStockList",
        // navLink: "/app/Ajgroup/Stock/OverDueStockReport",
      },

      {
        id: "Dead Party",
        title: "Dead Party",
        type: "item",
        icon: <FaBookDead size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/report/DeadParty",
      },
    ],
  },

  {
    id: "Others",
    title: "Others",
    type: "collapse",
    icon: <RiPsychotherapyFill size={24} />,
    children: [
      {
        id: "ProductList",
        title: "Product",
        type: "collapse",
        icon: <FaProductHunt size={22} />,
        children: [
          {
            id: "CategoryList",
            title: "Category List",
            type: "item",
            icon: <FaListAlt size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/freshlist/category/categoryList",
          },
          {
            id: "subCategoryList",
            title: "subCategory List",
            type: "item",
            icon: <MdChecklist size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/freshlist/subcategory/subCategoryList",
          },
          {
            id: "ProductCreation",
            title: "Product Creation",
            type: "item",
            icon: <MdOutlineProductionQuantityLimits size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/freshlist/house/houseProductList",
          },
        ],
      },
      // {
      //   id: "Multivendor",
      //   title: "Multivendor",
      //   type: "collapse",
      //   icon: <FaProductHunt size={15} />,
      //   children: [
      //     {
      //       id: "Registration",
      //       title: "Registration",
      //       type: "item",
      //       icon: <FaCircle size={8} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/app/freshlist/category/categoryList",
      //     },
      //     {
      //       id: "subCategoryList",
      //       title: "subCategory List",
      //       type: "item",
      //       icon: <FaCircle size={8} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/app/freshlist/subcategory/subCategoryList",
      //     },
      //     {
      //       id: "ProductCreation",
      //       title: "Product Creation",
      //       type: "item",
      //       icon: <FaCircle size={8} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/app/freshlist/house/houseProductList",
      //     },
      //   ],
      // },
      {
        id: "warehouse",
        title: "Warehouse",
        type: "item",
        icon: <FaWarehouse size={22} />,
        children: [
          {
            id: "WarehouseList",
            title: "WarehouseList",
            type: "item",
            icon: <FaRegListAlt size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/system/WareHouseListSoft",
          },
          {
            id: "rawmaterialinward ",
            title: "Item Inward",
            type: "item",
            icon: <FaCartArrowDown size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/warehouse/RawMaterialInward",
          },
          {
            id: "rawmaterialoutward",
            title: "Item Outward",
            type: "item",
            icon: <BsCart4 size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/warehouse/RawmaterialOutward",
          },
          {
            id: "stocktransfer",
            title: "Stock Transfer",
            type: "item",
            icon: <MdOutlineTransform size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/warehouse/StockTransfer",
          },
          {
            id: "damageReport",
            title: "Damage Report",
            type: "item",
            icon: <RiFileDamageFill size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/warehouse/DamageReport",
          },
          {
            id: "stockstorage",
            title: "Stock Storage",
            type: "item",
            icon: <MdOutlineStorage size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/softNumen/warehouse/StockStorage",
          },
          {
            id: "wastageDetail",
            title: "Wastage Detail",
            type: "item",
            icon: <GiNuclearWaste size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/views/apps/AjGroup/Production/Wastageproduction",
            // navLink: "/app/softNumen/warehouse/WastageDetail",
          },
          {
            id: "dispatchDetail",
            title: "Dispatch Detail",
            type: "item",
            icon: <FaTruck size={22} />,
            permissions: ["admin", "editor"],
            navLink: "/app/AjGroup/dispatch/WarehouseDispatchlist",
            // navLink: "/app/softNumen/warehouse/DispatchDetail",
          },
        ],
      },
      {
        id: "production",
        title: "Production",
        type: "collapse",
        icon: <FaShoppingCart size={22} />,
        children: [
          {
            id: "items",
            title: "Items",
            type: "item",
            icon: <FaList size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/views/apps/freshlist/Production/Itemproduct",
          },
          {
            id: "productionprocess",
            title: "Production Process",
            type: "item",
            icon: <FaList size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/views/apps/freshlist/Production/productionprocesspage",
          },
          {
            id: "wastagematerial",
            title: "Wastage Material",
            type: "item",
            icon: <FaList size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/views/apps/AjGroup/Production/Wastageproduction",
            // navLink:
            //   "/views/apps/freshlist/Production/wastagematerialproduction",
          },
          {
            id: "Material Return",
            title: "Material Return",
            type: "item",
            icon: <FaList size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/views/apps/AjGroup/Production/ReturnProductionProduct",
            // navLink:
            //   "/views/apps/freshlist/Production/wastagestockreturnproduction",
          },
          {
            id: "pricecalculater",
            title: "Price Calculater",
            type: "item",
            icon: <FaList size={12} />,
            permissions: ["admin", "editor"],
            navLink:
              "/views/apps/freshlist/Production/pricecalculaterproduction",
          },
        ],
      },

      {
        id: "HRM",
        title: "HRM",
        type: "item",
        icon: <FaUserAstronaut size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/WareHouseListSoft",
      },
      {
        id: "Setting",
        title: "Setting",

        type: "item",
        icon: <MdOutlineSettings size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/SettingTab",
      },
      {
        id: "Pricecalculation",
        title: "Price Calculation",
        type: "item",
        icon: <FaCalculator size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/WareHouseListSoft",
      },
      {
        id: "Unit",
        title: "UnitList",
        type: "item",
        icon: <SiBookstack size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/Unit/UnitList",
      },
      {
        id: "wareHouseStock",
        title: "WareHouseStock",
        type: "item",
        icon: <FaLaptopHouse size={22} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warehouse/StockTransfer",
      },
    ],
  },
];

export default horizontalMenuConfig;
